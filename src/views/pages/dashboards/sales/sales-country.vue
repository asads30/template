<script>
import "jsvectormap/dist/maps/world.js";

import "vuevectormap/src/scss/VueVectorMap.scss";

export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="col-xl-4">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h4 class="card-title mb-4">Sales by County</h4>
          <b-dropdown class="d-inline" variant="white" toggle-class="p-0">
            <template v-slot:button-content>
              <span class="fw-semibold">Report By:</span>
              <span class="text-muted"
                >Monthly<i class="mdi mdi-chevron-down ms-1"></i
              ></span>
            </template>
            <b-dropdown-item>Yearly</b-dropdown-item>
            <b-dropdown-item>Monthly</b-dropdown-item>
            <b-dropdown-item>Weekly</b-dropdown-item>
            <b-dropdown-item>Today</b-dropdown-item>
          </b-dropdown>
        </div>

        <vuevectormap ref="map" height="242px" map="world" width="450px"></vuevectormap>

        <div class="pt-3 px-2 pb-2">
          <p class="mb-1 fw-medium">USA <span class="float-end">75%</span></p>
          <div class="progress animated-progess custom-progress mt-2">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 75%"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="75"
            ></div>
          </div>

          <p class="mt-4 mb-1 fw-medium">
            Russia <span class="float-end">55%</span>
          </p>
          <div class="progress animated-progess custom-progress mt-2">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 55%"
              aria-valuenow="55"
              aria-valuemin="0"
              aria-valuemax="55"
            ></div>
          </div>

          <p class="mt-4 mb-1 fw-medium">
            Australia <span class="float-end">85%</span>
          </p>
          <div class="progress animated-progess custom-progress mt-2">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 85%"
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="85"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
