<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'sigla',
    ];
    // 1 estado tem muitas cidades
    public function cities(){
        return $this->hasMany(City::class);
    }
}
