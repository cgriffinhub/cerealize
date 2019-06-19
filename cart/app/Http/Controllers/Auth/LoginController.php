<?php

namespace App\Http\Controllers\Auth;

use App\Http\Resources\PrivateUserResource;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function action (Request $request)
    {
        if (!$token = auth()->attempt($request->only('email','password'))) {
            return response()->json([
                'errors' => [
                    'email' => ['Could not sign you in with those details.']
                ]
                ], 422);
        }
        return (new PrivateUserResource($request->user()))
        ->additional([
            'meta' => [
                'token' => $token
            ]
        ]);
    }
}
