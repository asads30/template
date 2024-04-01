<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
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
  },
  data() {
    return {
      series: [
        {
          name: "New Visitors",
          data: this.chartData,
        },
      ],
      chartOptions: {
        chart: {
          height: 56,
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
    };
  },
};
</script>

<template>
  <div class="row">
    <div class="col-7">
      <div>
        <p class="text-muted mb-2 text-truncate">{{ title }}</p>
        <h5 class="font-size-16 mb-0 text-truncate">
          {{ text }}
          <span class="text-muted font-size-12 fw-normal ms-2"
            >{{ subtext }}
            <i class="uil uil-arrow-up-right text-success ms-1"></i
          ></span>
        </h5>
      </div>
    </div>
    <div class="col-5">
      <apexchart
        right
        class="apex-charts"
        height="56"
        dir="ltr"
        :series="series"
        :options="chartOptions"
      ></apexchart>
    </div>
  </div>
</template>
