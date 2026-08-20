<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Fundraising;
use Inertia\Inertia;
use Inertia\Response;

class FundraisingController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Fundraisings/Index', [
            'fundraisings' => Fundraising::orderBy('created_at', 'desc')->get(),
        ]);
    }

    public function show(string $slug): Response
    {
        $fundraising = Fundraising::where('slug', $slug)->firstOrFail();

        return Inertia::render('Fundraisings/Show', [
            'fundraising' => $fundraising,
        ]);
    }
}
