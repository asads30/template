<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { icons } from "./data";

/**
 * Material-design icons component
 */
export default {
  page: {
    title: "Material Design Icons",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      icons: icons,
      title: "Material Design",
      items: [
        {
          text: "Icons",
          href: "/",
        },
        {
          text: "Material Design",
          active: true,
        },
      ],
      newIconsCount: 0,
      iconsCount: 0
    };
  },
  components: {
    Layout,
    PageHeader,
  },
  mounted() {
    this.icons.push({ name: "blank", hex: "f68c" });
    this.icons.forEach((icon)  => {
      var item = this.getIconItem(icon, this.isNew(icon));
      document.getElementById("icons").appendChild(item);
      if (this.isNew(icon)) {
        var newItem = this.getIconItem(icon, false, false);
        document.getElementById("newIcons").appendChild(newItem);
        this.newIconsCount++;
      }
      this.iconsCount++;
    });
  },
  methods: {
    // icons
    isNew(icon) {
      return icon.version === "5.5.55";
    },
    isDeprecated(icon) {
      return typeof icon.deprecated == "undefined" ? false : icon.deprecated;
    },
    copyText(text) {
      var copyFrom = document.createElement("textarea");
      copyFrom.setAttribute(
        "style",
        "position:fixed;opacity:0;top:100px;left:100px;"
      );
      copyFrom.value = text;
      document.body.appendChild(copyFrom);
      copyFrom.select();
      document.execCommand("copy");
      var copied = document.createElement("div");
      copied.setAttribute("class", "copied");
      copied.appendChild(document.createTextNode("Copied to Clipboard"));
      document.body.appendChild(copied);
      setTimeout(function() {
        document.body.removeChild(copyFrom);
        document.body.removeChild(copied);
      }, 1500);
    },
    getIconItem(icon) {
      var div = document.createElement("div"),
        i = document.createElement("i");
      div.className = "col-xl-3 col-lg-4 col-sm-6";
      i.className = "mdi mdi-" + icon.name;
      div.appendChild(i);
      var span = document.createElement("span");
      span.appendChild(document.createTextNode("mdi-" + icon.name));
      div.appendChild(span);
      return div;
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row icons-demo-content">
      <div class="col-12">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Material Design Icon</h4>
            <a
              href="https://materialdesignicons.com/"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="row icon-demo-content" id="newIcons"></div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->

        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">All Icons</h4>
            <div class="row icon-demo-content" id="icons"></div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Size</h4>

            <div class="row icon-demo-content">
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-18px mdi-account"></i> mdi-18px
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-24px mdi-account"></i> mdi-24px
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-36px mdi-account"></i> mdi-36px
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-48px mdi-account"></i> mdi-48px
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Rotate</h4>

            <div class="row icon-demo-content">
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-rotate-45 mdi-account"></i> mdi-rotate-45
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-rotate-90 mdi-account"></i> mdi-rotate-90
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-rotate-135 mdi-account"></i> mdi-rotate-135
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-rotate-180 mdi-account"></i> mdi-rotate-180
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-rotate-225 mdi-account"></i> mdi-rotate-225
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-rotate-270 mdi-account"></i> mdi-rotate-270
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-rotate-315 mdi-account"></i> mdi-rotate-315
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Spin</h4>

            <div class="row icon-demo-content">
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-spin mdi-loading"></i> mdi-spin
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-spin mdi-star"></i> mdi-spin
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
