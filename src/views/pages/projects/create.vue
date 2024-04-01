<script>
import flatPickr from "vue-flatpickr-component";
import simplebar from "simplebar-vue";
import vue2Dropzone from "vue2-dropzone";

import "flatpickr/dist/flatpickr.css";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Create-project component
 */
export default {
  page: {
    title: "Create New Project",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "Create Project",
      items: [
        {
          text: "Project",
        },
        {
          text: "Create Project",
          active: true,
        },
      ],
      currentTab: 0,
      date: null,
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" },
      },
    };
  },
  components: {
    Layout,
    PageHeader,
    flatPickr,
    simplebar,
    vueDropzone: vue2Dropzone,
  },
  mounted() {
    this.showTab(this.currentTab);
  },
  methods: {
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
          <div class="card-body">
            <div>
              <ul class="wizard-nav mb-5">
                <li class="wizard-list-item">
                  <div class="list-item">
                    <div
                      class="step-icon"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Basic Info"
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
                      title="Assignee"
                    >
                      <i class="uil uil-users-alt"></i>
                    </div>
                  </div>
                </li>

                <li class="wizard-list-item">
                  <div class="list-item">
                    <div
                      class="step-icon"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Attached Files"
                    >
                      <i class="uil uil-paperclip"></i>
                    </div>
                  </div>
                </li>
              </ul>
              <!-- wizard-nav -->

              <div class="wizard-tab">
                <div class="text-center mb-4">
                  <h5>Project Information</h5>
                  <p class="card-title-desc">Fill all information below</p>
                </div>
                <form>
                  <div>
                    <div class="mb-3">
                      <label for="projectname" class="form-label"
                        >Project Name</label
                      >
                      <input
                        id="projectname"
                        type="text"
                        class="form-control"
                        placeholder="Enter Project Name"
                      />
                    </div>

                    <div class="mb-3">
                      <label for="projectdesc" class="form-label"
                        >Project Description</label
                      >
                      <textarea
                        class="form-control"
                        id="projectdesc"
                        rows="3"
                        placeholder="Enter Project Description..."
                      ></textarea>
                    </div>

                    <div class="mb-3">
                      <label class="form-label">Project Date</label>
                      <flat-pickr
                        id="datepicker-range"
                        v-model="date"
                        placeholder="Select a date"
                        name="birthdate"
                        class="form-control"
                      ></flat-pickr>
                    </div>
                  </div>
                </form>
              </div>
              <!-- wizard-tab -->

              <div class="wizard-tab">
                <div class="text-center mb-4">
                  <h5>Assign to</h5>
                  <p class="card-title-desc">Select Members</p>
                </div>
                <form>
                  <div>
                    <div class="mb-3">
                      <label>Department</label>
                      <select class="form-select shadow-none">
                        <option selected>Open this select Department</option>
                        <option value="Design">Design</option>
                        <option value="Development">Development</option>
                      </select>
                    </div>

                    <div class="mb-4">
                      <label>Assign to</label>
                      <div class="mb-3">
                        <button
                          class="btn btn-light w-100"
                          type="button"
                          data-bs-toggle="modal"
                          v-b-modal.selectmembermodal
                          data-bs-target="#selectmembermodal"
                        >
                          Select Members for Project
                        </button>
                      </div>

                      <!-- Modal -->
                      <b-modal
                        id="selectmembermodal"
                        centered
                        size="lg"
                        ok-title="Save"
                        cancel-title="Close"
                        cancel-variant="light"
                        title="Select Members"
                        tabindex="-1"
                        aria-labelledby="selectmembermodalLabel"
                        aria-hidden="true"
                      >
                        <div class="p-3">
                          <div class="avatar-group align-items-center">
                            <div class="me-4">Team :</div>
                            <div class="avatar-group-item">
                              <a
                                href="javascript: void(0);"
                                class="d-block"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Janna Johnson"
                              >
                                <img
                                  src="@/assets/images/users/avatar-1.jpg"
                                  alt=""
                                  class="rounded-circle avatar-sm"
                                />
                              </a>
                            </div>
                            <div class="avatar-group-item">
                              <a
                                href="javascript: void(0);"
                                class="d-block"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Heather Ford"
                              >
                                <img
                                  src="@/assets/images/users/avatar-2.jpg"
                                  alt=""
                                  class="rounded-circle avatar-sm"
                                />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="p-3">
                          <div class="input-group border rounded">
                            <span
                              class="input-group-text bg-transparent border-0 pr-1"
                            >
                              <i class="uil uil-search"></i>
                            </span>
                            <input
                              type="text"
                              class="form-control border-0"
                              placeholder="Search"
                            />

                            <button class="btn btn-primary" type="button">
                              Search
                            </button>
                          </div>
                        </div>

                        <simplebar style="max-height: 200px;">
                          <div>
                            <div
                              class="p-3 fw-semibold font-size-12 text-muted"
                            >
                              A
                            </div>

                            <ul
                              class="list-group list-group-flush contact-list"
                            >
                              <li class="list-group-item">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="memberCheck1"
                                    checked
                                  />
                                  <label
                                    class="form-check-label"
                                    for="memberCheck1"
                                  >
                                    Albert Rodarte
                                  </label>
                                </div>
                              </li>

                              <li class="list-group-item">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="memberCheck2"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="memberCheck2"
                                  >
                                    Allison Etter
                                  </label>
                                </div>
                              </li>
                            </ul>
                            <!-- end ul -->
                          </div>

                          <div>
                            <div
                              class="p-3 fw-semibold font-size-12 text-muted"
                            >
                              B
                            </div>

                            <ul
                              class="list-group list-group-flush contact-list"
                            >
                              <li class="list-group-item">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="memberCheck3"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="memberCheck3"
                                  >
                                    Bobby Gaffney
                                  </label>
                                </div>
                              </li>
                            </ul>
                            <!-- end ul -->
                          </div>

                          <div>
                            <div
                              class="p-3 fw-semibold font-size-12 text-muted"
                            >
                              C
                            </div>

                            <ul
                              class="list-group list-group-flush contact-list"
                            >
                              <li class="list-group-item">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="memberCheck4"
                                    checked
                                  />
                                  <label
                                    class="form-check-label"
                                    for="memberCheck4"
                                  >
                                    Charles Willis
                                  </label>
                                </div>
                              </li>
                              <li class="list-group-item">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="memberCheck5"
                                    checked
                                  />
                                  <label
                                    class="form-check-label"
                                    for="memberCheck5"
                                  >
                                    Christi
                                  </label>
                                </div>
                              </li>
                            </ul>
                            <!-- end ul -->
                          </div>
                        </simplebar>
                        <!-- end simplebar -->
                      </b-modal>
                      <!-- End Modal -->
                    </div>
                  </div>
                </form>
              </div>
              <!-- wizard-tab -->

              <div class="wizard-tab">
                <div class="text-center mb-4">
                  <h5>Attached Files</h5>
                  <p class="card-title-desc">Upload Attached Files</p>
                </div>
                <vue-dropzone
                  id="dropzone"
                  ref="myVueDropzone"
                  :use-custom-slot="true"
                  :options="dropzoneOptions"
                >
                  <div class="dropzone-custom-content">
                    <i class="display-4 text-muted bx bxs-cloud-upload"></i>
                    <h4>Drop files here or click to upload.</h4>
                  </div>
                </vue-dropzone>
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
            </div>
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>
