<?php

use App\Http\Controllers\Public\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| MODE COMING SOON — Toutes les routes publiques redirigent vers l'accueil
|--------------------------------------------------------------------------
*/

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/a-propos/{section?}', fn() => redirect()->route('home'))->name('about');
Route::get('/nos-services', fn() => redirect()->route('home'))->name('services.index');
Route::get('/nos-services/{slug}', fn() => redirect()->route('home'))->name('services.show');
Route::get('/marches/{category?}', fn() => redirect()->route('home'))->name('markets');
Route::get('/produits-financiers', fn() => redirect()->route('home'))->name('products.index');
Route::get('/produits-financiers/{slug}', fn() => redirect()->route('home'))->name('products.show');
Route::get('/levees-de-fonds', fn() => redirect()->route('home'))->name('fundraisings.index');
Route::get('/levees-de-fonds/{slug}', fn() => redirect()->route('home'))->name('fundraisings.show');
Route::get('/actualites', fn() => redirect()->route('home'))->name('news');
Route::get('/calendrier-financier', fn() => redirect()->route('home'))->name('calendar');
Route::get('/recommandations', fn() => redirect()->route('home'))->name('recommendations');
Route::get('/rapports', fn() => redirect()->route('home'))->name('reports');
Route::get('/publications', fn() => redirect()->route('home'))->name('publications');
Route::get('/formation', fn() => redirect()->route('home'))->name('training');
Route::get('/faq', fn() => redirect()->route('home'))->name('faq');
Route::get('/calculateur-de-rendement', fn() => redirect()->route('home'))->name('calculator');
Route::get('/taux-de-change', fn() => redirect()->route('home'))->name('rates');
Route::get('/informations-macroeconomiques', fn() => redirect()->route('home'))->name('macro');
Route::get('/carriere', fn() => redirect()->route('home'))->name('careers');
Route::get('/partenaires', fn() => redirect()->route('home'))->name('partners');
Route::get('/contact', fn() => redirect()->route('home'))->name('contact');
Route::get('/prendre-rendez-vous', fn() => redirect()->route('home'))->name('appointments.create');
Route::post('/prendre-rendez-vous', fn() => redirect()->route('home'))->name('appointments.store');

// Espace Client — également désactivé temporairement
Route::middleware(['auth'])->group(function () {
    Route::get('/espace-client', fn() => redirect()->route('home'))->name('client.dashboard');
    Route::post('/espace-client/kyc-upload', fn() => redirect()->route('home'))->name('client.kyc.upload');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
