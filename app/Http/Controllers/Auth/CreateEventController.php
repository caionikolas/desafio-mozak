<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;


class CreateEventController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Event/CreateEvent');
    }

    public function index()
    {
        $user = Event::find(1)->user;

        $event = User::find(1)->event;
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'maxSubscription' => 'numeric',
            'zipcode' => 'required|string|max:255',
            'number' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'state' => 'numeric',
        ]);

        $event = Event::create([
          'name' => $request->name,
          'max_subscription' => $request->maxSubscription,
          'zipcode' => $request->zipcode,
          'number' => $request->number,
          'city' => $request->city,
          'address' => $request->address,
          'state' => $request->state,
          'description' => $request->description,
          'starts_at' => $request->startsAt,
          'ends_at' => $request->endsAt,
          'complement' => $request->complement,
          'is_active' => $request->isActive,
        ]);

        event(new Registered($event));

        return redirect(route('createEvent', absolute: false));
    }
}