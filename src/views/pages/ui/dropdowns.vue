<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Dropdowns component
 */
export default {
  page: {
    title: "Dropdowns",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "Dropdowns",
      items: [
        {
          text: "UI Elements",
        },
        {
          text: "Dropdowns",
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
      <div class="col-xl-4">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Dropdowns Variant</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/dropdown#dropdowns"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="d-flex flex-wrap gap-2">
              <b-dropdown variant="primary">
                <template v-slot:button-content>
                  Primary
                  <i class="mdi mdi-chevron-down"></i>
                </template>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>
              <b-dropdown variant="success">
                <template v-slot:button-content>
                  Success
                  <i class="mdi mdi-chevron-down"></i>
                </template>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>

              <b-dropdown variant="purple">
                <template v-slot:button-content>
                  Purple
                  <i class="mdi mdi-chevron-down"></i>
                </template>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>

              <b-dropdown variant="light">
                <template v-slot:button-content>
                  Light
                  <i class="mdi mdi-chevron-down"></i>
                </template>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>

              <b-dropdown variant="info">
                <template v-slot:button-content>
                  Info
                  <i class="mdi mdi-chevron-down"></i>
                </template>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>
              <b-dropdown variant="secondary">
                <template v-slot:button-content>
                  Secondary
                  <i class="mdi mdi-chevron-down"></i>
                </template>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>
              <b-dropdown variant="warning">
                <template v-slot:button-content>
                  Warning
                  <i class="mdi mdi-chevron-down"></i>
                </template>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>
              <b-dropdown variant="danger">
                <template v-slot:button-content>
                  Danger
                  <i class="mdi mdi-chevron-down"></i>
                </template>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>
              <b-dropdown variant="dark">
                <template v-slot:button-content>
                  Dark
                  <i class="mdi mdi-chevron-down"></i>
                </template>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>
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
            <h4 class="card-title">Split Button Dropdowns</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/dropdown#split-button-support"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="d-flex flex-wrap gap-2">
              <b-dropdown split text="Primary" variant="primary">
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button
                  >Something else here</b-dropdown-item-button
                >
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item-button>Separated link</b-dropdown-item-button>
              </b-dropdown>

              <b-dropdown split text="Light" variant="light">
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button
                  >Something else here</b-dropdown-item-button
                >
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item-button>Separated link</b-dropdown-item-button>
              </b-dropdown>

              <b-dropdown split text="Success" variant="success">
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button
                  >Something else here</b-dropdown-item-button
                >
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item-button>Separated link</b-dropdown-item-button>
              </b-dropdown>

              <b-dropdown split text="Purple" variant="purple">
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button
                  >Something else here</b-dropdown-item-button
                >
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item-button>Separated link</b-dropdown-item-button>
              </b-dropdown>

              <b-dropdown split text="Info" variant="info">
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button
                  >Something else here</b-dropdown-item-button
                >
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item-button>Separated link</b-dropdown-item-button>
              </b-dropdown>

              <b-dropdown split text="Warning" variant="warning">
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button
                  >Something else here</b-dropdown-item-button
                >
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item-button>Separated link</b-dropdown-item-button>
              </b-dropdown>

              <b-dropdown split text="Danger" variant="danger">
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button
                  >Something else here</b-dropdown-item-button
                >
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item-button>Separated link</b-dropdown-item-button>
              </b-dropdown>

              <b-dropdown split text="Secondary" variant="secondary">
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button
                  >Something else here</b-dropdown-item-button
                >
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item-button>Separated link</b-dropdown-item-button>
              </b-dropdown>
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
            <h4 class="card-title">Dropdown Buttons Sizing</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/dropdown#styling-options"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="d-flex flex-wrap gap-2">
              <!-- Large button groups (default and split) -->

              <b-dropdown variant="primary" size="lg">
                <template v-slot:button-content>
                  Large button
                  <i class="mdi mdi-chevron-down"></i>
                </template>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>

              <b-dropdown
                split
                text="Large split button"
                size="lg"
                variant="light"
              >
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button
                  >Something else here</b-dropdown-item-button
                >
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item-button>Separated link</b-dropdown-item-button>
              </b-dropdown>

              <b-dropdown variant="primary" size="sm">
                <template v-slot:button-content>
                  Small button
                  <i class="mdi mdi-chevron-down"></i>
                </template>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>

              <!-- Small button groups (default and split) -->
              <b-dropdown split text="Small split button" variant="light" size="sm">
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>
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
      <div class="col-xl-4">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Menu Alignment</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/dropdown#component-reference"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <b-dropdown id="dropdown-dropright" right>
              <template slot="button-content">
                Menu is right-aligned
                <i class="mdi mdi-chevron-down"></i>
              </template>
              <b-dropdown-item href="#">Action</b-dropdown-item>
              <b-dropdown-item href="#">Another action</b-dropdown-item>
              <b-dropdown-item href="#">Something else here</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-xl-4">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Dropright Variation</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/dropdown#drop-right-or-left"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="d-flex flex-wrap gap-2">
              <!-- Default dropright button -->
              <b-dropdown variant="light" dropright>
                <template v-slot:button-content>
                  Dropright <i class="mdi mdi-chevron-right"></i>
                </template>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
              </b-dropdown>

              <b-dropdown variant="light" dropleft>
                <template v-slot:button-content>
                  <i class="mdi mdi-chevron-left"></i> Dropleft
                </template>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
              </b-dropdown>
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
            <h4 class="card-title">Dropdown Menu Dark</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <b-dropdown menu-class="dropdown-menu-dark">
              <template v-slot:button-content>
                Dropdown button <i class="mdi mdi-chevron-down"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>Separated link</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row"></div>
    <!-- end row -->
  </Layout>
</template>
