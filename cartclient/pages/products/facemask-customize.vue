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
            <!-- Left product panel -->
            <div class="product-panel">
        
                <!-- Product image -->
                <div id="product-view" class="product-image translateLeft" style="padding:0px;">
                    <div>
                    <section class="section" style="padding:0px;">
            <h1 class="title is-4">
              {{ product.name }}
            </h1>
            <p v-if="product.description">
              {{ product.description }}
            </p>

            <hr />

            

            <span class="tag is-rounded is-medium">
              {{ product.price }}
            </span>
          </section>
          <section class="section">
            <form action="" @submit.prevent="add">
              <FaceMaskVariation
                v-for="(variations, type) in product.variations"
                :key="type"
                v-model="form.variation"
                :type="type"
                :variations="variations"
              />

              <div v-if="form.variation" class="field has-addons">
                <div class="control">
                  <button
                class="button is-info is-fullwidth is-medium"
                :disabled="submitting"
                @click.prevent="saveProduct"
              >
                Save
              </button>
                </div>
              </div>
            </form>
          </section>
          </div>
                </div>
        
                <!-- Product details -->
                <div id="meta-view" class="translateLeft is-hidden">
                    <!-- Product description -->
                    <div class="detailed-description">
                        <div class="meta-block">
                            <h3>Product name</h3>
                            <p>Red Seat</p>
                        </div>
                        <div class="meta-block">
                            <h3>Product SKU</h3>
                            <p>W589</p>
                        </div>
                        <!-- Product colors -->
                        <div class="meta-block">
                            <h3>Colors</h3>
                            <div class="colored-dots">
                                <div class="dot-wrapper">
                                    <div class="dot is-blue"></div>
                                </div>
                                <div class="dot-wrapper">
                                    <div class="dot is-red"></div>
                                </div>
                                <div class="dot-wrapper">
                                    <div class="dot is-dark"></div>
                                </div>
                                <div class="dot-wrapper">
                                    <div class="dot is-cream"></div>
                                </div>
                            </div>
                        </div>
                        <!-- Product long description -->
                        <div class="meta-block">
                            <h3 class="spaced">Description</h3>
                            <p class="spaced">Lorem ipsum dolor sit amet, tale solet volutpat an his, mutat aliquando sed te. Dico affert sensibus sed eu, quo nibh minimum voluptua ut. Te cibo vituperata usu, diam timeam sensibus qui ut. Quo mazim scripta labores cu, sit no quaeque electram. Per at volumus eleifend suscipiantur. Ad mea viderer suscipiantur.</p>
                            <p class="spaced">Solum movet salutatus ne has, nec probo suavitate urbanitas in. Volumus vulputate eos an, vix iusto ornatus mediocritatem ex. Ad pri mutat paulo inermis, at usu persius copiosae. Timeam democritum eloquentiam vim an.</p>
                        </div>
                        <!-- Product Availability -->
                        <div class="meta-block">
                            <h3>Availability</h3>
                            <p>Available</p>
                        </div>
                        <!-- Product Dimensions -->
                        <div class="meta-block">
                            <h3>Dimensions</h3>
                            <p>4” x 4” x 8"</p>
                        </div>
                        <!-- Product Weight -->
                        <div class="meta-block">
                            <h3>Weight</h3>
                            <p>6.77 Lbs</p>
                        </div>
                        <!-- Product Shipping methods -->
                        <div class="meta-block">
                            <h3>Shipping Methods</h3>
                            <p>Delivery, UPS, Express</p>
                        </div>
                    </div>
                </div>
        
                <!-- Product Ratings -->
                <div id="ratings-view" class="translateLeft is-hidden">
                    <div class="product-ratings">
                        <div class="main-rating">
        
                            <!-- Average Rating -->
                            <h3>Product Rating</h3>
                            <div class="stars">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half"></i>
                            </div>
                            <span>Rated <small>4,5/5</small> out of <small>29</small> reviews</span>
                            <span class="add-review modal-trigger" data-modal="review-modal"><i data-feather="plus"></i> Add review</span>
                        </div>
        
                        <!-- Customer reviews -->
                        <div class="customer-ratings">
                            <!-- Product review -->
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-32x32">
                                        <img src="http://via.placeholder.com/250x250" alt="">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p>
                                        <span>Elie Daniels</span>
                                        <small>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half"></i>
                                        </small>
                                        <br>
                                        <span class="rating-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</span>
                                    </p>
                                </div>
                            </div>
                            <!-- Product review -->
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-32x32">
                                        <img src="http://via.placeholder.com/250x250" alt="">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p>
                                        <span>John Smith</span>
                                        <small>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </small>
                                        <br>
                                        <span class="rating-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas nullam.</span>
                                    </p>
                                </div>
                            </div>
                            <!-- Product review -->
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-32x32">
                                        <img src="http://via.placeholder.com/250x250" alt="">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p>
                                        <span>Marjory Cambell</span>
                                        <small>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half"></i>
                                        </small>
                                        <br>
                                        <span class="rating-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</span>
                                    </p>
                                </div>
                            </div>
        
                        </div>
                    </div>
                </div>
                <!-- /Product Ratings -->
        
                <!-- Product panel actions -->
                <div class="product-actions">
                    <!-- Zoom Action -->
                    <div class="zoom-buttons">
                        <i data-feather="plus-circle"></i>
                        <i data-feather="minus-circle"></i>
                    </div>
                    <!-- Navigation icons -->
                    <div class="right-actions">
                        <!-- Product image panel -->
                        <span id="show-product" class="product-action is-active"><i data-feather="image"></i></span>
                        <!-- Product meta panel -->
                        <span id="show-meta" class="product-action"><i data-feather="menu"></i></span>
                        <!-- Product ratings panel -->
                        <span id="show-ratings" class="product-action"><i data-feather="message-circle"></i></span>
                    </div>
                </div>
            </div>
        
            <!-- Right product panel -->
            <div class="product-info-panel">
                <div class="inner-panel">
                    <div class="panel-header">
                        
                    </div>
                    <!-- Panel body -->
                    <div class="panel-body" >
                    <div class="has-text-center">
                     <canvas id="layer1" width="400" height="400"
   style="position: absolute; z-index: 0;"></canvas>
 <canvas id="layer2" width="400" height="400"
   style="position: absolute; z-index: 1;"></canvas>
   <canvas id="layer3" width="400" height="400"
   style="position: absolute; z-index: 2;"></canvas>
   </div>
                    </div>
                </div>
            </div>
            <!-- /Right product panel -->
        </div>
        <!-- /Main wrapper -->
        
        <!-- Modal -->
        <div id="review-modal" class="modal review-modal">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <div class="box-header">
                        <img src="http://via.placeholder.com/250x250" alt="">
                        <span>Rate this product</span>
                        <div class="modal-delete"><i data-feather="x"></i></div>
                    </div>
                    <div class="box-body">
        
                        <fieldset class="rating">
                            <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                            <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Great - 4.5 stars"></label>
                            <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Very good - 4 stars"></label>
                            <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Pretty good - 3.5 stars"></label>
                            <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Good - 3 stars"></label>
                            <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Average - 2.5 stars"></label>
                            <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Mediocre - 2 stars"></label>
                            <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Weak - 1.5 stars"></label>
                            <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Bad - 1 star"></label>
                            <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Terrible - 0.5 stars"></label>
                        </fieldset>
        
                        <div class="control">
                            <textarea class="textarea is-button" placeholder="write something..."></textarea>
                            <div class="textarea-button">
                                <button class="button primary-button raised">Post review</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--button class="modal-close is-large" aria-label="close"></button-->
        </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

import FaceMaskVariation from '@/components/products/FaceMaskVariation'
export default {
head: {
    script: [
      { src: '/facemask.js', body: true }
    ]
  },
 components: {
    FaceMaskVariation
  },
  data() {
    return {
      submitting: false,
      product: null,
      form: {
        variation: {
          base: '',
          elements: '',
          flavor: '',
          addon_1: '',
          product_id: null
        },
        quantity: 1
      }
      
    }
  },

  watch: {
    'form.variation'() {
      this.form.quantity = 1
    }
  },

  methods: {
    ...mapActions({
      store: 'cart/store'
    }),

  async saveProduct() {
    this.submitting = true

    try {
      await this.$axios.$post('user-products', {
        ...this.form.variation
      })


    } catch (e) {
      console.log(e.response.data.message);
    }

    this.submitting = false
  },

    
    add() {
      this.store([
        {
          id: this.form.variation.id,
          quantity: this.form.quantity
        }
      ])

      this.form = {
        variation: '',
        quantity: 1
      }
    }
  },

  async asyncData({ params, app }) {
    const response = await app.$axios.$get(`products/facemask`)
    return {
      product: response.data,
      product_id: response.data.id
    }
  }
}


</script>

