<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::defaultStringLength(191);

        Schema::create('Competitor', function (Blueprint $table) {
            $table->increments('idCompetitor');
            $table->string('name');
            $table->string('university');
        });

        Schema::create('User', function (Blueprint $table) {
            $table->string('provider_id');
            $table->enum('round', ['1', '2']);
            $table->unsignedInteger('idCompetitor')->nullable();
            $table->integer('count')->default(0);

            $table->primary(['provider_id', 'round']);
            $table->foreign('idCompetitor')->references('idCompetitor')->on('Competitor');
        });

        Schema::create('Admin', function (Blueprint $table) {
            $table->string('username');
            $table->string('password');

            $table->primary(['username']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('competitor');
        Schema::dropIfExists('user');
        Schema::dropIfExists('admin');
        
    }
}