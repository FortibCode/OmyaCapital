<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Investment;
use App\Models\KycDocument;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(Request $request): Response
    {
        $user = $request->user();

        $investments = Investment::where('user_id', $user->id)
            ->with(['financialProduct', 'fundraising', 'trackings'])
            ->latest()
            ->get();

        $totalInvested = $investments->sum('amount');

        $latestValuation = $investments->reduce(function ($carry, $inv) {
            $latestTrack = $inv->trackings->last();
            return $carry + ($latestTrack ? $latestTrack->current_value : $inv->amount);
        }, 0);

        $kycDocuments = KycDocument::where('user_id', $user->id)->get();

        return Inertia::render('Client/Dashboard', [
            'user' => $user,
            'investments' => $investments,
            'totalInvested' => $totalInvested,
            'latestValuation' => $latestValuation,
            'kycDocuments' => $kycDocuments,
        ]);
    }

    public function kycUpload(Request $request)
    {
        $request->validate([
            'document_type' => 'required|string',
            'file' => 'required|file|mimes:pdf,jpg,png|max:5120',
        ]);

        $path = $request->file('file')->store('kyc_documents', 'public');

        KycDocument::create([
            'user_id' => $request->user()->id,
            'document_type' => $request->document_type,
            'file_path' => $path,
            'original_filename' => $request->file('file')->getClientOriginalName(),
            'status' => 'pending',
        ]);

        $request->user()->update(['kyc_status' => 'pending']);

        return redirect()->back()->with('success', 'Votre document KYC a été soumis pour vérification.');
    }
}
