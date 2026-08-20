<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\FinancialProduct;
use App\Models\Fundraising;
use App\Models\MarketNews;
use App\Models\Report;
use App\Models\Career;
use App\Models\Partner;
use App\Services\CurrencyRatesService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    protected CurrencyRatesService $ratesService;

    public function __construct(CurrencyRatesService $ratesService)
    {
        $this->ratesService = $ratesService;
    }

    // --- Section À Propos ---
    public function about(string $section = 'presentation'): Response
    {
        return Inertia::render('About/Index', [
            'activeSection' => $section,
            'partners' => Partner::all(),
        ]);
    }

    // --- Section Marchés ---
    public function markets(string $category = 'marche-financier'): Response
    {
        return Inertia::render('Markets/Index', [
            'category' => $category,
            'exchangeRates' => $this->ratesService->getCachedExchangeRates(),
            'interestRates' => $this->ratesService->getCachedInterestRates(),
            'macroIndicators' => $this->ratesService->getCachedMacroIndicators(),
            'products' => FinancialProduct::where('is_active', true)->get(),
        ]);
    }

    // --- Section Actualités & Publications ---
    public function news(): Response
    {
        return Inertia::render('News/Index', [
            'news' => MarketNews::latest('published_at')->get(),
        ]);
    }

    public function calendar(): Response
    {
        return Inertia::render('Tools/Calendar', [
            'fundraisings' => Fundraising::where('status', 'active')->get(),
        ]);
    }

    public function recommendations(): Response
    {
        return Inertia::render('Tools/Recommendations');
    }

    public function reports(): Response
    {
        return Inertia::render('Tools/Reports', [
            'reports' => Report::latest('publication_date')->get(),
        ]);
    }

    public function publications(): Response
    {
        return Inertia::render('Tools/Publications', [
            'reports' => Report::all(),
            'news' => MarketNews::take(4)->get(),
        ]);
    }

    public function training(): Response
    {
        return Inertia::render('Tools/Training');
    }

    public function faq(): Response
    {
        return Inertia::render('Tools/Faq');
    }

    public function calculator(): Response
    {
        return Inertia::render('Tools/Calculator');
    }

    public function rates(): Response
    {
        return Inertia::render('Tools/Rates', [
            'exchangeRates' => $this->ratesService->getCachedExchangeRates(),
            'interestRates' => $this->ratesService->getCachedInterestRates(),
        ]);
    }

    public function macro(): Response
    {
        return Inertia::render('Tools/Macro', [
            'macroIndicators' => $this->ratesService->getCachedMacroIndicators(),
        ]);
    }

    // --- Section Entreprise ---
    public function careers(): Response
    {
        return Inertia::render('Company/Careers', [
            'careers' => Career::where('is_open', true)->get(),
        ]);
    }

    public function partners(): Response
    {
        return Inertia::render('Company/Partners', [
            'partners' => Partner::all(),
        ]);
    }

    public function contact(): Response
    {
        return Inertia::render('Company/Contact');
    }
}
