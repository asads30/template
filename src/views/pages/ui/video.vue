<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Video component
 */
export default {
  page: {
    title: "Video",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "Video",
      items: [
        {
          text: "UI Elements",
        },
        {
          text: "Video",
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
      <div class="col-xl-6">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Ratio Video 16:9</h4>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <!-- 16:9 aspect ratio -->
            <div class="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <!-- end cardbody -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Ratio Video 21:9</h4>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <!-- 21:9 aspect ratio -->
            <div class="ratio ratio-21x9">
              <iframe
                src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Ratio Video 4:3</h4>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <!-- 4:3 aspect ratio -->
            <div class="ratio ratio-4x3">
              <iframe
                src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Ratio Video 1:1</h4>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <!-- 1:1 aspect ratio -->
            <div class="ratio ratio-1x1">
              <iframe
                src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>
