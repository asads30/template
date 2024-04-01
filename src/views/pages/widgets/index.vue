<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import Stat from "@/components/widgets/stat.vue";
import Stat2 from "@/components/widgets/stat2.vue";
import Stat3 from "@/components/widgets/stat3.vue";
import Stat4 from "@/components/widgets/stat4.vue";
import Visitors from "@/components/widgets/visitors.vue";
import VisitorsSource from "@/components/widgets/source";
import Premium from "@/components/widgets/premium";
import EarningReport from "@/components/widgets/earning-report";
import Inbox from "@/components/widgets/inbox";
import Chat from '@/components/widgets/chat'

/**
 * Widgets component
 */
export default {
  page: {
    title: "Widgets",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "Widgets",
      items: [
        {
          text: "Components",
        },
        {
          text: "Widgets",
          active: true,
        },
      ],
      widgetData: [
        {
          icon: "uil-list-ul",
          title: "Total Tasks",
          value: 21,
        },
        {
          icon: "uil-check-circle",
          title: "Completed Tasks",
          value: 10,
        },
        {
          icon: "uil-users-alt",
          title: "Members",
          value: 12,
        },
        {
          icon: "uil-clock-eight",
          title: "Total Hours",
          value: 3224,
        },
      ],
      widget2Data: [
        {
          title: "Total revenue",
          amount: "$46.34k",
          subtext: "Earning this month",
          chartType: "bar",
          chartData: [10, 20, 15, 40, 20, 50, 70, 60, 90, 70, 110],
        },
        {
          title: "Total Refunds",
          amount: "$895.02",
          subtext: "Refunds this month",
          chartType: "area",
          chartData: [10, 90, 30, 60, 50, 90, 25, 55, 30, 40],
        },
        {
          title: "Active Users",
          amount: "6,985",
          subtext: "Users this Week",
          chartType: "bar",
          chartData: [40, 20, 30, 40, 20, 60, 55, 70, 95, 65, 110],
        },
        {
          title: "All Time Orders",
          amount: "12,584",
          subtext: "Total Number of Orders",
          chartType: "area",
          chartData: [10, 90, 30, 60, 50, 90, 25, 55, 30, 40],
        },
      ],
      widget3Data: [
        {
          icon: "fa-user",
          title: "Users",
          subtext: "2.2 k",
          progress: "1.2 %",
        },
        {
          icon: "fa-hourglass-start",
          title: "Sessions",
          subtext: "3.85 k",
          progress: "1.2 %",
        },
        {
          icon: "fa-stopwatch",
          title: "Session Duration",
          subtext: "1 min",
          progress: "1.1 %",
        },
        {
          icon: "fa-chart-area",
          title: "Bounce Rate",
          subtext: "24.03 %",
          progress: "1.2 %",
        },
      ],
      widget4Data: [
        {
          title: "New Visitors",
          text: "1.2 k",
          subtext: "0.2 %",
          chartData: [21, 65, 32, 80, 42, 25],
        },
        {
          title: "Users",
          text: "2.2 k",
          subtext: "0.2 %",
          chartData: [40, 30, 51, 33, 63, 50],
        },
        {
          title: "Sessions",
          text: "3.85 k",
          subtext: "1.2 %",
          chartData: [21, 65, 32, 80, 42, 25],
        },
      ],
      chatWindowHeight: '300px',
      chatMessages: [
        {
          id: 1,
          image: require('@/assets/images/users/avatar-2.jpg'),
          name: 'Daniel Pickering',
          message: 'Hello!',
          time: '10:00'
        },
        {
          id: 2,
          image: require('@/assets/images/users/avatar-1.jpg'),
          name: 'Kate',
          message: 'Hi, How are you? What about our next meeting?',
          time: '10:01',
          align: 'right'
        },
        {
          id: 3,
          image: require('@/assets/images/users/avatar-2.jpg'),
          name: 'Daniel Pickering',
          message: 'Yeah everything is fine',
          time: '10:01'
        },
        {
          id: 4,
          image: require('@/assets/images/users/avatar-1.jpg'),
          name: 'Kate',
          message: "Wow that's great",
          time: '10:02',
          align: 'right'
        },
        {
          id: 5,
          image: require('@/assets/images/users/avatar-2.jpg'),
          name: 'Daniel Pickering',
          message: 'Yup!',
          time: '10:03',
        },
      ],
    };
  },
  components: {
    Layout,
    PageHeader,
    Stat,
    Stat2,
    Stat3,
    Stat4,
    Visitors,
    VisitorsSource,
    Premium,
    EarningReport,
    Inbox,
    Chat
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <Stat :widgetData="widgetData" />
    <div class="row">
      <div
        class="col-xl-3 col-sm-6"
        v-for="(value, index) of widget2Data"
        :key="index"
      >
        <Stat2
          :title="value.title"
          :amount="value.amount"
          :subtext="value.subtext"
          :chartType="value.chartType"
          :text="value.text"
          :chartData="value.chartData"
        />
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-3 col-md-6">
        <div class="card card-h-100">
          <Stat3 :widgetData="widget3Data" />
        </div>
      </div>

      <div class="col-xl-3 col-sm-6">
        <div class="card card-h-100">
          <div class="card-body">
            <div>
              <ul class="list-group list-group-flush">
                <li v-for="(value, index) of widget4Data" :key="index" class="list-group-item py-3 px-0">
                  <Stat4
                    :title="value.title"
                    :text="value.text"
                    :subtext="value.subtext"
                    :chartData="value.chartData"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Visitors />
      <VisitorsSource />
    </div>
    <!-- end row -->

    <div class="row">
        <div class="col-xl-4">
            <Premium />
            <EarningReport />
        </div>
       <Inbox />
       <div class="col-xl-4">
        <Chat :chat-messages="chatMessages" :chat-window-height="chatWindowHeight" />
       </div>
    </div>
  </Layout>
</template>
