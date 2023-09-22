<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class productos extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_categoria', 
        'id_ciudad', 
        'nombre', 
        'imagen1', 
        'imagen2', 
        'imagen3', 
        'tiempo', 
        'precio', 
        'min', 
        'descripcion',
        'direccion', 
        'ubicacion', 
        'horarios', 
    ];
}
