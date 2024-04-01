<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Buttons component
 */
export default {
  page: {
    title: "Buttons",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "Buttons",
      items: [
        {
          text: "UI Elements",
        },
        {
          text: "Buttons",
          active: true,
        },
      ],
      buttons: [
        { caption: "Checkbox 1", state: true },
        { caption: "Checkbox 2", state: false },
        { caption: "Checkbox 3", state: false },
      ],
      isToggle: false,
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
            <h4 class="card-title">Default Buttons</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/button#overview"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="d-flex flex-wrap gap-2">
              <b-button variant="primary">Primary</b-button>
              <b-button variant="secondary">Secondary</b-button>
              <b-button variant="success">Success</b-button>
              <b-button variant="info">Info</b-button>
              <b-button variant="warning">Warning</b-button>
              <b-button variant="danger">Danger</b-button>
              <b-button variant="purple">Purple</b-button>
              <b-button variant="dark">Dark</b-button>
              <b-button variant="link">Link</b-button>
              <b-button variant="light">Light</b-button>
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
            <h4 class="card-title">Outline Buttons</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/button#outline-color-variants"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="d-flex flex-wrap gap-2">
              <b-button variant="outline-primary">Primary</b-button>
              <b-button variant="outline-secondary">Secondary</b-button>
              <b-button variant="outline-success">Success</b-button>
              <b-button variant="outline-info">Info</b-button>
              <b-button variant="outline-warning">Warning</b-button>
              <b-button variant="outline-danger">Danger</b-button>
              <b-button variant="outline-purple">Purple</b-button>
              <b-button variant="outline-dark">Dark</b-button>
              <b-button variant="outline-light">Light</b-button>
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
            <h4 class="card-title">Soft Buttons</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="d-flex flex-wrap gap-2">
              <b-button class="btn btn-soft-primary">
                Primary
              </b-button>
              <b-button class="btn btn-soft-secondary">
                Secondary
              </b-button>
              <b-button class="btn btn-soft-success">
                Success
              </b-button>
              <b-button class="btn btn-soft-info">Info</b-button>
              <b-button class="btn btn-soft-warning">
                Warning
              </b-button>
              <b-button class="btn btn-soft-danger">Danger</b-button>
              <b-button class="btn btn-soft-purple">Purple</b-button>
              <b-button class="btn btn-soft-dark">Dark</b-button>
              <b-button class="btn btn-soft-light">Light</b-button>
            </div>
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
            <h4 class="card-title">Rounded Default Buttons</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/button#pill-style"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
            >
              Docs <i class="mdi mdi-arrow-right align-middle"></i>
            </a>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="d-flex flex-wrap gap-2">
              <b-button variant="primary" pill>Primary</b-button>
              <b-button variant="secondary" pill>Secondary</b-button>
              <b-button variant="success" pill>Success</b-button>
              <b-button variant="info" pill>Info</b-button>
              <b-button variant="warning" pill>Warning</b-button>
              <b-button variant="danger" pill>Danger</b-button>
              <b-button variant="purple" pill>Purple</b-button>
              <b-button variant="dark" pill>Dark</b-button>
              <b-button variant="link" pill>Link</b-button>
              <b-button variant="light" pill>Light</b-button>
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
            <h4 class="card-title">Rounded Outline Buttons</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/button#pill-style"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
            >
              Docs <i class="mdi mdi-arrow-right align-middle"></i>
            </a>
          
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="d-flex flex-wrap gap-2">
              <b-button variant="outline-primary" pill>Primary</b-button>
              <b-button variant="outline-secondary" pill>Secondary</b-button>
              <b-button variant="outline-success" pill>Success</b-button>
              <b-button variant="outline-info" pill>Info</b-button>
              <b-button variant="outline-warning" pill>Warning</b-button>
              <b-button variant="outline-danger" pill>Danger</b-button>
              <b-button variant="outline-purple" pill>Purple</b-button>
              <b-button variant="outline-dark" pill>Dark</b-button>
              <b-button variant="outline-link" pill>Link</b-button>
              <b-button variant="outline-light" pill>Light</b-button>
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
            <h4 class="card-title">Rounded Soft Buttons</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="d-flex flex-wrap gap-2">
              <b-button pills class="btn btn-soft-primary">
                Primary
              </b-button>
              <b-button pills class="btn btn-soft-secondary">
                Secondary
              </b-button>
              <b-button pills class="btn btn-soft-success">
                Success
              </b-button>
              <b-button pills class="btn btn-soft-info">
                Info
              </b-button>
              <b-button pills class="btn btn-soft-warning">
                Warning
              </b-button>
              <b-button pills class="btn btn-soft-danger">
                Danger
              </b-button>
              <b-button pills class="btn btn-soft-purple">
                Purple
              </b-button>
              <b-button pills class="btn btn-soft-dark">
                Dark
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
      <div class="col-xl-4">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Default Buttons with Icon</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="d-flex flex-wrap gap-2">
              <b-button variant="primary"
                ><i class="uil uil-user me-2"></i> Primary</b-button
              >
              <b-button variant="success"
                ><i class="uil uil-check me-2"></i> Success</b-button
              >
              <b-button variant="warning"
                ><i class="uil uil-exclamation-triangle me-2"></i>
                Warning</b-button
              >
              <b-button variant="info"
                ><i class="uil uil-info-circle me-2"></i> Info</b-button
              >
              <b-button variant="danger"
                ><i class="uil uil-exclamation-octagon me-2"></i>
                Danger</b-button
              >
              <b-button variant="purple"
                ><i class="uil uil-exclamation-octagon me-2"></i>
                Purple</b-button
              >
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
            <h4 class="card-title">Outline Buttons with Icon</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="d-flex flex-wrap gap-2">
              <b-button variant="outline-primary"
                ><i class="uil uil-user me-2"></i>Primary</b-button
              >
              <b-button variant="outline-success"
                ><i class="uil uil-check me-2"></i>Success</b-button
              >
              <b-button variant="outline-warning"
                ><i class="uil uil-exclamation-triangle me-2"></i
                >Warning</b-button
              >
              <b-button variant="outline-info"
                ><i class="uil uil-info-circle me-2"></i>Info</b-button
              >
              <b-button variant="outline-danger"
                ><i class="uil uil-exclamation-octagon me-2"></i
                >Danger</b-button
              >
              <b-button variant="outline-purple"
                ><i class="uil uil-exclamation-octagon me-2"></i
                >Purple</b-button
              >
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
            <h4 class="card-title">Soft Buttons with Icon</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="d-flex flex-wrap gap-2">
              <b-button class="btn-soft-primary">
                <i class="uil uil-user me-2"></i>Primary
              </b-button>
              <b-button class="btn-soft-success">
                <i class="uil uil-check me-2"></i>Success
              </b-button>
              <b-button class="btn-soft-warning">
                <i class="uil uil-exclamation-triangle me-2"></i> Warning
              </b-button>
              <b-button class="btn-soft-info">
                <i class="uil uil-info-circle me-2"></i> Info
              </b-button>
              <b-button class="btn-soft-danger">
                <i class="uil uil-exclamation-octagon me-2"></i> Danger
              </b-button>
              <b-button class="btn-soft-purple">
                <i class="uil uil-exclamation-octagon me-2"></i> Purple
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
      <div class="col-xl-4">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Default Icon Buttons</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="d-flex flex-wrap gap-2">
              <b-button variant="primary">
                <i class="uil uil-user"></i>
              </b-button>
              <b-button variant="success">
                <i class="uil uil-check-circle"></i>
              </b-button>
              <b-button variant="warning">
                <i class="uil uil-exclamation-triangle"></i>
              </b-button>
              <b-button variant="info">
                <i class="uil uil-exclamation-octagon"></i>
              </b-button>
              <b-button variant="purple">
                <i class="uil uil-bag-alt"></i>
              </b-button>
              <b-button variant="danger">
                <i class="uil uil-ban"></i>
              </b-button>
              <b-button variant="secondary">
                <i class="uil uil-location-arrow-alt"></i>
              </b-button>
              <b-button variant="light">
                <i class="uil uil-moon"></i>
              </b-button>
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
            <h4 class="card-title">Outline Icon Buttons</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="d-flex flex-wrap gap-2">
              <button class="btn btn-outline-primary">
                <i class="uil uil-user"></i>
              </button>
              <button class="btn btn-outline-success">
                <i class="uil uil-check-circle"></i>
              </button>
              <button class="btn btn-outline-warning">
                <i class="uil uil-exclamation-triangle"></i>
              </button>
              <button class="btn btn-outline-info">
                <i class="uil uil-exclamation-octagon"></i>
              </button>
              <button class="btn btn-outline-purple">
                <i class="uil uil-bag-alt"></i>
              </button>
              <button class="btn btn-outline-danger">
                <i class="uil uil-ban"></i>
              </button>
              <button class="btn btn-outline-secondary">
                <i class="uil uil-location-arrow-alt"></i>
              </button>
              <button class="btn btn-outline-light">
                <i class="uil uil-moon"></i>
              </button>
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
            <h4 class="card-title">Soft Icon Buttons</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="d-flex flex-wrap gap-2">
              <button type="button" class="btn btn-soft-primary">
                <i class="uil uil-user"></i>
              </button>
              <button type="button" class="btn btn-soft-success">
                <i class="uil uil-check-circle"></i>
              </button>
              <button type="button" class="btn btn-soft-warning">
                <i class="uil uil-exclamation-triangle"></i>
              </button>
              <button type="button" class="btn btn-soft-info">
                <i class="uil uil-exclamation-octagon"></i>
              </button>
              <button type="button" class="btn btn-soft-purple">
                <i class="uil uil-bag-alt"></i>
              </button>
              <button type="button" class="btn btn-soft-danger">
                <i class="uil uil-ban"></i>
              </button>
              <button type="button" class="btn btn-soft-secondary">
                <i class="uil uil-location-arrow-alt"></i>
              </button>
              <button type="button" class="btn btn-soft-light">
                <i class="uil uil-moon"></i>
              </button>
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
            <h4 class="card-title">Button Tags</h4>
             <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="d-flex flex-wrap gap-2">
              <div class="button-items">
                <a class="btn btn-primary" href="#" role="button">Link</a>
                <button class="btn btn-success" type="submit">Button</button>
                <input class="btn btn-info" type="button" value="Input" />
                <input class="btn btn-danger" type="submit" value="Submit" />
                <input class="btn btn-warning" type="reset" value="Reset" />
              </div>
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
            <h4 class="card-title">Toggle States</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/button#pressed-state-and-toggling"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <b-button :pressed.sync="isToggle" variant="primary"
              >Single toggle</b-button
            >
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
            <h4 class="card-title">Button Toolbar</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/button-toolbar"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="d-flex flex-wrap gap-2">
              <b-button-toolbar key-nav>
                <b-button-group class="mx-1">
                  <b-button variant="light">1</b-button>
                  <b-button variant="light">2</b-button>
                  <b-button variant="light">3</b-button>
                  <b-button variant="light">4</b-button>
                </b-button-group>
                <b-button-group class="mx-1">
                  <b-button variant="light">5</b-button>
                  <b-button variant="light">6</b-button>
                  <b-button variant="light">7</b-button>
                </b-button-group>
                <b-button-group class="mx-1">
                  <b-button variant="light">8</b-button>
                </b-button-group>
              </b-button-toolbar>
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
            <h4 class="card-title">Button Group</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/button-group"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <b-button-group>
                  <b-button variant="primary">Left</b-button>
                  <b-button variant="primary">Middle</b-button>
                  <b-button variant="primary">Right</b-button>
                </b-button-group>
              </div>

              <div class="col-md-6">
                <b-button-group class="mt-4 mt-md-0">
                  <b-button variant="light">
                    <i class="uil uil-align-left"></i>
                  </b-button>
                  <b-button variant="light">
                    <i class="uil uil-align-center-alt"></i>
                  </b-button>
                  <b-button variant="light">
                    <i class="uil uil-align-right"></i>
                  </b-button>
                </b-button-group>
              </div>
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
            <h4 class="card-title">Buttons Width</h4>
            <p class="m-0 badge badge-soft-primary py-2">Dashonic Only</p>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="d-flex flex-wrap gap-2">
              <b-button variant="primary" class="w-xs">Xs</b-button>
              <b-button variant="danger" class="w-sm">Small</b-button>
              <b-button variant="warning" class="w-md">Medium</b-button>
              <b-button variant="success" class="w-lg">Large</b-button>
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
            <h4 class="card-title">Buttons Sizes</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/button#component-reference"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="d-flex flex-wrap gap-2 align-items-center">
              <b-button size="lg" variant="primary">
                Large button
              </b-button>
              <b-button size="lg" variant="light">
                Large button
              </b-button>
              <b-button size="sm" variant="primary">
                Small button
              </b-button>
              <b-button size="sm" variant="light">
                Small button
              </b-button>
            </div>
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
            <h4 class="card-title">Sizing</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/button#component-reference"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="d-flex flex-wrap gap-2">
              <b-button-group size="lg">
                <b-button variant="primary">Left</b-button>
                <b-button variant="primary">Middle</b-button>
                <b-button variant="primary">Right</b-button>
              </b-button-group>
              <br />
              <b-button-group>
                <b-button variant="light">Left</b-button>
                <b-button variant="light">Middle</b-button>
                <b-button variant="light">Right</b-button>
              </b-button-group>
              <br />
              <b-button-group size="sm">
                <b-button variant="danger">Left</b-button>
                <b-button variant="danger">Middle</b-button>
                <b-button variant="danger">Right</b-button>
              </b-button-group>
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
            <h4 class="card-title">Block Buttons</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/button#block-level-buttons"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="d-grid gap-2">
              <b-button variant="primary" block size="lg">
                Block level button
              </b-button>
              <b-button variant="light" block size="sm">
                Block level button
              </b-button>
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
            <h4 class="card-title">Checkbox & Radio Buttons</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/button-group"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="">
              <b-button-group size="md">
                <b-button
                  v-for="(btn, idx) in buttons"
                  :key="idx"
                  :pressed.sync="btn.state"
                  variant="primary"
                >
                  {{ btn.caption }}
                </b-button>
              </b-button-group>

              <div class="btn-group mt-2" role="group">
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autocomplete="off"
                  checked
                />
                <label class="btn btn-outline-secondary" for="btnradio1"
                  >Radio 1</label
                >

                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  autocomplete="off"
                />
                <label class="btn btn-outline-secondary" for="btnradio2"
                  >Radio 2</label
                >

                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio3"
                  autocomplete="off"
                />
                <label class="btn btn-outline-secondary" for="btnradio3"
                  >Radio 3</label
                >
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
      <div class="col-xl-4">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Vertical variation</h4>
            <a
              href="https://bootstrap-vue.org/docs/components/button-group#comp-ref-b-button-group"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->

          <div class="card-body">
            <div class="d-flex flex-wrap gap-2">
              <b-button-group vertical>
                <b-button variant="light">Button</b-button>
                <b-dropdown variant="light">
                  <template slot="button-content">
                    Dropdown
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <b-dropdown-item>Dropdown Link</b-dropdown-item>
                  <b-dropdown-item>Dropdown Link</b-dropdown-item>
                </b-dropdown>
                <b-button variant="light">Button</b-button>
                <b-button variant="light">Button</b-button>
              </b-button-group>
            </div>
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
