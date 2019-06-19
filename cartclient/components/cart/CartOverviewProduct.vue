<template>
  <tr>
    <td width="120">
      <img src="http://via.placeholder.com/60x60" alt="" />
    </td>
    <td>{{ product.product.name }}
    <div v-for="element in product.elements"
    :key="element.id">
    <strong>{{element.type}}</strong>: {{element.name}}
    </div>
    </td>
    <td width="160">
      <div class="field">
        <div class="control">
          <div class="select is-fullwidth">
            <select v-model="quantity">
              <option v-if="product.quantity == 0" value="0">0</option>
              <option
                v-for="x in product.quantity"
                :key="x"
                :value="x"
                :selected="x == product.quantity"
              >
                {{ x }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </td>
    <td>
      {{ product.total }}
    </td>
    <td>    
<font-awesome-icon @click.prevent="destroy(product.id)" :icon="['fas', 'times']"/>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  computed: {
    quantity: {
      get() {
        return this.product.quantity
      },

      set(quantity) {
        this.update({ productId: this.product.id, quantity })
      }
    }
  },

  methods: {
    ...mapActions({
      destroy: 'cart/destroy',
      update: 'cart/update'
    })
  }
}
</script>
