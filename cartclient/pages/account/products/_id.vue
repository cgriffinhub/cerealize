<template>
<div>
  <div class="section">
    <div class="container is-fluid">
      <div class="columns">
        
        <div class="column is-half">
          <section class="section">
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
              <EditProduct
                v-for="(variations, type) in product.variations"
                :key="type"
                v-model="form.variation"
                :type="type"
                :variations="variations"
                :userProduct="userProduct"

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

              <div class="field has-addons" v-if="form.variation">
                <div class="control">
                  <div class="select is-fullwidth">
                    <select name="" id="" v-model="form.quantity">
                      <option :value="x" v-for="x in parseInt(10)" :key="x">
                        {{ x }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <button type="submit" class="button is-info">Add to cart</button>
                </div>
              </div>
                </div>
              </div>
            </form>
          </section>
        </div>
        <div class="column is-half" id="cerealizeContainer" style="margin-top:80px;position:relative;min-width:400px;min-height:400px;">
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import { mapActions } from 'vuex'

import EditProduct from '@/components/products/EditProduct'
export default {
head: {
    script: [
      { src: '/jquery.js'},
      { src: '/d3.min.js'},
      { src: '/cerealize.js', body: true }
    ]
  },
 components: {
    EditProduct
  },
  data() {
    return {
      submitting: false,
      product: null,
      form: {
        variation: {
          base: '',
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
      var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].name === 'base') {
            this.form.variation.base=checkboxes[i].value;
        }
        if (checkboxes[i].name === 'flavor') {
          this.form.variation.flavor=checkboxes[i].value;
        }
        if (checkboxes[i].name === 'addon_1') {
          this.form.variation.addon_1=checkboxes[i].value;
        }
      }
      await this.$axios.$put(`user-products/${this.$nuxt._route.params.id}`, {
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
          id: this.$nuxt._route.params.id,
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
    const response = await app.$axios.$get(`products/cereal`)
    const userProduct = await app.$axios.$get(`user-products/${params.id}`);
    return {
      product: response.data,
      product_id: response.data.id,
      userProduct: userProduct.data
    }
  }

}


</script>

