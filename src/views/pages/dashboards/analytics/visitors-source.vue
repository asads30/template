<script>
export default {
  data() {
    return {
      series: [44, 25, 19],
      chartOptions: {
        chart: {
          height: 245,
          type: "donut",
        },
        plotOptions: {
          pie: {
            donut: {
              size: "70%",
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        labels: ["Social", "Direct", "Others"],
        colors: ["#038edc", "#f5f6f8", "#5fd0f3"],
        legend: {
          show: true,
          position: "bottom",
          horizontalAlign: "center",
          verticalAlign: "middle",
          floating: false,
          fontSize: "14px",
          offsetX: 0,
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
        <div class="d-flex align-items-start">
          <div class="flex-grow-1">
            <h5 class="card-title mb-4">Visitors Source</h5>
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
        <apexchart
          class="apex-charts"
          height="245"
          dir="ltr"
          :series="series"
          :options="chartOptions"
        ></apexchart>
      </div>
      <!-- end card body -->
    </div>
    <!-- end card -->
  </div>
  <!-- end col -->
</template>
