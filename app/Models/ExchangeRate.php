<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExchangeRate extends Model
{
    use HasFactory;

    protected $fillable = [
        'currency_pair',
        'rate',
        'change_24h',
        'effective_date',
    ];

    protected $casts = [
        'rate' => 'float',
        'change_24h' => 'float',
        'effective_date' => 'datetime',
    ];
}
