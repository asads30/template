<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import "jsvectormap/dist/maps/world.js";
import "vuevectormap/src/scss/VueVectorMap.scss";
import "jsvectormap/dist/maps/canada.js";
import "jsvectormap/dist/maps/us-merc-en.js";

/**
 * Vector map component
 */
export default {
  page: {
    title: "Vector Maps",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "Vector Maps",
      items: [
        {
          text: "Maps",
        },
        {
          text: "Vector Maps",
          active: true,
        },
      ],
      map: null,
      markers: [
        {
          name: "Greenland",
          coords: [72, -42],
        },
        {
          name: "Canada",
          coords: [56.1304, -106.3468],
        },
        {
          name: "Brazil",
          coords: [-14.235, -51.9253],
        },
        {
          name: "Egypt",
          coords: [26.8206, 30.8025],
        },
        {
          name: "Russia",
          coords: [61, 105],
        },
        {
          name: "China",
          coords: [35.8617, 104.1954],
        },
        {
          name: "United States",
          coords: [37.0902, -95.7129],
        },
        {
          name: "Norway",
          coords: [60.472024, 8.468946],
        },
        {
          name: "Ukraine",
          coords: [48.379433, 31.16558],
        },
      ],
      regionStyle: {
        selected: {
          fill: "blue",
          opacity: 0.25,
        },
      },
      markerOption: [
        { name: "Palestine", coords: [31.9474, 35.2272] },
        { name: "Russia", coords: [61.524, 105.3188] },
        { name: "Canada", coords: [56.1304, -106.3468] },
        { name: "Greenland", coords: [71.7069, -42.6043] },
      ],
      markerStyle: {
        initial: { fill: "#038edc" },
        selected: { fill: "red" },
      },
      imageMarkerStyle: {
        initial: {
          image: require("@/assets/images/logo-sm.png"),
        },
      },
    };
  },
  components: {
    Layout,
    PageHeader,
  },
  computed: {
    labels() {
      return {
        markers: {
          render(marker) {
            return marker.name;
          },
        },
      };
    },
  },
  methods: {
    loaded(map) {
      window.addEventListener("resize", () => {
        map.updateSize();
      });
    },
  },
  mounted() {},
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">World Vector Map</h4>
            <a
              href="https://www.npmjs.com/package/vuevectormap"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div
              id="world-map-line-markers"
              style="height: 420px"
              class="jvm-container"
            >
              <vuevectormap
                ref="map"
                map="world"
                :zoomOnScroll="false"
                :zoomButtons="false"
                :region-style="{ initial: { fill: '#d1d5db' } }"
                :markers="markers"
                :lines="[
                  { from: 'Canada', to: 'Egypt' },
                  { from: 'Russia', to: 'Egypt' },
                  {
                    from: 'Greenland',
                    to: 'Egypt',
                  },
                  {
                    from: 'Brazil',
                    to: 'Egypt',
                  },
                  {
                    from: 'United States',
                    to: 'Egypt',
                  },
                  {
                    from: 'China',
                    to: 'Egypt',
                  },
                  {
                    from: 'Norway',
                    to: 'Egypt',
                  },
                  {
                    from: 'Ukraine',
                    to: 'Egypt',
                  },
                ]"
                :line-style="{ strokeDasharray: [6, 3, 6], animation: true }"
                @loaded="loaded"
              >
              </vuevectormap>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">World Vector Map with Markers</h4>
            <a
              href="https://www.npmjs.com/package/vuevectormap"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div id="world-map-markers" style="height: 350px">
              <vuevectormap
                ref="map"
                :selectedMarkers="[0, 2]"
                :region-style="{ initial: { fill: '#d1d5db' } }"
                :markers="markerOption"
                :markerStyle="markerStyle"
                :labels="labels"
                :zoomOnScroll="false"
                :zoomButtons="false"
                :line-style="{ strokeDasharray: [6, 3, 6], animation: true }"
              >
              </vuevectormap>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->

      <div class="col-lg-6">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">World Vector Map with Image Markers</h4>
            <a
              href="https://www.npmjs.com/package/vuevectormap"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div id="world-map-markers-image" style="height: 350px">
              <vuevectormap
                ref="map"
                :selectedMarkers="[0, 2]"
                :region-style="{ initial: { fill: '#d1d5db' } }"
                :markers="markerOption"
                :markerStyle="imageMarkerStyle"
                :labels="labels"
                :zoomOnScroll="false"
                :zoomButtons="false"
                :line-style="{ strokeDasharray: [6, 3, 6], animation: true }"
              >
              </vuevectormap>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div
            class="card-header justify-content-start d-flex align-items-center"
          >
            <h4 class="card-title">USA Vector Map</h4>
          </div>
          <div class="card-body">
            <div id="usa-vectormap" style="height: 350px">
              <vuevectormap
                ref="map"
                :zoomOnScroll="false"
                :zoomButtons="false"
                map="us_merc_en"
              ></vuevectormap>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->

      <div class="col-lg-6">
        <div class="card">
          <div
            class="card-header justify-content-start d-flex align-items-center"
          >
            <h4 class="card-title">Canada Vector Map</h4>
          </div>
          <div class="card-body">
            <div id="world-map-line-markers" style="height: 350px">
              <vuevectormap
                ref="map"
                :zoomOnScroll="false"
                :zoomButtons="false"
                map="canada"
              ></vuevectormap>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->
  </Layout>
</template>
