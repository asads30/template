<script>
import "jsvectormap/dist/maps/world.js";

export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="col-xl-8">
    <div class="card card-h-100">
      <div class="card-body">
        <div class="d-flex align-items-start">
          <div class="flex-grow-1 overflow-hidden">
            <h5 class="card-title text-truncate mb-3">Visitors by Location</h5>
          </div>

          <div class="flex-shrink-0">
            <b-dropdown variant="white" toggle-class="text-reset p-0">
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
        </div>

        <div class="row align-items-center">
          <div class="col-lg-7">
            <div class="d-flex h-100 map-widget">
              <vuevectormap
                :zoomOnScroll="false"
                :zoomButtons="false"
                ref="map"
                height="270px"
                map="world"
                width="450px"
              ></vuevectormap>
            </div>
          </div>
          <div class="col-lg-5">
            <div data-simplebar style="max-height: 230px;">
              <ul class="list-unstyled mb-0">
                <li class="px-4 py-3">
                  <div class="d-flex align-items-start">
                    <div class="flex-shrink-0 align-self-center me-3">
                      <div class="avatar-sm">
                        <div class="avatar-title bg-light rounded-circle">
                          <img
                            src="@/assets/images/flags/us.jpg"
                            alt=""
                            height="10"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="flex-grow-1">
                      <p class="text-muted mb-1">United States</p>
                      <h5 class="font-size-16 mb-0">81%</h5>
                    </div>
                    <div class="flex-shrink-0 ms-2">
                      <div class="badge badge-soft-success">
                        0.02 %
                        <i class="uil uil-arrow-up-right text-success ms-1"></i>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="px-4 py-3">
                  <div class="d-flex align-items-start">
                    <div class="flex-shrink-0 align-self-center me-3">
                      <div class="avatar-sm">
                        <div class="avatar-title bg-light rounded-circle">
                          <img
                            src="@/assets/images/flags/spain.jpg"
                            alt=""
                            height="10"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="flex-grow-1">
                      <p class="text-muted mb-1">Spain</p>
                      <h5 class="font-size-16 mb-0">77%</h5>
                    </div>
                    <div class="flex-shrink-0 ms-2">
                      <div class="badge badge-soft-success">
                        0.01 %
                        <i class="uil uil-arrow-up-right text-success ms-1"></i>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="px-4 py-3">
                  <div class="d-flex align-items-start">
                    <div class="flex-shrink-0 align-self-center me-3">
                      <div class="avatar-sm">
                        <div class="avatar-title bg-light rounded-circle">
                          <img
                            src="@/assets/images/flags/germany.jpg"
                            alt=""
                            height="10"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="flex-grow-1">
                      <p class="text-muted mb-1">Germany</p>
                      <h5 class="font-size-16 mb-0">80%</h5>
                    </div>
                    <div class="flex-shrink-0 ms-2">
                      <div class="badge badge-soft-success">
                        0.03 %
                        <i class="uil uil-arrow-up-right text-success ms-1"></i>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="px-4 py-3">
                  <div class="d-flex align-items-start">
                    <div class="flex-shrink-0 align-self-center me-3">
                      <div class="avatar-sm">
                        <div class="avatar-title bg-light rounded-circle">
                          <img
                            src="@/assets/images/flags/italy.jpg"
                            alt=""
                            height="10"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="flex-grow-1">
                      <p class="text-muted mb-1">Italy</p>
                      <h5 class="font-size-16 mb-0">73%</h5>
                    </div>
                    <div class="flex-shrink-0 ms-2">
                      <div class="badge badge-soft-success">
                        0.01 %
                        <i class="uil uil-arrow-up-right text-success ms-1"></i>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- end card body -->
    </div>
    <!-- end card -->
  </div>
  <!-- end col -->
</template>
