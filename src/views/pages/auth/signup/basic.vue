<script>
import appConfig from "@/app.config";

/**
 * Signup component
 */
export default {
    page: {
        title: "Signup",
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
                        <div class="text-center py-5">
                            <div class="mb-4 mb-md-5">
                                <router-link to="/" class="d-block auth-logo">
                                    <img src="@/assets/images/logo-dark.png" alt="" height="22" class="auth-logo-dark">
                                    <img src="@/assets/images/logo-light.png" alt="" height="22" class="auth-logo-light">
                                </router-link>
                            </div>
                            <div class="mb-4">
                                <h5 class="">Register Account</h5>
                                <p>Get your free Dashonic account now.</p>
                            </div>
                            <form>
                                <div class="form-floating form-floating-custom mb-3">
                                    <input type="email" class="form-control" id="input-email" placeholder="Enter Email">
                                    <label for="input-email">Email</label>
                                    <div class="form-floating-icon">
                                        <i class="uil uil-envelope-alt"></i>
                                    </div>
                                </div>
                                <div class="form-floating form-floating-custom mb-3">
                                    <input type="text" class="form-control" id="input-username" placeholder="Enter User Name">
                                    <label for="input-username">Username</label>
                                    <div class="form-floating-icon">
                                        <i class="uil uil-users-alt"></i>
                                    </div>
                                </div>
                                <div class="form-floating form-floating-custom mb-3">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Enter Password">
                                    <label for="floatingPassword">Password</label>
                                    <div class="form-floating-icon">
                                        <i class="uil uil-padlock"></i>
                                    </div>
                                </div>

                                <div class="text-start">
                                    <p>By registering you agree to the Dashonic <a href="#" class="text-decoration-underline">Terms of Use</a></p>
                                </div>

                                <div class="mt-3">
                                    <button class="btn btn-info w-100" type="submit">Register</button>
                                </div>
                            </form><!-- end form -->

                            <div class="mt-5 text-center">
                                <p>Already have an account ? <router-link to="/auth/signin-basic" class="fw-medium text-decoration-underline"> Signin </router-link></p>
                            </div>
                        </div>
                    </div><!-- end col -->
                </div><!-- end row -->

                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center text-muted p-4">
                            <p class="mb-0">&copy; {{ new Date().getFullYear() }} Dashonic. Crafted with <i class="mdi mdi-heart text-danger"></i> by Pichforest</p>
                        </div>
                    </div>
                </div>

            </div>
        </div><!-- end container -->
    </div>
    <!-- end authentication section -->
</template>