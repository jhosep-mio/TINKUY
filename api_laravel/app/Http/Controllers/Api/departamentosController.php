<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\departamentos;
use Illuminate\Http\Request;

class departamentosController extends Controller
{
    public function index()
    {
        $categorias = departamentos::orderBy('id', 'desc')->get();
        return $categorias;
    }

    private function quitarAcentos($cadena)
    {
        $acentos = array(
            'á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú',
            'à', 'è', 'ì', 'ò', 'ù', 'À', 'È', 'Ì', 'Ò', 'Ù',
            'ä', 'ë', 'ï', 'ö', 'ü', 'Ä', 'Ë', 'Ï', 'Ö', 'Ü',
            'â', 'ê', 'î', 'ô', 'û', 'Â', 'Ê', 'Î', 'Ô', 'Û',
            'ã', 'õ', 'ñ', 'ç', 'Ã', 'Õ', 'Ñ', 'Ç'
        );

        $sinAcentos = array(
            'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U',
            'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U',
            'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U',
            'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U',
            'a', 'o', 'n', 'c', 'A', 'O', 'N', 'C'
        );

        $cadenaSinAcentos = str_replace($acentos, $sinAcentos, $cadena);

        return $cadenaSinAcentos;
    }

    public function buscar(Request $request)
    {
        $search = '%' . $this->quitarAcentos($request->buscar) . '%';
        $resultados = departamentos::where('nombre', 'LIKE', $search)
            ->orderBy('id', 'desc')
            ->get();
        return response()->json($resultados);
    }

    public function store(Request $request){
        $saveCategorias = new departamentos();

        $request->validate([
            'nombre'=>'required',
        ]);

        $saveCategorias->nombre = $request->nombre;

        $result = $saveCategorias->save();

        if($result){
            return response()->json(['status'=>"success"]);
        }else {
            return response()->json(['status'=>"error"]);
        }
    }

    public function show($id){
        $verCategoria = departamentos::find($id);
        return $verCategoria;
    }
    
    public function update(Request $request, $id){
        $updateCategoria= departamentos::findOrFail($id);

         $request->validate([
            'nombre'=>'required',
        ]);

        $updateCategoria->nombre = $request->nombre;

        $result =$updateCategoria->save();

        if($result){
            return response()->json(['status'=>"success"]);
        }else {
            return response()->json(['status'=>"error"]);
        }
    }

    public function destroy($id){
        $result = departamentos::destroy($id);
        
        if($result){
            return response()->json(['status'=>"success"]);
        }else {
            return response()->json(['status'=>"error"]);
        }

    }
}
