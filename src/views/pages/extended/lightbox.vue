<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Lightbox component
 */
export default {
  page: {
    title: "Lightbox",
    meta: [
        {
            name: "description",
            content: appConfig.description,
        },
    ]
  },
  data() {
    return {
      title: "Lightbox",
      items: [
        {
          text: "Extended UI",
        },
        {
          text: "Lightbox",
          active: true,
        },
      ],
      listImgs: [
        require("@/assets/images/small/img-1.jpg"),
        require("@/assets/images/small/img-2.jpg"),
      ],
      descriptionLightbox: [
        require("@/assets/images/small/img-4.jpg"),
        require("@/assets/images/small/img-5.jpg"),
        require("@/assets/images/small/img-1.jpg"),
      ],
      visible: false,
      index: 0,
    };
  },
  components: {
    Layout,
    PageHeader,
  },
  methods: {
    /**
     * Lightbox popup
     */
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
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
            <h4 class="card-title">Single Image Lightbox</h4>
            <a
              href="https://www.npmjs.com/package/vue-easy-lightbox"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="row">
              <div class="col-md-6" v-for="(item, index) in listImgs" :key="index">
                <div class="mt-4 mt-md-0">
                  <a
                    href="javascript:void(0);"
                    @click="() => showImg(index)"
                    class="thumb preview-thumb image-popup"
                  >
                    <img
                      :src="`${item}`"
                      class="img-fluid"
                      alt="work-thumbnail"
                    />
                  </a>
                </div>
              </div>
            </div>
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
            <h4 class="card-title">Images with Description</h4>
            <a
              href="https://www.npmjs.com/package/vue-easy-lightbox"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="row">
              <div
                class="col-lg-3 col-sm-6"
                v-for="(item, index) in descriptionLightbox"
                :key="index"
              >
                <div class="mt-4 mt-lg-0">
                  <a
                    href="javascript:void(0);"
                    @click="() => showImg(index)"
                    class="thumb preview-thumb image-popup-desc"
                    data-title="Project 01"
                    data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                  >
                    <img
                      :src="`${item}`"
                      class="img-fluid"
                      alt="work-thumbnail"
                    />
                  </a>
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
            <vue-easy-lightbox
              escDisabled
              moveDisabled
              :visible="visible"
              :index="index"
              :imgs="descriptionLightbox"
              @hide="visible = false"
            ></vue-easy-lightbox>
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
