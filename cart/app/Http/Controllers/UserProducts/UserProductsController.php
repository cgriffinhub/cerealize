<?php

namespace App\Http\Controllers\UserProducts;
use App\Models\UserProduct;
use Illuminate\Http\Request;
use Response;

use App\Cart\Money;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserProductResource;
use App\Models\ProductVariation;
use App\Models\Product;
use App\Http\Resources\UserProducts;

class UserProductsController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api']);
    }

    public function index(Request $request)
    {
        $user_products = $request->user()->userProducts()
        ->latest()
        ->paginate(10);
        return UserProducts::collection($user_products);
    }

    public function store(Request $request, UserProduct $UserProduct)
    {
        $UserProduct = $this->createUserProducts($request, $UserProduct);
        
        return new UserProductResource($UserProduct);
    }

    public function show(UserProduct $UserProduct,Request $request) {
        return new UserProducts($UserProduct);
    }

    public function update(Request $request, UserProduct $UserProduct)
    {
        
        $variation_array = [$request->base,$request->flavor,$request->addon_1,$request->addon_2,$request->addon_3];
        $variation_sum = 0;

        for ($i=0; $i< count($request->elements); $i++) {
            /*
            if ($variation_array[$i] != NULL) {
                $variation_sum = $variation_sum + ProductVariation::find($request->elements[$i])->price->amount();
            }
            */
            $variation_sum = $variation_sum + ProductVariation::find($request->elements[$i])->price->amount();
        };

        /*
        for ($i=0; $i< count($variation_array); $i++) {
            if ($variation_array[$i] != NULL) {
                $variation_sum = $variation_sum + ProductVariation::find($variation_array[$i])->price->amount();
            }
        };
        */

        $productId = ProductVariation::find($request->elements[0])->product_id;
        

        $UserProduct->update(
            array_merge([
                'product_id' => $productId,
                'price' => $variation_sum,
                'base' => $request->base, 
                'flavor' => $request->flavor, 
                'addon_1' => $request->addon_1, 
                'addon_2' => $request->addon_2, 
                'addon_3' => $request->addon_3,
                'elements' => serialize($request->elements) 
                ])
        );

        

    }

    public function destroy(UserProduct $UserProduct)
    {
        $UserProduct->delete();
    }

    protected function createUserProducts(Request $request, UserProduct $UserProduct)
    {
        $variation_array = [$request->base,$request->flavor,$request->addon_1,$request->addon_2,$request->addon_3];
        $variation_sum = 0;

        for ($i=0; $i< count($request->elements); $i++) {
            if ($variation_array[$i] != NULL) {
                $variation_sum = $variation_sum + ProductVariation::find($request->elements[$i])->price->amount();
            }
            $variation_sum = $variation_sum + ProductVariation::find($request->elements[$i])->price->amount();
        };

        /*
        for ($i=0; $i< count($variation_array); $i++) {
            if ($variation_array[$i] != NULL) {
                $variation_sum = $variation_sum + ProductVariation::find($variation_array[$i])->price->amount();
            }
        };
        */

        $productId = ProductVariation::find($request->elements[0])->product_id;
        
        return $request->user()->userProducts()->create(
            array_merge([
                'product_id' => $productId,
                'price' => $variation_sum,
                'base' => $request->base, 
                'flavor' => $request->flavor, 
                'addon_1' => $request->addon_1, 
                'addon_2' => $request->addon_2, 
                'addon_3' => $request->addon_3,
                'elements' => serialize($request->elements) 
                ])
        );
/*
        return $request->user()->userProducts()->create(
            array_merge(
                ['product_id'=> $product_id,
                'price'=>$variation_sum, 
                'base' =>$request->base, 
                'flavor' =>$request->flavor,
                'addon_1' =>$request->addon_1, 
                'addon_2' =>$request->addon_2, 
                'addon_3' =>$request->addon_3])
        );
        */
    }
}
