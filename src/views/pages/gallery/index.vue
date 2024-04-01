<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { projectGrid } from "./data";

/**
 * Gallery component
 */
export default {
  page: {
    title: "Gallery",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      lightboximgs: [
        require("@/assets/images/small/img-1.jpg"),
        require("@/assets/images/small/img-2.jpg"),
        require("@/assets/images/small/img-3.jpg"),
        require("@/assets/images/small/img-4.jpg"),
        require("@/assets/images/small/img-5.jpg"),
        require("@/assets/images/small/img-6.jpg"),
      ],
      projectGrid: projectGrid,
      title: "Gallery",
      items: [
        {
          text: "Apps",
        },
        {
          text: "Gallery",
          active: true,
        },
      ],
      filterCategory: "all",
      visible: false,
      index: 0, // default: 0
    };
  },
  components: {
    Layout,
    PageHeader,
  },
  methods: {
    listCategory(value) {
      this.filterCategory = value;
    },
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
  },
  computed: {
    filteredData: function() {
      if (this.filterCategory === "all") {
        return this.projectGrid;
      } else {
        return this.projectGrid.filter(
          (x) => x.category === this.filterCategory
        );
      }
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div
            class="card-header justify-content-between d-flex align-items-center"
          >
            <h4 class="card-title">Gallery Photos</h4>
            <a
              href="https://www.npmjs.com/package/vue-easy-lightbox"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <div class="row">
              <div class="col-lg-12">
                <div class="text-center">
                  <ul
                    class="list-inline categories-filter button-group"
                    id="filter"
                  >
                    <li class="list-inline-item">
                      <a
                        class="categories"
                        data-filter="*"
                        @click="listCategory('all')"
                        :class="{ active: filterCategory == 'all' }"
                        >All</a
                      >
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="categories"
                        data-filter=".project"
                        @click="listCategory('project')"
                        :class="{ active: filterCategory == 'project' }"
                        >Project</a
                      >
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="categories"
                        data-filter=".designing"
                        @click="listCategory('designing')"
                        :class="{ active: filterCategory == 'designing' }"
                        >Designing</a
                      >
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="categories"
                        data-filter=".photography"
                        @click="listCategory('photography')"
                        :class="{ active: filterCategory == 'photography' }"
                        >Photography</a
                      >
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="categories"
                        data-filter=".development"
                        @click="listCategory('development')"
                        :class="{ active: filterCategory == 'development' }"
                        >Development</a
                      >
                    </li>
                  </ul>
                </div>

                <div class="row gallery-wrapper">
                  <div
                    v-for="(item, index) in filteredData"
                    :key="index"
                    class="col-xl-4 col-sm-6"
                  >
                    <div class="gallery-box card">
                      <div class="gallery-container">
                        <a
                          class="image-popup"
                          href="javascript:void(0);"
                          @click="() => showImg(index)"
                        >
                          <img
                            class="gallery-img img-fluid mx-auto"
                            :src="`${item.image}`"
                            alt=""
                          />
                          <div class="gallery-overlay"></div>
                        </a>
                      </div>

                      <div class="box-content p-3">
                        <h5 class="title">{{ item.type }}</h5>
                        <p class="post">
                          by <a href="" class="text-body">{{ item.name }}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end row -->
                <vue-easy-lightbox
                  escDisabled
                  moveDisabled
                  :visible="visible"
                  :index="index"
                  :imgs="lightboximgs"
                  @hide="visible = false"
                ></vue-easy-lightbox>
              </div>
            </div>
            <!-- end row -->
          </div>
          <!-- ene card body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>
