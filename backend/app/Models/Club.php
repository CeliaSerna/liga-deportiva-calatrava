<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Club extends Model
{
    use HasFactory;

    protected $fillable = [ // TODAS LAS COLUMNAS QUE SE PUEDEN RELLENAR DESDE JSON
        'nombre',
        'ciudad',
        'categoria',
    ];
}
