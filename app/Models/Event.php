<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Models\User;

class Event extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
      'name',
      'maxSubscription',
      'zipcode',
      'number',
      'city',
      'address',
      'state',
      'description',
      'startsAt',
      'endsAt',
      'complement',
      'isActive',
    ];

    use HasFactory;

    public function user(): BelongsTo 
    {
      return $this->belongsTo(User::class, 'owner_id', 'id');
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
}