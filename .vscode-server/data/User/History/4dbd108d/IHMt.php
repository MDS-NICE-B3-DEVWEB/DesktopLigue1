<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Http\Controllers\Api\UserController;
use App\Http\Requests\LogUserRequest;
use App\Http\Requests\RegisterUser;
use App\Models\User;

class UserControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_register()
    {
        $controller = new UserController;

        $request = new RegisterUser();
        $request->replace([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => 'password',
        ]);

        $response = $controller->register($request);

        $this->assertEquals(201, $response->getData()->status_code);
        $this->assertEquals('Utilisateur créé avec succès', $response->getData()->message);
        $this->assertDatabaseHas('users', ['email' => 'test@example.com']);
    }

    public function test_login()
    {
        $controller = new UserController;

        $user = User::factory()->create([
            'email' => 'test@example.com',
            'password' => bcrypt('password'),
        ]);

        $request = new LogUserRequest();
        $request->replace([
            'email' => 'test@example.com',
            'password' => 'password',
        ]);

        $response = $controller->login($request);

        $this->assertEquals(200, $response->getData()->status_code);
        $this->assertEquals('Utilisateur connecté avec succès', $response->getData()->message);
    }
}