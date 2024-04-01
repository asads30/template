<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * General component
 */
export default {
  page: {
    title: "General",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "General",
      items: [
        {
          text: "UI Elements",
        },
        {
          text: "General",
          active: true,
        },
      ],
      rows: 50,
      perPage: 10,
      currentPage: 1,
      currentPage2: 1,
      row: 50,
      perPageList: 10,
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
      <div class="col-xl-4">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Default Badges</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/badge#badges"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <b-badge class="bg-primary me-1">Primary</b-badge>
            <b-badge class="bg-secondary me-1">Secondary</b-badge>
            <b-badge class="bg-success me-1">Success</b-badge>
            <b-badge class="bg-info me-1">Info</b-badge>
            <b-badge class="bg-warning me-1">Warning</b-badge>
            <b-badge class="bg-purple me-1">Purple</b-badge>
            <b-badge class="bg-danger me-1">Danger</b-badge>
            <b-badge class="bg-dark me-1">Dark</b-badge>
            <b-badge class="bg-light">Light</b-badge>
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
            <h4 class="card-title">Soft Badges</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <b-badge class="badge-soft-primary me-1">Primary</b-badge>
            <b-badge class="badge-soft-secondary me-1">Secondary</b-badge>
            <b-badge class="badge-soft-success me-1">Success</b-badge>
            <b-badge class="badge-soft-info me-1">Info</b-badge>
            <b-badge class="badge-soft-warning me-1">Warning</b-badge>
            <b-badge class="badge-soft-purple me-1">Purple</b-badge>
            <b-badge class="badge-soft-danger me-1">Danger</b-badge>
            <b-badge class="badge-soft-dark me-1">Dark</b-badge>
            <b-badge class="badge-soft-light">Light</b-badge>
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
            <h4 class="card-title">Outline Badges</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <b-badge class="badge-outline-primary me-1">Primary</b-badge>
            <b-badge class="badge-outline-secondary me-1">Secondary</b-badge>
            <b-badge class="badge-outline-success me-1">Success</b-badge>
            <b-badge class="badge-outline-info me-1">Info</b-badge>
            <b-badge class="badge-outline-warning me-1">Warning</b-badge>
            <b-badge class="badge-outline-purple me-1">Purple</b-badge>
            <b-badge class="badge-outline-danger me-1">Danger</b-badge>
            <b-badge class="badge-outline-dark me-1">Dark</b-badge>
            <b-badge class="badge-outline-light">Light</b-badge>
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
            <h4 class="card-title">Pill Badges</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/badge#pill-badges"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <b-badge pill class="bg-primary me-1">Primary</b-badge>
            <b-badge pill class="bg-secondary me-1">Secondary</b-badge>
            <b-badge pill class="bg-success me-1">Success</b-badge>
            <b-badge pill class="bg-info me-1">Info</b-badge>
            <b-badge pill class="bg-warning me-1">Warning</b-badge>
            <b-badge pill class="bg-purple me-1">Purple</b-badge>
            <b-badge pill class="bg-danger me-1">Danger</b-badge>
            <b-badge pill class="bg-dark me-1">Dark</b-badge>
            <b-badge pill class="bg-light">Light</b-badge>
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
            <h4 class="card-title">Rounded Soft Badges</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <b-badge pill class="badge-soft-primary me-1">Primary</b-badge>
            <b-badge pill class="badge-soft-secondary me-1">Secondary</b-badge>
            <b-badge pill class="badge-soft-success me-1">Success</b-badge>
            <b-badge pill class="badge-soft-info me-1">Info</b-badge>
            <b-badge pill class="badge-soft-warning me-1">Warning</b-badge>
            <b-badge pill class="badge-soft-purple me-1">Purple</b-badge>
            <b-badge pill class="badge-soft-danger me-1">Danger</b-badge>
            <b-badge pill class="badge-soft-dark me-1">Dark</b-badge>
            <b-badge pill class="badge-soft-light">Light</b-badge>
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
            <h4 class="card-title">Outline Badges</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <b-badge pill class="badge-outline-primary me-1">Primary</b-badge>
            <b-badge pill class="badge-outline-secondary me-1"
              >Secondary</b-badge
            >
            <b-badge pill class="badge-outline-success me-1">Success</b-badge>
            <b-badge pill class="badge-outline-info me-1">Info</b-badge>
            <b-badge pill class="badge-outline-warning me-1">Warning</b-badge>
            <b-badge pill class="badge-outline-purple me-1">Purple</b-badge>
            <b-badge pill class="badge-outline-danger me-1">Danger</b-badge>
            <b-badge pill class="badge-outline-dark me-1">Dark</b-badge>
            <b-badge pill class="badge-outline-light">Light</b-badge>
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
            <h4 class="card-title">Buttons with Badges</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/badge#pill-badges"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="d-flex flex-wrap gap-3">
              <b-button variant="primary">
                Notifications <b-badge class="bg-success ms-1">4</b-badge>
              </b-button>
              <b-button class="btn btn-success">
                Messages <b-badge class="bg-danger ms-1">2</b-badge>
              </b-button>
              <b-button variant="outline-secondary">
                Draft <b-badge class="bg-success ms-1">2</b-badge>
              </b-button>
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
            <h4 class="card-title">Badges Position Examples</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/badge#badges"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="d-flex flex-wrap gap-3">
              <b-button variant="primary" class="position-relative">
                Mails
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
                  >+99
                  <span class="visually-hidden">unread messages</span></span
                >
              </b-button>

              <b-button variant="light" class="position-relative">
                Alerts
                <span
                  class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"
                  ><span class="visually-hidden">unread messages</span></span
                >
              </b-button>

              <b-button
                variant="primary"
                class="position-relative p-0 avatar-sm rounded"
              >
                <span class="avatar-title bg-transparent">
                  <i class="bx bxs-envelope"></i>
                </span>
                <span
                  class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"
                  ><span class="visually-hidden">unread messages</span></span
                >
              </b-button>

              <b-button
                variant="light"
                class="position-relative p-0 avatar-sm rounded-circle"
              >
                <span class="avatar-title bg-transparent text-reset">
                  <i class="bx bxs-bell"></i>
                </span>
              </b-button>

              <b-button
                variant="light"
                class="position-relative p-0 avatar-sm rounded-circle"
              >
                <span class="avatar-title bg-transparent text-reset">
                  <i class="bx bx-menu"></i>
                </span>
                <span
                  class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-1"
                  ><span class="visually-hidden">unread messages</span></span
                >
              </b-button>
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
        <div class="mt-3 mb-4">
          <h5 class="mb-0 pb-1 text-decoration-underline">Pagination</h5>
        </div>
        <div class="row">
          <div class="col-xl-4">
            <div class="card">
              <div
                class="card-header justify-content-between d-flex align-items-center"
              >
                <h4 class="card-title">Default Pagination</h4>
                <a
                  href="https://bootstrap-vue.org/docs/components/pagination#pagination"
                  target="_blank"
                  class="btn btn-sm btn-soft-secondary"
                  >Docs <i class="mdi mdi-arrow-right align-middle"></i
                ></a>
              </div>
              <!-- end card header -->
              <div class="card-body">
                <b-pagination
                  :total-rows="15"
                  :per-page="5"
                  aria-controls="my-table"
                  prev-text="Prev"
                  next-text="Next"
                ></b-pagination>

                <b-pagination
                  :total-rows="15"
                  :per-page="5"
                  aria-controls="my-table"
                ></b-pagination>
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
                <h4 class="card-title">Disabled and Active States</h4>
                <a
                  href="https://bootstrap-vue.org/docs/components/pagination#component-reference"
                  target="_blank"
                  class="btn btn-sm btn-soft-secondary"
                  >Docs <i class="mdi mdi-arrow-right align-middle"></i
                ></a>
              </div>
              <!-- end card header -->
              <div class="card-body">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                >
                  <template #first-text>Previous</template>
                  <template #last-text>Next</template>
                </b-pagination>

                <b-pagination
                  v-model="currentPage2"
                  :total-rows="row"
                  :per-page="perPageList"
                >
                </b-pagination>
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
                <h4 class="card-title">Pagination Alignment</h4>
                <a
                  href="https://bootstrap-vue.org/docs/components/pagination#alignment"
                  target="_blank"
                  class="btn btn-sm btn-soft-secondary"
                  >Docs <i class="mdi mdi-arrow-right align-middle"></i
                ></a>
              </div>
              <!-- end card header -->
              <div class="card-body">
                <b-pagination
                  :total-rows="10"
                  :per-page="5"
                  align="center"
                ></b-pagination>
                <b-pagination
                  :total-rows="10"
                  :per-page="5"
                  align="right"
                  class="mt-3"
                ></b-pagination>
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
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
            <h4 class="card-title">Pagination Sizing</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/pagination#button-size"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <b-pagination
              size="lg"
              :total-rows="10"
              :per-page="5"
              prev-text="Previous"
              next-text="Next"
            ></b-pagination>

            <b-pagination
              size="sm"
              :total-rows="10"
              :per-page="5"
            ></b-pagination>
          </div>
          <!-- end cardbody -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <div class="col-xl-4">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Pagination Rounded</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/pagination#pill-style"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <b-pagination
              pills
              class="pagination-rounded"
              :total-rows="10"
              :per-page="5"
            ></b-pagination>
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
        <div class="mt-3 mb-4">
          <h5 class="mb-0 pb-1 text-decoration-underline">Spinners</h5>
        </div>
        <div class="row">
          <div class="col-xl-6">
            <div class="card">
              <div
                class="card-header justify-content-between d-flex align-items-center"
              >
                <h4 class="card-title">Border Spinner</h4>
                <a
                  href="https://bootstrap-vue.org/docs/components/spinner#spinners"
                  target="_blank"
                  class="btn btn-sm btn-soft-secondary"
                  >Docs <i class="mdi mdi-arrow-right align-middle"></i
                ></a>
              </div>
              <!-- end card header -->
              <div class="card-body">
                <div>
                  <b-spinner
                    variant="primary"
                    label="Spinning"
                    class="me-2"
                  ></b-spinner>
                  <b-spinner
                    variant="secondary"
                    label="Spinning"
                    class="me-2"
                  ></b-spinner>
                  <b-spinner
                    variant="success"
                    label="Spinning"
                    class="me-2"
                  ></b-spinner>
                  <b-spinner
                    variant="info"
                    label="Spinning"
                    class="me-2"
                  ></b-spinner>
                  <b-spinner
                    variant="warning"
                    label="Spinning"
                    class="me-2"
                  ></b-spinner>
                  <b-spinner
                    variant="danger"
                    label="Spinning"
                    class="me-2"
                  ></b-spinner>
                  <b-spinner
                    variant="purple"
                    label="Spinning"
                    class="me-2"
                  ></b-spinner>
                  <b-spinner
                    variant="dark"
                    label="Spinning"
                    class="me-2"
                  ></b-spinner>
                  <b-spinner variant="light" label="Spinning"></b-spinner>
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
                <h4 class="card-title">Growing Spinner</h4>
                <a
                  href="https://bootstrap-vue.org/docs/components/spinner#spinners"
                  target="_blank"
                  class="btn btn-sm btn-soft-secondary"
                  >Docs <i class="mdi mdi-arrow-right align-middle"></i
                ></a>
              </div>
              <!-- end card header -->
              <div class="card-body">
                <div>
                  <b-spinner
                    type="grow"
                    variant="primary"
                    label="Spinning"
                    class="me-2"
                  ></b-spinner>
                  <b-spinner
                    type="grow"
                    variant="secondary"
                    label="Spinning"
                    class="me-2"
                  ></b-spinner>
                  <b-spinner
                    type="grow"
                    variant="success"
                    label="Spinning"
                    class="me-2"
                  ></b-spinner>
                  <b-spinner
                    type="grow"
                    variant="info"
                    label="Spinning"
                    class="me-2"
                  ></b-spinner>
                  <b-spinner
                    type="grow"
                    variant="warning"
                    label="Spinning"
                    class="me-2"
                  ></b-spinner>
                  <b-spinner
                    type="grow"
                    variant="danger"
                    label="Spinning"
                    class="me-2"
                  ></b-spinner>
                  <b-spinner
                    type="grow"
                    variant="purple"
                    label="Spinning"
                    class="me-2"
                  ></b-spinner>
                  <b-spinner
                    type="grow"
                    variant="dark"
                    label="Spinning"
                    class="me-2"
                  ></b-spinner>
                  <b-spinner
                    type="grow"
                    variant="light"
                    label="Spinning"
                  ></b-spinner>
                </div>
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>
