<?php

namespace App\Models\Traits;
use App\Scoping\Scoper;
use illuminate\Database\Eloquent\Builder;

trait CanBeScoped
{
    public function scopeWithScopes(Builder $builder, $scopes = [])
    {
        return(new Scoper(request()))->apply($builder, $scopes);
    }
}
