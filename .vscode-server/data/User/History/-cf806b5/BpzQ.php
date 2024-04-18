<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log; // Importez la facade Log pour la journalisation

class JoueurController extends Controller
{
    public function joueurApi(Request $request)
    {
        try {
            $client = new Client();
        
            $id_joueur = $request->id_joueur;
            $id_saison = $request->id_saison;
            // Faites l'appel à l'API
            $response = $client->get("https://api.statorium.com/api/v1/players/{$id_joueur}/?season_id={$id_saison}&apikey=12238dbb87bf7233b8ab70b36192a3ec");
        
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
                'message' => 'Liste des equipes',
                'items' => $dataArray,
            ]);
        } catch (\Exception $e) {
            // Journalisez l'erreur pour un débogage ultérieur
            Log::error('Error fetching player data: ' . $e->getMessage());
            
            // Retournez une réponse d'erreur au client
            return response()->json([
                'status_code' => 500, 
                'success' => false,
                'message' => 'Error fetching player data',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
