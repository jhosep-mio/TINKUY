<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\distritos;
use Illuminate\Http\Request;

class distritosController extends Controller
{
    public function index()
    {
        $categorias = distritos::join('departamentos', 'distritos.id_departamento', '=', 'departamentos.id')
            ->select('distritos.*', 'departamentos.nombre as departamento')
            ->orderBy('id', 'desc')->get();
        return $categorias;
    }

    
    public function indexWhere($id){
        $productos = distritos::where('id_departamento', '=' , $id)    
                            ->orderBy('id', 'asc')->get();
        return $productos;
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
        $resultados = distritos::join('departamentos', 'distritos.id_departamento', '=', 'departamentos.id')
            ->select('distritos.*', 'departamentos.nombre as departamento')
            ->where('nombre', 'LIKE', $search)
            ->orderBy('id', 'desc')
            ->get();
        return response()->json($resultados);
    }

    public function store(Request $request)
    {
        $saveCategorias = new distritos();

        $request->validate([
            'nombre' => 'required',
            'precio' => 'required',
            'id_departamento' => 'required',
        ]);

        $saveCategorias->nombre = $request->nombre;
        $saveCategorias->id_departamento = $request->id_departamento;
        $saveCategorias->precio = $request->precio;


        $result = $saveCategorias->save();

        if ($result) {
            return response()->json(['status' => "success"]);
        } else {
            return response()->json(['status' => "error"]);
        }
    }


    public function update(Request $request, $id)
    {
        $updateCategoria = distritos::findOrFail($id);

        $request->validate([
            'nombre' => 'required',
            'precio' => 'required',
            'id_departamento' => 'required',
        ]);

        $updateCategoria->nombre = $request->nombre;
        $updateCategoria->precio = $request->precio;
        $updateCategoria->id_departamento = $request->id_departamento;


        $result = $updateCategoria->save();

        if ($result) {
            return response()->json(['status' => "success"]);
        } else {
            return response()->json(['status' => "error"]);
        }
    }

    public function show($id){
        $verProducto = distritos::find($id);
        return $verProducto;
    }

    public function destroy($id)
    {
        $result = distritos::destroy($id);

        if ($result) {
            return response()->json(['status' => "success"]);
        } else {
            return response()->json(['status' => "error"]);
        }
    }
}
