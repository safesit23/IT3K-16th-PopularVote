<?php

namespace App\Repositories;

use DB;
use App\Repositories\CompetitorRepository;
use App\Repositories\CompetitorRepositoryInterface;
use App\Models\Competitor;

class CompetitorRepository implements CompetitorRepositoryInterface
{
  public function getCompetitor(){
    $competitor = Competitor::all();
    return $competitor;
  }
}
