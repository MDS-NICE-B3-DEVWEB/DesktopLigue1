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

        // Convert the JSON data to an array
        $dataArray = json_decode($data, true);

        // Extract the fullName and teamName values
        $fullName = $dataArray['season']['fullName'];
        $teams = array_map(function($team) {
            return [
                
            ];
        }, $dataArray['season']['standings']);

        // Return the fullName and teams
        return response()->json([
            'fullName' => $fullName,
            'teams' => $teams,
        ], 200);
    }
}