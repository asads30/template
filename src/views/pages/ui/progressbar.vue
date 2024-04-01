<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Progressbar component
 */
export default {
  page: {
    title: "Progress Bars",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "Progress Bars",
      items: [
        {
          text: "UI Elements",
        },
        {
          text: "Progress Bars",
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
            <h4 class="card-title">Default Examples</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <b-progress :value="0" class="mb-4"></b-progress>
            <b-progress :value="25" class="mb-4"></b-progress>
            <b-progress :value="50" class="mb-4"></b-progress>
            <b-progress :value="70" class="mb-4"></b-progress>
            <b-progress :value="85" class="mb-4"></b-progress>
            <b-progress :value="100"></b-progress>
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Backgrounds</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <b-progress :value="5" class="mb-4"></b-progress>
            <b-progress :value="15" variant="success" class="mb-4"></b-progress>
            <b-progress :value="25" variant="info" class="mb-4"></b-progress>
            <b-progress :value="35" variant="purple" class="mb-4"></b-progress>
            <b-progress :value="45" variant="warning" class="mb-4"></b-progress>
            <b-progress :value="65" variant="danger" class="mb-4"></b-progress>
            <b-progress
              :value="85"
              variant="secondary"
              class="mb-4"
            ></b-progress>
            <b-progress :value="100" variant="dark"></b-progress>
          </div>
          <!-- end crad body -->
        </div>
        <!-- end crad -->
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
            <h4 class="card-title">Labels Example</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <b-progress :value="25" show-value variant="primary"></b-progress>
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Multiple Progressbars</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="">
              <b-progress class="mb-3">
                <b-progress-bar :value="15"></b-progress-bar>
                <b-progress-bar variant="success" :value="30"></b-progress-bar>
                <b-progress-bar variant="info" :value="20"></b-progress-bar>
              </b-progress>
            </div>
          </div>
          <!-- end cardbody -->
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
            <h4 class="card-title">Height</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <b-progress height="3px" :value="25" class="mb-3"></b-progress>
            <b-progress height="20px" :value="25"></b-progress>
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Animated Stripes</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <b-progress :value="75" striped :animated="true"></b-progress>
          </div>
          <!-- end card body -->
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
            <h4 class="card-title">Striped Progress</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <b-progress :value="10" :striped="true" class="mb-4"></b-progress>
            <b-progress
              :value="25"
              variant="success"
              class="mb-4"
              :striped="true"
            ></b-progress>
            <b-progress
              :value="50"
              variant="info"
              class="mb-4"
              :striped="true"
            ></b-progress>
            <b-progress
              :value="62"
              variant="purple"
              class="mb-4"
              :striped="true"
            ></b-progress>
            <b-progress
              :value="75"
              variant="warning"
              class="mb-4"
              :striped="true"
            ></b-progress>
            <b-progress
              :value="100"
              variant="danger"
              class="mb-4"
              :striped="true"
            ></b-progress>
          </div>
          <!--end card body-->
        </div>
        <!--end card-->
      </div>
      <!--end col-->

      <div class="col-xl-6">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Custom progress</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="">
              <b-progress
                variant="success"
                :value="25"
                class="custom-progress progress-xl animated-progess mb-4"
              ></b-progress>
              <b-progress
                variant="info"
                :value="50"
                class="custom-progress progress-xl animated-progess mb-4"
              ></b-progress>
              <b-progress
                variant="purple"
                :value="62"
                class="custom-progress progress-xl animated-progess mb-4"
              ></b-progress>
              <b-progress
                variant="warning"
                :value="75"
                class="custom-progress progress-xl animated-progess mb-4"
              ></b-progress>
              <b-progress
                variant="danger"
                :value="100"
                class="custom-progress progress-xl animated-progess mb-4"
              ></b-progress>
            </div>
          </div>
          <!--end card body-->
        </div>
        <!--end card-->
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-header justify-content-between d-flex align-items-center">
            <h4 class="card-title">Gradient Progress</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <b-progress
              :value="25"
              variant="primary"
              class="bg-gradient mb-4"
            ></b-progress>
            <b-progress
              :value="50"
              variant="success"
              class="bg-gradient mb-4"
            ></b-progress>
            <b-progress
              :value="62"
              variant="info"
              class="bg-gradient mb-4"
            ></b-progress>
            <b-progress
              :value="75"
              variant="warning"
              class="bg-gradient mb-4"
            ></b-progress>
            <b-progress
              :value="82"
              variant="danger"
              class="bg-gradient mb-4"
            ></b-progress>
            <b-progress
              :value="100"
              variant="purple"
              class="bg-gradient mb-4"
            ></b-progress>
          </div>
          <!--end card body-->
        </div>
        <!--end card-->
      </div>
      <!--end col-->
    </div>
    <!--end row-->
  </Layout>
</template>
