<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MacroIndicator extends Model
{
    use HasFactory;

    protected $fillable = ['indicator_name', 'value', 'unit', 'period'];
}
