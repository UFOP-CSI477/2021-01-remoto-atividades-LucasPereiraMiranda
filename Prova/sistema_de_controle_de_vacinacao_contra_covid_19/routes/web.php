<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PessoaController;
use App\Http\Controllers\VacinaController;
use App\Http\Controllers\UnidadeController;
use App\Http\Controllers\RegistroController;
use App\Http\Controllers\HomeController;
use App\Http\OpenDataController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::get('/', function () {
    return view('welcome');
})->name('welcome');

Route::get('/principal', function () {
    return view('principal');
})->name('principal');

Route::get('/controle-vacina-informacoes-gerais', function () {
    return view('controle-vacina-informacoes-gerais');
})->name('controle-vacina-informacoes-gerais');


Route::resource('/pessoas', PessoaController::class)->middleware('auth');
Route::resource('/vacinas', VacinaController::class)->middleware('auth');
Route::resource('/unidades', UnidadeController::class)->middleware('auth');
Route::resource('/registros', RegistroController::class)->middleware('auth');
