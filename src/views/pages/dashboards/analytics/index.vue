<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import ActiveUser from "./active-user.vue";
import UserActivity from "./user-activity";
import Stat1 from "./stat1.vue";
import Visitors from "./visitors.vue";
import VisitorsSource from "./visitors-source.vue";
import TrafficSource from "./traffic-source.vue";
import VisitorsLocation from "./visitors-location.vue";
import Channels from "./channels.vue";

/**
 * Analytics component
 */
export default {
  page: {
    title: "Analytics",
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
    ActiveUser,
    UserActivity,
    Stat1,
    Visitors,
    VisitorsSource,
    TrafficSource,
    VisitorsLocation,
    Channels
  },
  data() {
    return {
      title: "Analytics",
      items: [
        {
          text: "Dashboard",
        },
        {
          text: "Analytics",
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
      <ActiveUser />
      <div class="col-xxl-3 col-lg-4">
        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-sm">
                    <div class="avatar-title rounded-circle font-size-12">
                      <i class="fas fa-user"></i>
                    </div>
                  </div>
                </div>
                <div class="flex-grow-1">
                  <p class="text-muted mb-1">Users</p>
                  <h5 class="font-size-16 mb-0">2.2 k</h5>
                </div>
                <div class="flex-shrink-0 align-self-end">
                  <div class="badge badge-soft-success ms-2">
                    1.2 %
                    <i class="uil uil-arrow-up-right text-success ms-1"></i>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-sm">
                    <div class="avatar-title rounded-circle font-size-12">
                      <i class="fas fa-hourglass-start"></i>
                    </div>
                  </div>
                </div>
                <div class="flex-grow-1">
                  <p class="text-muted mb-1">Sessions</p>
                  <h5 class="font-size-16 mb-0">3.85 k</h5>
                </div>
                <div class="flex-shrink-0 align-self-end">
                  <div class="badge badge-soft-danger ms-2">
                    1.2 %
                    <i class="uil uil-arrow-down-left text-danger ms-1"></i>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-sm">
                    <div class="avatar-title rounded-circle font-size-12">
                      <i class="fas fa-stopwatch"></i>
                    </div>
                  </div>
                </div>
                <div class="flex-grow-1">
                  <p class="text-muted mb-1">Session Duration</p>
                  <h5 class="font-size-16 mb-0">1 min</h5>
                </div>
                <div class="flex-shrink-0 align-self-end">
                  <div class="badge badge-soft-danger ms-2">
                    1.1 %
                    <i class="uil uil-arrow-down-left text-danger ms-1"></i>
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-sm">
                    <div class="avatar-title rounded-circle font-size-12">
                      <i class="fas fa-chart-area"></i>
                    </div>
                  </div>
                </div>
                <div class="flex-grow-1">
                  <p class="text-muted mb-1">Bounce Rate</p>
                  <h5 class="font-size-16 mb-0">24.03 %</h5>
                </div>
                <div class="flex-shrink-0 align-self-end">
                  <div class="badge badge-soft-success ms-2">
                    1.2 %
                    <i class="uil uil-arrow-up-right text-success ms-1"></i>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- end card -->

        <UserActivity />
      </div>
      <!-- end col -->
    </div>

    <div class="row">
      <Stat1 />
      <Visitors />
      <VisitorsSource />
      <TrafficSource />
    </div>
    <!-- end row -->

    <div class="row">
      <VisitorsLocation />
      <Channels />
    </div>
    <!-- end row -->
  </Layout>
</template>
