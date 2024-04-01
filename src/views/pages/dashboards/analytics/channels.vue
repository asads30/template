<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="col-xl-4">
    <div class="card card-h-100">
      <div class="card-body">
        <div class="d-flex align-items-start">
          <div class="flex-grow-1 overflow-hidden">
            <h5 class="card-title text-truncate mb-3">Channels</h5>
          </div>

          <div class="flex-shrink-0">
            <b-dropdown variant="white" toggle-class="text-reset p-0">
              <template v-slot:button-content>
                <span class="fw-semibold">Report By:</span>
                <span class="text-muted"
                  >Monthly<i class="mdi mdi-chevron-down ms-2"></i
                ></span>
              </template>
              <b-dropdown-item>Yearly</b-dropdown-item>
              <b-dropdown-item>Monthly</b-dropdown-item>
              <b-dropdown-item>Weekly</b-dropdown-item>
              <b-dropdown-item>Today</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table mb-0">
            <thead>
              <tr>
                <th scope="col">Sources</th>
                <th scope="col">Sessions</th>
                <th scope="col">Users</th>
                <th scope="col" style="width: 25%;">Bounce Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Social</th>
                <td>648</td>
                <td>432</td>
                <td><div class="text-success text-nowrap">27.38%</div></td>
              </tr>
              <tr>
                <th scope="row">Direct</th>
                <td>524</td>
                <td>385</td>
                <td><div class="text-success text-nowrap">35.16%</div></td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                <td>432</td>
                <td>390</td>
                <td><div class="text-success text-nowrap">30.20%</div></td>
              </tr>
              <tr>
                <th scope="row">Referral</th>
                <td>521</td>
                <td>423</td>
                <td><div class="text-success text-nowrap">29.05%</div></td>
              </tr>
              <tr>
                <th scope="row">Others</th>
                <td>602</td>
                <td>553</td>
                <td><div class="text-success text-nowrap">33.14%</div></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- end table responsive -->
      </div>
      <!-- end card body -->
    </div>
    <!-- end card -->
  </div>
  <!-- end col -->
</template>
