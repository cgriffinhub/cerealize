<template>
  <form action="#" @submit.prevent="store">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input v-model="form.name" class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">Address line 1</label>
      <div class="control">
        <input v-model="form.address_1" class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">City</label>
      <div class="control">
        <input v-model="form.city" class="input" type="text" />
      </div>
    </div>

    <div class="columns">
      <div class="column is-6">
        <div class="field">
          <label class="label">Postal code</label>
          <div class="control">
            <input v-model="form.postal_code" class="input" type="text" />
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="field">
          <label class="label">Country</label>
          <div class="control">
            <div class="select is-fullwidth">
              <CountryDropdown v-model="form.country_id" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="field">
      <p class="control">
        <button class="button is-info">
          Add address
        </button>
        <a class="button is-text" @click.prevent="$emit('cancel')">Cancel</a>
      </p>
    </div>
  </form>
</template>

<script>
import CountryDropdown from '@/components/form/CountryDropdown'

export default {
  components: {
    CountryDropdown
  },
  data() {
    return {
      form: {
        name: '',
        address_1: '',
        city: '',
        postal_code: '',
        country_id: '',
        default: true
      }
    }
  },

  methods: {
    async store() {
      const response = await this.$axios.$post('addresses', this.form)

      this.$emit('created', response.data)
    }
  }
}
</script>
