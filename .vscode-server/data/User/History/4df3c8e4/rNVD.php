<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Http\Response; // Import the Response class
use Illuminate\Support\Facades\Log; // Import the Log facade

class ClassementController extends Controller
{
    public function classementApi(Request $request)
    {
        $client = new Client();
    
        $id_saison = $request->id_saison;
        // Faites l'appel à l'API
        $response = $client->get("https://api.statorium.com/api/v1/standings/{$id_saison}?apikey=12238dbb87bf7233b8ab70b36192a3ec");
        
        $data = $response->getBody()->getContents();

        // Log the API response
        Log::info('API Response:', ['response' => $data]);

        // Convertissez les données JSON en tableau (si nécessaire)
        $dataArray = json_decode($data, true);
        
        // Assurez-vous que la clé 'standings' existe dans $dataArray et qu'elle n'est pas vide
        if (isset($dataArray['standings']) && !empty($dataArray['standings'])) {
            $equipes = $dataArray['standings'];
        
            return response()->json([
                'status_code' => 200, 
                'success' => true,
                'message' => 'Liste des equipes',
                'items' => $equipes,
            ], 200); // Use the response helper function with the correct status code
        } else {
            return response()->json([
                'status_code' => 404, 
                'success' => false,
                'message' => 'Aucun participant trouvé',
                'items' => null,
            ], 404); // Use the response helper function with the correct status code
        }
    }
}