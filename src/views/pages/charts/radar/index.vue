<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import {
  basicRadarChart,
  radarMultiseriesChart,
  polygonRadarChart,
} from "./data";

/**
 * Radar chart component
 */
export default {
  page: {
    title: "Radar Charts",
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
      basicRadarChart: basicRadarChart,
      radarMultiseriesChart: radarMultiseriesChart,
      polygonRadarChart: polygonRadarChart,
      title: "Radar Charts",
      items: [
        {
          text: "Charts",
          href: "/",
        },
        {
          text: "Radar Charts",
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
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Basic Radar Chart</h4>
            <a
              href="https://apexcharts.com/vue-chart-demos/radar-charts/basic/"
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
              :series="basicRadarChart.series"
              :options="basicRadarChart.chartOptions"
            ></apexchart>
          </div>
        </div>
        <!--end card-->
      </div>
      <!-- end col -->
      <div class="col-lg-6">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Radar Chart - Multiple series</h4>
            <a
              href="https://apexcharts.com/vue-chart-demos/radar-charts/radar-multiple-series/"
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
              :series="radarMultiseriesChart.series"
              :options="radarMultiseriesChart.chartOptions"
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
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Radar Chart - Polygon Fill</h4>
            <a
              href="https://apexcharts.com/vue-chart-demos/radar-charts/radar-with-polygon-fill/"
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
              :series="polygonRadarChart.series"
              :options="polygonRadarChart.chartOptions"
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
