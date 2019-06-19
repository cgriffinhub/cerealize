<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\User;
use App\Models\UserProduct;

class UserProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'product_id' => $this->product_id,
            'price' => $this->price,
            'base' => $this->base,
            'flavor' => $this->flavor,
            'addon_1' => $this->addon_1,
            'addon_2' => $this->addon_2,
            'addon_3' => $this->addon_3,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
