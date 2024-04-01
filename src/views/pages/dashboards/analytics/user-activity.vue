<script>
export default {
  data() {
    return {
      series: [
        {
          name: "Previous Month",
          data: [25.3, 12.5, 20.2, 18.5, 40.4, 25.4],
        },
        {
          name: "This Month",
          data: [36.2, 22.4, 38.2, 30.5, 26.4, 30.4],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 200,
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "23%",
            borderRadius: 4,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          markers: {
            width: 8,
            height: 8,
            radius: 30,
          },
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        colors: ["#c0e3f6", "#038edc"],
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            formatter: function(value) {
              return value + "k";
            },
          },
          tickAmount: 2,
          min: 0,
          max: 70,
        },
        grid: {
          strokeDashArray: 10,
        },
        fill: {
          opacity: 1,
        },
      },
    };
  },
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex align-items-start">
        <div class="flex-grow-1 overflow-hidden">
          <h5 class="card-title text-truncate mb-4">User Activity</h5>
        </div>

        <div class="flex-shrink-0">
          <b-dropdown
            right
            variant="white"
            toggle-class="font-size-16 text-muted p-0"
          >
            <template v-slot:button-content>
              <i class="mdi mdi-dots-horizontal"></i>
            </template>
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>

      <div>
        <apexchart
          id="chart-column"
          class="apex-charts"
          height="230"
          dir="ltr"
          :series="series"
          :options="chartOptions"
        ></apexchart>
      </div>
    </div>
    <!-- end card body -->
  </div>
  <!-- end card -->
</template>
