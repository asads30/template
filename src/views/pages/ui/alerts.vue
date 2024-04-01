<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Alerts component
 */
export default {
  page: {
    title: "Alerts",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "Alerts",
      items: [
        {
          text: "UI Elements",
        },
        {
          text: "Alerts",
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
            <h4 class="card-title">Default Alerts</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/alert#overview"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <b-alert show variant="primary"
              >A simple primary alert—check it out!</b-alert
            >
            <b-alert show variant="secondary"
              >A simple secondary alert—check it out!</b-alert
            >
            <b-alert show variant="success"
              >A simple success alert—check it out!</b-alert
            >
            <b-alert show variant="purple"
              >A simple purple alert—check it out!</b-alert
            >
            <b-alert show variant="danger"
              >A simple danger alert—check it out!</b-alert
            >
            <b-alert show variant="warning"
              >A simple warning alert—check it out!</b-alert
            >
            <b-alert show variant="info"
              >A simple info alert—check it out!</b-alert
            >
            <b-alert show variant="light"
              >A simple light alert—check it out!</b-alert
            >
            <b-alert show variant="dark"
              >A simple dark alert—check it out!</b-alert
            >
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <div class="col-xl-4">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Alerts with Icon</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/alert"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <b-alert show variant="primary" dismissible>
              <i class="uil uil-user-circle me-2"></i>
              A simple primary alert—check it out!
            </b-alert>
            <b-alert show variant="secondary" dismissible>
              <i class="uil uil-pen me-2"></i>
              A simple secondary alert—check it out!
            </b-alert>
            <b-alert show variant="success" dismissible>
              <i class="uil uil-check me-2"></i>
              A simple success alert—check it out!
            </b-alert>
            <b-alert show variant="purple" dismissible>
              <i class="uil uil-bag me-2"></i>
              A simple purple alert—check it out!
            </b-alert>
            <b-alert show variant="danger" dismissible>
              <i class="uil uil-exclamation-octagon me-2"></i>
              A simple danger alert—check it out!
            </b-alert>
            <b-alert show variant="warning" dismissible>
              <i class="uil uil-exclamation-triangle me-2"></i>
              A simple warning alert—check it out!
            </b-alert>
            <b-alert show variant="info" dismissible>
              <i class="uil uil-question-circle me-2"></i>
              A simple info alert—check it out!
            </b-alert>
            <b-alert show variant="light" dismissible>
              <i class="uil uil-moon me-2"></i>
              A simple light alert—check it out!
            </b-alert>
            <b-alert show variant="dark" dismissible>
              <i class="uil uil-location-arrow-alt me-2"></i>
              A simple dark alert—check it out!
            </b-alert>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <div class="col-xl-4">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Dismissing Alerts</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/alert#dismissible-alerts"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <b-alert show variant="primary" dismissible>
              A simple primary alert—check it out!
            </b-alert>
            <b-alert show variant="secondary" dismissible>
              A simple secondary alert—check it out!
            </b-alert>
            <b-alert show variant="success" dismissible>
              A simple success alert—check it out!
            </b-alert>
            <b-alert show variant="purple" dismissible>
              A simple purple alert—check it out!
            </b-alert>
            <b-alert show variant="danger" dismissible>
              A simple danger alert—check it out!
            </b-alert>
            <b-alert show variant="warning" dismissible>
              A simple warning alert—check it out!
            </b-alert>
            <b-alert show variant="info" dismissible>
              A simple info alert—check it out!
            </b-alert>
            <b-alert show variant="light" dismissible>
              A simple light alert—check it out!
            </b-alert>
            <b-alert show variant="dark" dismissible>
              A simple dark alert—check it out!
            </b-alert>
          </div>
          <!-- end card-body -->
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
            <h4 class="card-title">Alerts Link Color</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/alert#color-of-links-within-alerts"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="">
              <b-alert show variant="primary">
                A simple primary alert with
                <a href="#" class="alert-link">an example link</a>. Give it a
                click if you like.
              </b-alert>
              <b-alert show variant="secondary">
                A simple secondary alert with
                <a href="#" class="alert-link">an example link</a>. Give it a
                click if you like.
              </b-alert>
              <b-alert show variant="success">
                A simple success alert with
                <a href="#" class="alert-link">an example link</a>. Give it a
                click if you like.
              </b-alert>
              <b-alert show variant="purple">
                A simple purple alert with
                <a href="#" class="alert-link">an example link</a>. Give it a
                click if you like.
              </b-alert>
              <b-alert show variant="danger">
                A simple danger alert with
                <a href="#" class="alert-link">an example link</a>. Give it a
                click if you like.
              </b-alert>
              <b-alert show variant="warning">
                A simple warning alert with
                <a href="#" class="alert-link">an example link</a>. Give it a
                click if you like.
              </b-alert>
              <b-alert show variant="info">
                A simple info alert with
                <a href="#" class="alert-link">an example link</a>. Give it a
                click if you like.
              </b-alert>
              <b-alert show variant="light">
                A simple light alert with
                <a href="#" class="alert-link">an example link</a>. Give it a
                click if you like.
              </b-alert>
              <b-alert show variant="dark">
                A simple dark alert with
                <a href="#" class="alert-link">an example link</a>. Give it a
                click if you like.
              </b-alert>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <div class="col-xl-4">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Border Alerts</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="">
              <b-alert
                show
                dismissible
                variant="primary"
                class="alert-top-border"
                role="alert"
              >
                <i
                  class="uil uil-user-circle text-primary font-size-16 me-2"
                ></i>
                A simple border primary alert
              </b-alert>
              <b-alert
                show
                dismissible
                variant="secondary"
                class="alert-top-border"
                role="alert"
              >
                <i class="uil uil-pen font-size-16 text-secondary me-2"></i>
                A simple border secondary alert
              </b-alert>
              <b-alert
                show
                dismissible
                variant="success"
                class="alert-top-border"
                role="alert"
              >
                <i class="uil uil-check font-size-16 text-success me-2"></i>
                A simple border success alert
              </b-alert>
              <b-alert
                show
                dismissible
                variant="purple"
                class="alert-top-border"
                role="alert"
              >
                <i class="uil uil-bag font-size-16 text-purple me-2"></i>
                A simple border purple alert
              </b-alert>
              <b-alert
                show
                dismissible
                variant="danger"
                class="alert-top-border"
                role="alert"
              >
                <i
                  class="uil uil-exclamation-octagon font-size-16 text-danger me-2"
                ></i>
                A simple border danger alert
              </b-alert>
              <b-alert
                show
                dismissible
                variant="warning"
                class="alert-top-border"
                role="alert"
              >
                <i
                  class="uil uil-exclamation-triangle font-size-16 text-warning me-2"
                ></i>
                A simple border warning alert
              </b-alert>
              <b-alert
                show
                dismissible
                variant="info"
                class="alert-top-border"
                role="alert"
              >
                <i
                  class="uil uil-question-circle font-size-16 text-info me-2"
                ></i>
                A simple border info alert
              </b-alert>
              <b-alert
                show
                dismissible
                variant="light"
                class="alert-top-border"
                role="alert"
              >
                <i class="uil uil-moon font-size-16 me-2"></i>
                A simple border light alert
              </b-alert>
              <b-alert
                show
                dismissible
                variant="dark"
                class="alert-top-border aler"
                role="alert"
              >
                <i
                  class="uil uil-location-arrow-alt font-size-16 text-dark me-2"
                ></i>
                A simple border dark alert
              </b-alert>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->

      <div class="col-xl-4">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Outline Alerts</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <b-alert show dismissible variant="primary" class="alert-outline">
              <i class="uil uil-user-circle text-primary font-size-16 me-2"></i>
              A simple outline primary alert
            </b-alert>
            <b-alert show dismissible variant="secondary" class="alert-outline">
              <i class="uil uil-pen font-size-16 text-secondary me-2"></i>
              A simple outline secondary alert
            </b-alert>
            <b-alert show dismissible variant="success" class="alert-outline">
              <i class="uil uil-check font-size-16 text-success me-2"></i>
              A simple outline success alert
            </b-alert>
            <b-alert show dismissible variant="purple" class="alert-outline">
              <i class="uil uil-bag font-size-16 text-purple me-2"></i>
              A simple outline purple alert
            </b-alert>
            <b-alert show dismissible variant="danger" class="alert-outline">
              <i
                class="uil uil-exclamation-octagon font-size-16 text-danger me-2"
              ></i>
              A simple outline danger alert
            </b-alert>
            <b-alert show dismissible variant="warning" class="alert-outline">
              <i
                class="uil uil-exclamation-triangle font-size-16 text-warning me-2"
              ></i>
              A simple outline warning alert
            </b-alert>
            <b-alert show dismissible variant="info" class="alert-outline">
              <i
                class="uil uil-question-circle font-size-16 text-info me-2"
              ></i>
              A simple outline info alert
            </b-alert>
            <b-alert show dismissible variant="light" class="alert-outline">
              <i class="uil uil-moon font-size-16 me-2"></i>
              A simple outline light alert
            </b-alert>
            <b-alert show dismissible variant="dark" class="alert-outline">
              <i
                class="uil uil-location-arrow-alt font-size-16 text-dark me-2"
              ></i>
              A simple outline dark alert
            </b-alert>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>
