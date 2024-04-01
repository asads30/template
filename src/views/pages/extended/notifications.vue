<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Notifications component
 */
export default {
  page: {
    title: "Notifications",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Notifications",
      items: [
        {
          text: "Extended UI",
        },
        {
          text: "Notifications",
          active: true,
        },
      ],
    };
  },
  components: {
    Layout,
    PageHeader,
  },
  methods: {
    successAlert() {
      this.$alertify.success("Success message");
    },
    defaultAlert() {
      this.$alertify.message("Normal message");
    },
    errorAlert() {
      this.$alertify.error("Error message");
    },
    warningAlert() {
      this.$alertify.warning("Warning message");
    },
    dialogAlert() {
      this.$alertify.confirmWithTitle(
        "Alert Title",
        "Alert Message!",
        () => {
          this.$alertify.success("Ok");
        }
      );
    },
    confirmAlert() {
      this.$alertify.confirm(
        "This is a confirm dialog.",
        () => {
          this.$alertify.success("Ok");
        },
        () => {
          this.$alertify.error("Cancel");
        }
      );
    },
    promptAlert() {
      this.$alertify.prompt(
        "This is a prompt dialog.",
        "Default value",
        (evt, value) => {
          this.$alertify.success("Ok: " + value);
        },
        () => {
          this.$alertify.error("Cancel");
        }
      );
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
            <h4 class="card-title">Default Notifications</h4>
            <a
              href="https://www.npmjs.com/package/vue-alertify/v/1.0.2"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="table-responsive">
              <table class="table mb-0">
                <tbody>
                  <tr>
                    <td>Default alert</td>
                    <td class="text-end">
                      <a
                        href="javascript: void(0);"
                        id="alert-message"
                        class="btn btn-primary btn-sm"
                        @click="defaultAlert()"
                        >Click me</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>Success alert</td>
                    <td class="text-end">
                      <a
                        href="javascript: void(0);"
                        id="alert-success"
                        class="btn btn-primary btn-sm"
                        @click="successAlert()"
                        >Click me</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>Error alert</td>
                    <td class="text-end">
                      <a
                        href="javascript: void(0);"
                        id="alert-error"
                        class="btn btn-primary btn-sm"
                        @click="errorAlert()"
                        >Click me</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>Warning alert</td>
                    <td class="text-end">
                      <a
                        href="javascript: void(0);"
                        id="alert-warning"
                        class="btn btn-primary btn-sm"
                        @click="warningAlert()"
                        >Click me</a
                      >
                    </td>
                  </tr>
                </tbody>
                <!-- end tbody -->
              </table>
              <!-- end table -->
            </div>
            <!-- end table responsive -->
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
            <h4 class="card-title">Default Dialogs</h4>
            <a
              href="https://www.npmjs.com/package/vue-alertify/v/1.0.2"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="table-responsive">
              <table class="table mb-0">
                <tbody>
                  <tr>
                    <td>Alert</td>
                    <td class="text-end">
                      <a
                        href="javascript: void(0);"
                        id="alert"
                        class="btn btn-primary btn-sm"
                        @click="dialogAlert()"
                        >Click me</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>Confirm</td>
                    <td class="text-end">
                      <a
                        href="javascript: void(0);"
                        id="alert-confirm"
                        class="btn btn-primary btn-sm"
                        @click="confirmAlert()"
                        >Click me</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>Prompt</td>
                    <td class="text-end">
                      <a
                        href="javascript: void(0);"
                        id="alert-prompt"
                        class="btn btn-primary btn-sm"
                        @click="promptAlert()"
                        >Click me</a
                      >
                    </td>
                  </tr>
                </tbody>
                <!-- end tbody -->
              </table>
              <!-- end table -->
            </div>
            <!-- end table responsive -->
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
