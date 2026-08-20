<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AppointmentController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Appointments/Create', [
            'services' => Service::where('is_active', true)->get(['id', 'title', 'category']),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'client_name' => 'required|string|max:255',
            'client_email' => 'required|email|max:255',
            'client_phone' => 'required|string|max:50',
            'service_id' => 'nullable|exists:services,id',
            'appointment_date' => 'required|date|after:now',
            'meeting_type' => 'required|in:online_video,in_office,phone',
            'notes' => 'nullable|string',
        ]);

        if (auth()->check()) {
            $validated['user_id'] = auth()->id();
        }

        Appointment::create($validated);

        return redirect()->back()->with('success', 'Votre demande de rendez-vous a été enregistrée avec succès. Un conseiller OMYA CAPITAL vous recontactera dans les plus brefs délais.');
    }
}
