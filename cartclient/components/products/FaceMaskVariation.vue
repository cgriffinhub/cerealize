<template>
  <div class="field">
    <h2 class="has-text-left is-size-3 is-capitalized">
      {{ type }}
    </h2>
    <div class="control">
      <div class="is-fullwidth is-size-5" v-for="variation in variations"
            :key="variation.id">
            <label>
            
          <input type="radio" class="base_item" @change="changed($event, type)"
            :name="type"
            v-if="type == 'base'"
            v-model="variation[type]"
            :value="variation.id"
            :true-value="variation.id"
          />
          <input class="addon_item" type="checkbox" @change="changed($event, type)"
            :name="type"
            v-if="type == 'addon'"
            v-model="variation[type]"
            :value="variation.id"
            :true-value="variation.id"
          />
          
            {{ variation.name }}

            <template v-if="variation.price_varies">
              ({{ variation.price }})
            </template>

          </label>
      </div>
      <!--
      <div class="select is-fullwidth"v-for="flavorProduct in flavorProducts"
            :key="flavorProduct.id"
            >
            <label>
          <input type="checkbox" @change="changed($event, type)"
            :id="flavorProduct.name"
            :name="type"
            :value="flavorProduct.id"
          />
          
            {{ flavorProduct.name }}

            <template v-if="flavorProduct.price_varies">
              ({{ flavorProduct.price }})
            </template>

          </label>
      </div>
      <div class="select is-fullwidth"v-for="addonProduct in addonProducts"
            :key="addonProduct.id">
            <label>
          <input type="checkbox" @change="changed($event, type)"
            :id="addonProduct.name"
            :name="type"
            :value="addonProduct.id"
          />
          
            {{ addonProduct.name }}

            <template v-if="addonProduct.price_varies">
              ({{ addonProduct.price }})
            </template>

          </label>
      </div>
      -->
    </div>
  </div>
</template>

<script>
export default {
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
      var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
      var checkedBoxes = [];
      const variation = this.variations.find(v => v.id == id)
      if (typeof variation === 'undefined') {
        return null
      }

      for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].name === 'base') {
          variation.base=checkboxes[i].value;
      }
      if (checkboxes[i].name === 'flavor') {
        variation.flavor=checkboxes[i].value;
      }
      checkedBoxes.push(checkboxes[i].value);
      variation.elements = checkedBoxes;
}

      return variation
    }
  }

  
}
</script>
