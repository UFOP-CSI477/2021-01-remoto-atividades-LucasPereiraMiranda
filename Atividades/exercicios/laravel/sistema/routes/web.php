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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/states',function(){
    $states = State::all();
    return view('listStates',['data'=>$states]);
});

Route::get('/states/{id}',function($id){
    $state = State::findOrFail($id);
    return view('listStates',['data'=>$state]);;
});

Route::get('/products',function(){
    $products = Product::all();
    return view('listProducts',['data'=>$products]);
});

Route::get('/products/{id}',function($id){
    $product = Product::findOrFail($id);
    return view('listProducts',['data'=>$product]);;
});