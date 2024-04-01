<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import Stat from "./widget.vue";
import EarningReport from "./earning-report.vue";
import SalesAnalytics from "./sales-analytics.vue";
import Orders from "./orders.vue";
import SalesCountry from "./sales-country.vue";

/**
 * Sales-Dashboard component
 */
export default {
  page: {
    title: "Sales Dashboard",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "Sales Analytics",
      items: [
        {
          text: "Dashonic",
        },
        {
          text: "Sales Analytics",
          active: true,
        },
      ],
    };
  },
  components: {
    Layout,
    PageHeader,
    Stat,
    EarningReport,
    SalesAnalytics,
    Orders,
    SalesCountry,
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <Stat />
    <div class="row">
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <div
              class="alert alert-warning border-0 d-flex align-items-center"
              role="alert"
            >
              <i
                class="uil uil-exclamation-triangle font-size-16 text-warning me-2"
              ></i>
              <div class="flex-grow-1 text-truncate">
                Your free trial expired in <b>21</b> days.
              </div>
              <div class="flex-shrink-0">
                <router-link
                  to="/pricing/basic"
                  class="text-reset text-decoration-underline"
                  ><b>Upgrade</b></router-link
                >
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-sm-7">
                <p class="font-size-18">
                  Upgrade your plan from a
                  <span class="fw-semibold">Free trial</span>, to ‘Premium Plan’
                  <i class="mdi mdi-arrow-right"></i>
                </p>
                <div class="mt-4">
                  <router-link to="/pricing/basic" class="btn btn-primary"
                    >Upgrade Account!</router-link
                  >
                </div>
              </div>
              <div class="col-sm-5">
                <img
                  src="@/assets/images/illustrator/2.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card -->

        <EarningReport />
      </div>
      <!-- end col-->
      <SalesAnalytics />
    </div>
    <div class="row">
      <Orders />
      <SalesCountry />
    </div>
  </Layout>
</template>
