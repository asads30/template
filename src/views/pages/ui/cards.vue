<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Cards component
 */
export default {
  page: {
    title: "Cards",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "Cards",
      items: [
        {
          text: "UI Elements",
        },
        {
          text: "Cards",
          active: true,
        },
      ],
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
      <div class="col-lg-6 col-xl-3">
        <!-- Simple card -->
        <b-card
          :img-src="require('@/assets/images/small/img-1.jpg')"
          img-alt="Card image"
          img-top
        >
          <b-card-title>
            <h4 class="card-title mb-2">Card title</h4>
          </b-card-title>
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>
          <b-button href="javascript:void(0);" variant="primary"
            >Button</b-button
          >
        </b-card>
      </div>
      <!-- end col -->

      <div class="col-lg-6 col-xl-3">
        <b-card
          no-body
          :img-src="require('@/assets/images/small/img-2.jpg')"
          img-alt="Card image"
          img-top
        >
          <b-card-body>
            <b-card-title>
              <h4 class="card-title mb-2">Card title</h4>
            </b-card-title>
            <b-card-text
              >Some quick example text to build on the card title and make up
              the bulk of the card's content.</b-card-text
            >
          </b-card-body>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
          </ul>
          <div class="card-body">
            <a href="javascript:void(0);" class="card-link text-custom"
              >Card link</a
            >
            <a href="javascript:void(0);" class="card-link text-custom"
              >Another link</a
            >
          </div>
        </b-card>
      </div>
      <!-- end col -->

      <div class="col-lg-6 col-xl-3">
        <b-card
          :img-src="require('@/assets/images/small/img-3.jpg')"
          img-alt="Card image"
          img-top
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>
        </b-card>
      </div>
      <!-- end col -->

      <div class="col-lg-6 col-xl-3">
        <b-card no-body>
          <b-card-body>
            <b-card-title>
              <h4 class="card-title mb-2">Card title</h4>
            </b-card-title>
            <b-card-sub-title>
              <h6 class="card-subtitle text-muted">Support card subtitle</h6>
            </b-card-sub-title>
          </b-card-body>
          <img src="@/assets/images/small/img-4.jpg" class="img-fluid" />
          <b-card-body>
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
            <a href="javascript:void(0);" class="card-link text-custom"
              >Card link</a
            >
            <a href="javascript:void(0);" class="card-link text-custom"
              >Another link</a
            >
          </b-card-body>
        </b-card>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-12">
        <div
          class="justify-content-between d-flex align-items-center mt-3 mb-4"
        >
          <h5 class="mb-0 pb-1 text-decoration-underline">Using Grid Markup</h5>
          <a
            href="https://bootstrap-vue.org/docs/components/card"
            target="_blank"
            class="btn btn-sm btn-soft-secondary"
            >Docs <i class="mdi mdi-arrow-right align-middle"></i
          ></a>
        </div>
        <div class="row">
          <div class="col-md-6">
            <b-card>
              <b-card-title class="mb-1">Special title treatment</b-card-title>
              <b-card-text>
                With supporting text below as a natural lead-in to additional
                content.
              </b-card-text>
              <a href="#" class="btn btn-primary w-100">Go somewhere</a>
            </b-card>
          </div>
          <!-- end col -->
          <div class="col-md-6">
            <b-card>
              <b-card-title class="mb-1">Special title treatment</b-card-title>
              <b-card-text>
                With supporting text below as a natural lead-in to additional
                content.
              </b-card-text>
              <a href="#" class="btn btn-primary w-100">Go somewhere</a>
            </b-card>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-12">
        <div
          class="justify-content-between d-flex align-items-center mt-3 mb-4"
        >
          <h5 class="mb-0 pb-1 text-decoration-underline">
            Card Image Caps & Overlays
          </h5>
          <a
            href="https://bootstrap-vue.org/docs/components/card#overlay-image"
            target="_blank"
            class="btn btn-sm btn-soft-secondary"
            >Docs <i class="mdi mdi-arrow-right align-middle"></i
          ></a>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <b-card
              img-top
              :img-src="require(`@/assets/images/small/img-6.jpg`)"
              img-alt="Card image cap"
              title="Card title"
            >
              <b-card-text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </b-card-text>
              <b-card-text>
                <small class="text-muted">Last updated 3 mins ago</small>
              </b-card-text>
            </b-card>
          </div>
          <!-- end col -->
          <div class="col-lg-4">
            <b-card
              img-bottom
              :img-src="require(`@/assets/images/small/img-7.jpg`)"
              img-alt="Card image cap"
              title="Card title"
            >
              <b-card-text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </b-card-text>
              <b-card-text>
                <small class="text-muted">Last updated 3 mins ago</small>
              </b-card-text>
            </b-card>
          </div>
          <!-- end col -->
          <div class="col-lg-4">
            <b-card
              overlay
              :img-src="require(`@/assets/images/small/img-1.jpg`)"
              img-alt="Card Image"
              text-variant="white"
              title="Card title"
              sub-title-text-variant="white"
              header-class="text-white"
            >
              <b-card-text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </b-card-text>
              <b-card-text>
                <small class="text-white">Last updated 3 mins ago</small>
              </b-card-text>
            </b-card>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div
          class="justify-content-between d-flex align-items-center mt-3 mb-4"
        >
          <h5 class="mb-0 pb-1 text-decoration-underline">Horizontal Card</h5>
          <a
            href="https://bootstrap-vue.org/docs/components/card#horizontal-card-layout"
            target="_blank"
            class="btn btn-sm btn-soft-secondary"
            >Docs <i class="mdi mdi-arrow-right align-middle"></i
          ></a>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <b-card no-body class="overflow-hidden">
              <b-row no-gutters>
                <b-col md="4">
                  <b-card-img
                    :src="require('@/assets/images/small/img-2.jpg')"
                    alt="Image"
                    class="img-fluid"
                  ></b-card-img>
                </b-col>
                <b-col md="8">
                  <b-card-body title="Card title">
                    <b-card-text>
                      This is a wider card with supporting text as a natural
                      lead-in to additional content. This content is a little
                      bit longer.
                    </b-card-text>
                    <b-card-text>
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>

          <div class="col-lg-6">
            <b-card no-body class="overflow-hidden">
              <b-row no-gutters>
                <b-col md="8">
                  <b-card-body title="Card title">
                    <b-card-text>
                      This is a wider card with supporting text as a natural
                      lead-in to additional content. This content is a little
                      bit longer.
                    </b-card-text>
                    <b-card-text>
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </b-card-text>
                  </b-card-body>
                </b-col>
                <b-col md="4">
                  <b-card-img
                    :src="require('@/assets/images/small/img-3.jpg')"
                    alt="Image"
                    class="img-fluid"
                  ></b-card-img>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div
          class="justify-content-between d-flex align-items-center mt-3 mb-4"
        >
          <h5 class="mb-0 pb-1 text-decoration-underline">
            Card Background Color
          </h5>
          <a
            href="https://bootstrap-vue.org/docs/components/card#background-and-border-variants"
            target="_blank"
            class="btn btn-sm btn-soft-secondary"
            >Docs <i class="mdi mdi-arrow-right align-middle"></i
          ></a>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <b-card
              class="text-white-50 border border-primary bg-primary"
              header="Primary Card"
              header-class="bg-primary text-white"
            >
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </b-card>
          </div>
          <div class="col-lg-4">
            <b-card
              class="text-white-50 border border-success bg-success"
              header="Success Card"
              header-class="bg-success text-white"
            >
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </b-card>
          </div>
          <div class="col-lg-4">
            <b-card
              class="text-white-50 border border-info bg-info"
              header="Info Card"
              header-class="bg-info text-white"
            >
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </b-card>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <b-card
              class="text-white-50 border border-warning bg-warning"
              header="Warning Card"
              header-class="bg-warning text-white"
            >
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </b-card>
          </div>
          <div class="col-lg-4">
            <b-card
              class="text-white-50 border border-danger bg-danger"
              header="Danger Card"
              header-class="bg-danger text-white"
            >
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </b-card>
          </div>
          <div class="col-lg-4">
            <b-card
              class="text-white-50 border border-dark bg-dark"
              header="Dark Card"
              header-class="bg-dark text-white"
            >
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </b-card>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <b-card
              class="text-white-50 border border-secondary bg-secondary"
              header="Secondary Card"
              header-class="bg-secondary text-white"
            >
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </b-card>
          </div>
          <div class="col-lg-4">
            <b-card
              class="text-white-50 border border-purple bg-purple"
              header="Purple Card"
              header-class="bg-purple text-white"
            >
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </b-card>
          </div>
          <div class="col-lg-4">
            <b-card
              class="text-white-50 border border-light bg-light"
              header="Light Card"
              header-class="bg-white text-dark"
            >
              <p class="card-text text-dark">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </b-card>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div
          class="justify-content-between d-flex align-items-center mt-3 mb-4"
        >
          <h5 class="mb-0 pb-1 text-decoration-underline">Card Border Color</h5>
          <a
            href="https://bootstrap-vue.org/docs/components/card#bordered"
            target="_blank"
            class="btn btn-sm btn-soft-secondary"
            >Docs <i class="mdi mdi-arrow-right align-middle"></i
          ></a>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <b-card
              header-class="bg-transparent border-primary"
              class="border border-primary"
            >
              <template v-slot:header>
                <h6 class="my-0 text-primary">
                  Primary outline Card
                </h6>
              </template>
              <h5 class="card-title mt-0">card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </b-card>
          </div>
          <div class="col-lg-4">
            <b-card
              header-class="bg-transparent border-success"
              class="border border-success"
            >
              <template v-slot:header>
                <h6 class="my-0 text-success">
                  Success outline Card
                </h6>
              </template>
              <h5 class="card-title mt-0">card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </b-card>
          </div>
          <div class="col-lg-4">
            <b-card
              header-class="bg-transparent border-info"
              class="border border-info"
            >
              <template v-slot:header>
                <h6 class="my-0 text-info">
                  Info outline Card
                </h6>
              </template>
              <h5 class="card-title mt-0">card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </b-card>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <b-card
              header-class="bg-transparent border-warning"
              class="border border-warning"
            >
              <template v-slot:header>
                <h6 class="my-0 text-warning">
                  Warning outline Card
                </h6>
              </template>
              <h5 class="card-title mt-0">card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </b-card>
          </div>
          <div class="col-lg-4">
            <b-card
              header-class="bg-transparent border-danger"
              class="border border-danger"
            >
              <template v-slot:header>
                <h6 class="my-0 text-danger">
                  Danger outline Card
                </h6>
              </template>
              <h5 class="card-title mt-0">card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </b-card>
          </div>
          <div class="col-lg-4">
            <b-card
              header-class="bg-transparent border-dark"
              class="border border-dark"
            >
              <template v-slot:header>
                <h6 class="my-0 text-dark">
                  Dark outline Card
                </h6>
              </template>
              <h5 class="card-title mt-0">card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </b-card>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <b-card
              header-class="bg-transparent border-secondary"
              class="border border-secondary"
            >
              <template v-slot:header>
                <h6 class="my-0 text-secondary">
                  Secondary outline Card
                </h6>
              </template>
              <h5 class="card-title mt-0">card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </b-card>
          </div>
          <div class="col-lg-4">
            <b-card
              header-class="bg-transparent border-purple"
              class="border border-purple"
            >
              <template v-slot:header>
                <h6 class="my-0 text-purple">
                  Purple outline Card
                </h6>
              </template>
              <h5 class="card-title mt-0">card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </b-card>
          </div>
          <div class="col-lg-4">
            <b-card
              header-class="bg-transparent border-light"
              class="border border-light"
            >
              <template v-slot:header>
                <h6 class="my-0">
                  Light outline Card
                </h6>
              </template>
              <h5 class="card-title mt-0">card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </b-card>
          </div>
        </div>
        <!-- end row -->
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div
          class="justify-content-between d-flex align-items-center mt-3 mb-4"
        >
          <h5 class="mb-0 pb-1 text-decoration-underline">Card Groups</h5>
          <a
            href="https://bootstrap-vue.org/docs/components/card#card-groups"
            target="_blank"
            class="btn btn-sm btn-soft-secondary"
            >Docs <i class="mdi mdi-arrow-right align-middle"></i
          ></a>
        </div>
        <div class="card-deck-wrapper">
          <b-card-group>
            <b-card
              title="Title"
              :img-src="require('@/assets/images/small/img-4.jpg')"
              img-alt="Image"
              img-top
              class="mb-4"
            >
              <b-card-text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </b-card-text>
              <template #footer>
                <small class="text-muted">Last updated 3 mins ago</small>
              </template>
            </b-card>

            <b-card
              title="Title"
              :img-src="require('@/assets/images/small/img-5.jpg')"
              img-alt="Image"
              img-top
              class="mb-4"
            >
              <b-card-text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </b-card-text>
              <template #footer>
                <small class="text-muted">Last updated 3 mins ago</small>
              </template>
            </b-card>

            <b-card
              title="Title"
              :img-src="require('@/assets/images/small/img-6.jpg')"
              img-alt="Image"
              img-top
              class="mb-4"
            >
              <b-card-text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </b-card-text>
              <template #footer>
                <small class="text-muted">Last updated 3 mins ago</small>
              </template>
            </b-card>
          </b-card-group>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>
