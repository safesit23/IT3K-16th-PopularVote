<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Competitor extends Model
{
    protected $table = "competitor";
    public $timestamps = false;

    protected $primaryKey = "idCompetitor";

    protected $fillable = [
        'idCompetitor', 'name', 'university', 'like', 'share'
    ];
}
