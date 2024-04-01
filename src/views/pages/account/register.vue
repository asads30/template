<script>
import {
  authMethods,
  authFackMethods,
  notificationMethods,
} from "@/state/helpers";

import appConfig from "@/app.config";
import { mapState } from "vuex";

import { required, email } from "vuelidate/lib/validators";

/**
 * Register component
 */
export default {
  page: {
    title: "Register",
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
      user: {
        username: "",
        email: "",
        password: "",
      },
      submitted: false,
      regError: null,
      tryingToRegister: false,
      isRegisterError: false,
      registerSuccess: false,
    };
  },
  validations: {
    user: {
      username: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
  computed: {
    ...mapState("authfack", ["status"]),
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
    notificationAutoCloseDuration() {
      return this.$store && this.$store.state.notification ? 5 : 0;
    },
  },
  methods: {
    ...authMethods,
    ...authFackMethods,
    ...notificationMethods,
    // Try to register the user in with the email, username
    // and password they provided.
    tryToRegisterIn() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      } else {
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          this.tryingToRegister = true;
          // Reset the regError if it existed.
          this.regError = null;
          return (
            this.register({
              email: this.user.email,
              password: this.user.password,
            })
              // eslint-disable-next-line no-unused-vars
              .then((token) => {
                this.tryingToRegister = false;
                this.isRegisterError = false;
                this.registerSuccess = true;
                if (this.registerSuccess) {
                  this.$router.push(
                    this.$route.query.redirectFrom || {
                      name: "default",
                    }
                  );
                }
              })
              .catch((error) => {
                this.tryingToRegister = false;
                this.regError = error ? error : "";
                this.isRegisterError = true;
              })
          );
        } else if (process.env.VUE_APP_DEFAULT_AUTH === "fakebackend") {
          const { email, username, password } = this.user;
          if (email && username && password) {
            this.registeruser(this.user);
          }
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
              <div class="mb-4">
                <h5 class="">Register Account</h5>
                <p>Get your free Dashonic account now.</p>
              </div>
              <b-alert
                v-model="registerSuccess"
                class="mt-3"
                variant="success"
                dismissible
                >Registration successfull.</b-alert
              >

              <b-alert
                v-model="isRegisterError"
                class="mt-3"
                variant="danger"
                dismissible
                :show="notificationAutoCloseDuration"
                @dismissed="clear"
                >{{ regError }}</b-alert
              >

              <div
                v-if="notification.message"
                :class="'alert alert-' + notification.type"
              >
                {{ notification.message }}
              </div>
              <form @submit.prevent="tryToRegisterIn">
                <div class="form-floating form-floating-custom mb-3">
                  <input
                    v-model="user.email"
                    type="email"
                    class="form-control"
                    id="input-email"
                    placeholder="Enter Email"
                    :class="{
                      'is-invalid': submitted && $v.user.email.$error,
                    }"
                  />
                  <label for="input-email">Email</label>
                  <div class="form-floating-icon">
                    <i class="uil uil-envelope-alt"></i>
                  </div>
                  <div
                    v-if="submitted && $v.user.email.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.user.email.required"
                      >Email is required.</span
                    >
                    <span v-if="!$v.user.email.email"
                      >Please enter valid email.</span
                    >
                  </div>
                </div>
                <div class="form-floating form-floating-custom mb-3">
                  <input
                    v-model="user.username"
                    type="text"
                    class="form-control"
                    id="input-username"
                    placeholder="Enter User Name"
                    :class="{
                      'is-invalid': submitted && $v.user.username.$error,
                    }"
                  />
                  <label for="input-username">Username</label>
                  <div class="form-floating-icon">
                    <i class="uil uil-users-alt"></i>
                  </div>
                  <div
                    v-if="submitted && !$v.user.username.required"
                    class="invalid-feedback"
                  >
                    Username is required.
                  </div>
                </div>
                <div class="form-floating form-floating-custom mb-3">
                  <input
                    v-model="user.password"
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Enter Password"
                    :class="{
                      'is-invalid': submitted && $v.user.password.$error,
                    }"
                  />
                  <label for="floatingPassword">Password</label>
                  <div class="form-floating-icon">
                    <i class="uil uil-padlock"></i>
                  </div>
                  <div
                    v-if="submitted && !$v.user.password.required"
                    class="invalid-feedback"
                  >
                    Password is required.
                  </div>
                </div>

                <div class="text-start">
                  <p>
                    By registering you agree to the Dashonic
                    <a href="#" class="text-decoration-underline"
                      >Terms of Use</a
                    >
                  </p>
                </div>

                <div class="mt-3">
                  <button class="btn btn-info w-100" type="submit">
                    Register
                  </button>
                </div>
              </form>
              <!-- end form -->

              <div class="mt-5 text-center">
                <p>
                  Already have an account ?
                  <router-link
                    to="/auth/signin-basic"
                    class="fw-medium text-decoration-underline"
                  >
                    Signin
                  </router-link>
                </p>
              </div>
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
        </div>
      </div>
    </div>
    <!-- end container -->
  </div>
  <!-- end authentication section -->
</template>

<style lang="scss" module></style>
