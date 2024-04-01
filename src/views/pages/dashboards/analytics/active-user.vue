<script>
export default {
  data() {
    return {
      series: [
        {
          name: "Total Visit",
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 54],
        },
      ],
      chartOptions: {
        chart: {
          id: "area-datetime",
          type: "area",
          height: 440,
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 4,
            opacity: 0.075,
          },
          zoom: {
            autoScaleYaxis: true,
          },
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 3,
          strokeWidth: 3,

          hover: {
            size: 6,
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          width: 3,
          dashArray: 0,
        },
        xaxis: {
          categories: [
            "01 Jan",
            "02 Jan",
            "03 Jan",
            "04 Jan",
            "05 Jan",
            "06 Jan",
            "07 Jan",
            "08 Jan",
            "09 Jan",
            "10 Jan",
            "11 Jan",
            "12 Jan",
          ],
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        tooltip: {
          x: {
            format: "dd MMM yyyy",
          },
        },
        grid: {
          show: true,
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        colors: ["#038edc"],
        fill: {
          opacity: 0.05,
          colors: ["#038edc"],
          type: "solid",
        },
      },
    };
  },
};
</script>

<template>
  <div class="col-xxl-9 col-lg-8">
    <div class="card">
      <div class="card-header bg-transparent">
        <div class="d-flex align-items-start">
          <div class="flex-grow-1">
            <h5 class="card-title mb-0">Daily Active Users</h5>
          </div>
          <div class="flex-shrink-0">
            <b-dropdown toggle-class="text-reset p-0" variant="white">
              <template v-slot:button-content>
                <span class="fw-semibold">Sort By:</span>
                <span class="text-muted"
                  >Yearly<i class="mdi mdi-chevron-down ms-1"></i
                ></span>
              </template>
              <b-dropdown-item>Yearly</b-dropdown-item>
              <b-dropdown-item>Monthly</b-dropdown-item>
              <b-dropdown-item>Weekly</b-dropdown-item>
              <b-dropdown-item>Today</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
      <div class="card-body border-bottom py-3">
        <div class="row gx-lg-5">
          <div class="col-md-auto">
            <div>
              <p class="text-muted mb-2">Total Visitors</p>
              <h4 class="mb-0">
                18.2 k
                <span class="text-muted font-size-12 fw-normal ms-2"
                  >1.4 % <i class="uil uil-arrow-up-right text-success ms-1"></i
                ></span>
              </h4>
            </div>
          </div>
          <div class="col-md align-self-end">
            <div class="text-md-end mt-4 mt-md-0">
              <ul class="list-inline main-chart mb-0">
                <li class="list-inline-item chart-border-left me-0 border-0">
                  <h4 class="text-primary my-1">
                    3.85 k<span
                      class="text-muted d-inline-block fw-normal font-size-13 ms-2"
                      >Sessions</span
                    >
                  </h4>
                </li>
                <li class="list-inline-item chart-border-left me-0">
                  <h4 class="my-1">
                    24.03 %<span
                      class="text-muted d-inline-block fw-normal font-size-13 ms-2"
                      >Bounce Rate</span
                    >
                  </h4>
                </li>
                <li class="list-inline-item chart-border-left me-0">
                  <h4 class="my-1">
                    52 k<span
                      class="text-muted d-inline-block fw-normal font-size-13 ms-2"
                      >Users</span
                    >
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- end card body -->

      <div>
        <div id="chart-area" class="apex-charts" dir="ltr"></div>
        <apexchart
          class="apex-charts mt-3"
          height="440"
          dir="ltr"
          :series="series"
          :options="chartOptions"
        ></apexchart>
      </div>
      <!-- end card-body -->
    </div>
    <!-- end card -->
  </div>
  <!-- end col -->
</template>
