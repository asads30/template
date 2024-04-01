<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Horizontal timeline component
 */
export default {
  page: {
    title: "Horizontal Timeline",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "Horizontal Timeline",
      items: [
        {
          text: "Timeline",
        },
        {
          text: "Horizontal Timeline",
          active: true,
        },
      ],
      swiperOptions: {
        slidesPerView: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        },
      },
      timelineCardOptions: {
        slidesPerView: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        },
      },
    };
  },
  components: {
    Layout,
    PageHeader,
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  methods: {
    prevSlide() {
      this.$refs.exampleSlide.$swiper.slidePrev();
    },
    nextSlide() {
      this.$refs.exampleSlide.$swiper.slideNext();
    },
    prevCardSlide() {
      this.$refs.timelineCard.$swiper.slidePrev();
    },
    nextCardSlide() {
      this.$refs.timelineCard.$swiper.slideNext();
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="hori-timeline">
              <!-- Swiper -->
              <div class="swiper-container slider">
                <div class="d-flex align-items-start">
                  <div class="flex-grow-1">
                    <h5 class="card-title mb-4">Example</h5>
                  </div>
                  <div class="flex-shrink-0">
                    <div
                      class="swiper-arrow d-flex gap-2 justify-content-end arrow-sm"
                    >
                      <div
                        class="swiper-button-prev position-relative rounded-start"
                        role="button"
                        @click="prevSlide"
                      >
                      </div>
                      <div
                        class="swiper-button-next position-relative rounded-end"
                        role="button"
                        @click="nextSlide"
                      >
                      </div>
                    </div>
                  </div>
                </div>

                <swiper :options="swiperOptions" ref="exampleSlide">
                  <swiper-slide>
                    <div class="event-list">
                      <p class="font-size-13 text-primary">15 May</p>
                      <h5 class="font-size-14 mb-1">First Event</h5>
                      <p class="text-muted">ABC Company</p>
                      <div>
                        <p class="text-muted text-truncate">
                          It will be as simple as occidental in fact it will be
                          Cambridge
                        </p>

                        <div>
                          <a href="#" class="text-primary">View Detail</a>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="event-list">
                      <p class="font-size-13 text-primary">21 May</p>

                      <h5 class="font-size-14 mb-1">Second Event</h5>
                      <p class="text-muted">XYZ Company</p>
                      <div>
                        <p class="text-muted text-truncate">
                          To an English person, it will seem like simplified
                          English existence.
                        </p>

                        <div>
                          <a href="#" class="text-primary">View Detail</a>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <!-- end swiper slide -->
                  <swiper-slide>
                    <div class="event-list">
                      <p class="font-size-13 text-primary">02 Jun</p>

                      <h5 class="font-size-14 mb-1">Third Event</h5>
                      <p class="text-muted">ABC Company</p>
                      <div>
                        <p class="text-muted text-truncate">
                          For science, music, sport, etc, Europe uses the same
                          vocabulary.
                        </p>

                        <div>
                          <a href="#" class="text-primary">View Detail</a>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <!-- end swiper slide -->
                  <swiper-slide>
                    <div class="event-list">
                      <p class="font-size-13 text-primary">08 Jun</p>

                      <h5 class="font-size-14 mb-1">Fourth Event</h5>
                      <p class="text-muted">XYZ Company</p>
                      <div>
                        <p class="text-muted text-truncate">
                          New common language will be more simple than existing.
                        </p>

                        <div>
                          <a href="#" class="text-primary">View Detail</a>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <!-- end swiper slide -->
                  <swiper-slide>
                    <div class="event-list">
                      <p class="font-size-13 text-primary">15 Jun</p>

                      <h5 class="font-size-14 mb-1">Fifth Event</h5>
                      <p class="text-muted">XYZ Company</p>
                      <div>
                        <p class="text-muted text-truncate">
                          It will be as simple as occidental in fact it will be
                          Cambridge
                        </p>

                        <div>
                          <a href="#" class="text-primary">View Detail</a>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <!-- end swiper slide -->
                  <swiper-slide>
                    <div class="event-list">
                      <p class="font-size-13 text-primary">23 Jun</p>

                      <h5 class="font-size-14 mb-1">Sixth Event</h5>
                      <p class="text-muted">XYZ Company</p>
                      <div>
                        <p class="text-muted text-truncate">
                          To an English person, it will seem like simplified
                          English existence.
                        </p>

                        <div>
                          <a href="#" class="text-primary">View Detail</a>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <!-- end swiper slide -->
                </swiper>
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
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="hori-timeline timeline-card">
              <!-- Swiper -->
              <div class="swiper-container" id="timeline-card-slider">
                <div class="d-flex align-items-start">
                  <div class="flex-grow-1">
                    <h5 class="card-title mb-4">Timeline with Card</h5>
                  </div>
                  <div class="flex-shrink-0">
                    <div
                      class="swiper-arrow d-flex gap-2 justify-content-end arrow-sm"
                    >
                      <div
                        class="swiper-button-prev position-relative rounded-start"
                        role="button"
                        @click="prevCardSlide"
                      ></div>
                      <div
                        class="swiper-button-next position-relative rounded-end"
                        role="button"
                        @click="nextCardSlide"
                      ></div>
                    </div>
                  </div>
                </div>
                <swiper :options="timelineCardOptions" ref="timelineCard">
                  <swiper-slide>
                    <div class="event-list">
                      <div class="event-list-item">
                        <p class="font-size-13 text-primary">15 May</p>

                        <h5 class="font-size-14 mb-1">First Event</h5>
                        <p class="text-muted">ABC Company</p>

                        <div>
                          <p class="text-muted text-truncate">
                            It will be as simple as occidental in fact it will
                            be Cambridge
                          </p>

                          <div>
                            <a href="#" class="text-primary">View Detail</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="event-list">
                      <div class="event-list-item">
                        <p class="font-size-13 text-primary">21 May</p>

                        <h5 class="font-size-14 mb-1">Second Event</h5>
                        <p class="text-muted">XYZ Company</p>
                        <div>
                          <p class="text-muted text-truncate">
                            To an English person, it will seem like simplified
                            English existence.
                          </p>

                          <div>
                            <a href="#" class="text-primary">View Detail</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="event-list">
                      <div class="event-list-item">
                        <p class="font-size-13 text-primary">02 Jun</p>

                        <h5 class="font-size-14 mb-1">Third Event</h5>
                        <p class="text-muted">ABC Company</p>
                        <div>
                          <p class="text-muted text-truncate">
                            For science, music, sport, etc, Europe uses the same
                            vocabulary.
                          </p>

                          <div>
                            <a href="#" class="text-primary">View Detail</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="event-list">
                      <div class="event-list-item">
                        <p class="font-size-13 text-primary">08 Jun</p>

                        <h5 class="font-size-14 mb-1">Fourth Event</h5>
                        <p class="text-muted">XYZ Company</p>
                        <div>
                          <p class="text-muted text-truncate">
                            New common language will be more simple than
                            existing.
                          </p>

                          <div>
                            <a href="#" class="text-primary">View Detail</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="event-list">
                      <div class="event-list-item">
                        <p class="font-size-13 text-primary">15 Jun</p>

                        <h5 class="font-size-14 mb-1">Fifth Event</h5>
                        <p class="text-muted">XYZ Company</p>
                        <div>
                          <p class="text-muted text-truncate">
                            It will be as simple as occidental in fact it will
                            be Cambridge
                          </p>

                          <div>
                            <a href="#" class="text-primary">View Detail</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>

                  <swiper-slide>
                    <div class="event-list">
                      <div class="event-list-item">
                        <p class="font-size-13 text-primary">23 Jun</p>

                        <h5 class="font-size-14 mb-1">Sixth Event</h5>
                        <p class="text-muted">XYZ Company</p>
                        <div>
                          <p class="text-muted text-truncate">
                            To an English person, it will seem like simplified
                            English existence.
                          </p>

                          <div>
                            <a href="#" class="text-primary">View Detail</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                </swiper>
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
  </Layout>
</template>
