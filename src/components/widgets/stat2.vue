<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    subtext: {
      type: String,
      required: true,
    },
    chartData: {
      type: Array,
      required: true,
    },
    chartType: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      series: [{ data: this.chartData }],
      chartOptions: {
        chart: {
          type: this.chartType,
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
        stroke: {
          curve: "smooth",
          width: this.chartType == "area" ? 2 : 0,
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
    };
  },
};
</script>

<template>
  <!-- Card -->
  <div class="card">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <div>
          <h6 class="font-size-xs text-uppercase">{{ title }}</h6>
          <h4 class="mt-4 font-weight-bold mb-2 d-flex align-items-center">
            {{ amount }}
          </h4>
          <div class="text-muted">{{ subtext }}</div>
        </div>
        <div>
          <b-dropdown variant="light" size="sm">
            <template v-slot:button-content>
              <span class="text-muted"
                >Monthly<i class="mdi mdi-chevron-down ms-1"></i
              ></span>
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
        :series="series"
        :options="chartOptions"
      ></apexchart>
    </div>
  </div>
</template>
