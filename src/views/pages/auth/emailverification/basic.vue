<script>
import appConfig from "@/app.config";

/**
 * Email Verification component
 */
export default {
    page: {
        title: "Email Verification",
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
                            <div class="mb-4 mb-md-5">
                                <div class="avatar-lg mx-auto">
                                    <div class="avatar-title bg-light text-primary display-5 rounded-circle">
                                        <i class="uil uil-envelope-alt"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="text-muted">
                                <h4 class="">Verify Your Email</h4>
                                <p>We have sent you verification email <span class="fw-semibold">example@abc.com</span>, Please check it</p>
                                <div class="mt-4">
                                    <a href="# " class="btn btn-info w-100">Verify email</a>
                                </div>
                            </div>

                            <div class="mt-5 text-center text-muted">
                                <p>Didn't receive an email ? <a href="#" class="fw-medium text-decoration-underline">Resend</a></p>
                            </div>
                        </div>
                    </div><!-- end col -->
                </div><!-- end row -->

                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center text-muted p-4">
                            <p class="mb-0">&copy; {{ new Date().getFullYear() }} Dashonic. Crafted with <i class="mdi mdi-heart text-danger"></i> by Pichforest</p>
                        </div>
                    </div><!-- end col -->
                </div><!-- end row -->
            </div>
        </div><!-- end container -->
    </div>
    <!-- end authentication section -->
</template>