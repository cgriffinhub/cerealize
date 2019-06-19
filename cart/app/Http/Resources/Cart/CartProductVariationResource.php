<?php

namespace App\Http\Resources\Cart;

use App\Cart\Money;
use Illuminate\Support\Collection;
 use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\ProductVariationResource;
use App\Http\Resources\ProductIndexResource;
use App\Models\ProductVariation;
use App\Http\Resources\UserProducts;

class CartProductVariationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $array = unserialize($this->elements);
        $total = new Money($this->pivot->quantity * $this->price->amount());
        return array_merge(parent::toArray($request), [
            'user_id' => $this->user(),
            'product' =>  new ProductIndexResource($this->product),
            'product_id' => new ProductIndexResource($this->product),
            'base' => new ProductVariationResource($this->baseProductVariation),
            'flavor' => new ProductVariationResource($this->flavorProductVariation),
            'addon' => new ProductVariationResource($this->addon1ProductVariation),
            'addon2' => new ProductVariationResource($this->addon2ProductVariation),
            'addon3' => new ProductVariationResource($this->addon3ProductVariation),
            'elements' => $this->getElements($array),
            'quantity' => $this->pivot->quantity,
            'total' => $total->formatted()
        ]);
    }

    public function getElements($array) {
        $collection = new Collection($array);
        $collect = array();
        foreach ($collection as $value) {
            $element = new ProductVariationResource(ProductVariation::find($value));
            array_push($collect,$element);
        }
        return $collect;
    }
}
