<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Pricing-basic component
 */
export default {
  page: {
    title: "Pricing Basic",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "Pricing Basic",
      items: [
        {
          text: "Pricing",
        },
        {
          text: "Pricing Basic",
          active: true,
        },
      ],
    };
  },
  components: {
    Layout,
    PageHeader,
  },
  mounted() {
    this.check();
  },
  methods: {
    check() {
      var checkBox = document.getElementById("plan-switch");
      var month = document.getElementsByClassName("month");
      var annual = document.getElementsByClassName("annual");

      for (var i = 0; i < month.length; i++) {
        if (checkBox.checked == true) {
          annual[i].style.display = "block";
          month[i].style.display = "none";
        } else if (checkBox.checked == false) {
          annual[i].style.display = "none";
          month[i].style.display = "block";
        }
      }
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row justify-content-center">
      <div class="col-lg-5">
        <div class="text-center mb-5">
          <h4>Choose Your Pricing Plan</h4>
          <p class="text-muted">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo veritatis
          </p>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row justify-content-center">
      <div class="col-lg-9">
        <div class="mb-4">
          <div class="d-flex justify-content-center align-items-center">
            <div><h5 class="font-size-14 mb-0">Month</h5></div>
            <div
              class="form-check form-switch font-size-20 ms-3"
              @click="check()"
            >
              <input
                class="form-check-input"
                type="checkbox"
                id="plan-switch"
              />
              <label class="form-check-label" for="plan-switch"></label>
            </div>
            <div><h5 class="font-size-14 mb-0">Annual</h5></div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-4">
            <div class="card pricing-box">
              <div class="card-body p-4">
                <div class="pt-2 pb-4">
                  <h2 class="month">
                    <sup><small>$</small></sup> <span>19</span>/
                    <span class="font-size-13 text-muted">month</span>
                  </h2>
                  <h2 class="annual">
                    <sup><small>$</small></sup> <span>49</span>/
                    <span class="font-size-13 text-muted">annual</span>
                  </h2>
                </div>

                <div>
                  <h5 class="mb-1">Starter</h5>
                  <p class="text-muted">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet
                  </p>

                  <div>
                    <a href="#" class="btn btn-primary w-100">Get started</a>
                  </div>
                </div>

                <hr class="my-4 text-muted" />

                <ul class="list-unstyled pricing-features mb-0">
                  <li>
                    <i
                      class="uil uil-check-circle text-success font-size-18 align-middle me-2"
                    ></i>
                    Free Live Support
                  </li>
                  <li>
                    <i
                      class="uil uil-check-circle text-success font-size-18 align-middle me-2"
                    ></i>
                    1 User
                  </li>
                  <li>
                    <i
                      class="uil uil-times-circle text-danger font-size-18 align-middle me-2"
                    ></i>
                    1GB Storage
                  </li>
                  <li>
                    <i
                      class="uil uil-times-circle text-danger font-size-18 align-middle me-2"
                    ></i>
                    Domain
                  </li>
                  <li>
                    <i
                      class="uil uil-times-circle text-danger font-size-18 align-middle me-2"
                    ></i>
                    No Time Tracking
                  </li>
                  <li>
                    <i
                      class="uil uil-times-circle text-danger font-size-18 align-middle me-2"
                    ></i>
                    Free Setup
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- end col -->
          <div class="col-xl-4">
            <div class="card pricing-box position-relative overflow-hidden">
              <div class="card-body p-4">
                <div class="ribbon bg-success">40% off Sale</div>
                <div class="pt-2 pb-4">
                  <h2 class="month">
                    <sup><small>$</small></sup> <span>29</span>/
                    <span class="font-size-13 text-muted">month</span>
                  </h2>
                  <h2 class="annual">
                    <sup><small>$</small></sup> <span>79</span>/
                    <span class="font-size-13 text-muted">annual</span>
                  </h2>
                </div>

                <div>
                  <h5 class="mb-1">Professional</h5>
                  <p class="text-muted">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    accusantium doloremque
                  </p>

                  <div>
                    <a href="#" class="btn btn-primary w-100">Get started</a>
                  </div>
                </div>

                <hr class="my-4 text-muted" />

                <ul class="list-unstyled pricing-features mb-0">
                  <li>
                    <i
                      class="uil uil-check-circle text-success font-size-18 align-middle me-2"
                    ></i>
                    Free Live Support
                  </li>
                  <li>
                    <i
                      class="uil uil-check-circle text-success font-size-18 align-middle me-2"
                    ></i>
                    3 User
                  </li>
                  <li>
                    <i
                      class="uil uil-check-circle text-success font-size-18 align-middle me-2"
                    ></i>
                    10GB Storage
                  </li>
                  <li>
                    <i
                      class="uil uil-check-circle text-success font-size-18 align-middle me-2"
                    ></i>
                    1 Domain
                  </li>
                  <li>
                    <i
                      class="uil uil-check-circle text-success font-size-18 align-middle me-2"
                    ></i>
                    No Time Tracking
                  </li>
                  <li>
                    <i
                      class="uil uil-times-circle text-danger font-size-18 align-middle me-2"
                    ></i>
                    Free Setup
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- end col -->
          <div class="col-xl-4">
            <div class="card pricing-box">
              <div class="card-body p-4">
                <div class="pt-2 pb-4">
                  <h2 class="month">
                    <sup><small>$</small></sup> <span>49</span>/
                    <span class="font-size-13 text-muted">month</span>
                  </h2>
                  <h2 class="annual">
                    <sup><small>$</small></sup> <span>99</span>/
                    <span class="font-size-13 text-muted">annual</span>
                  </h2>
                </div>

                <div>
                  <h5 class="mb-1">Unlimited</h5>
                  <p class="text-muted">
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse
                  </p>

                  <div>
                    <a href="#" class="btn btn-primary w-100">Get started</a>
                  </div>
                </div>

                <hr class="my-4 text-muted" />

                <ul class="list-unstyled pricing-features mb-0">
                  <li>
                    <i
                      class="uil uil-check-circle text-success font-size-18 align-middle me-2"
                    ></i>
                    Free Live Support
                  </li>
                  <li>
                    <i
                      class="uil uil-check-circle text-success font-size-18 align-middle me-2"
                    ></i>
                    Unlimited User
                  </li>
                  <li>
                    <i
                      class="uil uil-check-circle text-success font-size-18 align-middle me-2"
                    ></i>
                    40GB Storage
                  </li>
                  <li>
                    <i
                      class="uil uil-check-circle text-success font-size-18 align-middle me-2"
                    ></i>
                    1 Domain
                  </li>
                  <li>
                    <i
                      class="uil uil-check-circle text-success font-size-18 align-middle me-2"
                    ></i>
                    No Time Tracking
                  </li>
                  <li>
                    <i
                      class="uil uil-check-circle text-success font-size-18 align-middle me-2"
                    ></i>
                    Free Setup
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
