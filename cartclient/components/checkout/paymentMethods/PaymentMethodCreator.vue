<template>
  <form action="#" @submit.prevent="store">
    <div class="field">
      <div id="card-element"></div>
    </div>

    <div class="field">
      <p class="control">
        <button class="button is-info" :disabled="storing">
          Store card
        </button>
        <a href="#" class="button is-text" @click.prevent="$emit('cancel')">
          Cancel
        </a>
      </p>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      stripe: null,
      card: null,
      storing: false
    }
  },

  mounted() {
    const stripe = Stripe('pk_test_AaGtIxmZhPxUdmpCSybbn5ZI')

    this.stripe = stripe

    this.card = this.stripe.elements().create('card', {
      style: {
        base: {
          fontSize: '16px'
        }
      }
    })

    this.card.mount('#card-element')
  },

  methods: {
    async store() {
      this.storing = true

      const { token, error } = await this.stripe.createToken(this.card)

      if (error) {
        //
      } else {
        const response = await this.$axios.$post('payment-methods', {
          token: token.id
        })

        this.$emit('added', response.data)
      }

      this.storing = false
    }
  }
}
</script>
