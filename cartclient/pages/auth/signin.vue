<template>

<!-- Main wrapper -->
        <div class="shop-wrapper">
        
            <!-- Search overlay -->
            <div class="search-overlay"></div>
            
            <!-- Search input -->
            <div class="search-input-wrapper is-desktop is-hidden">
                <div class="field">
                    <div class="control">
                        <input type="text" name="search" autofocus required>
                        <span id="clear-search" role="button"><i data-feather="x"></i></span>
                        <span class="search-help">Type the name of the product you are looking for</span>
                    </div>
                </div>
            </div>
            <!-- Main section -->
            <div class="section">
                <!-- Container -->
                <div class="container">
        
                    <!-- Authentication Layout -->
                    <div class="columns account-header is-auth">
                        <div class="column is-10 is-offset-1 is-tablet-landscape-padded">
                            <!-- Title -->
                            <div class="auth-title">
                                <h2>LOGIN</h2>
                                <a href="index.html" class="button feather-button is-small primary-button upper-button raised is-hidden-mobile">
                                    <span>Home</span>
                                </a>
                                <img class="brand-filigrane" src="assets/images/logo/nephos-greyscale.svg" alt="">
                            </div>
                            <!-- Card -->
                            <div class="flat-card is-auto is-auth-form">
                                <div class="columns is-gapless is-flex-mobile">
                                    <!-- Image Columns -->
                                    <div class="column is-6 has-text-centered image-column is-padded">
                                        <div class="store-wrapper">
                                            <img src="assets/images/logo/nephos-white.svg" alt="">
                                            <div class="title">
                                                Nephos
                                            </div>
                                            <div class="subtitle">An unforgetable Customer Experience</div>
                                        </div>
                                        <div class="nephos-overlay"></div>
                                    </div>
                                    <!-- Login/Register form -->
                                    <div class="column is-6 is-mobile-padded">
        
                                        <div class="tabs-wrapper animated-tabs">
                                            <!-- Tabs -->
                                            <div class="tabs is-form-tabs">
                                                <ul>
                                                    <li class="is-active" data-tab="login"><a>Login</a></li>
                                                    <li data-tab="register"><a>Register</a></li>
                                                </ul>
                                            </div>
                                            <!-- Login form -->
                                            <div id="login" class="navtab-content is-active">
                                                <form action="" @submit.prevent="signin">
                                                    <!-- Form Control -->
                                                    <div class="control">
                                                        <label class="auth-label">Email*</label>
                                                        <input type="email" class="input" placeholder="" v-model="form.email">
                                                    </div>
                                                    <!-- Form Control -->
                                                    <div class="control">
                                                        <label class="auth-label">Password*</label>
                                                        <input type="password" class="input" placeholder="" v-model="form.password">
                                                    </div>
                                                    <!-- Form Control -->
                                                    <div class="control">
                                                        <label class="checkbox-wrap is-small">
                                                            <input id="house" type="checkbox" class="d-checkbox" checked>
                                                            <span></span>
                                                            <small>Remember me?</small>
                                                        </label>
                                                    </div>
                                                    <!-- Form Submit -->
                                                    <div class="button-wrapper">
                                                        <button type="submit" class="button feather-button is-small primary-button upper-button raised">
                                                            <span>Login</span>
                                                        </button>
                                                        <a class="forgotten">Forgot Password ?</a>
                                                    </div>
                                                </form>
                                            </div>
                                            <!-- Register form -->
                                            <div id="register" class="navtab-content">
                                                <form>
                                                    <!-- Form Control -->
                                                    <div class="control">
                                                        <label class="auth-label">Email*</label>
                                                        <input type="email" class="input" placeholder="" v-model="form.email">
                                                    </div>
                                                    <!-- Form Control -->
                                                    <div class="control">
                                                        <label class="auth-label">Password*</label>
                                                        <input type="password" class="input" placeholder="" v-model="form.password">
                                                    </div>
                                                    <!-- Form Control -->
                                                    <div class="control">
                                                        <label class="auth-label">Confirm Password*</label>
                                                        <input type="password" class="input" placeholder="">
                                                    </div>
                                                    <!-- Form Submit -->
                                                    <div class="button-wrapper">
                                                        <button type="submit" class="button feather-button is-small primary-button upper-button raised">
                                                            <span>Register</span>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /Login/Register form -->
                                </div>
                            </div>
                            <!-- Card -->
                        </div>
                    </div>
                    <!-- Authentication Layout -->
                </div>
                <!-- /Containerr -->
            </div>
            <!-- /Main section -->
        </div>
        
        <!-- /Main wrapper -->
  
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },

  middleware: ['redirectIfAuthenticated'],

  methods: {
    async signin() {
      await this.$auth.loginWith('local', {
        data: this.form
      })

      if (this.$route.query.redirect) {
        this.$router.replace(this.$route.query.redirect)
        return
      }

      this.$router.replace({
        name: 'index'
      })
    }
  }
}
</script>
