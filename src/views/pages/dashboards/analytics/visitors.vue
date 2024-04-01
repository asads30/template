<script>
export default {
  data() {
    return {};
  },
};
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
          <li class="px-4 py-3">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 me-3">
                <div class="avatar-sm">
                  <div
                    class="avatar-title bg-light text-primary rounded-circle font-size-18"
                  >
                    <i class="fab fa-chrome"></i>
                  </div>
                </div>
              </div>
              <div class="flex-grow-1">
                <p class="text-muted mb-2">
                  Chrome <span class="float-end fw-medium">82 %</span>
                </p>
                <div class="progress animated-progess custom-progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 82%"
                    aria-valuenow="82"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </li>

          <li class="px-4 py-3">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 me-3">
                <div class="avatar-sm">
                  <div
                    class="avatar-title bg-light text-primary rounded-circle font-size-18"
                  >
                    <i class="fab fa-firefox-browser"></i>
                  </div>
                </div>
              </div>
              <div class="flex-grow-1">
                <p class="text-muted mb-2">
                  Firefox <span class="float-end fw-medium">70 %</span>
                </p>
                <div class="progress animated-progess custom-progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 70%"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </li>

          <li class="px-4 py-3">
            <div class="d-flex">
              <div class="flex-shrink-0 me-3">
                <div class="avatar-sm">
                  <div
                    class="avatar-title bg-light text-primary rounded-circle font-size-18"
                  >
                    <i class="fab fa-safari"></i>
                  </div>
                </div>
              </div>
              <div class="flex-grow-1">
                <p class="text-muted mb-2">
                  Safari <span class="float-end fw-medium">76 %</span>
                </p>
                <div class="progress animated-progess custom-progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 76%"
                    aria-valuenow="76"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </li>

          <li class="px-4 py-3">
            <div class="d-flex">
              <div class="flex-shrink-0 me-3">
                <div class="avatar-sm">
                  <div
                    class="avatar-title bg-light text-primary rounded-circle font-size-18"
                  >
                    <i class="fab fa-edge"></i>
                  </div>
                </div>
              </div>
              <div class="flex-grow-1">
                <p class="text-muted mb-2">
                  Edge <span class="float-end fw-medium">67 %</span>
                </p>
                <div class="progress animated-progess custom-progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 67%"
                    aria-valuenow="67"
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
