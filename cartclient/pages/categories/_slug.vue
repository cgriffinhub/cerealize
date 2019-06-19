<template>
  <div>
  <!-- Main wrapper -->
        <div class="shop-wrapper">
        
            <!-- Search overlay -->
            <div class="search-overlay"></div>
            
            <!-- Search input -->
            <div class="search-input-wrapper is-desktop is-hidden">
                <div class="field">
                    <div class="control">
                        <input type="text" name="search" autofocus required>
                        <span id="clear-search" role="button"><i data-feather="x"></i></span>
                        <span class="search-help">Type the name of the product you are looking for</span>
                    </div>
                </div>
            </div>
            <!-- Main section -->
            <div class="section">
                <!-- Container -->
                <div class="container">
        
                    <!-- House products -->
                    <div class="columns category-header">
                        <div class="column is-10 is-offset-1 is-tablet-landscape-padded">
                            <!-- Title -->
                            <div class="category-title is-product-category">
                                <h2>HOUSE</h2>
                                <div class="category-icon is-hidden-mobile">
                                                        </div>
                            </div>
        
                            <!-- Controls -->
                            <div class="listing-controls">
                                <div class="layout-controls">
                                    <a href="products.html"><span class="is-active"><i data-feather="grid"></i></span></a>
                                    <a href="products-list.html"><span><i data-feather="list"></i></span></a>
                                </div>
                                <!-- Sort -->
                                <div class="sort-box">
                                    <div class="sort-box-select">
                                        <select data-placeholder="Default order" class="chosen-select-no-single">
                                            <option>Default Sort</option>	
                                            <option>Best Sellers</option>
                                            <option>Highest Rated</option>
                                            <option>Best Deals</option>
                                            <option>Newest Products</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!-- /Controls -->
        
                            <!-- Product grid -->
                            <div class="columns is-product-grid is-multiline">
                                <!-- Product -->
                                <div class="column is-3">
                                    <div class="flat-card">
                                        <!-- Product zoomable image -->
                                        <div class="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="">
                                        </div>
                                        <!-- Product meta -->
                                        <div class="product-info has-text-centered">
                                            <a href="product.html"><h3 class="product-name">Red seat</h3></a>
                                            <p class="product-description">Lorem ipsum sit dolor amet</p>
                                            <p class="product-price">
                                                45,00
                                            </p>
                                        </div>
                                        <!-- Product actions -->
                                        <div class="actions">
                                            <div class="add"><i data-feather="shopping-cart" class="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div class="like"><i data-feather="heart" class="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Product -->
                                <div class="column is-9">
                                    <div class="flat-card is-long">
                                        <div class="left-image is-md">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="">
                                        </div>
                                        <div class="product-info">
                                            <a href="product.html"><h3 class="product-name featured">White table</h3></a>
                                            <p class="product-description">Lorem ipsum sit dolor amet</p>
                                            <p class="product-price">
                                                350,49
                                            </p>
                                        </div>
        
                                        <div class="actions">
                                            <div class="add"><i data-feather="shopping-cart" class="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div class="like"><i data-feather="heart" class="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Product -->
                                <div class="column is-3">
                                    <div class="flat-card">
                                        <div class="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="">
                                        </div>
                                        <div class="product-info has-text-centered">
                                            <a href="product.html"><h3 class="product-name">Blue seat</h3></a>
                                            <p class="product-description">Lorem ipsum sit dolor amet</p>
                                            <p class="product-price">
                                                35,00
                                            </p>
                                        </div>
        
                                        <div class="actions">
                                            <div class="add"><i data-feather="shopping-cart" class="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div class="like"><i data-feather="heart" class="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Product -->
                                <div class="column">
                                    <div class="flat-card is-long">
                                        <div class="left-image is-md">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="">
                                        </div>
                                        <div class="product-info">
                                            <a href="product.html"><h3 class="product-name featured-md">Modern bed</h3></a>
                                            <p class="product-description">Lorem ipsum sit dolor amet</p>
                                            <p class="product-price is-on-sale">
                                                <span>120,99</span>
                                                <span class="sale-price">299,99</span>
                                            </p>
                                        </div>
        
                                        <div class="actions">
                                            <div class="add"><i data-feather="shopping-cart" class="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div class="like"><i data-feather="heart" class="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
        
                                        <!-- Sale indicator -->
                                        <div class="on-sale">
                                            <i data-feather="dollar-sign" class="has-simple-popover" data-content="This product is on sale" data-placement="top"></i>
                                        </div>
                                    </div>
                                </div>
                                <!-- Product -->
                                <div class="column is-3">
                                    <div class="flat-card">
                                        <div class="image">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="">
                                        </div>
                                        <div class="product-info has-text-centered">
                                            <a href="product.html"><h3 class="product-name">Dark seat</h3></a>
                                            <p class="product-description">Lorem ipsum sit dolor amet</p>
                                            <p class="product-price is-on-sale">
                                                <span>50,25</span>
                                                <span class="sale-price">79,25</span>
                                            </p>
                                        </div>
        
                                        <div class="actions">
                                            <div class="add"><i data-feather="shopping-cart" class="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div class="like"><i data-feather="heart" class="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
        
                                        <div class="on-sale">
                                            <i data-feather="dollar-sign" class="has-simple-popover" data-content="This product is on sale" data-placement="top"></i>
                                        </div>
                                    </div>
                                </div>
                                <!-- Product -->
                                <div class="column is-6">
                                    <div class="flat-card is-long">
                                        <div class="left-image is-md">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="">
                                        </div>
                                        <div class="product-info">
                                            <a href="product.html"><h3 class="product-name featured-md">TV furniture</h3></a>
                                            <p class="product-description">Lorem ipsum sit dolor amet</p>
                                            <p class="product-price">
                                                430,00
                                            </p>
                                        </div>
        
                                        <div class="actions">
                                            <div class="add"><i data-feather="shopping-cart" class="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div class="like"><i data-feather="heart" class="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Product -->
                                <div class="column is-6">
                                    <div class="flat-card is-long">
                                        <div class="left-image is-md">
                                            <img src="http://via.placeholder.com/500x500/ffffff/999999" alt="">
                                        </div>
                                        <div class="product-info">
                                            <a href="product.html"><h3 class="product-name featured-md">Cabinet</h3></a>
                                            <p class="product-description">Lorem ipsum sit dolor amet</p>
                                            <p class="product-price">
                                                240,00
                                            </p>
                                        </div>
        
                                        <div class="actions">
                                            <div class="add"><i data-feather="shopping-cart" class="has-simple-popover" data-content="Add to Cart" data-placement="top"></i></div>
                                            <div class="like"><i data-feather="heart" class="has-simple-popover" data-content="Add to Wishlist" data-placement="top"></i></div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <!-- /Product grid -->
        
                            <div class="show-more"><a href="#">Show more products</a></div>
        
                        </div>
                    </div> 
                    <!-- /House products -->
        
        
                </div>
                <!-- /Container -->
            </div>
            <!-- /Main section -->
        </div>
        <!-- /Main wrapper -->
    <div class="container is-fluid">
      <div class="columns is-multiline">
        <div
          v-for="product in products"
          :key="product.slug"
          class="column is-3"
        >
          <Product :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '@/components/products/Product'
export default {
  components: {
    Product
  },
  data() {
    return {
      products: []
    }
  },
  async asyncData({ params, app }) {
    const response = await app.$axios.$get(`products?category=${params.slug}`)
    return {
      products: response.data
    }
  }
}
</script>
