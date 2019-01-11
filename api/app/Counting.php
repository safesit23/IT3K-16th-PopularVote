<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Counting extends Model
{
    protected $fillable = [
        'provider_id', 'round', 'score', 'competitor_id'
    ];
}
