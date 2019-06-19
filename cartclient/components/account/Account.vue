<template>

  <tr>
    <td><strong>{{account.product_id.name}}</strong> - {{ account.price }}
    <br>

    <!--
     {{ account.flavor[0].name }} {{ account.base[0].name }}
    <span v-if="account.addon_1[0]">, with {{ account.addon_1[0].name }}</span>
    <span v-if="account.addon_2[0]">, {{ account.addon_2[0].name }}</span>
    <span v-if="account.addon_3[0]"> and {{ account.addon_3[0].name }}</span>
    -->

    <div v-for="element in account.elements"
    :key="element.id">
    <strong>{{element.type}}</strong>: {{element.name}}
    </div>
    </td>
    <td class="control has-text-right">
                  <nuxt-link 
                  :to="{ name: 'account-products-id', params: { id: account.id } }" 
                  :key="account.id"
                  class="button is-info">
              Edit
            </nuxt-link>
                  <a href="" class="button is-danger"
                  @click.prevent="destroy(account.id)">Delete</a>
                </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
      return {
    selectedItem: null,
    quantity: null
      }
  },
  props: {
    account: {
      required: true,
      type: Object
    },
    value: {
      required: false,
      default: ''
    }
  },

  

methods: {
     ...mapActions({
        store: 'cart/store'
      }),

      add () {
        this.store([{
          id: this.form.variation.id, quantity: this.form.quantity
        }])

        this.form = {
          variation: '',
          quantity: 1
        }
      },
    async destroy(id) {
    const response = await this.$axios.$delete(`user-products/${id}`)
   .then(this.$router.go(0))
    .catch(error => console.log(error.response.data));
  },
  }
}
</script>
