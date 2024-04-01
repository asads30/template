<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import Basic from "./basic";
import Boundary from "./boundary";
import Icons from "./icons";
import Geometry from "./geometry";
import Markers from "./markers";

/**
 * Leaflet-map component
 */
export default {
  page: {
    title: "Leaflet Map",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: {
    Layout,
    PageHeader,
    Boundary,
    Icons,
    Basic,
    Geometry,
    Markers
  },
  data() {
    return {
      title: "Leaflet Maps",
      items: [
        {
          text: "Maps",
          href: "/"
        },
        {
          text: "Leaflet Maps",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header justify-content-between d-flex align-items-center">
            <h4 class="card-title">Example</h4>
              <a href="https://www.npmjs.com/package/vue2-leaflet" target="_blank" class="btn btn-sm btn-soft-secondary">Docs <i class="mdi mdi-arrow-right align-middle"></i></a>
          </div>
          <div class="card-body">
            <Basic class="leaflet-map"/>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header justify-content-between d-flex align-items-center">
            <h4 class="card-title">Fixed Bounds</h4>
              <a href="https://www.npmjs.com/package/vue2-leaflet" target="_blank" class="btn btn-sm btn-soft-secondary">Docs <i class="mdi mdi-arrow-right align-middle"></i></a>
          </div>
          <div class="card-body">
            <Boundary class="leaflet-map"/>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header justify-content-between d-flex align-items-center">
            <h4 class="card-title">Custom Icon Example</h4>
              <a href="https://www.npmjs.com/package/vue2-leaflet" target="_blank" class="btn btn-sm btn-soft-secondary">Docs <i class="mdi mdi-arrow-right align-middle"></i></a>
          </div>
          <div class="card-body">
            <Icons class="leaflet-map"/>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header justify-content-between d-flex align-items-center">
            <h4 class="card-title">Geometry Example</h4>
              <a href="https://www.npmjs.com/package/vue2-leaflet" target="_blank" class="btn btn-sm btn-soft-secondary">Docs <i class="mdi mdi-arrow-right align-middle"></i></a>
          </div>
          <div class="card-body">
            <Geometry class="leaflet-map"/>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header justify-content-between d-flex align-items-center">
            <h4 class="card-title">Draggable marker</h4>
              <a href="https://www.npmjs.com/package/vue2-leaflet" target="_blank" class="btn btn-sm btn-soft-secondary">Docs <i class="mdi mdi-arrow-right align-middle"></i></a>
          </div>
          <div class="card-body">
            <Markers class="leaflet-map"/>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>