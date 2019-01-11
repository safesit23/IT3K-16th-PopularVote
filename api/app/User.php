<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'provider_id', 'count', 'password'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'remember_token',
    ];

    protected $primaryKey = 'provider_id';  

    public function count() {
        return $this->hasOne(Counting::class);
    }

    public function findForPassport($identifier) {
        $user = User::firstOrCreate([
            'provider_id' => $identifier
        ]);
        return $user;
    }

    public function validateForPassportPasswordGrant($password) {
        return true;
    }
}
