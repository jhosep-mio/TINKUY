<?php

use App\Http\Controllers\Api\bannerController;
use App\Http\Controllers\Api\categoriasController;
use App\Http\Controllers\Api\categoriasOtherController;
use App\Http\Controllers\Api\ciudadesController;
use App\Http\Controllers\Api\configuracionsController;
use App\Http\Controllers\Api\departamentosController;
use App\Http\Controllers\Api\distritosController;
use App\Http\Controllers\Api\mailController;
use App\Http\Controllers\Api\othersController;
use App\Http\Controllers\Api\productosController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\Api\userController;

Route::post('/login', [userController::class, 'login']);
Route::middleware('auth:sanctum')->post('logout', [userController::class, 'logout']);


// CATEGORIAS
Route::get('/getCiudades', [ciudadesController::class, 'index']);
Route::get('/oneCiudad/{id}', [ciudadesController::class, 'show']);

// CATEGORIAS
Route::get('/allCategorias', [categoriasController::class, 'index']);
Route::get('/oneCategoria/{id}', [categoriasController::class, 'show']);

// PRODUCTOS
Route::get('/allProductos', [productosController::class, 'index']);
Route::get('/allProductosGroup/{id}', [productosController::class, 'indexWhere']);
Route::get('/oneProducto/{id}', [productosController::class, 'show']);
Route::get('/productosWhereFavorites', [productosController::class, 'whereFavoritos']);
Route::get('/productosNuevos', [productosController::class, 'whereNuevos']);

Route::get('/oneConfi/{id}', [configuracionsController::class, 'index']);

// BANNER
Route::get('/allBanners', [bannerController::class, 'index']);
Route::get('/oneBanner/{id}', [bannerController::class, 'show']);

Route::post('/handleSuccessTransaction', [mailController::class, 'handleSuccessTransaction']);
Route::post('/oneTransaccion/{ui}', [mailController::class, 'show']);
Route::get('/oneTransa/{id}', [mailController::class, 'show2']);

Route::get('/getTransaction', [mailController::class, 'show2']);

Route::post('/webhook', [mailController::class, 'handleMercadoPagoWebhook']);
Route::post('/enviarCorreo', [mailController::class, 'enviarCorreo']);

// DEPARTAMENTOS
Route::get('/allDepartamentos', [departamentosController::class, 'index']);


// DISTRITOS
Route::get('/allDistritos', [distritosController::class, 'index']);
Route::get('/allDistritosGroup/{id}', [distritosController::class, 'indexWhere']);


Route::group(['middleware' => ["auth:sanctum", 'role: 99']], function () {
    Route::post('/registerUsersAdmins', [userController::class, 'register']);
    Route::middleware('auth:sanctum')->get('user-profile', [userController::class, 'userProfile']);

    Route::controller(bannerController::class)->group(function(){
        Route::put('/updateBanner/{id}','update');
        Route::delete('/deleteBanner/{id}','destroy');
    });

    Route::controller(categoriasController::class)->group(function(){
        Route::post('/saveCategoria','store');
        Route::put('/updateCategoria/{id}','update');
        Route::delete('/deleteCategoria/{id}','destroy');
    });

    Route::controller(ciudadesController::class)->group(function(){
        Route::post('/saveCiudad','store');
        Route::put('/updateCiudad/{id}','update');
        Route::delete('/deleteCiudad/{id}','destroy');
    });

    Route::controller(mailController::class)->group(function(){
        Route::post('/getTransaccion','buscar');
        Route::get('/getTransacciones','index');
        Route::put('/updateTransaccion/{id}','update');
    });

    Route::controller(productosController::class)->group(function(){
        Route::post('/saveProducto','store');
        Route::put('/updateProducto/{id}','update');
        Route::post('/getProductos','buscar');
        Route::delete('/deleteProducto/{id}','destroy');
    });

    Route::controller(configuracionsController::class)->group(function(){
        Route::put('/updateConfiguracion/{id}','update');
    });

    Route::controller(departamentosController::class)->group(function(){
        Route::post('/saveDepartamento','store');
        Route::put('/updateDepartamento/{id}','update');
        Route::post('/getDepartamentosSistema','buscar');
        Route::get('/oneDepartamento/{id}','show');
        Route::delete('/deleteDepartamento/{id}','destroy');
    });

    Route::controller(distritosController::class)->group(function(){
        Route::post('/saveDistrito','store');
        Route::put('/updateDistrito/{id}','update');
        Route::post('/getDistritosSistema','buscar');
        Route::get('/oneDistrito/{id}','show');
        Route::delete('/deleteDistrito/{id}','destroy');
    });

});
