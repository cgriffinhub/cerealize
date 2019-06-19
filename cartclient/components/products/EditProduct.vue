<template>
  <div class="field">
    <label class="label">
      {{ type }}
    </label>
    <div class="control">
      <div class="select is-fullwidth"v-for="variation in variations"
            :key="variation.id">
            <label>
          <input type="checkbox" @change="changed($event, type)"
            :id="variation.name"
            :name="type"
            v-model="element"
            :value="variation.id"
            v-bind:value="variation.id" 
          />
            {{ variation.name }}
            <template v-if="variation.price_varies">
              ({{ variation.price }})
            </template>

          </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      element: this.$parent.element
    }
  },
  props: {
    type: {
      required: true,
      type: String
    },
    variations: {
      required: true,
      type: Array
    },
    value: {
      required: false,
      default: ''
    }
  },

  computed: {
    selectedVariationId() {
      if (!this.findVariation(this.value.id)) {
        return ''
      }

      return this.value.id
    }
  },

  methods: {
    changed(event, type) {
      this.$emit('input', this.findVariation(event.target.value))
    },

    


    findVariation(id) {
      var checkedBoxes = [];
      var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

      const variation = this.variations.find(v => v.id == id)

      if (typeof variation === 'undefined') {
        return null
      }

      for (var i = 0; i < checkboxes.length; i++) {
        checkedBoxes.push(checkboxes[i].value);
        variation.elements = checkedBoxes;
      }
console.log(variation.elements);
      return variation
    }
  }
}
</script>
