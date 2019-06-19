<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-12">
          <h1 class="title is-4">Your orders</h1>

          <article v-if="orders.length" class="message">
            <div class="message-body">
              <table class="table is-hoverable is-fullwidth">
                <tbody>
                  <Order
                    v-for="order in orders"
                    :key="order.id"
                    :order="order"
                  />
                </tbody>
              </table>
            </div>
          </article>
          <p v-else>
            You have no orders
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Order from '@/components/orders/Order'

export default {
  components: {
    Order
  },
  data() {
    return {
      orders: []
    }
  },

  middleware: ['redirectIfGuest'],

  async asyncData({ app }) {
    const response = await app.$axios.$get('orders')

    return {
      orders: response.data
    }
  }
}
</script>
