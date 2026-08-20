<?php

namespace App\Services;

use App\Models\ExchangeRate;
use App\Models\InterestRate;
use App\Models\MacroIndicator;
use Illuminate\Support\Facades\Cache;

class CurrencyRatesService
{
    public function getCachedExchangeRates()
    {
        return Cache::remember('sif:exchange_rates_v2', 3600, function () {
            return ExchangeRate::latest('effective_date')->get()->toArray();
        });
    }

    public function getCachedInterestRates()
    {
        return Cache::remember('sif:interest_rates_v2', 3600, function () {
            return InterestRate::latest('effective_date')->get()->toArray();
        });
    }

    public function getCachedMacroIndicators()
    {
        return Cache::remember('sif:macro_indicators_v2', 3600, function () {
            return MacroIndicator::all()->toArray();
        });
    }

    public function clearCache(): void
    {
        Cache::forget('sif:exchange_rates');
        Cache::forget('sif:interest_rates');
        Cache::forget('sif:macro_indicators');
        Cache::forget('sif:exchange_rates_v2');
        Cache::forget('sif:interest_rates_v2');
        Cache::forget('sif:macro_indicators_v2');
    }
}
