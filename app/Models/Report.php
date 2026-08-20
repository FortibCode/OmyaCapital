<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'category',
        'summary',
        'publication_date',
        'pdf_path',
        'is_restricted',
    ];

    protected $casts = [
        'publication_date' => 'date',
        'is_restricted' => 'boolean',
    ];
}
