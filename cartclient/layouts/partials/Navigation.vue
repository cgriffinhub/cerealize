<template>
<!-- Pageloader -->
        <div>
        <!-- Pageloader -->
        <div class="pageloader"></div>
        <div class="infraloader is-active"></div>
        <!-- Mobile mode navbar -->
        <nav class="navbar mobile-navbar is-hidden-desktop is-hidden-tablet" aria-label="main navigation">
            <!-- Brand -->
            <div class="navbar-brand">
                <nuxt-link :to="{ name: 'index' }" class="navbar-item">
                    <!-- <img src="~/assets/images/logo/nephos.svg" alt=""> -->
        </nuxt-link>
                
        
                <!-- Sidebar mode toggler icon -->
                <a id="sidebar-mode" class="navbar-item is-icon is-sidebar-toggler" href="javascript:void(0);">
                    <i data-feather="sidebar"></i>
                </a>
        
                <!-- Mobile menu toggler icon -->
                <div class="navbar-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <!-- Navbar mobile menu -->
            <div class="navbar-menu">
                <!-- Account -->
                <div class="navbar-item has-dropdown">
                    <a href="account.html" class="navbar-link">
                        <img src="http://via.placeholder.com/250x250" alt=""> 
                        <span class="is-heading">Welcome, Guest</span> 
                    </a>
        
                    <!-- Mobile Dropdown -->
                    <div class="navbar-dropdown">
                    <template v-if="!$auth.loggedIn">
            <nuxt-link :to="{ name: 'auth-signin' }" class="navbar-item is-flex">
              Sign in
            </nuxt-link>
          </template>
          <template v-else>
            <a href="#" class="navbar-item">
              {{ $auth.user.name }}
            </a>
            <nuxt-link :to="{ name: 'orders' }" class="navbar-item">
              Orders
            </nuxt-link>
            <nuxt-link :to="{ name: 'cart' }" class="navbar-item">
              <span>Cart</span> <span class="menu-badge">{{ cartCount }}</span>
            </nuxt-link>
          </template>
                    </div>
                </div>
        
                <!-- More -->
                <div class="navbar-item has-dropdown">
                    <a class="navbar-link">
                        <i data-feather="grid"></i>
                        <span class="is-heading">Categories</span>
                    </a>
        
                    <!-- Mobile Dropdown -->
                    <div class="navbar-dropdown">
                        <a href="products.html" class="navbar-item">House</a>
                        <a href="products.html" class="navbar-item">Office</a>
                        <a href="products.html" class="navbar-item">Kids</a>
                        <a href="products.html" class="navbar-item">Kitchen</a>
                        <a href="products.html" class="navbar-item">Accessories</a>
                    </div>
                </div>
            </div>
        </nav>
        <!-- /Mobile mode navbar -->
        <!-- Main Sidebar-->
        <div class="main-sidebar">
            <div class="sidebar-brand">
                <nuxt-link :to="{ name: 'index' }" class="navbar-item">
                    <!-- <img src="~/assets/images/logo/nephos.svg" alt=""> -->
        </nuxt-link>
            </div>
            <div class="sidebar-inner">
                <ul class="icon-menu">
                    <!-- Shop sidebar trigger -->
                    <li>
                        <nuxt-link style="color:#A9ABAC;" :to="{ name: 'index' }">
                        <font-awesome-icon :icon="['fas', 'home']"/>
                        </nuxt-link>
                    </li>
            <li>
                        <a style="color:#A9ABAC;" href="/categories/facemask">
                        <font-awesome-icon :icon="['fas', 'shopping-bag']"/>
                        </a>
                    </li>
