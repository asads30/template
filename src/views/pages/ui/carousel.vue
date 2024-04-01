<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Carousel component
 */
export default {
  page: {
    title: "Carousel",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "Carousel",
      items: [
        {
          text: "UI Elements",
        },
        {
          text: "Carousel",
          active: true,
        },
      ],
      slide: 0,
      slide1: 0,
      sliding: null,
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
      <div class="col-xl-4 col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="justify-content-between d-flex align-items-center mb-4">
              <h4 class="card-title">Carousel with Slides Only</h4>
              <a
                href="https://bootstrap-vue.org/docs/components/carousel"
                target="_blank"
                class="btn btn-sm btn-soft-secondary"
                >Docs <i class="mdi mdi-arrow-right align-middle"></i
              ></a>
            </div>

            <b-carousel id="carousel-1" :interval="3000">
              <!-- Text slides with image -->
              <b-carousel-slide
                :img-src="require('@/assets/images/small/img-1.jpg')"
              ></b-carousel-slide>

              <!-- Slides with custom text -->
              <b-carousel-slide
                :img-src="require('@/assets/images/small/img-2.jpg')"
              >
              </b-carousel-slide>

              <b-carousel-slide
                :img-src="require('@/assets/images/small/img-3.jpg')"
              ></b-carousel-slide>
            </b-carousel>
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <div class="col-xl-4 col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="justify-content-between d-flex align-items-center mb-4">
              <h4 class="card-title">Carousel with Controls</h4>
              <a
                href="https://bootstrap-vue.org/docs/components/carousel#controls-and-indicators"
                target="_blank"
                class="btn btn-sm btn-soft-secondary"
                >Docs <i class="mdi mdi-arrow-right align-middle"></i
              ></a>
            </div>

            <b-carousel id="carousel-1" :interval="3000" controls>
              <!-- Text slides with image -->
              <b-carousel-slide
                :img-src="require('@/assets/images/small/img-1.jpg')"
              ></b-carousel-slide>

              <!-- Slides with custom text -->
              <b-carousel-slide
                :img-src="require('@/assets/images/small/img-2.jpg')"
              >
              </b-carousel-slide>

              <b-carousel-slide
                :img-src="require('@/assets/images/small/img-3.jpg')"
              ></b-carousel-slide>
            </b-carousel>
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <div class="col-xl-4 col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="justify-content-between d-flex align-items-center mb-4">
              <h4 class="card-title">Carousel with Captions</h4>
              <a
                href="https://bootstrap-vue.org/docs/components/carousel"
                target="_blank"
                class="btn btn-sm btn-soft-secondary"
                >Docs <i class="mdi mdi-arrow-right align-middle"></i
              ></a>
            </div>
            <b-carousel id="carousel-fade" fade indicators controls>
              <b-carousel-slide
                caption="First slide label"
                caption-tag="h5"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                :img-src="require('@/assets/images/small/img-1.jpg')"
              ></b-carousel-slide>
              <b-carousel-slide
                caption="Second slide label"
                caption-tag="h5"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                :img-src="require('@/assets/images/small/img-3.jpg')"
              ></b-carousel-slide>
              <b-carousel-slide
                caption="Third slide label"
                caption-tag="h5"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                :img-src="require('@/assets/images/small/img-5.jpg')"
              ></b-carousel-slide>
            </b-carousel>
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <div class="col-xl-4 col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="justify-content-between d-flex align-items-center mb-4">
              <h4 class="card-title">Carousel with Indicators</h4>
              <a
                href="https://bootstrap-vue.org/docs/components/carousel#controls-and-indicators"
                target="_blank"
                class="btn btn-sm btn-soft-secondary"
                >Docs <i class="mdi mdi-arrow-right align-middle"></i
              ></a>
            </div>
            <b-carousel id="carousel-fade" indicators controls>
              <b-carousel-slide
                :img-src="require('@/assets/images/small/img-3.jpg')"
              ></b-carousel-slide>
              <b-carousel-slide
                :img-src="require('@/assets/images/small/img-2.jpg')"
              ></b-carousel-slide>
              <b-carousel-slide
                :img-src="require('@/assets/images/small/img-1.jpg')"
              ></b-carousel-slide>
            </b-carousel>
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <div class="col-xl-4 col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="justify-content-between d-flex align-items-center mb-4">
              <h4 class="card-title">Crossfade</h4>
              <a
                href="https://bootstrap-vue.org/docs/components/carousel#carousel-animation"
                target="_blank"
                class="btn btn-sm btn-soft-secondary"
                >Docs <i class="mdi mdi-arrow-right align-middle"></i
              ></a>
            </div>
            <b-carousel id="carousel-fade" indicators controls fade>
              <b-carousel-slide
                :img-src="require('@/assets/images/small/img-1.jpg')"
              ></b-carousel-slide>
              <b-carousel-slide
                :img-src="require('@/assets/images/small/img-4.jpg')"
              ></b-carousel-slide>
              <b-carousel-slide
                :img-src="require('@/assets/images/small/img-5.jpg')"
              ></b-carousel-slide>
            </b-carousel>
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <div class="col-xl-4 col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="justify-content-between d-flex align-items-center mb-4">
              <h4 class="card-title">Dark Variant</h4>
              <a
                href="https://bootstrap-vue.org/docs/components/carousel"
                target="_blank"
                class="btn btn-sm btn-soft-secondary"
                >Docs <i class="mdi mdi-arrow-right align-middle"></i
              ></a>
            </div>

            <b-carousel class="carousel-dark" id="carousel" indicators controls>
              <b-carousel-slide
                caption="First slide label"
                caption-tag="h5"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                :img-src="require('@/assets/images/small/img-9.jpg')"
              ></b-carousel-slide>
              <b-carousel-slide
                caption="Second slide label"
                caption-tag="h5"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                :img-src="require('@/assets/images/small/img-7.jpg')"
              ></b-carousel-slide>
              <b-carousel-slide
                caption="Third slide label"
                caption-tag="h5"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                :img-src="require('@/assets/images/small/img-8.jpg')"
              ></b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
