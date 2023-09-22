<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ciudades;
use Illuminate\Http\Request;

class ciudadesController extends Controller
{
    public function index(){
        $ciudades =ciudades::orderBy('ciudades.id', 'desc')->get();
        return $ciudades;
    }

    public function store(Request $request){
        $saveciudades = new ciudades();

        $request->validate([
            'nombre'=>'required|string',
            'imagen1' =>'required',
        ]);

        $saveciudades->nombre = $request->nombre;

        if($request->hasFile('imagen1')){
            $file = $request->file('imagen1');
            $filename = $file->getClientOriginalName(); 
            $name_File=str_replace(" ","_", $filename);
            
            $pictureImagen1 = date('His').'-'.$name_File;
            $file->move(public_path('ciudades/'),$pictureImagen1);
        }  

        $saveciudades->imagen1 = $pictureImagen1;
        
        $result = $saveciudades->save();

        if($result){
            return response()->json(['status'=>"success"]);
        }else {
            return response()->json(['status'=>"error"]);
        }
    }
    
    public function show($id){
        $verCategoria =ciudades::find($id);
        return $verCategoria;
    }

    public function update(Request $request, $id){
        $updateCategoria=ciudades::findOrFail($id);

         $request->validate([
            'nombre'=>'required|string',
        ]);

        if($request->hasFile('imagen1')){
            $file = $request->file('imagen1');
            $filename = $file->getClientOriginalName(); 
            $name_File=str_replace(" ","_", $filename);
            
            $picture1 = date('His').'-'.$name_File;
            $file->move(public_path('ciudades/'),$picture1);
            $updateCategoria->imagen1 = $picture1;

            $producto =ciudades::find($id);
            if ($producto->imagen1 && file_exists(public_path('ciudades/' . $producto->imagen1))) {
                unlink(public_path('ciudades/'.$producto -> imagen1));
            }

        }else {
            $verProducto =ciudades::find($id);
            $picture1 = $verProducto['imagen1'];
        }


        $updateCategoria->nombre = $request->nombre;

        $result =$updateCategoria->save();

        if($result){
            return response()->json(['status'=>"success"]);
        }else {
            return response()->json(['status'=>"error"]);
        }
    }

    public function destroy($id){
        $producto = ciudades::find($id);
        
        if ($producto->imagen1 && file_exists(public_path('ciudades/' . $producto->imagen1))) {
            unlink(public_path('ciudades/' . $producto->imagen1));
        }

        $result =ciudades::destroy($id);

        if($result){
            return response()->json(['status'=>"success"]);
        }else {
            return response()->json(['status'=>"error"]);
        }

    }
}
