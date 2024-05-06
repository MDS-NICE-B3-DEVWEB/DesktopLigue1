<?php

namespace Tests\Unit;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

use Tests\TestCase;

class UsersTest extends TestCase
{


    public function test_user_can_register(): void
    {
        $response = $this->postJson('/api/register', [
            'name' => 'User',
            'email' => 'test@example.com',
            'password' => 'password',          
        ]);

        $response->assertStatus(200);
        //$this->assertDatabaseHas('users', ['email' => 'test@example.com']);
    }
}
