<script>
export default {
    data() {
        return {
           visitors: [
               {
                   icon: 'fa-chrome',
                   text: 'Chrome',
                   value: 82
               },
               {
                   icon: 'fa-firefox-browser',
                   text: 'Firefox',
                   value: 70
               },
               {
                   icon: 'fa-safari',
                   text: 'Safari',
                   value: 76
               },
               {
                   icon: 'fa-edge',
                   text: 'Edge',
                   value: 67
               }
           ] 
        }
    },
}
</script>

<template>
    <div class="col-xl-3 col-md-6">
        <div class="card card-h-100">
            <div class="card-header border-bottom-0">
                <div class="d-flex align-items-start">
                    <div class="flex-grow-1">
                        <h5 class="card-title">Visitors by Browser</h5>
                    </div>

                    <div class="flex-shrink-0">
                        <b-dropdown variant="white" toggle-class="font-size-16 text-muted p-0">
                            <template v-slot:button-content>
                                <i class="mdi mdi-dots-horizontal"></i>
                            </template>
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                        </b-dropdown>
                    </div>
                </div>
            </div>
            <div data-simplebar style="max-height: 230px;">
                <ul class="list-unstyled unstyled mb-0">
                <li class="px-4 py-3" v-for="(item, index) of visitors" :key="index">
                    <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 me-3">
                        <div class="avatar-sm">
                        <div
                            class="avatar-title bg-light text-primary rounded-circle font-size-18"
                        >
                            <i :class="`fab ${item.icon}`"></i>
                        </div>
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <p class="text-muted mb-2">
                        {{item.text}} <span class="float-end fw-medium">{{item.value}} %</span>
                        </p>
                        <div class="progress animated-progess custom-progress">
                        <div
                            class="progress-bar"
                            role="progressbar"
                            :style="`width: ${item.value}%`"
                            aria-valuenow="82"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                        </div>
                    </div>
                    </div>
                </li>
                </ul>
            </div>
        </div>
        <!-- end card -->
  </div>
  <!-- end col -->
</template>