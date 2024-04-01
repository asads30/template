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
            <h5 class="card-title">Traffic Source</h5>
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
        <ul class="list-unstyled mb-0">
          <li class="px-4 py-3">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 me-3">
                <div class="avatar-sm">
                  <div
                    class="avatar-title bg-light text-primary rounded-circle"
                  >
                    #1
                  </div>
                </div>
              </div>
              <div class="flex-grow-1 overflow-hidden">
                <p class="text-muted mb-1 text-truncate">www.abc.com</p>
                <h5 class="font-size-16 mb-0 text-truncate">3.82 k</h5>
              </div>
              <div class="flex-shrink-0 align-self-start">
                <div class="badge badge-soft-success ms-2">
                  1.2 % <i class="uil uil-arrow-up-right text-success ms-1"></i>
                </div>
              </div>
            </div>
          </li>
          <li class="px-4 py-3">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 me-3">
                <div class="avatar-sm">
                  <div
                    class="avatar-title bg-light text-primary rounded-circle"
                  >
                    #2
                  </div>
                </div>
              </div>
              <div class="flex-grow-1 overflow-hidden">
                <p class="text-muted mb-1 text-truncate">www.xyz.com</p>
                <h5 class="font-size-16 mb-0 text-truncate">3.04 k</h5>
              </div>
              <div class="flex-shrink-0 align-self-start">
                <div class="badge badge-soft-success ms-2">
                  1.1 % <i class="uil uil-arrow-up-right text-success ms-1"></i>
                </div>
              </div>
            </div>
          </li>
          <li class="px-4 py-3">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 me-3">
                <div class="avatar-sm">
                  <div
                    class="avatar-title bg-light text-primary rounded-circle"
                  >
                    #3
                  </div>
                </div>
              </div>
              <div class="flex-grow-1 overflow-hidden">
                <p class="text-muted mb-1 text-truncate">www.abc123.com</p>
                <h5 class="font-size-16 mb-0 text-truncate">2.64 k</h5>
              </div>
              <div class="flex-shrink-0 align-self-start">
                <div class="badge badge-soft-success ms-2">
                  0.8 % <i class="uil uil-arrow-up-right text-success ms-1"></i>
                </div>
              </div>
            </div>
          </li>
          <li class="px-4 py-3">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 me-3">
                <div class="avatar-sm">
                  <div
                    class="avatar-title bg-light text-primary rounded-circle"
                  >
                    #4
                  </div>
                </div>
              </div>
              <div class="flex-grow-1 overflow-hidden">
                <p class="text-muted mb-1 text-truncate">www.xyz.com</p>
                <h5 class="font-size-16 mb-0 text-truncate">2.06 k</h5>
              </div>
              <div class="flex-shrink-0 align-self-start">
                <div class="badge badge-soft-success ms-2">
                  0.5 % <i class="uil uil-arrow-up-right text-success ms-1"></i>
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
