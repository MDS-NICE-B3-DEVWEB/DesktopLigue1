<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;

class MatchController extends Controller
{
    public function matchApi(Request $request)
    {
        try {
            $client = new Client();
        
            $season_id = $request->season_id;
            $apikey = '12238dbb87bf7233b8ab70b36192a3ec';
            
            // Faites l'appel à l'API externe en incluant les paramètres de la requête
            $response = $client->get("https://api.statorium.com/api/v1/matches/?season_id={$season_id}&apikey="12238dbb87bf7233b8ab70b36192a3ec");
        
            // Obtenez le corps de la réponse (contenu de l'API)
            $data = $response->getBody()->getContents();
        
            // Convertissez les données JSON en tableau (si nécessaire)
            $dataArray = json_decode($data, true);

            // Vérifiez si la réponse de l'API est vide ou non conforme
            if (!$dataArray) {
                throw new \Exception('API response is empty or not in expected format');
            }

            return response()->json([
                'status_code' => 200, 
                'success' => true,
                'message' => 'Liste des matchs',
                'items' => $dataArray,
            ]);
        } catch (\Exception $e) {
            // Journalisez l'erreur pour un débogage ultérieur
            Log::error('Error fetching match data: ' . $e->getMessage());
            
            // Retournez une réponse d'erreur au client
            return response()->json([
                'status_code' => 500, 
                'success' => false,
                'message' => 'Error fetching match data',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
