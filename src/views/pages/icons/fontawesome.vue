<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { icons } from "./data-fontawesome";

/**
 * Font-Awesome component
 */
export default {
  page: {
    title: "Font Awesome",
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
      title: "Font Awesome",
      items: [
        {
          text: "Icons",
          href: "/",
        },
        {
          text: "Font Awesome",
          active: true,
        },
      ],
      solid: "",
      regular: "",
      brand: "",
    };
  },
  components: {
    Layout,
    PageHeader,
  },
  mounted() {
    icons.forEach((val) => {
      if (val.attributes.membership.free.length) {
        val.attributes.membership.free.forEach((iconBrand) => {
          switch (iconBrand) {
            case "brands":
              this.brand +=
                '<div class="col-xl-3 col-lg-4 col-sm-6">\
                        <i class="fab fa-' +
                val.id +
                '"></i> fab fa-' +
                val.id +
                "\
                    </div>";
              break;
            case "solid":
              this.solid +=
                '<div class="col-xl-3 col-lg-4 col-sm-6">\
                    <i class="fas fa-' +
                val.id +
                '"></i> fas fa-' +
                val.id +
                "\
                </div>";
              break;
            default:
              this.regular +=
                '<div class="col-xl-3 col-lg-4 col-sm-6">\
                    <i class="far fa-' +
                val.id +
                '"></i> far fa-' +
                val.id +
                "\
                </div>";
          }
        });
      }
    });
    // for (let entry of icons) {
    //   if (entry.attributes.membership.free.length) {
    //     for (let value of entry.attributes.membership.free) {
    //       switch (value) {
    //         case "brands":
    //           this.brand +=
    //             '<div class="col-xl-3 col-lg-4 col-sm-6">\
    //                       <i class="fab fa-' +
    //             entry.id +
    //             '"></i> fab fa-' +
    //             entry.id +
    //             "\
    //                   </div>";
    //           break;
    //         case "solid":
    //           this.solid +=
    //             '<div class="col-xl-3 col-lg-4 col-sm-6">\
    //                 <i class="fas fa-' +
    //             entry.id +
    //             '"></i> fas fa-' +
    //             entry.id +
    //             "\
    //             </div>";
    //           break;
    //         default:
    //           console.log(entry.id);
    //           this.regular +=
    //             '<div class="col-xl-3 col-lg-4 col-sm-6">\
    //                       <i class="far fa-' +
    //             entry.id +
    //             '"></i> far fa-' +
    //             entry.id +
    //             "\
    //                   </div>";
    //       }
    //     }
    //   }
    // }

    document.getElementById("solid").innerHTML = this.solid;
    document.getElementById("brand").innerHTML = this.brand;
    document.getElementById("regular").innerHTML = this.regular;
  },
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
            <h4 class="card-title">Solid</h4>
            <a
              href="https://fontawesome.com/v5.15/icons?d=gallery&p=2&s=solid&m=free"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="row icon-demo-content" id="solid"></div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Regular</h4>
            <a
              href="https://fontawesome.com/v5.15/icons?d=gallery&p=2&s=regular&m=free"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="row icon-demo-content" id="regular"></div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Brands</h4>
            <a
              href="https://fontawesome.com/v5.15/icons?d=gallery&p=3&s=brands"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="row icon-demo-content" id="brand"></div>
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
