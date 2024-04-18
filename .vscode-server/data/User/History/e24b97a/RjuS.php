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
        $response = $this->postJson('/api/register',{
                "name": "testclc",
                "email": "testclc@gmail.com",
                "password": "124"
            }   
        );

        $response->assertStatus(201);
        $this->assertDatabaseHas('users', ['email' => 'test@example.com']);
    }
}
