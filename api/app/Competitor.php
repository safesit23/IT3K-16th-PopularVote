<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Competitor extends Model
{
    protected $table = "Competitor";
    public $timestamps = false;

    protected $fillable = [
        'idCompetitor', 'name', 'university'
    ];
}
