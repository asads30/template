<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Placeholder component
 */
export default {
  page: {
    title: "Placeholder",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "Placeholder",
      items: [
        {
          text: "UI Elements",
        },
        {
          text: "Placeholder",
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
      <div class="col-lg-12">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Example</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="row justify-content-center">
              <div class="col-xl-7">
                <div class="row justify-content-between">
                  <div class="col-lg-5 col-sm-6">
                    <div class="card">
                      <img
                        src="@/assets/images/small/img-1.jpg"
                        class="card-img-top"
                        alt="card img"
                      />

                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-5 col-sm-6">
                    <div class="card" aria-hidden="true">
                      <img
                        src="@/assets/images/small/img-11.jpg"
                        class="card-img-top"
                        alt="card dummy img"
                      />
                      <div class="card-body">
                        <h5 class="card-title placeholder-glow">
                          <span class="placeholder col-6"></span>
                        </h5>
                        <p class="card-text placeholder-glow">
                          <span class="placeholder col-7"></span>
                          <span class="placeholder col-4"></span>
                          <span class="placeholder col-4"></span>
                          <span class="placeholder col-6"></span>
                        </p>
                        <a
                          href="#"
                          tabindex="-1"
                          class="btn btn-primary disabled placeholder col-6"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            <h4 class="card-title">Width</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <span class="placeholder col-6"></span>
            <span class="placeholder w-75"></span>
            <span class="placeholder" style="width: 25%;"></span>
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Sizing</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <span class="placeholder col-12 placeholder-lg"></span>
            <span class="placeholder col-12"></span>
            <span class="placeholder col-12 placeholder-sm"></span>
            <span class="placeholder col-12 placeholder-xs"></span>
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
            <h4 class="card-title">Color</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <span class="placeholder col-12 mb-3"></span>
            <span class="placeholder col-12 mb-3 bg-primary"></span>
            <span class="placeholder col-12 mb-3 bg-secondary"></span>
            <span class="placeholder col-12 mb-3 bg-success"></span>
            <span class="placeholder col-12 mb-3 bg-danger"></span>
            <span class="placeholder col-12 mb-3 bg-warning"></span>
            <span class="placeholder col-12 mb-3 bg-info"></span>
            <span class="placeholder col-12 mb-3 bg-light"></span>
            <span class="placeholder col-12 bg-dark"></span>
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Animation</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="row">
              <div class="col-lg-6">
                <div>
                  <h5 class="font-size-14">
                    <i class="mdi mdi-chevron-right text-primary me-1"></i>
                    Placeholder glow
                  </h5>
                  <div class="placeholder-glow">
                    <span class="placeholder col-12"></span>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div>
                  <h5 class="font-size-14">
                    <i class="mdi mdi-chevron-right text-primary me-1"></i>
                    Placeholder wave
                  </h5>
                  <div class="placeholder-wave">
                    <span class="placeholder col-12"></span>
                  </div>
                </div>
              </div>
            </div>
            <!-- end row -->
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>
