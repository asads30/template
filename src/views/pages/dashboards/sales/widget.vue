<script>
export default {
  data() {
    return {
      sparkline: {
        series: [
          {
            data: [10, 20, 15, 40, 20, 50, 70, 60, 90, 70, 110],
          },
        ],
        chartOptions: {
          chart: {
            type: "bar",
            height: 50,
            sparkline: {
              enabled: true,
            },
          },
          plotOptions: {
            bar: {
              columnWidth: "50%",
            },
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            y: {
              title: {
                formatter: function() {
                  return "";
                },
              },
            },
          },
          colors: ["#038edc"],
        },
      },
      sparkline2: {
        series: [
          {
            name: "Series A",
            data: [10, 90, 30, 60, 50, 90, 25, 55, 30, 40],
          },
        ],
        chartOptions: {
          chart: {
            height: 50,
            type: "area",
            sparkline: {
              enabled: true,
            },
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.45,
              opacityTo: 0.05,
              stops: [50, 100, 100, 100],
            },
          },
          colors: ["#038edc", "transparent"],
        },
      },
      sparkline3: {
        series: [
          {
            data: [40, 20, 30, 40, 20, 60, 55, 70, 95, 65, 110],
          },
        ],
        chartOptions: {
          chart: {
            type: "bar",
            height: 50,
            sparkline: {
              enabled: true,
            },
          },
          plotOptions: {
            bar: {
              columnWidth: "50%",
            },
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            y: {
              title: {
                formatter: function() {
                  return "";
                },
              },
            },
          },
          colors: ["#038edc"],
        },
      },
      sparkline4: {
        series: [
          {
            name: "Series A",
            data: [10, 90, 30, 60, 50, 90, 25, 55, 30, 40],
          },
        ],
        chartOptions: {
          chart: {
            height: 50,
            type: "area",
            sparkline: {
              enabled: true,
            },
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.45,
              opacityTo: 0.05,
              stops: [50, 100, 100, 100],
            },
          },
          colors: ["#038edc", "transparent"],
        },
      },
    };
  },
};
</script>

<template>
  <div class="row">
    <div class="col-xl-3 col-sm-6">
      <!-- Card -->
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <h6 class="font-size-xs text-uppercase">Total Revenue</h6>
              <h4 class="mt-4 font-weight-bold mb-2 d-flex align-items-center">
                $46.34k
              </h4>
              <div class="text-muted">Earning this month</div>
            </div>
            <div>
              <b-dropdown variant="light" size="sm">
                <template v-slot:button-content>
                  <span class="text-muted"
                    >Monthly
                    <i class="mdi mdi-chevron-down ms-1"></i>
                  </span>
                </template>
                <b-dropdown-item>Monthly</b-dropdown-item>
                <b-dropdown-item>Yearly</b-dropdown-item>
                <b-dropdown-item>Weekly</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
          <apexchart
            class="apex-charts mt-3"
            height="50"
            dir="ltr"
            :series="sparkline.series"
            :options="sparkline.chartOptions"
          ></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-sm-6">
      <!-- Card -->
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <h6 class="font-size-xs text-uppercase">Total Refunds</h6>
              <h4 class="mt-4 font-weight-bold mb-2 d-flex align-items-center">
                $895.02
              </h4>
              <div class="text-muted">Refunds this month</div>
            </div>
            <div>
              <b-dropdown variant="light" size="sm">
                <template v-slot:button-content>
                  <span class="text-muted"
                    >Monthly
                    <i class="mdi mdi-chevron-down ms-1"></i>
                  </span>
                </template>
                <b-dropdown-item>Monthly</b-dropdown-item>
                <b-dropdown-item>Yearly</b-dropdown-item>
                <b-dropdown-item>Weekly</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
          <apexchart
            class="apex-charts mt-3"
            height="50"
            dir="ltr"
            :series="sparkline2.series"
            :options="sparkline2.chartOptions"
          ></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-sm-6">
      <!-- Card -->
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <h6 class="font-size-xs text-uppercase">Active Users</h6>
              <h4 class="mt-4 font-weight-bold mb-2 d-flex align-items-center">
                6,985
              </h4>
              <div class="text-muted">Users this Week</div>
            </div>
            <div>
              <b-dropdown variant="light" size="sm">
                <template v-slot:button-content>
                  <span class="text-muted"
                    >Weekly
                    <i class="mdi mdi-chevron-down ms-1"></i>
                  </span>
                </template>
                <b-dropdown-item>Monthly</b-dropdown-item>
                <b-dropdown-item>Yearly</b-dropdown-item>
                <b-dropdown-item>Weekly</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
          <apexchart
            class="apex-charts mt-3"
            height="50"
            dir="ltr"
            :series="sparkline3.series"
            :options="sparkline3.chartOptions"
          ></apexchart>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-sm-6">
      <!-- Card -->
      <div class="card">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <h6 class="font-size-xs text-uppercase">All Time Orders</h6>
              <h4 class="mt-4 font-weight-bold mb-2 d-flex align-items-center">
                12,584
              </h4>
              <div class="text-muted">Total Number of Orders</div>
            </div>
            <div>
              <b-dropdown variant="light" size="sm">
                <template v-slot:button-content>
                  <span class="text-muted"
                    >Yearly
                    <i class="mdi mdi-chevron-down ms-1"></i>
                  </span>
                </template>
                <b-dropdown-item>Monthly</b-dropdown-item>
                <b-dropdown-item>Yearly</b-dropdown-item>
                <b-dropdown-item>Weekly</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
          <apexchart
            class="apex-charts mt-3"
            height="50"
            dir="ltr"
            :series="sparkline4.series"
            :options="sparkline4.chartOptions"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
  <!-- end row-->
</template>
