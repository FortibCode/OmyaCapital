<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FinancialProduct extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'type',
        'target_return_rate',
        'min_investment_amount',
        'duration_months',
        'risk_level',
        'summary',
        'description',
        'prospectus_pdf_path',
        'is_active',
    ];

    protected $casts = [
        'target_return_rate' => 'float',
        'min_investment_amount' => 'float',
        'duration_months' => 'integer',
        'is_active' => 'boolean',
    ];

    public function investments()
    {
        return $this->hasMany(Investment::class);
    }
}
