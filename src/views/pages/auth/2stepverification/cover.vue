<script>
import CodeInput from "vue-verification-code-input";

import appConfig from "@/app.config";

/**
 * Two Step Verification component
 */
export default {
    page: {
        title: "Two Step Verification",
        meta: [
            {
                name: "description",
                content: appConfig.description,
            },
        ],
    },
    components: {
        CodeInput
    }
}
</script>

<template>
    <div class="authentication-bg min-vh-100">
        <div class="bg-overlay bg-white"></div>
        <div class="container">
            <div class="d-flex flex-column min-vh-100 px-3 pt-4">
            <div class="row justify-content-center my-auto">
                <div class="col-lg-10">                        
                    <div class="py-5">
                        <div class="card auth-cover-card overflow-hidden">
                            <div class="row g-0">
                                <div class="col-lg-6">
                                    <div class="auth-img">
                                    </div>                                            
                                </div><!-- end col -->
                                <div class="col-lg-6">
                                    <div class="p-4 p-lg-5 bg-primary h-100 d-flex align-items-center justify-content-center">
                                        <div class="w-100 text-center">
                                            <div class="mb-4 mb-md-5">
                                                <router-link to="/" class="d-block auth-logo">
                                                    <img src="@/assets/images/logo-light.png" alt="">
                                                </router-link>
                                            </div>
                                            <div class="mb-4 mb-md-5">
                                                <div class="avatar-lg mx-auto">
                                                    <div class="avatar-title bg-light text-primary display-5 rounded-circle">
                                                        <i class="uil uil-envelope-alt"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-white-50 mb-4 mb-md-5">
                                                <h4 class="text-white">Verify Your Email</h4>
                                                <p>Please enter the 4 digit code sent to <span class="fw-semibold">example@abc.com</span></p>
                                            </div>
                                            <form>
                                                <CodeInput :loading="false" class="input" />
                                            </form><!-- end form -->

                                            <div class="mt-4">
                                                <a href="#" class="btn btn-info w-100">Confirm</a>
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- end col -->
                            </div><!-- end row -->
                        </div>
                        <div class="mt-5 text-center text-muted">
                            <p>Didn't receive a code ? <a href="#" class="fw-medium text-decoration-underline">Resend</a></p>
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
        </div>
        <!-- end container -->
    </div>
    <!-- end authentication section -->
</template>