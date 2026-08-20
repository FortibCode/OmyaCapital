<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fundraising extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'company_name',
        'sector',
        'target_amount',
        'raised_amount',
        'min_ticket',
        'start_date',
        'end_date',
        'status',
        'pitch_deck_summary',
        'pitch_deck_pdf_path',
    ];

    protected $casts = [
        'target_amount' => 'float',
        'raised_amount' => 'float',
        'min_ticket' => 'float',
        'start_date' => 'date',
        'end_date' => 'date',
    ];

    public function investments()
    {
        return $this->hasMany(Investment::class);
    }
}
