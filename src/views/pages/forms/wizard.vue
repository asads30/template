<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Form wizard component
 */
export default {
  page: {
    title: "Form Wizard",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Form Wizard",
      items: [
        {
          text: "Forms",
        },
        {
          text: "Form Wizard",
          active: true,
        },
      ],
      currentTab: 0
    };
  },
  components: {
    Layout,
    PageHeader,
  },
  mounted() {
    this.showTab(this.currentTab);
  },
  methods: {
    // Current tab is set to be the first tab (0)
    // Display the current tab
    showTab(n) {
      // This function will display the specified tab of the form...
      var x = document.getElementsByClassName("wizard-tab");
      x[n].style.display = "block";
      //... and fix the Previous/Next buttons:
      if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
      } else {
        document.getElementById("prevBtn").style.display = "inline";
      }
      if (n == x.length - 1) {
        document.getElementById("nextBtn").innerHTML = "Submit";
      } else {
        document.getElementById("nextBtn").innerHTML = "Next";
      }
      //... and run a function that will display the correct step indicator:
      this.fixStepIndicator(n);
    },

    nextPrev(n) {
      // This function will figure out which tab to display
      var x = document.getElementsByClassName("wizard-tab");

      // Hide the current tab:
      x[this.currentTab].style.display = "none";
      // Increase or decrease the current tab by 1:
      this.currentTab = this.currentTab + n;
      // if you have reached the end of the form...
      if (this.currentTab >= x.length) {
        this.currentTab = this.currentTab - n;
        x[this.currentTab].style.display = "block";
      }
      // Otherwise, display the correct tab:
      this.showTab(this.currentTab);
    },

    fixStepIndicator(n) {
      // This function removes the "active" class of all steps...
      var i,
        x = document.getElementsByClassName("list-item");
      for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
      }
      //... and adds the "active" class on the current step:
      x[n].className += " active";
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
          <div class="card-header">
            <h4 class="card-title">Forms Steps</h4>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <form action="#">
              <ul class="wizard-nav mb-5">
                <li class="wizard-list-item">
                  <div class="list-item">
                    <div
                      class="step-icon"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Seller Details"
                    >
                      <i class="uil uil-list-ul"></i>
                    </div>
                  </div>
                </li>
                <li class="wizard-list-item">
                  <div class="list-item">
                    <div
                      class="step-icon"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Company Document"
                    >
                      <i class="uil uil-clipboard-notes"></i>
                    </div>
                  </div>
                </li>

                <li class="wizard-list-item">
                  <div class="list-item">
                    <div
                      class="step-icon"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Bank Details"
                    >
                      <i class="uil uil-university"></i>
                    </div>
                  </div>
                </li>
              </ul>
              <!-- wizard-nav -->

              <div class="wizard-tab">
                <div class="text-center mb-4">
                  <h5>Seller Details</h5>
                  <p class="card-title-desc">Fill all information below</p>
                </div>
                <div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label
                          for="basicpill-firstname-input"
                          class="form-label"
                          >First name</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="basicpill-firstname-input"
                        />
                      </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label for="basicpill-lastname-input" class="form-label"
                          >Last name</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="basicpill-lastname-input"
                        />
                      </div>
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label for="basicpill-phoneno-input" class="form-label"
                          >Phone</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="basicpill-phoneno-input"
                        />
                      </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label for="basicpill-email-input" class="form-label"
                          >Email</label
                        >
                        <input
                          type="email"
                          class="form-control"
                          id="basicpill-email-input"
                        />
                      </div>
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label for="basicpill-address-input" class="form-label"
                          >Address</label
                        >
                        <textarea
                          id="basicpill-address-input"
                          class="form-control"
                          rows="2"
                        ></textarea>
                      </div>
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->
                </div>
              </div>
              <!-- wizard-tab -->

              <div class="wizard-tab">
                <div>
                  <div class="text-center mb-4">
                    <h5>Company Document</h5>
                    <p class="card-title-desc">Fill all information below</p>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label
                            for="basicpill-pancard-input"
                            class="form-label"
                            >PAN Card</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="basicpill-pancard-input"
                          />
                        </div>
                      </div>
                      <!-- end col -->

                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label for="basicpill-vatno-input" class="form-label"
                            >VAT/TIN No.</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="basicpill-vatno-input"
                          />
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row -->
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label for="basicpill-cstno-input" class="form-label"
                            >CST No.</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="basicpill-cstno-input"
                          />
                        </div>
                      </div>
                      <!-- end col -->

                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label
                            for="basicpill-servicetax-input"
                            class="form-label"
                            >Service Tax No.</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="basicpill-servicetax-input"
                          />
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row -->
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label
                            for="basicpill-companyuin-input"
                            class="form-label"
                            >Company UIN</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="basicpill-companyuin-input"
                          />
                        </div>
                      </div>
                      <!-- end col -->

                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label
                            for="basicpill-declaration-input"
                            class="form-label"
                            >Declaration</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="basicpill-declaration-input"
                          />
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row-->
                  </div>
                  <!-- end form -->
                </div>
              </div>
              <!-- wizard-tab -->

              <div class="wizard-tab">
                <div>
                  <div class="text-center mb-4">
                    <h5>Bank Details</h5>
                    <p class="card-title-desc">Fill all information below</p>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label
                            for="basicpill-namecard-input"
                            class="form-label"
                            >Name on Card</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="basicpill-namecard-input"
                          />
                        </div>
                      </div>
                      <!-- end col -->
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label class="form-label">Credit Card Type</label>
                          <select class="form-select">
                            <option selected>Select Card Type</option>
                            <option value="AE">American Express</option>
                            <option value="VI">Visa</option>
                            <option value="MC">MasterCard</option>
                            <option value="DI">Discover</option>
                          </select>
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row -->
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label for="basicpill-cardno-input" class="form-label"
                            >Credit Card Number</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="basicpill-cardno-input"
                          />
                        </div>
                      </div>
                      <!-- end col -->

                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label
                            for="basicpill-card-verification-input"
                            class="form-label"
                            >Card Verification Number</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="basicpill-card-verification-input"
                          />
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row -->
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label
                            for="basicpill-expiration-input"
                            class="form-label"
                            >Expiration Date</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="basicpill-expiration-input"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- end row -->
                  </div>
                  <!-- end form -->
                </div>
              </div>
              <!-- wizard-tab -->

              <div class="d-flex align-items-start gap-3 mt-4">
                <button
                  type="button"
                  class="btn btn-primary w-sm"
                  id="prevBtn"
                  @click="nextPrev(-1)"
                >
                  Previous
                </button>
                <button
                  type="button"
                  class="btn btn-primary w-sm ms-auto"
                  id="nextBtn"
                  @click="nextPrev(1)"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>
