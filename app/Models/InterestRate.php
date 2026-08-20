<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InterestRate extends Model
{
    use HasFactory;

    protected $fillable = [
        'rate_type',
        'rate_value',
        'change_direction',
        'effective_date',
    ];

    protected $casts = [
        'rate_value' => 'float',
        'effective_date' => 'date',
    ];
}