<li>
                     <nuxt-link style="color:#A9ABAC;" :to="{ name: 'products-facemask-customize' }">
                        <font-awesome-icon :icon="['fas', 'cube']"/>
                        </nuxt-link>
                        </li>
                    <!-- Cart sidebar trigger -->
                    <li>
                        <a style="color:#A9ABAC;" href="javascript:void(0);" id="open-cart"><font-awesome-icon :icon="['fas', 'shopping-cart']"/></a>
                    </li>          <!-- Mobile mode trigger -->
                    <li class="is-hidden-desktop is-hidden-tablet">
                        <a style="color:#A9ABAC;" href="javascript:void(0);" id="mobile-mode"><font-awesome-icon :icon="['fas', 'mobile-alt']"/></a>
                    </li>        </ul>
        
                <!-- User account -->
                <ul class="bottom-menu is-hidden-mobile">
                <template v-if="!$auth.loggedIn">
                <li>
            <nuxt-link :to="{ name: 'auth-signin' }" class="navbar-item is-flex">
              <font-awesome-icon :icon="['fas', 'user']"/>
            </nuxt-link>
            </li> 
          </template>
          <template v-else>
            <li>
            <nuxt-link :to="{ name: 'auth-signin' }" class="navbar-item is-flex">
              <font-awesome-icon :icon="['fas', 'sign-out-alt']"/>
            </nuxt-link>
            </li>
          </template>    </ul>
            </div>
        </div>
        <!-- /Main Sidebar-->
        
        <!-- FAB -->
        <div id="quickview-trigger"  class="menu-fab is-hidden-mobile">
            <a class="hamburger-btn" href="javascript:void(0);">
                <span class="menu-toggle">	
                    <span class="icon-box-toggle"> 	
                        <span class="rotate">
                            <i class="icon-line-top"></i>
                            <i class="icon-line-center"></i>
                            <i class="icon-line-bottom"></i> 
                        </span>
                    </span>
                </span>
            </a>
        </div><!-- /FAB -->
        
        
        <!-- Shop quickview -->
        <div class="shop-quickview has-background-image" data-background="http://via.placeholder.com/1280x853">
            <div class="inner">
                <!-- Header -->
                <div class="quickview-header">
                    <h2>Nephos</h2>
                    <span id="close-shop-sidebar"><i data-feather="x"></i></span>
                </div>
                <!-- Shop menu -->
                <ul class="shop-menu">
                    <li>
                        <nuxt-link :to="{ name: 'products-facemask-customize' }">
                            <span>Create Your Own</span>
                            <i data-feather="grid"></i>
                        </nuxt-link>
                    </li>
                        <template v-for="category in categories">
            <li :key="category.slug">
              <nuxt-link :to="{ name: 'categories-slug', params: { slug: category.slug } }">
                <span>{{ category.name }}</span>
              </nuxt-link>
            </li>
        </template>
        <li>
                        <nuxt-link :to="{ name: 'account' }">
                            <span>My Account</span>
                            <i data-feather="user"></i>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link :to="{ name: 'orders' }">
                            <span>My Orders</span>
                            <i data-feather="credit-card"></i>
                        </nuxt-link>
                    </li>
                </ul>
                <!-- Profile image -->
                <ul class="user-profile">
                    <li>
                        <a href="account.html">
                            <img src="http://via.placeholder.com/250x250" alt="">
                            <span class="user">
                                <span>Guest</span>
                                <span>0 <small>Items in Cart</small></span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Cart quickview -->
        <div class="cart-quickview">
            <div class="inner">
                <!-- Header -->
                <div class="quickview-header">
                    <h2>Quick Cart</h2>
                    <span id="close-cart-sidebar"><i data-feather="x"></i></span>
                </div>
                <!-- Cart quickview body -->
                <div class="cart-body">
                    <div class="empty-cart has-text-centered">
                        <h3>Your cart is empty</h3>
                        <img src="~/assets/images/icons/new-cart.svg" alt="">
                        <a href="shop.html" class="button big-button rounded">Start Shopping</a>
                        <small>You can create your account later</small>

                         <h1 class="title is-4">Your cart</h1>
          <article v-if="products.length" class="message">
            <CartOverview />
          </article>
          <p v-else>
            Your cart is empty
          </p>
          <nuxt-link
            v-if="!empty"
            :to="{ name: 'checkout' }"
            class="button is-fullwidth is-info is-medium"
          >
            Checkout
          </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartOverview from '@/components/cart/CartOverview'

  export default {
head: {
    css: [
    '@/assets/js/slick/slick.css',
    '@/assets/js/slick/slick-theme.css',
    '@/assets/js/webuipopover/jquery.webui-popover.min.css',
    '@/assets/js/izitoast/css/iziToast.min.css',
    '@/assets/js/zoom/zoom.css',
    '@/assets/js/jpcard/card.css',
    '@/assets/css/chosen/chosen.css',
    '@/assets/css/icons.min.css',
    'https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:100,400',
    'https://fonts.googleapis.com/css?family=Raleway:300,400,500',
    
  ],
    script: [
      { src: '/js/app.js', body: true},
      { src: '/js/nephos.js', body: true}
    ]
  },
  components: {
    CartOverview
  },


  
    computed: {
      ...mapGetters({
        categories: 'categories',
        cartCount: 'cart/count',
      empty: 'cart/empty',
      products: 'cart/products',
      changed: 'cart/changed'
      })
    }
}
    
</script>




