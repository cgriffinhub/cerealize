<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\ProductVariation;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Models\User;
use App\Cart\Money;
use App\Models\Collections\ProductVariationCollection;
use App\Models\Product;
use App\Models\ProductVariationType;
use App\Models\Traits\HasPrice;

class UserProduct extends Model
{
   use HasPrice;
    
   protected $fillable = ['user_id','product_id','price','base','flavor','addon_1','addon_2','addon_3','elements'];

   public function getPriceAttribute($value)
    {
        if ($value === null) {
            return $this->product->price;
        }

        return new Money($value);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function priceVaries()
    {
        return $this->price->amount() !== $this->product->price->amount();
    }

    public function baseProductVariation()
    {
       return $this->hasMany(ProductVariation::class,'id','base'); 
    }

    public function flavorProductVariation()
    {
       return $this->hasMany(ProductVariation::class,'id','flavor'); 
    }

    public function addon1ProductVariation()
    {
       return $this->hasMany(ProductVariation::class,'id','addon_1'); 
    }

    public function addon2ProductVariation()
    {
       return $this->hasMany(ProductVariation::class,'id','addon_2'); 
    }

    public function addon3ProductVariation()
    {
       return $this->hasMany(ProductVariation::class,'id','addon_3'); 
    }


    public function user()
    {
      return $this->belongsTo(User::class);
   }

   public function newCollection(array $models = [])
    {
        return new ProductVariationCollection($models);
    }
}
