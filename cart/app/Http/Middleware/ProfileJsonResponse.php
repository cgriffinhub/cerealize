<?php

namespace App\Http\Middleware;
use Illuminate\Http\JsonResponse;
use Closure;

class ProfileJsonResponse
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);
        if ($response instanceof JsonResponse && app('debugbar')->isEnabled() && $request->has('_debug')) {
            $response->setData($response->getdata(true) + [
                '_debugger' => array_only(app('debugbar')->getData(), 'queries')
            ]);
        }
        return $response;
    }
}
