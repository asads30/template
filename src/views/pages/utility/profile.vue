<script>
import Layout from "../../layouts/main";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import appConfig from "@/app.config";

/**
 * Profile component
 */
export default {
  page: {
    title: "Profile",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      swiperOptions: {
        horizontal: true,
        slidesPerView: 3,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      },
    };
  },
  components: {
    Layout,
    Swiper,
    SwiperSlide,
  },
  methods: {
    prevSlide() {
      this.$refs.experienceSlide.$swiper.slidePrev();
    },
    nextSlide() {
      this.$refs.experienceSlide.$swiper.slideNext();
    },
  },
};
</script>

<template>
  <Layout>
    <div class="mx-n4 mt-n4">
      <div class="row">
        <div class="col-lg-12">
          <div class="card mb-0">
            <div class="card-body p-0">
              <div class="profile-bg position-relative overflow-hidden">
                <div class="bg-overlay bg-dark bg-gradient"></div>
              </div>
            </div>
          </div>
          <!-- end card -->
        </div>
      </div>
      <!-- end row -->
    </div>

    <div class="row">
      <div class="col-xl-3">
        <div class="card mt-n5">
          <div class="card-body text-center">
            <div class="text-end">
              <b-dropdown
                variant="white"
                right
                toggle-class="btn-link text-dark font-size-16 p-1 shadow-none"
              >
                <template v-slot:button-content>
                  <i class="uil uil-ellipsis-h"></i>
                </template>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
            <div class="avatar-xl mx-auto mb-4">
              <img
                src="@/assets/images/users/avatar-1.jpg"
                alt=""
                class="rounded-circle img-thumbnail"
              />
            </div>
            <h5 class="mb-1">Katie Sharpe</h5>
            <p class="text-muted">Full Stack Developer</p>

            <div>
              <i
                class="mdi mdi-wallet text-muted font-size-16 align-middle me-1"
              ></i>
              <span class="align-middle"
                >Balance :
                <b class="fw-semibold font-size-16">$6951.02</b></span>
            </div>
          </div>
          <div class="d-flex border-top p-2">
            <div class="flex-grow-1">
              <div class="p-2 ps-3">$40/-hr</div>
            </div>
            <div class="flex-shrink-0">
              <button type="button" class="btn btn-light">
                <i class="uil uil-envelope-alt me-1"></i> Message
              </button>
            </div>
          </div>
        </div>
        <!-- end card -->

        <div class="card">
          <div class="card-body">
            <ul class="list-unstyled mb-0">
              <li class="pb-3">
                <div class="d-flex align-items-center">
                  <div class="font-size-20 text-primary flex-shrink-0 me-3">
                    <i class="uil uil-globe"></i>
                  </div>
                  <div class="flex-grow-1">
                    <p class="text-muted mb-1 font-size-13">Website</p>
                    <h5 class="mb-0 font-size-14">https://dashonic123.com</h5>
                  </div>
                </div>
              </li>
              <!-- end li -->
              <li class="py-3">
                <div class="d-flex align-items-center">
                  <div class="font-size-20 text-primary flex-shrink-0 me-3">
                    <i class="uil uil-envelope-alt"></i>
                  </div>
                  <div class="flex-grow-1">
                    <p class="text-muted mb-1 font-size-13">Email</p>
                    <h5 class="mb-0 font-size-14">katie@dashonic.com</h5>
                  </div>
                </div>
              </li>
              <!-- end li -->
              <li class="py-3">
                <div class="d-flex align-items-center">
                  <div class="font-size-20 text-primary flex-shrink-0 me-3">
                    <i class="uil uil-map-marker"></i>
                  </div>
                  <div class="flex-grow-1">
                    <p class="text-muted mb-1 font-size-13">Location</p>
                    <h5 class="mb-0 font-size-14">California, United States</h5>
                  </div>
                </div>
              </li>
              <!-- end li -->
              <li class="pt-3">
                <div class="d-flex align-items-center">
                  <div class="font-size-20 text-primary flex-shrink-0 me-3">
                    <i class="uil uil-user"></i>
                  </div>
                  <div class="flex-grow-1">
                    <p class="text-muted mb-1 font-size-13">Experience</p>
                    <h5 class="mb-0 font-size-14">4 Years</h5>
                  </div>
                </div>
              </li>
              <!-- end li -->
            </ul>
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->

        <div class="card">
          <div class="card-body">
            <div>
              <ul class="list-unstyled mb-0 text-muted">
                <li>
                  <div class="d-flex align-items-center py-2">
                    <div class="flex-grow-1">
                      <i class="mdi mdi-github font-size-16 text-dark me-1"></i>
                      Github
                    </div>
                    <div class="flex-shrink-0">
                      <div>dashonic</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-center py-2">
                    <div class="flex-grow-1">
                      <i
                        class="mdi mdi-twitter font-size-16 text-info me-1"
                      ></i>
                      Twitter
                    </div>
                    <div class="flex-shrink-0">
                      <div>@dashonic</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-center py-2">
                    <div class="flex-grow-1">
                      <i
                        class="mdi mdi-linkedin font-size-16 text-primary me-1"
                      ></i>
                      Linkedin
                    </div>
                    <div class="flex-shrink-0">
                      <div>dashonic</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex align-items-center py-2">
                    <div class="flex-grow-1">
                      <i
                        class="mdi mdi-pinterest font-size-16 text-danger me-1"
                      ></i>
                      Pinterest
                    </div>
                    <div class="flex-shrink-0">
                      <div>dashonic</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <div class="col-xl-9">
        <div class="mt-4">
          <div class="row">
            <div class="col-lg-8">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title mb-4">About</h5>

                  <p>
                    Hi I'm Katie, Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages
                  </p>
                  <p class="mb-0">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    it has a more-or-less normal distribution of letters
                  </p>
                </div>
                <!-- end card body -->
              </div>
              <!-- end card -->

              <div class="card">
                <div class="card-body">
                  <div class="hori-timeline">
                    <!-- Swiper -->
                    <div class="swiper-container slider mb-n4">
                      <div class="d-flex align-items-start">
                        <div class="flex-grow-1">
                          <h5 class="card-title mb-4">Experience</h5>
                        </div>
                        <div class="flex-shrink-0">
                          <div
                            class="swiper-arrow d-flex gap-2 justify-content-end arrow-sm"
                          >
                            <div
                              class="swiper-button-prev position-relative rounded-start"
                              role="button"
                              @click="prevSlide"
                            ></div>
                            <div
                              class="swiper-button-next position-relative rounded-end"
                              role="button"
                              @click="nextSlide"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <swiper :options="swiperOptions" ref="experienceSlide">
                        <swiper-slide>
                          <div class="event-list">
                            <p class="font-size-13 text-primary">2018 - 20</p>
                            <h5 class="font-size-14 mb-1">
                              Full Stack Developer
                            </h5>
                            <p class="text-muted">ABC Company</p>
                          </div>
                        </swiper-slide>
                        <!-- end swiper slide -->
                        <swiper-slide>
                          <div class="event-list">
                            <p class="font-size-13 text-primary">2017 - 18</p>
                            <h5 class="font-size-14 mb-1">Backend Developer</h5>
                            <p class="text-muted">XYZ Company</p>
                          </div>
                        </swiper-slide>
                        <!-- end swiper slide -->
                        <swiper-slide>
                          <div class="event-list">
                            <p class="font-size-13 text-primary">2015 - 17</p>
                            <h5 class="font-size-14 mb-1">
                              Frontend Developer
                            </h5>
                            <p class="text-muted">ABC Company</p>
                          </div>
                        </swiper-slide>
                        <!-- end swiper slide -->
                        <swiper-slide>
                          <div class="event-list">
                            <p class="font-size-13 text-primary">2018 - 20</p>
                            <h5 class="font-size-14 mb-1">UI/UX Designer</h5>
                            <p class="text-muted">XYZ Company</p>
                          </div>
                        </swiper-slide>
                      </swiper>
                    </div>
                  </div>
                </div>
                <!-- end card body -->
              </div>
              <!-- end card -->

              <div class="card">
                <div class="card-body">
                  <h5 class="card-title mb-3">Blog</h5>

                  <div data-simplebar style="max-height: 242px;">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item py-3 px-0">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0 me-3">
                            <div>
                              <img
                                src="@/assets/images/small/img-4.jpg"
                                alt="blog img"
                                class="avatar-lg h-auto rounded"
                              />
                            </div>
                          </div>
                          <div class="flex-grow-1 overflow-hidden">
                            <h5 class="font-size-14 mb-1 text-truncate">
                              <a href="#" class="text-dark"
                                >Beautiful Day with Friends</a
                              >
                            </h5>
                            <ul class="list-inline font-size-13 text-muted">
                              <li class="list-inline-item">
                                <a href="#" class="text-muted">
                                  <i class="uil uil-user me-1"></i> Katie
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <i class="uil uil-calender me-1"></i> 12 May
                              </li>
                            </ul>
                          </div>
                          <div class="flex-shrink-0 ms-2">
                            <b-dropdown variant="white"
                              toggle-class="btn-link text-dark font-size-16 p-1 shadow-none"
                            >
                              <template v-slot:button-content>
                                <i class="uil uil-ellipsis-h"></i>
                              </template>
                              <b-dropdown-item>Action</b-dropdown-item>
                              <b-dropdown-item>Another action</b-dropdown-item>
                              <b-dropdown-item>Something else here</b-dropdown-item>
                            </b-dropdown>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item py-3 px-0">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0 me-3">
                            <div>
                              <img
                                src="@/assets/images/small/img-3.jpg"
                                alt="blog img"
                                class="avatar-lg h-auto rounded"
                              />
                            </div>
                          </div>
                          <div class="flex-grow-1 overflow-hidden">
                            <h5 class="font-size-14 mb-1 text-truncate">
                              <a href="#" class="text-dark"
                                >Morning skating with friends</a
                              >
                            </h5>
                            <ul class="list-inline font-size-13 text-muted">
                              <li class="list-inline-item">
                                <a href="#" class="text-muted">
                                  <i class="uil uil-user me-1"></i> Katie
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <i class="uil uil-calender me-1"></i> 24 Apr
                              </li>
                            </ul>
                          </div>
                          <div class="flex-shrink-0 ms-2">
                           <b-dropdown variant="white"
                              toggle-class="btn-link text-dark font-size-16 p-1 shadow-none"
                            >
                              <template v-slot:button-content>
                                <i class="uil uil-ellipsis-h"></i>
                              </template>
                              <b-dropdown-item>Action</b-dropdown-item>
                              <b-dropdown-item>Another action</b-dropdown-item>
                              <b-dropdown-item>Something else here</b-dropdown-item>
                            </b-dropdown>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item py-3 px-0">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0 me-3">
                            <div>
                              <img
                                src="@/assets/images/small/img-2.jpg"
                                alt="blog img"
                                class="avatar-lg h-auto rounded"
                              />
                            </div>
                          </div>
                          <div class="flex-grow-1 overflow-hidden">
                            <h5 class="font-size-14 mb-1 text-truncate">
                              <a href="#" class="text-dark"
                                >Project Discussion with Team</a
                              >
                            </h5>
                            <ul class="list-inline font-size-13 text-muted">
                              <li class="list-inline-item">
                                <a href="#" class="text-muted">
                                  <i class="uil uil-user me-1"></i> Katie
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <i class="uil uil-calender me-1"></i> 12 Apr
                              </li>
                            </ul>
                          </div>
                          <div class="flex-shrink-0 ms-2">
                            <b-dropdown variant="white"
                              toggle-class="btn-link text-dark font-size-16 p-1 shadow-none"
                            >
                              <template v-slot:button-content>
                                <i class="uil uil-ellipsis-h"></i>
                              </template>
                              <b-dropdown-item>Action</b-dropdown-item>
                              <b-dropdown-item>Another action</b-dropdown-item>
                              <b-dropdown-item>Something else here</b-dropdown-item>
                            </b-dropdown>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item py-3 px-0">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0 me-3">
                            <div>
                              <img
                                src="@/assets/images/small/img-9.jpg"
                                alt="blog img"
                                class="avatar-lg h-auto rounded"
                              />
                            </div>
                          </div>
                          <div class="flex-grow-1 overflow-hidden">
                            <h5 class="font-size-14 mb-1 text-truncate">
                              <a href="#" class="text-dark">Reading book</a>
                            </h5>
                            <ul class="list-inline font-size-13 text-muted">
                              <li class="list-inline-item">
                                <a href="#" class="text-muted">
                                  <i class="uil uil-user me-1"></i> Katie
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <i class="uil uil-calender me-1"></i> 01 Apr
                              </li>
                            </ul>
                          </div>
                          <div class="flex-shrink-0 ms-2">
                            <b-dropdown variant="white"
                              toggle-class="btn-link text-dark font-size-16 p-1 shadow-none"
                            >
                              <template v-slot:button-content>
                                <i class="uil uil-ellipsis-h"></i>
                              </template>
                              <b-dropdown-item>Action</b-dropdown-item>
                              <b-dropdown-item>Another action</b-dropdown-item>
                              <b-dropdown-item>Something else here</b-dropdown-item>
                            </b-dropdown>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- end card body -->
              </div>
              <!-- end card -->
            </div>

            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title mb-4">Skills</h5>

                  <div class="d-flex flex-wrap gap-2 font-size-16">
                    <a href="#" class="badge badge-soft-primary">Photoshop</a>
                    <a href="#" class="badge badge-soft-primary">illustrator</a>
                    <a href="#" class="badge badge-soft-primary">HTML</a>
                    <a href="#" class="badge badge-soft-primary">CSS</a>
                    <a href="#" class="badge badge-soft-primary">Javascript</a>
                    <a href="#" class="badge badge-soft-primary">Php</a>
                    <a href="#" class="badge badge-soft-primary">Python</a>
                  </div>
                </div>
                <!-- end card body -->
              </div>
              <!-- end card -->

              <div class="card">
                <div class="card-body">
                  <h5 class="card-title mb-3">Portfolio</h5>

                  <div>
                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#" class="py-2 d-block text-muted"
                          ><i
                            class="uil uil-globe font-size-16 text-primary me-1"
                          ></i>
                          Website</a
                        >
                      </li>
                      <li>
                        <a href="#" class="py-2 d-block text-muted"
                          ><i
                            class="uil uil-newspaper font-size-16 text-primary me-1"
                          ></i>
                          Blog</a
                        >
                      </li>
                      <li>
                        <a href="#" class="py-2 d-block text-muted"
                          ><i
                            class="uil uil-notebooks font-size-16 text-primary me-1"
                          ></i>
                          Projects</a
                        >
                      </li>
                      <li>
                        <a href="#" class="py-2 d-block text-muted"
                          ><i
                            class="uil uil-images font-size-16 text-primary me-1"
                          ></i>
                          Posts</a
                        >
                      </li>
                      <li>
                        <a href="#" class="py-2 d-block text-muted"
                          ><i
                            class="uil uil-newspaper font-size-16 text-primary me-1"
                          ></i>
                          Portfolio</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- end card body -->
              </div>
              <!-- end card -->

              <div class="card">
                <div class="card-header border-bottom-0">
                  <h5 class="card-title">Similar Profiles</h5>
                </div>
                <div>
                  <div class="list-group list-group-flush mb-2">
                    <a href="#" class="list-group-item list-group-item-action">
                      <div class="d-flex align-items-center">
                        <div class="avatar flex-shrink-0 me-3">
                          <img
                            src="@/assets/images/users/avatar-2.jpg"
                            alt=""
                            class="img-thumbnail rounded-circle"
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div>
                            <h5 class="font-size-14 mb-1">Esther James</h5>
                            <p class="font-size-13 text-muted mb-0">
                              Frontend Developer
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <div class="d-flex align-items-center">
                        <div class="avatar flex-shrink-0 me-3">
                          <img
                            src="@/assets/images/users/avatar-3.jpg"
                            alt=""
                            class="img-thumbnail rounded-circle"
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div>
                            <h5 class="font-size-14 mb-1">Jacqueline Steve</h5>
                            <p class="font-size-13 text-muted mb-0">
                              UI/UX Designer
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <div class="d-flex align-items-center">
                        <div class="avatar flex-shrink-0 me-3">
                          <img
                            src="@/assets/images/users/avatar-4.jpg"
                            alt=""
                            class="img-thumbnail rounded-circle"
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div>
                            <h5 class="font-size-14 mb-1">George Whalen</h5>
                            <p class="font-size-13 text-muted mb-0">
                              Backend Developer
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <div class="d-flex align-items-center">
                        <div class="avatar flex-shrink-0 me-3">
                          <img
                            src="@/assets/images/users/avatar-5.jpg"
                            alt=""
                            class="img-thumbnail rounded-circle"
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div>
                            <h5 class="font-size-14 mb-1">
                              Frontend Developer
                            </h5>
                            <p class="font-size-13 text-muted mb-0">
                              Frontend Developer
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <!-- end card body -->
              </div>
              <!-- end card -->
            </div>
          </div>
          <!-- end row -->
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>
