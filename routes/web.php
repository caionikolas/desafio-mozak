<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canCreateEvent' => Route::has('login'),
        'canLogin' => Route::has('register'),
        'canEventInfo' => Route::has('eventInfo'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/createEvent', function () {
    return Inertia::render('Event/CreateEvent');
})->middleware(['auth', 'verified'])->name('createEvent');

Route::post('/createEvent', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/eventInfo', function () {
    return Inertia::render('Event/EventInfo');
})->middleware(['auth', 'verified'])->name('eventInfo');

require __DIR__.'/auth.php';
