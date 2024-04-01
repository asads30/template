<script>
import {
  authMethods,
  authFackMethods,
  notificationMethods,
} from "@/state/helpers";
import { mapState } from "vuex";

import appConfig from "@/app.config";
import { required, email } from "vuelidate/lib/validators";

/**
 * Login component
 */
export default {
  page: {
    title: "Login",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      email: "admin@pichforest.com",
      password: "123456",
      submitted: false,
      authError: null,
      tryingToLogIn: false,
      isAuthError: false,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  },
  computed: {
    ...mapState("authfack", ["status"]),
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
  },
  methods: {
    ...authMethods,
    ...authFackMethods,
    ...notificationMethods,
    // Try to log the user in with the username
    // and password they provided.
    tryToLogIn() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      } else {
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          this.tryingToLogIn = true;
          // Reset the authError if it existed.
          this.authError = null;
          return (
            this.logIn({
              email: this.email,
              password: this.password,
            })
              // eslint-disable-next-line no-unused-vars
              .then((token) => {
                this.tryingToLogIn = false;
                this.isAuthError = false;
                // Redirect to the originally requested page, or to the home page
                this.$router.push(
                  this.$route.query.redirectFrom || {
                    name: "default",
                  }
                );
              })
              .catch((error) => {
                this.tryingToLogIn = false;
                this.authError = error ? error : "";
                this.isAuthError = true;
              })
          );
        } else if (process.env.VUE_APP_DEFAULT_AUTH === "fakebackend") {
          const { email, password } = this;
          if (email && password) {
            this.login({
              email,
              password,
            });
          }
        }
      }
    },
  }
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
              <div class="mb-4">
                <h5>Welcome Back !</h5>
                <p>Sign in to continue to Dashonic.</p>
              </div>
              <b-alert
                v-model="isAuthError"
                variant="danger"
                class="mt-3"
                dismissible
                >{{ authError }}</b-alert
              >
              <div
                v-if="notification.message"
                :class="'alert ' + notification.type"
              >
                {{ notification.message }}
              </div>
              <form @submit.prevent="tryToLogIn">
                <div class="form-floating form-floating-custom mb-3">
                  <input
                    type="text"
                    v-model="email"
                    class="form-control"
                    id="input-email"
                    placeholder="Enter User Name"
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
                <div class="form-floating form-floating-custom mb-3">
                  <input
                    type="password"
                    class="form-control"
                    v-model="password"
                    id="input-password"
                    placeholder="Enter Password"
                    :class="{ 'is-invalid': submitted && $v.password.$error }"
                  />
                  <label for="input-password">Password</label>
                  <div class="form-floating-icon">
                    <i class="uil uil-padlock"></i>
                  </div>
                  <div
                    v-if="submitted && !$v.password.required"
                    class="invalid-feedback"
                  >
                    Password is required.
                  </div>
                </div>

                <div class="form-check form-check-info font-size-16">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="remember-check"
                  />
                  <label
                    class="form-check-label font-size-14"
                    for="remember-check"
                  >
                    Remember me
                  </label>
                </div>

                <div class="mt-3">
                  <button class="btn btn-info w-100" type="submit">
                    Log In
                  </button>
                </div>

                <div class="mt-4">
                  <router-link
                    to="/auth/resetpassword-basic"
                    class="text-muted text-decoration-underline"
                    >Forgot your password?</router-link
                  >
                </div>
              </form>
              <!-- end form -->

              <div class="mt-5 text-center text-muted">
                <p>
                  Don't have an account ?
                  <router-link
                    to="/register"
                    class="fw-medium text-decoration-underline"
                  >
                    Signup
                  </router-link>
                </p>
              </div>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->

        <div class="row">
          <div class="col-xl-12">
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

