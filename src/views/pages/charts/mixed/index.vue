<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import {
  mixedLineChart,
  yAxisChart,
  lineAreaChart,
  lineColumnAreaChart,
} from "./data";

/**
 * Mixed chart component
 */
export default {
  page: {
    title: "Mixed Charts",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    Layout,
    PageHeader,
  },
  data() {
    return {
      mixedLineChart: mixedLineChart,
      yAxisChart: yAxisChart,
      lineAreaChart: lineAreaChart,
      lineColumnAreaChart: lineColumnAreaChart,
      title: "Mixed Charts",
      items: [
        {
          text: "Charts",
          href: "/",
        },
        {
          text: "Mixed Charts",
          active: true,
        },
      ],
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div
            class="
              card-header
              justify-content-between
              d-flex
              align-items-center
            "
          >
            <h4 class="card-title">Line & Column Chart</h4>
            <a
              href="https://apexcharts.com/vue-chart-demos/mixed-charts/line-column/"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <apexchart
              class="apex-charts"
              height="350"
              dir="ltr"
              :series="mixedLineChart.series"
              :options="mixedLineChart.chartOptions"
            ></apexchart>
          </div>
        </div>
        <!--end card-->
      </div>
      <!-- end col -->
      <div class="col-lg-6">
        <div class="card">
          <div
            class="
              card-header
              justify-content-between
              d-flex
              align-items-center
            "
          >
            <h4 class="card-title">Multiple Y-Axis Chart</h4>
            <a
              href="https://apexcharts.com/vue-chart-demos/mixed-charts/multiple-yaxis/"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <apexchart
              class="apex-charts"
              height="350"
              dir="ltr"
              :series="yAxisChart.series"
              :options="yAxisChart.chartOptions"
            ></apexchart>
          </div>
        </div>
        <!--end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div
            class="
              card-header
              justify-content-between
              d-flex
              align-items-center
            "
          >
            <h4 class="card-title">Line & Area Chart</h4>
            <a
              href="https://apexcharts.com/vue-chart-demos/mixed-charts/line-area/"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <apexchart
              class="apex-charts"
              height="350"
              dir="ltr"
              :series="lineAreaChart.series"
              :options="lineAreaChart.chartOptions"
            ></apexchart>
          </div>
        </div>
        <!--end card-->
      </div>
      <!-- end col -->
      <div class="col-lg-6">
        <div class="card">
          <div
            class="
              card-header
              justify-content-between
              d-flex
              align-items-center
            "
          >
            <h4 class="card-title">Line, Column & Area Chart</h4>
            <a
              href="https://apexcharts.com/vue-chart-demos/mixed-charts/line-column-area/"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <apexchart
              class="apex-charts"
              height="350"
              dir="ltr"
              :series="lineColumnAreaChart.series"
              :options="lineColumnAreaChart.chartOptions"
            ></apexchart>
          </div>
        </div>
        <!--end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>