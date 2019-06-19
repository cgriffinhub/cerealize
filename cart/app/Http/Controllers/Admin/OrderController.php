<?php

namespace App\Http\Controllers\Admin;

use App\Cart\Cart;
use App\Models\Order;
use App\Events\Order\OrderCreated;
use App\Http\Controllers\Controller;
use App\Http\Requests\Orders\OrderStoreRequest;
use App\Http\Resources\OrderResource;
use App\Models\ProductVariation;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    protected $cart;

    public function __construct()
    {
        $this->middleware(['auth:api']);
        $this->middleware(['cart.sync', 'cart.isnotempty'])->only('store');
    }

    public function index(Request $request)
    {
        $orders = Order::with([
                'products',
                // 'products.stock',
                // 'products.type',
                'products.product',
                // 'products.product.variations',
                // 'products.product.variations.stock',
                'address',
                'shippingMethod'
                ])
            ->latest()
            ->paginate(10);

            return OrderResource::collection($orders);

    }

    public function store(OrderStoreRequest $request, Cart $cart)
    {
        $order = $this->createOrder($request, $cart);

        $order->products()->sync($cart->products()->forSyncing());

        event(new OrderCreated($order));

        return new OrderResource($order);
    }

    protected function createOrder(Request $request, Cart $cart)
    {
        return $request->user()->orders()->create(
            array_merge($request->only(['address_id', 'shipping_method_id', 'payment_method_id']), [
                'subtotal' => $cart->subtotal()->amount()
            ])
        );
    }
}
