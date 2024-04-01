<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";

/**
 * FAQs component
 */
export default {
  page: {
    title: "FAQs",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "FAQs",
      items: [
        {
          text: "UI Elements",
        },
        {
          text: "FAQs",
          active: true,
        },
      ],
      text: `
          If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages
        `,
    };
  },
  components: {
    Layout,
  },
};
</script>

<template>
  <Layout>
    <div class="mx-n4 mt-n4">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="faq-bg position-relative p-5">
              <div class="bg-overlay bg-dark bg-gradient"></div>
              <div class="row justify-content-center">
                <div class="col-lg-5">
                  <div class="text-center text-white-50">
                    <h3 class="text-white">How can we help you?</h3>
                    <p>
                      If several languages coalesce, the grammar of the
                      resulting language is more simple and regular than that of
                      the individual
                    </p>

                    <div>
                      <button type="button" class="btn btn-primary mt-2 me-2">
                        <i class="uil uil-envelope-alt me-1"></i> Email Us
                      </button>
                      <button type="button" class="btn btn-info mt-2">
                        <i class="uil uil-twitter me-1"></i> Send us a tweet
                      </button>
                    </div>

                    <div class="input-group my-5">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Type keywords to find answers"
                        aria-label="search result"
                        aria-describedby="button-search"
                      />
                      <button
                        class="btn btn-primary"
                        type="button"
                        id="button-search"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end faq -->
          </div>
        </div>
      </div>
    </div>
    <div class="mt-n5">
      <div class="row">
        <div class="col-xl-4 col-md-6">
          <div class="card card-h-100 border shadow-none mb-0">
            <div class="card-header">
              <div class="d-flex align-items-center">
                <div class="me-2">
                  <div class="avatar-sm">
                    <div class="avatar-title rounded-circle font-size-20">
                      <i class="uil uil-question-circle"></i>
                    </div>
                  </div>
                </div>
                <div class="flex-grow-1 overflow-hidden">
                  <h5 class="font-size-14 mb-0">General Questions</h5>
                </div>
              </div>
            </div>
            <!-- end card header -->
            <div class="card-body p-4">
              <div class="accordion-flush">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button
                    block
                    v-b-toggle.accordion-1
                    variant="info"
                    class="accordion-button"
                    >What is Lorem Ipsum ?</b-button
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-1"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                  class="text-muted"
                >
                  <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>

                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button
                    block
                    v-b-toggle.accordion-2
                    variant="info"
                    class="accordion-button"
                    >Why do we use it ?</b-button
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-2"
                  accordion="my-accordion"
                  role="tabpanel"
                  class="text-muted"
                >
                  <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>

                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button
                    block
                    v-b-toggle.accordion-3
                    variant="info"
                    class="accordion-button"
                    >Where does it come from ?</b-button
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-3"
                  accordion="my-accordion"
                  role="tabpanel"
                  class="text-muted"
                >
                  <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </div>
            </div>
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-xl-4 col-md-6">
          <div class="card card-h-100 border shadow-none mb-0">
            <div class="card-header">
              <div class="d-flex align-items-center">
                <div class="me-2">
                  <div class="avatar-sm">
                    <div class="avatar-title rounded-circle font-size-20">
                      <i class="uil uil-keyhole-circle"></i>
                    </div>
                  </div>
                </div>
                <div class="flex-grow-1 overflow-hidden">
                  <h5 class="font-size-14 mb-0">Privacy Policy</h5>
                </div>
              </div>
            </div>
            <!-- end card header -->
            <div class="card-body p-4">
              <div class="accordion-flush">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button
                    block
                    v-b-toggle.policy-accordion-1
                    variant="info"
                    class="accordion-button"
                    >Where can I get some ?</b-button
                  >
                </b-card-header>
                <b-collapse
                  id="policy-accordion-1"
                  accordion="privacy-policy-accordion"
                  role="tabpanel"
                  class="text-muted"
                >
                  <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>

                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button
                    block
                    v-b-toggle.policy-accordion-2
                    variant="info"
                    class="accordion-button"
                    >Why do we use it ?</b-button
                  >
                </b-card-header>
                <b-collapse
                  id="policy-accordion-2"
                  accordion="privacy-policy-accordion"
                  role="tabpanel"
                  class="text-muted"
                >
                  <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>

                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button
                    block
                    v-b-toggle.policy-accordion-3
                    variant="info"
                    class="accordion-button"
                    >Where does it come from ?</b-button
                  >
                </b-card-header>
                <b-collapse
                  id="policy-accordion-3"
                  accordion="privacy-policy-accordion"
                  role="tabpanel"
                  class="text-muted"
                >
                  <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>

                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button
                    block
                    v-b-toggle.policy-accordion-4
                    variant="info"
                    class="accordion-button"
                    >What is Lorem Ipsum ?</b-button
                  >
                </b-card-header>
                <b-collapse
                  id="policy-accordion-4"
                  visible
                  accordion="privacy-policy-accordion"
                  role="tabpanel"
                  class="text-muted"
                >
                  <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </div>
            </div>
            <!-- end card body-->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-xl-4 col-md-6">
          <div class="card card-h-100 border shadow-none mb-0">
            <div class="card-header">
              <div class="d-flex align-items-center">
                <div class="me-2">
                  <div class="avatar-sm">
                    <div class="avatar-title rounded-circle font-size-20">
                      <i class="uil uil-usd-circle"></i>
                    </div>
                  </div>
                </div>
                <div class="flex-grow-1 overflow-hidden">
                  <h5 class="font-size-14 mb-0">Pricing & Plans</h5>
                </div>
              </div>
            </div>
            <!-- end card header -->
            <div class="card-body p-4">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  block
                  v-b-toggle.pricing-accordion-1
                  variant="info"
                  class="accordion-button"
                  >Where does it come from ?</b-button
                >
              </b-card-header>
              <b-collapse
                id="pricing-accordion-1"
                accordion="privacy-pricing-accordion"
                role="tabpanel"
                class="text-muted"
              >
                <b-card-body>
                  <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
              </b-collapse>

              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  block
                  v-b-toggle.pricing-accordion-2
                  variant="info"
                  class="accordion-button"
                  >Why do we use it ?</b-button
                >
              </b-card-header>
              <b-collapse
                id="pricing-accordion-2"
                visible
                accordion="privacy-pricing-accordion"
                role="tabpanel"
                class="text-muted"
              >
                <b-card-body>
                  <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </div>
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
  </Layout>
</template>
