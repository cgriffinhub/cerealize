<template>
  <div>
    <Navigation />
    <div class="container">
      <TheAlert />
    </div>
    <nuxt />
  </div>
</template>
<script>
import Navigation from '@/layouts/partials/Navigation'
import TheAlert from '@/components/globals/TheAlert'
export default {
  
  methods: {
        showAlert(){
            // Use sweetalert2
            this.$swal('Hello Vue world!!!');
        }
    },
  components: {
    Navigation,
    TheAlert
  }
}
</script>
