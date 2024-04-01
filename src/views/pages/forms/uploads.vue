<script>
import vue2Dropzone from "vue2-dropzone";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import 'vue2-dropzone/dist/vue2Dropzone.min.css';

/**
 * Form Uploads component
 */
export default {
  page: {
    title: "Form File Upload",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Form File Upload",
      items: [
        {
          text: "Forms",
        },
        {
          text: "Form File Upload",
          active: true,
        },
      ],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" },
      },
    };
  },
  components: {
    Layout,
    PageHeader,
    vueDropzone: vue2Dropzone,
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="card">
      <div class="card-header justify-content-between d-flex align-items-center">
        <h4 class="card-title">Dropzone</h4>
        <a href="https://www.npmjs.com/package/vue2-dropzone" target="_blank" class="btn btn-sm btn-soft-secondary">Docs <i class="mdi mdi-arrow-right align-middle"></i></a>
      </div>
      <div class="card-body">
        <vue-dropzone
          id="dropzone"
          ref="myVueDropzone"
          :use-custom-slot="true"
          :options="dropzoneOptions"
        >
          <div class="dropzone-custom-content">
            <i class="display-4 text-muted bx bxs-cloud-upload"></i>
            <h4>Drop files here or click to upload.</h4>
          </div>
        </vue-dropzone>
        <div class="text-center mt-4">
          <button type="button" class="btn btn-primary">Send Files</button>
        </div>
      </div>
    </div>
  </Layout>
</template>
