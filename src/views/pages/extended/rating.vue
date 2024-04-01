<script>
import StarRating from "vue-star-rating";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Rating component
 */
export default {
  page: {
    title: "Rating",
    meta: [
        {
          name: "description",
          content: appConfig.description,
        },
    ]
  },
  data() {
    return {
      title: "Rating",
      items: [
        {
          text: "Extended UI",
        },
        {
          text: "Rating",
          active: true,
        },
      ],
      value: 8,
      rating: "No Rating Selected"
    };
  },
  components: {
    Layout,
    PageHeader,
    StarRating
  },
  methods: {
    setRating: function(rating) {
      this.rating = "You have Selected: " + rating + " stars";
    }
  }
}
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
            <h4 class="card-title">Examples</h4>
            <a
              href="https://www.npmjs.com/package/vue-star-rating"
              target="_blank"
              class="btn btn-sm btn-soft-secondary"
              >Docs <i class="mdi mdi-arrow-right align-middle"></i
            ></a>
          </div>
          <div class="card-body">
            <div class="row g-0">
              <div class="col-sm-6">
                <div class="p-4 text-center border h-100">
                  <h5 class="font-size-15 mb-3">Default rating</h5>
                  <div class="text-center">
                    <star-rating :star-size="25"></star-rating>
                  </div>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="p-4 text-center border h-100">
                  <h5 class="font-size-15 mb-3">Half rating</h5>
                  <star-rating :increment="0.5" class="rating" :star-size="25"></star-rating>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="p-4 text-center border h-100">
                  <h5 class="font-size-15 mb-3">Readonly rating with a value</h5>
                  <star-rating :rating="3" :read-only="true" :star-size="25"></star-rating>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="p-4 text-center border h-100">
                  <h5 class="font-size-15 mb-3">Customized rating</h5>
                  <star-rating :rating="1" active-color="#ff3d60" :star-size="25"></star-rating>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="p-4 text-center border h-100">
                  <h5 class="font-size-15 mb-3">Only fill selected</h5>
                  <star-rating @rating-selected="setRating" :star-size="25"></star-rating>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="p-4 text-center border h-100">
                  <h5 class="font-size-15 mb-3">Custom Shap</h5>
                  <star-rating
                    :star-size="25"
                    :border-width="4"
                    border-color="#d8d8d8"
                    :rounded-corners="true"
                    :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"
                  ></star-rating>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="p-4 text-center border h-100">
                  <h5 class="font-size-15 mb-3">Fluid Stars</h5>
                  <star-rating :increment="0.01" :fixed-points="2" :star-size="25"></star-rating>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="p-4 text-center border h-100">
                  <h5 class="font-size-15 mb-3">Bordered Star</h5>
                  <star-rating :border-width="3" :star-size="25"></star-rating>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="p-4 text-center border h-100">
                  <h5 class="font-size-15 mb-3">RTL rating</h5>
                  <star-rating :rtl="true" :increment="0.5" :star-size="25"></star-rating>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>