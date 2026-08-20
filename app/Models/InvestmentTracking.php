<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvestmentTracking extends Model
{
    use HasFactory;

    protected $fillable = [
        'investment_id',
        'valuation_date',
        'current_value',
        'yield_to_date',
        'report_notes',
    ];

    protected $casts = [
        'valuation_date' => 'date',
        'current_value' => 'float',
        'yield_to_date' => 'float',
    ];

    public function investment()
    {
        return $this->belongsTo(Investment::class);
    }
}
