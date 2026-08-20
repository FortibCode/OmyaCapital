<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\FinancialProduct;
use Inertia\Inertia;
use Inertia\Response;

class FinancialProductController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Products/Index', [
            'products' => FinancialProduct::where('is_active', true)->get(),
        ]);
    }

    public function show(string $slug): Response
    {
        $product = FinancialProduct::where('slug', $slug)->firstOrFail();

        return Inertia::render('Products/Show', [
            'product' => $product,
        ]);
    }
}
