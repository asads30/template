<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>

<template>
    <div class="card">
        <div class="card-body">
            <div class="alert alert-warning border-0 d-flex align-items-center" role="alert">
                <i class="uil uil-exclamation-triangle font-size-16 text-warning me-2"></i>
                <div class="flex-grow-1 text-truncate">
                    Your free trial expired in <b>21</b> days. 
                </div>
                <div class="flex-shrink-0">
                    <router-link to="/pricing/basic" class="text-reset text-decoration-underline"><b>Upgrade</b></router-link>
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-sm-7">
                    <p class="font-size-18">Upgrade your plan from a <span class="fw-semibold">Free
                            trial</span>, to ‘Premium Plan’ <i class="mdi mdi-arrow-right"></i></p>
                    <div class="mt-4">
                        <router-link to="/pricing/basic" class="btn btn-primary">Upgrade Account!</router-link>
                    </div>
                </div>
                <div class="col-sm-5">
                    <img src="@/assets/images/illustrator/2.png" class="img-fluid" alt="">
                </div>
            </div>
        </div> <!-- end card-body-->
    </div>
</template>