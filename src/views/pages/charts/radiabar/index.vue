<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import {
  basicRadialBarChart,
  multiRadialbarChart,
  circleAngleChart,
  gradientRadialbarChart,
  strokedRadialbarChart,
  semiRadialbarChart,
} from "./data";

/**
 * Radaialbar chart component
 */
export default {
  page: {
    title: "Radialbar Charts",
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
      basicRadialBarChart: basicRadialBarChart,
      multiRadialbarChart: multiRadialbarChart,
      circleAngleChart: circleAngleChart,
      gradientRadialbarChart: gradientRadialbarChart,
      strokedRadialbarChart: strokedRadialbarChart,
      semiRadialbarChart: semiRadialbarChart,
      title: "Radialbar Charts",
      items: [
        {
          text: "Charts",
          href: "/",
        },
        {
          text: "Radialbar Charts",
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
            <h4 class="card-title">Basic Radialbar Chart</h4>
            <a
              href="https://apexcharts.com/vue-chart-demos/radialbar-charts/basic/"
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
              :series="basicRadialBarChart.series"
              :options="basicRadialBarChart.chartOptions"
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
            <h4 class="card-title">Multiple Radialbar</h4>
            <a
              href="https://apexcharts.com/vue-chart-demos/radialbar-charts/multiple-radialbars/"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div id="multiple_radialbar" class="apex-charts" dir="ltr"></div>
            <apexchart
              class="apex-charts"
              height="350"
              dir="ltr"
              :series="multiRadialbarChart.series"
              :options="multiRadialbarChart.chartOptions"
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
            <h4 class="card-title">Circle Chart - Custom Angle</h4>
            <a
              href="https://apexcharts.com/vue-chart-demos/radialbar-charts/custom-angle-circle/"
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
              :series="circleAngleChart.series"
              :options="circleAngleChart.chartOptions"
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
            <h4 class="card-title">Gradient Circle Chart</h4>
            <a
              href="https://apexcharts.com/vue-chart-demos/radialbar-charts/gradient/"
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
              :series="gradientRadialbarChart.series"
              :options="gradientRadialbarChart.chartOptions"
            ></apexchart>
          </div>
        </div>
        <!--end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row mb-4">
      <div class="col-lg-6">
        <div class="card h-100 mb-xl-0">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Stroked Circular Gauge</h4>
            <a
              href="https://apexcharts.com/vue-chart-demos/radialbar-charts/stroked-gauge/"
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
              :series="strokedRadialbarChart.series"
              :options="strokedRadialbarChart.chartOptions"
            ></apexchart>
          </div>
        </div>
        <!--end card-->
      </div>
      <!-- end col -->
      <div class="col-lg-6">
        <div class="card h-100 mb-xl-0">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Semi Circular Gauge</h4>
            <a
              href="https://apexcharts.com/vue-chart-demos/radialbar-charts/semi-circle-gauge/"
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
              :series="semiRadialbarChart.series"
              :options="semiRadialbarChart.chartOptions"
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
