<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Partner;
use App\Models\Service;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        try {
            $services = Service::where('is_active', true)->get();
            $partners = Partner::all();
        } catch (\Throwable $e) {
            \Illuminate\Support\Facades\Log::error('HomeController DB Error: ' . $e->getMessage());
            $services = collect([]);
            $partners = collect([]);
        }

        return Inertia::render('Home', [
            'services' => $services,
            'partners' => $partners,
        ]);
    }
}
