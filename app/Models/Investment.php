<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Investment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'financial_product_id',
        'fundraising_id',
        'investment_code',
        'amount',
        'status',
        'subscribed_at',
        'maturity_date',
        'contract_pdf_path',
    ];

    protected $casts = [
        'amount' => 'float',
        'subscribed_at' => 'date',
        'maturity_date' => 'date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function financialProduct()
    {
        return $this->belongsTo(FinancialProduct::class);
    }

    public function fundraising()
    {
        return $this->belongsTo(Fundraising::class);
    }

    public function trackings()
    {
        return $this->hasMany(InvestmentTracking::class)->orderBy('valuation_date', 'asc');
    }
}
