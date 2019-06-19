<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnToCartUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cart_user', function (Blueprint $table) {
            $table->integer('user_product_id')->unsigned()->index();
            $table->foreign('user_product_id')->references('id')->on('user_products');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cart_user', function (Blueprint $table) {
            $table->dropColumn('user_product_id')->nullable();
        });
    }
}
