<?php

namespace App\Http\Resources;

use Illuminate\Support\Collection;
use App\Cart\Money;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\User;
use App\Models\UserProduct;
use App\Models\ProductVariation;

class UserProducts extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

        $array = unserialize($this->elements);
        $price = new Money($this->price->amount());
        return [
            'id' => $this->id,
            'user_id' => $this->user(),
            'product_id' => new ProductIndexResource($this->product),
            'price' => $price->formatted(),
            'base' => new ProductVariationResource($this->baseProductVariation),
            'flavor' => new ProductVariationResource($this->flavorProductVariation),
            'addon_1' => new ProductVariationResource($this->addon1ProductVariation),
            'addon_2' => new ProductVariationResource($this->addon2ProductVariation),
            'addon_3' => new ProductVariationResource($this->addon3ProductVariation),
            'elements' => $this->getElements($array),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
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
