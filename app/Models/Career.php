<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Career extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'department',
        'location',
        'contract_type',
        'description',
        'is_open',
    ];

    protected $casts = [
        'is_open' => 'boolean',
    ];
}
