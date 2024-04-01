<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { timelineData } from "./data";

/**
 * Left Timeline component
 */
export default {
  page: {
    title: "Left Timeline",
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
      title: "Left Timeline",
      items: [
        {
          text: "Timeline",
        },
        {
          text: "Left Timeline",
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
    <div class="row">
      <div class="col-xl-12">
        <div class="p-4">
          <div class="verti-timeline left-timeline">
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
              :class="`timeline-item`"
            >
              <div class="timeline-block">
                <div class="timeline-box card">
                  <div class="card-body">
                    <div class="timeline-date">{{ item.date }}</div>
                    <h5 class="mt-3 font-size-16">{{ item.title }}</h5>
                    <div class="text-muted">
                      <p class="mb-0">{{ item.content }}</p>
                    </div>
                    <div class="timeline-album mt-3" v-if="item.images">
                      <a
                        href="javascript:void(0);"
                        v-for="(image, index) in item.images"
                        :key="index"
                      >
                        <img :src="`${image}`" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
