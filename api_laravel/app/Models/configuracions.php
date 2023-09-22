<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class configuracions extends Model
{
    use HasFactory;
    protected $fillable = [
        'celular1',
        'correo1',
        'color_principal',
    ];
}
