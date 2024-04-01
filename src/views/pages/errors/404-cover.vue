<script>
import appConfig from "@/app.config";

/**
 * 404 Error cover component
 */
export default {
    page: {
        title: "404 Error Cover",
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
                                                    <h1 class="display-1 fw-normal error-text text-white">4<img src="@/assets/images/logo-sm-light.png" alt=""
                                                        class="avatar-lg h-auto mx-2">4</h1>
                                                    <h4 class="text-uppercase text-white-50">Opps, page not found</h4>
                                                    <div class="mt-5 text-center">
                                                        <router-link class="btn btn-info w-100" to="/">Back to Dashboard</router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end col -->
                                    </div><!-- end row -->
                                </div><!-- end card -->
                            </div>
                        </div><!-- end col -->
                    </div><!-- end row -->
                </div>
            </div>
            <!-- end container -->

        </div>
        <!-- end authentication section -->
</template>