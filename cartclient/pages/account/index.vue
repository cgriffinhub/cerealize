<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-12">
          <h1 class="title is-4">Your Products</h1>

          <article v-if="account.length" class="message">
            <div class="message-body">
              <table class="table is-hoverable is-fullwidth">
                <tbody>
                  <Account
                    v-for="account in account"
                    :key="account.id"
                    :account="account"
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

import Account from '@/components/account/Account'

export default {
    components: {
    Account
  },

    

  middleware: ['redirectIfGuest'],

  async asyncData({ app }) {
    const response = await app.$axios.$get('user-products')

    return {
      account: response.data
    }
  }
}
</script>
