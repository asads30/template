<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { simpleBubbleChart, bubble3DChart } from "./data";

/**
 * Bubble Charts component
 */
export default {
  page: {
    title: "Bubble Charts",
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
      simpleBubbleChart: simpleBubbleChart,
      bubble3DChart: bubble3DChart,
      title: "Bubble Charts",
      items: [
        {
          text: "Charts",
          href: "/",
        },
        {
          text: "Bubble Charts",
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
            <h4 class="card-title">Simple Bubble Chart</h4>
            <a
              href="https://apexcharts.com/vue-chart-demos/bubble-charts/simple/"
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
              :series="simpleBubbleChart.series"
              :options="simpleBubbleChart.chartOptions"
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
            <h4 class="card-title">3D Bubble Chart</h4>
            <a
              href="https://apexcharts.com/vue-chart-demos/bubble-charts/3d-bubble/"
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
              :series="bubble3DChart.series"
              :options="bubble3DChart.chartOptions"
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
