<script>
import appConfig from "@/app.config";

/**
 * Signin component
 */
export default {
    page: {
        title: "Sign In",
        meta: [
            {
                name: "description",
                content: appConfig.description,
            },
        ],
    }
}
</script>

<template>
    <div class="authentication-bg min-vh-100">
            <div class="bg-overlay bg-white"></div>
            <div class="container">
                <div class="d-flex flex-column min-vh-100 px-3 pt-4">
                    <div class="row justify-content-center my-auto">
                        <div class="col-md-8 col-lg-6 col-xl-4">
                            
                            <div class="text-center  py-5">
                                <div class="mb-4 mb-md-5">
                                    <router-link to="/" class="d-block auth-logo">
                                        <img src="@/assets/images/logo-dark.png" alt="" height="22" class="auth-logo-dark">
                                        <img src="@/assets/images/logo-light.png" alt="" height="22" class="auth-logo-light">
                                    </router-link>
                                </div>
                                <div class="mb-4">
                                    <h5>Welcome Back !</h5>
                                    <p>Sign in to continue to Dashonic.</p>
                                </div>
                                <form>
                                    <div class="form-floating form-floating-custom mb-3">
                                        <input type="text" class="form-control" id="input-username" placeholder="Enter User Name">
                                        <label for="input-username">Username</label>
                                        <div class="form-floating-icon">
                                            <i class="uil uil-users-alt"></i>
                                        </div>
                                    </div>
                                    <div class="form-floating form-floating-custom mb-3">
                                        <input type="password" class="form-control" id="input-password" placeholder="Enter Password">
                                        <label for="input-password">Password</label>
                                        <div class="form-floating-icon">
                                            <i class="uil uil-padlock"></i>
                                        </div>
                                    </div>

                                    <div class="form-check form-check-info font-size-16">
                                        <input class="form-check-input" type="checkbox" id="remember-check">
                                        <label class="form-check-label font-size-14" for="remember-check">
                                            Remember me
                                        </label>
                                    </div>

                                    <div class="mt-3">
                                        <button class="btn btn-info w-100" type="submit">Log In</button>
                                    </div>

                                    <div class="mt-4">
                                        <router-link to="/auth/resetpassword-basic" class="text-muted text-decoration-underline">Forgot your password?</router-link>
                                    </div>
                                </form><!-- end form -->

                                <div class="mt-5 text-center text-muted">
                                    <p>Don't have an account ? <router-link to="/auth/signup-basic" class="fw-medium text-decoration-underline"> Signup </router-link></p>
                                </div>
                            </div>
                        </div><!-- end col -->
                    </div><!-- end row -->

                    <div class="row">
                        <div class="col-xl-12">
                            <div class="text-center text-muted p-4">
                                <p class="mb-0">&copy; {{new Date().getFullYear()}} Dashonic. Crafted with <i class="mdi mdi-heart text-danger"></i> by Pichforest</p>
                            </div>
                        </div><!-- end col -->
                    </div><!-- end row -->

                </div>
            </div><!-- end container -->
        </div>
        <!-- end authentication section -->
</template>