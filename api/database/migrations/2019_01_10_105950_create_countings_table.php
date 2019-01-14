<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCountingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('countings', function (Blueprint $table) {
            $table->string('provider_id');
            $table->enum('round', ['1', '2']);
            $table->unsignedInteger('score');
            $table->unsignedInteger('competitor_id');
            $table->timestamps();
            
            $table->unique(['provider_id', 'round']);
            $table->foreign('provider_id')->references('provider_id')->on('users')
                ->onDelete('cascade');;

            //$table->foreign('competitor_id')->references('idCompetitor')->on('competitors');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('countings');
    }
}
