<script>
import appConfig from "@/app.config";

/**
 * 500 Error basic component
 */
export default {
    page: {
        title: "500 Error Basic",
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
            <div class="row">
                <div class="col-md-12">
                    <div class="text-center py-5">
                        <h1 class="display-1 fw-normal error-text">5<img src="@/assets/images/logo-sm.png" alt=""
                                class="avatar-lg h-auto mx-2">0</h1>
                        <h4 class="text-uppercase text-muted">Internal Server Error</h4>
                        <div class="mt-5 text-center">
                            <router-link class="btn btn-primary" to="/">Back to Dashboard</router-link>
                        </div>
                    </div>
                </div>
                <!-- end col -->
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </div>
    <!-- end authentication section -->
</template>