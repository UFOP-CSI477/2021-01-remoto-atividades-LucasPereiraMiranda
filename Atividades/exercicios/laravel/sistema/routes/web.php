<?php

use Illuminate\Support\Facades\Route;

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

use App\Models\State;
use App\Models\Product;
use App\Http\Controllers\StateController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CityController;

Route::get('/', function () {
    return view('principal');
})->name('principal');

Route::resource('/states',StateController::class);
Route::resource('/cities',CityController::class);
Route::resource('/products',ProductController::class);
Route::resource('/peoples',PersonController::class);
Route::resource('/sales',SaleController::class);

// Route::get('/states',function(){
//     $states = State::all();
//     return view('listStates',['data'=>$states]);
// });

// Route::get('/states/{id}',function($id){
//     $state = State::findOrFail($id);
//     return view('listStates',['data'=>$state]);;
// });

// Route::get('/products',function(){
//     $products = Product::all();
//     return view('listProducts',['data'=>$products]);
// });

// Route::get('/products/{id}',function($id){
//     $product = Product::findOrFail($id);
//     return view('listProducts',['data'=>$product]);;
// });

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
