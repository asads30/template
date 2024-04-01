<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Images component
 */
export default {
  page: {
    title: "Images",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "Images",
      items: [
        {
          text: "UI Elements",
        },
        {
          text: "Images",
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
            <h4 class="card-title">Image Thumbnails</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/image#image-thumbnails"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <b-img
                  :src="require('@/assets/images/small/img-3.jpg')"
                  thumbnail
                  width="200"
                  fluid
                  alt="Responsive image"
                ></b-img>
                <p class="mt-2 mb-lg-0"><code>thumbnail</code></p>
              </div>
              <div class="col-md-6">
                <div class="mt-4 mt-md-0">
                  <b-img
                    :src="require('@/assets/images/users/avatar-3.jpg')"
                    class="avatar-xl"
                    thumbnail
                    rounded="circle"
                    fluid
                    alt="Responsive image"
                  ></b-img>

                  <p class="mt-2 mb-lg-0"><code>thumbnail</code></p>
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
            <h4 class="card-title">Image Rounded & Circle</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <b-img
                  :src="require('@/assets/images/small/img-4.jpg')"
                  rounded
                  width="200"
                  fluid
                  alt="Responsive image"
                ></b-img>
                <p class="mt-2 mb-lg-0"><code>rounded</code></p>
              </div>
              <div class="col-md-6">
                <div class="mt-4 mt-md-0">
                  <b-img
                    :src="require('@/assets/images/users/avatar-4.jpg')"
                    class="avatar-xl"
                    rounded="circle"
                    width="200"
                    fluid
                    alt="Responsive image"
                  ></b-img>
                  <p class="mt-2 mb-lg-0"><code>rounded="circle"</code></p>
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
      <div class="col-12">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Rounded Image Sizes</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="row">
              <div class="col-lg-2">
                <div>
                  <img
                    src="@/assets/images/users/avatar-2.jpg"
                    alt=""
                    class="rounded avatar-xs"
                  />
                  <p class="mt-2 mb-lg-0"><code>.avatar-xs</code></p>
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-2">
                <div>
                  <img
                    src="@/assets/images/users/avatar-4.jpg"
                    alt=""
                    class="rounded avatar-sm"
                  />
                  <p class="mt-2  mb-lg-0"><code>.avatar-sm</code></p>
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-2">
                <div>
                  <img
                    src="@/assets/images/users/avatar-5.jpg"
                    alt=""
                    class="rounded avatar"
                  />
                  <p class="mt-2 mb-lg-0"><code>.avatar</code></p>
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-2">
                <div>
                  <img
                    src="@/assets/images/users/avatar-2.jpg"
                    alt=""
                    class="rounded avatar-md"
                  />
                  <p class="mt-2 mb-lg-0"><code>.avatar-md</code></p>
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-2">
                <div>
                  <img
                    src="@/assets/images/users/avatar-8.jpg"
                    alt=""
                    class="rounded avatar-lg"
                  />
                  <p class="mt-2 mb-lg-0"><code>.avatar-lg</code></p>
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-2">
                <div>
                  <img
                    src="@/assets/images/small/img-2.jpg"
                    alt=""
                    class="rounded avatar-xl"
                  />
                  <p class="mt-2 mb-lg-0"><code>.avatar-xl</code></p>
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!-- end cardbody -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Rounded Circle Image Sizes</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="row">
              <div class="col-lg-2">
                <div>
                  <img
                    src="@/assets/images/users/avatar-2.jpg"
                    alt=""
                    class="rounded-circle avatar-xs"
                  />
                  <p class="mt-2 mb-lg-0"><code>.avatar-xs</code></p>
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-2">
                <div>
                  <img
                    src="@/assets/images/users/avatar-4.jpg"
                    alt=""
                    class="rounded-circle avatar-sm"
                  />
                  <p class="mt-2  mb-lg-0"><code>.avatar-sm</code></p>
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-2">
                <div>
                  <img
                    src="@/assets/images/users/avatar-5.jpg"
                    alt=""
                    class="rounded-circle avatar"
                  />
                  <p class="mt-2 mb-lg-0"><code>.avatar</code></p>
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-2">
                <div>
                  <img
                    src="@/assets/images/users/avatar-2.jpg"
                    alt=""
                    class="rounded-circle avatar-md"
                  />
                  <p class="mt-2 mb-lg-0"><code>.avatar-md</code></p>
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-2">
                <div>
                  <img
                    src="@/assets/images/users/avatar-8.jpg"
                    alt=""
                    class="rounded-circle avatar-lg"
                  />
                  <p class="mt-2 mb-lg-0"><code>.avatar-lg</code></p>
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-2">
                <div>
                  <img
                    src="@/assets/images/users/avatar-10.jpg"
                    alt=""
                    class="rounded-circle avatar-xl"
                  />
                  <p class="mt-2 mb-lg-0"><code>.avatar-xl</code></p>
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!-- end cardbody -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-4">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Responsive Images</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/image#responsive-images"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="">
              <b-img
                :src="require('@/assets/images/small/img-2.jpg')"
                fluid
                alt="Responsive image"
              ></b-img>
            </div>
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <div class="col-xl-4">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Media Object Default</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="d-flex">
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/users/avatar-10.jpg"
                  class="avatar-lg img-fluid"
                  alt=""
                />
              </div>
              <div class="flex-grow-1 ms-3">
                This is some content from a media component. You can replace
                this with any content and adjust it as needed.
              </div>
            </div>
          </div>
          <!-- card body -->
        </div>
        <!-- card -->

        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Media Object Center</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/users/avatar-10.jpg"
                  class="avatar-lg img-fluid"
                  alt=""
                />
              </div>
              <div class="flex-grow-1 ms-3">
                This is some content from a media component. You can replace
                this with any content and adjust it as needed.
              </div>
            </div>
          </div>
          <!-- card body -->
        </div>
        <!-- card -->
      </div>
      <!-- col -->

      <div class="col-xl-4">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Media Object Bottom</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="d-flex align-items-end">
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/users/avatar-10.jpg"
                  class="avatar-lg img-fluid"
                  alt=""
                />
              </div>
              <div class="flex-grow-1 ms-3">
                This is some content from a media component. You can replace
                this with any content and adjust it as needed.
              </div>
            </div>
          </div>
          <!-- card body -->
        </div>
        <!-- card -->
      </div>
      <!-- col -->
    </div>
    <!-- row -->
  </Layout>
</template>
