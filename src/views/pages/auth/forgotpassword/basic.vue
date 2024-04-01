<script>
import appConfig from "@/app.config";

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
}
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
                                        <img src="@/assets/images/logo-dark.png" alt="" height="22" class="auth-logo-dark">
                                        <img src="@/assets/images/logo-light.png" alt="" height="22" class="auth-logo-light">
                                    </router-link>
                                </div>
                                <div class="text-muted mb-4">
                                    <h5 class="">Forgot Password</h5>
                                    <p>Forgot Your Password?</p>
                                </div>
                                <form>
                                    <div class="form-floating form-floating-custom mb-3">
                                        <input type="password" class="form-control" id="input-newpassword" placeholder="Password">
                                        <label for="input-newpassword">New Password</label>
                                        <div class="form-floating-icon">
                                            <i class="uil uil-padlock"></i>
                                        </div>
                                    </div>
                                    <div class="form-floating form-floating-custom mb-3">
                                        <input type="password" class="form-control" id="input-confirmpassword" placeholder="Password">
                                        <label for="input-confirmpassword">Confirm Password</label>
                                        <div class="form-floating-icon">
                                            <i class="uil uil-check-circle"></i>
                                        </div>
                                    </div>

                                    <div class="mt-3">
                                        <button class="btn btn-info w-100" type="submit">Reset</button>
                                    </div>
                                </form><!-- end form -->

                                <div class="mt-5 text-center text-muted">
                                    <p>Remember It ? <router-link to="/auth/signin-basic" class="fw-medium text-decoration-underline"> Sign In </router-link></p>
                                </div>
                            </div>
                        </div><!-- end col -->
                    </div><!-- end row -->

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="text-center text-muted p-4">
                                <p class="mb-0">&copy; {{ new Date().getFullYear()}} Dashonic. Crafted with <i class="mdi mdi-heart text-danger"></i> by Pichforest</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div><!-- end container -->
        </div>
        <!-- end authentication section -->
</template>