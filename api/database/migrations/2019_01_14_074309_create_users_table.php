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

        Schema::create('competitor', function (Blueprint $table) {
            $table->increments('idCompetitor');
            $table->string('name');
            $table->string('nickname');
            $table->string('university');
            $table->string('like');
            $table->string('share');
          
        });

        Schema::create('user', function (Blueprint $table) {
            $table->string('provider_id');
            $table->enum('round', ['1', '2']);
            $table->unsignedInteger('idCompetitor')->nullable();
            $table->integer('count')->default(0);
            $table->primary(['provider_id', 'round']);
            $table->foreign('idCompetitor')->references('idCompetitor')->on('Competitor');
        });

        Schema::create('admin', function (Blueprint $table) {
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
        Schema::dropIfExists('Competitor');
        Schema::dropIfExists('User');
        Schema::dropIfExists('Admin');
        Schema::dropIfExists('FacebookScore');
        
    }
}
