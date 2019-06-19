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
              <CerealizeVariation
                v-for="(variations, type) in product.variations"
                :key="type"
                v-model="form.variation"
                :type="type"
                :variations="variations"
              />

              <div v-if="form.variation" class="field has-addons">
                <div class="control">
                  <div class="select is-fullwidth">
                    <select id="" v-model="form.quantity" name="">
                      <option>4
                      </option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <button type="submit" class="button is-info">
                    Add to cart
                  </button>
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

import CerealizeVariation from '@/components/products/CerealizeVariation'
export default {
head: {
    script: [
      { src: '/jquery.js'},
      { src: '/d3.min.js'},
      { src: '/cerealize.js', body: true }
    ]
  },
 components: {
    CerealizeVariation
  },
  data() {
    return {
      product: null,
      form: {
        variation: '',
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

/*
    add() {

var array = []
var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

for (var i = 0; i < checkboxes.length; i++) {
  this.store([
        {
          id: checkboxes[i].value,
          quantity: this.form.quantity
        }
      ])
}

      this.form = {
        variation: '',
        quantity: 1
      }
    }
    */
    
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
    const response = await app.$axios.$get(`products/cereal`)

    return {
      product: response.data
    }
  }
}


</script>

