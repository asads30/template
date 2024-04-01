<script>
import { authMethods } from "@/state/helpers";
import appConfig from "@/app.config";

import { required, email } from "vuelidate/lib/validators";

/**
 * Forgot Password component
 */
export default {
  page: {
    title: "Forgot Password",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {},
  data() {
    return {
      email: "",
      submitted: false,
      error: null,
      tryingToReset: false,
      isResetError: false,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  methods: {
    ...authMethods,
    // Try to register the user in with the email, fullname
    // and password they provided.
    tryToReset() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      } else {
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          this.tryingToReset = true;
          // Reset the authError if it existed.
          this.error = null;
          return (
            this.resetPassword({
              email: this.email,
            })
              // eslint-disable-next-line no-unused-vars
              .then((token) => {
                this.tryingToReset = false;
                this.isResetError = false;
              })
              .catch((error) => {
                this.tryingToReset = false;
                this.error = error ? error : "";
                this.isResetError = true;
              })
          );
        } 
      }
    },
  },
};
</script>

<template>
  <div class="authentication-bg min-vh-100">
    <div class="bg-overlay bg-white"></div>
    <div class="container">
      <div class="d-flex flex-column min-vh-100 px-3 pt-4">
        <div class="row justify-content-center my-auto">
          <div class="col-md-8 col-lg-6 col-xl-4">
            <div class="text-center py-5">
              <div class="mb-4 mb-md-5">
                <router-link to="/" class="d-block auth-logo">
                  <img
                    src="@/assets/images/logo-dark.png"
                    alt=""
                    height="22"
                    class="auth-logo-dark"
                  />
                  <img
                    src="@/assets/images/logo-light.png"
                    alt=""
                    height="22"
                    class="auth-logo-light"
                  />
                </router-link>
              </div>
              <div class="text-muted mb-4">
                <h5 class="">Reset Password</h5>
                <p>Re-Password with Dashonic.</p>
              </div>
              <div class="alert alert-success text-center mb-4" role="alert">
                Enter your Email and instructions will be sent to you!
              </div>
              <b-alert
                v-model="isResetError"
                class="mb-4"
                variant="danger"
                dismissible
                >{{ error }}</b-alert
              >
              <form @submit.prevent="tryToReset">
                <div class="form-floating form-floating-custom mb-3">
                  <input
                    type="email"
                    class="form-control"
                    v-model="email"
                    id="input-email"
                    placeholder="Enter Email"
                    :class="{ 'is-invalid': submitted && $v.email.$error }"
                  />
                  <label for="input-email">Email</label>
                  <div class="form-floating-icon">
                    <i class="uil uil-envelope-alt"></i>
                  </div>
                  <div
                    v-if="submitted && $v.email.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.email.required">Email is required.</span>
                    <span v-if="!$v.email.email"
                      >Please enter valid email.</span
                    >
                  </div>
                </div>

                <div class="mt-3">
                  <router-link
                    to="/auth/forgotpassword-basic"
                    class="btn btn-info w-100"
                    >Send Request</router-link
                  >
                </div>
              </form>
              <!-- end form -->
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->

        <div class="row">
          <div class="col-lg-12">
            <div class="text-center text-muted p-4">
              <p class="mb-0">
                &copy; {{ new Date().getFullYear() }} Dashonic. Crafted with
                <i class="mdi mdi-heart text-danger"></i> by Pichforest
              </p>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
    </div>
    <!-- end container -->
  </div>
  <!-- end authentication section -->
</template>

<style lang="scss" module></style>
