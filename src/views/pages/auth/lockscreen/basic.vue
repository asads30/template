<script>
import appConfig from "@/app.config";

/**
 * Lock Screen component
 */
export default {
    page: {
        title: "Lock Screen",
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
                            <div class="user-thumb mb-4 mb-md-5">
                                <img src="@/assets/images/users/avatar-10.jpg" class="rounded-circle img-thumbnail avatar-lg" alt="thumbnail">
                                <h5 class="font-size-16 mt-3">Kate Dudley</h5>
                            </div>
                            <form>
                                <div class="form-floating form-floating-custom mb-3">
                                    <input type="password" class="form-control" id="input-password" placeholder="Enter Password">
                                    <label for="input-password">Password</label>
                                    <div class="form-floating-icon">
                                        <i class="uil uil-padlock"></i>
                                    </div>
                                </div>

                                <div class="mt-3">
                                    <button class="btn btn-info w-100" type="button">Unlock</button>
                                </div>
                            </form><!-- end form -->

                            <div class="mt-5 text-center text-muted">
                                <p>Not you ? return <router-link to="/auth/signin-basic" class="fw-medium text-decoration-underline"> Signin </router-link></p>
                            </div>
                        </div>
                    </div><!-- end col -->
                </div><!-- end row -->

                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center text-muted p-4">
                            <p class="mb-0">&copy; {{ new Date().getFullYear()}} Dashonic. Crafted with <i class="mdi mdi-heart text-danger"></i> by Pichforest</p>
                        </div>
                    </div><!-- end col -->
                </div><!-- end row -->
                </div>
            </div><!-- end container -->
        </div>
        <!-- end authentication section -->
</template>