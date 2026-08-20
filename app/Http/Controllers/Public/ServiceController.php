<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Inertia\Inertia;
use Inertia\Response;

class ServiceController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Services/Index', [
            'services' => Service::where('is_active', true)->get(),
        ]);
    }

    public function show(string $slug): Response
    {
        $service = Service::where('slug', $slug)->firstOrFail();

        return Inertia::render('Services/Show', [
            'service' => $service,
            'allServices' => Service::where('is_active', true)->get(['id', 'title', 'slug']),
        ]);
    }
}
