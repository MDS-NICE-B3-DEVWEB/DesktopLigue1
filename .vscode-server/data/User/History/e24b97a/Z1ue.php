<?php

namespace Tests\Unit;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

use PHPUnit\Framework\TestCase;

class UsersTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_register(): void
    {
        $response = $this->getJson('/api/register', [
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => 'password',
            
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('users', ['email' => 'test@example.com']);
    }
}
