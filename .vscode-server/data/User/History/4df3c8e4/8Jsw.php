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
                'teamName' => $team['teamName'],
                'logo' => $team['logo'] ?? null, // Make sure the 'logo' key exists
                'matchesWon' => isset($team['win_chk']) ? $team['win_chk'] : 0,
                'matchesDrawn' => isset($team['draw_chk']) ? $team['draw_chk'] : 0,
                'matchesLost' => isset($team['lost_chk']) ? $team['lost_chk'] : 0,
                'points' => isset($team['home_win_pts'], $team['away_win_pts'], $team['home_draw_pts'], $team['away_draw_pts'], $team['home_loose_pts'], $team['away_loose_pts']) 
                    ? $team['home_win_pts'] + $team['away_win_pts'] + $team['home_draw_pts'] + $team['away_draw_pts'] - $team['home_loose_pts'] - $team['away_loose_pts']
                    : 0,
            ];
        }, $dataArray['season']['standings']);

        // Return the fullName and teams
        return response()->json([
            'fullName' => $fullName,
            'teams' => $teams,
        ], 200);
    }
}