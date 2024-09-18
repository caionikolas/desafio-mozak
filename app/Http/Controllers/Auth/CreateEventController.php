<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Event;
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

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'maxSubscription' => 'numeric|min:1',
            'zipcode' => 'required|string|max:255',
            'number' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'state' => 'numeric'
        ]);

        $event = Event::create([
          'name' => $request->name,
          'maxSubscription' => $request->maxSubscription,
          'zipcode' => $request->zipcode,
          'number' => $request->number,
          'city' => $request->city,
          'address' => $request->address,
          'state' => $request->state,
          'description' => $request->description,
          'startsAt' => $request->startsAt,
          'endsAt' => $request->endsAt,
          'complement' => $request->complement,
          'isActive' => $request->isActive,
        ]);

        event(new Registered($event));

        return redirect(route('createEvent', absolute: false));
    }
}