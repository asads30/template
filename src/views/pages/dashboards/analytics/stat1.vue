<script>
export default {
  data() {
    return {
      sparkarea: {
        series: [
          {
            name: "New Visitors",
            data: [21, 65, 32, 80, 42, 25],
          },
        ],
        chartOptions: {
          chart: {
            height: 52,
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
          colors: ["#038edc"],
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.45,
              opacityTo: 0.05,
              stops: [20, 100, 100, 100],
            },
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function() {
                  return "";
                },
              },
            },
            marker: {
              show: false,
            },
          },
        },
      },

      sparkarea2: {
        series: [
          {
            name: "Source A",
            data: [40, 30, 51, 33, 63, 50],
          },
        ],
        chartOptions: {
          chart: {
            height: 52,
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
          colors: ["#038edc"],
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.45,
              opacityTo: 0.05,
              stops: [20, 100, 100, 100],
            },
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function() {
                  return "";
                },
              },
            },
            marker: {
              show: false,
            },
          },
        },
      },

      sparkarea3: {
        series: [
          {
            name: "Source A",
            data: [21, 55, 32, 80, 42, 25],
          },
        ],
        chartOptions: {
          chart: {
            height: 52,
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
          colors: ["#038edc"],
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.45,
              opacityTo: 0.05,
              stops: [20, 100, 100, 100],
            },
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function() {
                  return "";
                },
              },
            },
            marker: {
              show: false,
            },
          },
        },
      },
    };
  },
};
</script>

<template>
  <div class="col-xl-3 col-md-6">
    <div class="card card-h-100">
      <div class="card-body">
        <div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item py-3">
              <div class="row">
                <div class="col-7">
                  <div>
                    <p class="text-muted mb-2 text-truncate">New Visitors</p>
                    <h5 class="font-size-16 mb-0 text-truncate">
                      1.2 k
                      <span class="text-muted font-size-12 fw-normal ms-2"
                        >0.2 %
                        <i class="uil uil-arrow-up-right text-success ms-1"></i
                      ></span>
                    </h5>
                  </div>
                </div>
                <div class="col-5">
                  <apexchart
                    id="chart-column"
                    class="apex-charts"
                    height="52"
                    dir="ltr"
                    :series="sparkarea.series"
                    :options="sparkarea.chartOptions"
                  ></apexchart>
                </div>
              </div>
            </li>

            <li class="list-group-item py-3">
              <div class="row">
                <div class="col-7">
                  <div>
                    <p class="text-muted mb-2 text-truncate">Users</p>
                    <h5 class="font-size-16 mb-0 text-truncate">2.2 k</h5>
                  </div>
                </div>
                <div class="col-5">
                  <apexchart
                    id="chart-column"
                    class="apex-charts"
                    height="52"
                    dir="ltr"
                    :series="sparkarea2.series"
                    :options="sparkarea2.chartOptions"
                  ></apexchart>
                </div>
              </div>
            </li>
            <li class="list-group-item py-3">
              <div class="row">
                <div class="col-7">
                  <div>
                    <p class="text-muted mb-2 text-truncate">Sessions</p>
                    <h5 class="font-size-16 mb-0 text-truncate">
                      3.85 k
                      <span class="text-muted font-size-12 fw-normal ms-2"
                        >1.2 %
                        <i class="uil uil-arrow-up-right text-success ms-1"></i
                      ></span>
                    </h5>
                  </div>
                </div>
                <div class="col-5">
                  <apexchart
                    id="chart-column"
                    class="apex-charts"
                    height="52"
                    dir="ltr"
                    :series="sparkarea3.series"
                    :options="sparkarea3.chartOptions"
                  ></apexchart>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- end card body -->
    </div>
    <!-- end card -->
  </div>
  <!-- end col -->
</template>
