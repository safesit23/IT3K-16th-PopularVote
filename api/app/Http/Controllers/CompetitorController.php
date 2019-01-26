<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\CompetitorRepositoryInterface;

class CompetitorController extends Controller
{
  protected $competitor;

  public function __construct(CompetitorRepositoryInterface $competitorRepo)
  {
    $this->competitor = $competitorRepo;
  }

  public function getCompetitor(Request $req)
  {
    $competitor = $this->competitor->getCompetitor();
    return response()->json($competitor, 200);
  }
}
