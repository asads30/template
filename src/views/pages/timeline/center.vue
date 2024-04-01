<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import { timelineData } from "./data";
import appConfig from "@/app.config";

/**
 * Center Timeline component
 */
export default {
  page: {
    title: "Center Timeline",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      timelineData: timelineData,
      title: "Center Timeline",
      items: [
        {
          text: "Timeline",
        },
        {
          text: "Center Timeline",
          active: true,
        },
      ],
    };
  },
  components: {
    Layout,
    PageHeader,
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row justify-content-center">
      <div class="col-xl-10">
        <div class="verti-timeline">
          <div class="timeline-item left">
            <div class="timeline-block">
              <div class="time-show-btn mt-0">
                <a href="#" class="btn btn-danger btn-rounded w-lg">2021</a>
              </div>
            </div>
          </div>

          <div
            v-for="(item, index) in timelineData"
            :key="index"
            :class="`timeline-item ${item.align}`"
          >
            <div class="timeline-block">
              <div class="timeline-box card">
                <div class="card-body">
                  <div class="timeline-date">{{item.date}}</div>
                  <h5 class="mt-3 font-size-16">{{item.title}}</h5>
                  <div class="text-muted">
                    <p class="mb-0">{{item.content}}
                    </p>
                  </div>
                   <div class="timeline-album mt-3" v-if="item.images">
                        <a href="javascript:void(0);" v-for="(image, index) in item.images" :key="index">
                            <img :src="`${image}`" alt="">
                        </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
