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
                    <div class="row justify-content-center my-auto ">
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
                                                            <img src="assets/images/logo-light.png" alt="">
                                                        </router-link>
                                                    </div>
                                                    <div class="user-thumb mb-4 mb-md-5">
                                                        <img src="@/assets/images/users/avatar-10.jpg" class="rounded-circle img-thumbnail avatar-lg" alt="thumbnail">
                                                        <h5 class="font-size-16 text-white mt-3">Kate Dudley</h5>
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
                                                </div>
                                            </div>
                                        </div><!-- end col -->
                                    </div><!-- end row -->
                                </div><!-- end card -->
                                <div class="mt-5 text-center text-muted">
                                    <p>Not you ? return <router-link to="/auth/signin-cover" class="fw-medium text-decoration-underline"> Signin </router-link></p>
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