<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_products', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned()->index();
            $table->integer('price')->nullable();
            $table->integer('base')->unsigned()->index();
            $table->integer('flavor')->unsigned()->index();
            $table->integer('addon_1')->unsigned()->index();
            $table->integer('addon_2')->unsigned()->index();
            $table->integer('addon_3')->unsigned()->index();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('base')->references('id')->on('product_variations');
            $table->foreign('flavor')->references('id')->on('product_variations');
            $table->foreign('addon_1')->references('id')->on('product_variations');
            $table->foreign('addon_2')->references('id')->on('product_variations');
            $table->foreign('addon_3')->references('id')->on('product_variations');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_products');
    }
}
