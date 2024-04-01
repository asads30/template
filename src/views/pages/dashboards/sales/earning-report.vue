<script>
export default {
  data() {
    return {
      earningReport: {
        series: [44, 25, 19],
        chartOptions: {
          dataLabels: {
            enabled: false,
          },
          chart: {
            height: 130,
            type: "donut",
          },
          labels: ["Revenue", "Expenses", "Profit"],
          colors: ["#038edc", "#dfe2e6", "#5fd0f3"],
          legend: {
            show: false,
            position: "bottom",
            horizontalAlign: "center",
            verticalAlign: "middle",
            floating: false,
            fontSize: "14px",
            offsetX: 0,
          },
        },
      },

      revenueChart: {
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
    };
  },
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <div class="float-end">
        <b-dropdown variant="white" toggle-class="p-0">
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

      <h4 class="card-title mb-4">Earning Reports</h4>

      <div class="row align-items-center">
        <div class="col-sm-7">
          <div class="row mb-3">
            <div class="col-6">
              <p class="text-muted mb-2">This Month</p>
              <h5>
                $12,582<small class="badge badge-soft-success font-13 ms-2"
                  >+15%</small
                >
              </h5>
            </div>

            <div class="col-6">
              <p class="text-muted mb-2">Last Month</p>
              <h5>$98,741</h5>
            </div>
          </div>
          <p class="text-muted">
            <span class="text-success me-1">
              25.2%<i class="mdi mdi-arrow-up"></i></span
            >From previous period
          </p>

          <div class="mt-4">
            <a href="" class="btn btn-soft-secondary btn-sm"
              >Generate Reports <i class="mdi mdi-arrow-right ms-1"></i
            ></a>
          </div>
        </div>
        <!-- end col-->
        <div class="col-sm-5">
          <div class="mt-4 mt-0">
            <apexchart
              class="apex-charts"
              height="130"
              dir="ltr"
              :series="earningReport.series"
              :options="earningReport.chartOptions"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end card -->
</template>
