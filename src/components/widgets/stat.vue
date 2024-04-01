<script>
export default {
    props: {
        widgetData: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<template>
    <div class="row">
        <div class="col-xl-3 col-sm-6" v-for="item in widgetData" :key="item.id">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 me-3">
                            <div class="avatar-sm">
                                <div class="avatar-title bg-soft-primary text-primary rounded-circle font-size-18">
                                    <i :class="`uil ${item.icon}`"></i>
                                </div>
                            </div>
                        </div>
                        
                        <div class="flex-grow-1 overflow-hidden">
                            <p class="mb-1 text-truncate text-muted">{{item.title}}</p>
                            <h5 class="font-size-16 mb-0">{{item.value}}</h5>
                        </div>
                    </div>
                </div><!-- end card body -->
            </div><!-- end card -->
        </div>
        <!-- end col -->
    </div>
    <!-- end row -->
</template>