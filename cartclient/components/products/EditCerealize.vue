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
            v-if="type == 'base'"
            v-model="variation[type]"
            :value="variation.id"
            :checked="variation.id === userProduct.base[0].id"

          />
          <input type="checkbox" @change="changed($event, type)"
            :id="variation.name"
            :name="type"
            v-if="type == 'flavor'"
            v-model="variation[type]"
            :value="variation.id"
            :checked="variation.id === userProduct.flavor[0].id"
          />
          <input type="checkbox" @change="changed($event, type)"
            :id="variation.name"
            :name="'addon_1'"
            v-if="type == 'addon'"
            v-model="variation[type]"
            :value="variation.id"
            :checked="userProduct.addon_1.length > 0 && variation.id === userProduct.addon_1[0].id"
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
    userProduct: {
      required: true,
      type: Object
    },
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
        if (checkboxes[i].name === 'addon_1') {
          variation.addon_1=checkboxes[i].value;
        }
      }

      return variation
    }
  }

  

  
}
</script>
