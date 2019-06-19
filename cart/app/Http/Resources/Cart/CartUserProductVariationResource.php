<?php

namespace App\Http\Resources\Cart;

use App\Cart\Money;
// use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\ProductVariationResource;
use App\Http\Resources\ProductIndexResource;
use App\Http\Resources\UserProductResource;
class CartUserProductVariationResource extends ProductVariationResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $total = new Money($this->pivot->quantity * $this->price->amount());
        return array_merge(parent::toArray($request), [
            
        ]);
    }
}
