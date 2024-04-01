<script>
import { required } from "vuelidate/lib/validators";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * User grid component
 */
export default {
  page: {
    title: "User Grid",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "User Grid",
      items: [
        {
          text: "Contacts",
          href: "/",
        },
        {
          text: "User Grid",
          active: true,
        },
      ],
      userGridData: [
        {
          id: 1,
          profile: require("@/assets/images/users/avatar-1.jpg"),
          name: "Donald Risher",
          designation: "Full Stack Developer",
        },
        {
          id: 2,
          profile: require("@/assets/images/users/avatar-1.jpg"),
          name: "Helen Barron",
          designation: "Web Designer",
        },
        {
          id: 3,
          profile: require("@/assets/images/users/avatar-3.jpg"),
          name: "Philip Theroux",
          designation: "UI/UX Designer",
        },
        {
          id: 4,
          profile: require("@/assets/images/users/avatar-4.jpg"),
          name: "Donald Risher",
          designation: "Backend Developer",
        },
        {
          id: 5,
          profile: require("@/assets/images/users/avatar-5.jpg"),
          name: "Gerald Moyer",
          designation: "Backend Developer",
        },
        {
          id: 6,
          profile: require("@/assets/images/users/avatar-6.jpg"),
          name: "Sharon Carver",
          designation: "Frontend Developer",
        },
        {
          id: 7,
          profile: require("@/assets/images/users/avatar-7.jpg"),
          name: "Jody Tondreau",
          designation: "PHP Developer",
        },
        {
          id: 8,
          profile: require("@/assets/images/users/avatar-8.jpg"),
          name: "Dennis Goulet",
          designation: "Graphic Designer",
        },
        {
          id: 9,
          profile: require("@/assets/images/users/avatar-9.jpg"),
          name: "Cecelia Farrell",
          designation: "Angular Developer",
        },
      ],
      showModal: false,
      contact: {
        name: "",
        designation: "",
        email: "",
        file: "",
      },
      submitted: false,
    };
  },
  components: {
    Layout,
    PageHeader,
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.contact.file = URL.createObjectURL(file);
    },
    handleSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        this.userGridData.push({
          id: this.userGridData.length + 1,
          profile: this.contact.file,
          designation: this.contact.designation,
          name: this.contact.name,
        });
        this.showModal = false;
        this.contact = {};
      }
      this.submitted = false;
    },
  },
  validations: {
    contact: {
      name: { required },
      designation: { required },
      email: { required },
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
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <h5 class="card-title">
                    Contact List
                    <span class="text-muted fw-normal ms-2">(834)</span>
                  </h5>
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div
                  class="d-flex flex-wrap align-items-start justify-content-md-end mt-2 mt-md-0 gap-2 mb-3"
                >
                  <div>
                    <ul class="nav nav-pills">
                      <li class="nav-item">
                        <router-link
                          class="nav-link"
                          to="/contacts/list"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="List"
                          ><i class="uil uil-list-ul"></i
                        ></router-link>
                      </li>
                      <li class="nav-item">
                        <router-link
                          class="nav-link active"
                          to="/contacts/grid"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Grid"
                          ><i class="uil uil-apps"></i
                        ></router-link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-light"
                      data-bs-toggle="modal"
                      @click="showModal = true"
                      ><i class="uil uil-plus me-1"></i> Add New</a
                    >
                  </div>
                  <b-modal
                    v-model="showModal"
                    title="Add Contact"
                    size="lg"
                    centered
                    hide-footer
                  >
                    <form @submit.prevent="handleSubmit">
                      <div class="mb-3">
                        <label for="addcontact-name-input" class="form-label"
                          >Name</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          v-model="contact.name"
                          id="addcontact-name-input"
                          placeholder="Enter Name"
                          :class="{
                            'is-invalid': submitted && $v.contact.name.$error,
                          }"
                        />
                        <div
                          v-if="submitted && !$v.contact.name.required"
                          class="invalid-feedback"
                        >
                          Name is required.
                        </div>
                      </div>
                      <div class="mb-3">
                        <label
                          for="addcontact-designation-input"
                          class="form-label"
                          >Designation</label
                        >
                        <input
                          type="text"
                          v-model="contact.designation"
                          class="form-control"
                          id="addcontact-designation-input"
                          placeholder="Enter Designation"
                          :class="{
                            'is-invalid':
                              submitted && $v.contact.designation.$error,
                          }"
                        />
                        <div
                          v-if="submitted && !$v.contact.designation.required"
                          class="invalid-feedback"
                        >
                          Designation is required.
                        </div>
                      </div>
                      <div class="mb-3">
                        <label for="addcontact-file-input" class="form-label"
                          >User Image</label
                        >
                        <input
                          type="file"
                          @change="onFileChange"
                          class="form-control"
                          id="addcontact-file-input"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="addcontact-email-input" class="form-label"
                          >Email</label
                        >
                        <input
                          type="email"
                          v-model="contact.email"
                          class="form-control"
                          id="addcontact-email-input"
                          placeholder="Enter Email"
                          :class="{
                            'is-invalid': submitted && $v.contact.email.$error,
                          }"
                        />
                        <div
                          v-if="submitted && !$v.contact.email.required"
                          class="invalid-feedback"
                        >
                          Email is required.
                        </div>
                      </div>
                      <div class="text-end mt-3">
                        <b-button variant="light" class="w-sm" @click="showModal = false"
                          >Close</b-button
                        >
                        <b-button type="submit" variant="primary" class="w-sm ms-2"
                          >Add</b-button
                        >
                      </div>
                    </form>
                  </b-modal>
                  <b-dropdown
                    variant="white"
                    right
                    toggle-class="btn-link text-dark shadow-none"
                  >
                    <template v-slot:button-content>
                      <i class="uil uil-ellipsis-h"></i>
                    </template>
                    <b-dropdown-item>Action</b-dropdown-item>
                    <b-dropdown-item>Another action</b-dropdown-item>
                    <b-dropdown-item>Something else here</b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->

            <!-- Modal -->
            <div
              class="modal fade"
              id="addContactModal"
              tabindex="-1"
              aria-labelledby="addContactModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="addContactModalLabel">
                      Add Contact
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body p-4">
                    <div>
                      <div class="mb-3">
                        <label for="addcontact-name-input" class="form-label"
                          >Name</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="addcontact-name-input"
                          placeholder="Enter Name"
                        />
                      </div>
                      <div class="mb-3">
                        <label
                          for="addcontact-designation-input"
                          class="form-label"
                          >Designation</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="addcontact-designation-input"
                          placeholder="Enter Designation"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="addcontact-file-input" class="form-label"
                          >User Image</label
                        >
                        <input
                          type="file"
                          class="form-control"
                          id="addcontact-file-input"
                        />
                      </div>

                      <div class="mb-3">
                        <label for="addcontact-email-input" class="form-label"
                          >Email</label
                        >
                        <input
                          type="email"
                          class="form-control"
                          id="addcontact-email-input"
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-light w-sm"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary w-sm">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- end modal -->

            <div class="row">
              <div
                class="col-xl-4 col-sm-6"
                v-for="(user, index) in userGridData"
                :key="index"
              >
                <div class="card border shadow-none">
                  <div class="card-body p-4">
                    <div class="d-flex align-items-start">
                      <div class="flex-shrink-0 avatar rounded-circle me-3">
                        <img
                          :src="`${user.profile}`"
                          alt=""
                          class="img-fluid rounded-circle"
                        />
                      </div>
                      <div class="flex-grow-1 overflow-hidden">
                        <h5 class="font-size-15 mb-1 text-truncate">
                          <router-link to="/pages/profile" class="text-dark">{{
                            user.name
                          }}</router-link>
                        </h5>
                        <p class="text-muted text-truncate mb-0">
                          {{ user.designation }}
                        </p>
                      </div>
                      <b-dropdown
                        variant="white"
                        class="flex-shrink-0"
                        toggle-class="text-body font-size-16 p-0"
                        right
                      >
                        <template v-slot:button-content>
                          <feather
                            type="more-horizontal"
                            class="icon-xs"
                          ></feather>
                        </template>
                        <b-dropdown-item>Edit</b-dropdown-item>
                        <b-dropdown-item>Action</b-dropdown-item>
                        <b-dropdown-item>Remove</b-dropdown-item>
                      </b-dropdown>
                      <!-- end dropdown -->
                    </div>
                  </div>
                  <!-- end card body -->
                  <div class="btn-group btn-icon" role="group">
                    <button
                      type="button"
                      class="btn btn-outline-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Profile"
                    >
                      <i class="uil uil-user"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Message"
                    >
                      <i class="uil uil-envelope-alt"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-light"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Projects"
                    >
                      <i class="uil uil-chart-pie"></i>
                    </button>
                  </div>
                </div>
                <!-- end card -->
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
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
