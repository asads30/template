<script>
import { required } from "vuelidate/lib/validators";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { contactListData } from "./data-list";

/**
 * User list component
 */
export default {
  page: {
    title: "User List",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      contactListData: contactListData,
      title: "User List",
      items: [
        {
          text: "Contacts",
          href: "/",
        },
        {
          text: "User List",
          active: true,
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "value",
      sortDesc: false,
      fields: [
        {
          key: "checkbox",
        },
        {
          key: "name",
          sortable: true,
        },
        {
          key: "Position",
          sortable: true,
        },
        {
          key: "Email",
          sortable: true,
        },
        {
          key: "Tags",
          sortable: true,
        },
        {
          key: "Action",
          sortable: true,
        },
      ],
      coinvalue: "",
      statusValue: "",
      typeValue: null,
      datepickervalue: "",
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
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.contactListData.length;
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.contactListData.length;
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.contact.file = URL.createObjectURL(file);
    },
    /**
     * Search the table data with search input
     */
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    handleSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        this.contactListData.push({
          id: this.contactListData.length + 1,
          image: this.contact.file,
          position: this.contact.designation,
          name: this.contact.name,
          email: this.contact.email,
        });
        this.showModal = false;
        this.contact = {};
      }
      this.submitted = false;
    },
    checkAll() {
      const checkAll = document.getElementById("checkAll");
        if (checkAll) {
            checkAll.onclick = function() {
                const checkboxes = document.querySelectorAll('.table-check input[type="checkbox"]');
                for(var i=0; i < checkboxes.length; i++) {
                    checkboxes[i].checked = this.checked;
                }
            }
        }
    }
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
                  <ul class="nav nav-pills">
                    <li class="nav-item">
                      <router-link
                        class="nav-link active"
                        to="/contacts/list"
                        title="List"
                        ><i class="uil uil-list-ul"></i
                      ></router-link>
                    </li>
                    <li class="nav-item">
                      <router-link
                        class="nav-link"
                        to="/contacts/grid"
                        title="Grid"
                        ><i class="uil uil-apps"></i
                      ></router-link>
                    </li>
                  </ul>
                  <a
                    href="javascript:void(0);"
                    class="btn btn-light"
                    data-bs-toggle="modal"
                    @click="showModal = true"
                    ><i class="uil uil-plus me-1"></i> Add New</a
                  >
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
                        <b-button
                          variant="light"
                          class="w-sm"
                          @click="showModal = false"
                          >Close</b-button
                        >
                        <b-button
                          type="submit"
                          variant="primary"
                          class="w-sm ms-2"
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
                  <!-- end dropdown -->
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->

            <div class="table-responsive">
              <div class="table align-middle table-nowrap">
                <b-table
                  :items="contactListData"
                  :fields="fields"
                  responsive="sm"
                  :per-page="perPage"
                  :current-page="currentPage"
                  :sort-by.sync="sortBy"
                  :sort-desc.sync="sortDesc"
                  :filter="filter"
                  :filter-included-fields="filterOn"
                  @filtered="onFiltered"
                  class="table-check"
                >
                  <template #head(checkbox)>
                    <div class="form-check font-size-16" width="50px;" @click="checkAll">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="checkAll"
                      />
                      <label class="form-check-label" for="checkAll"></label>
                    </div>
                  </template>
                  <template #cell(checkbox)>
                    <div class="form-check font-size-16">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="checkAll"
                      />
                      <label class="form-check-label" for="checkAll"></label>
                    </div>
                  </template>

                  <template #cell(name)="data">
                    <img
                      :src="`${data.item.image}`"
                      alt=""
                      class="avatar-sm rounded-circle me-2"
                    />
                    <router-link
                      to="/pages/profile"
                      class="text-body fw-medium"
                      >{{ data.item.name }}</router-link
                    >
                  </template>

                  <template #cell(position)="data">
                    {{ data.item.position }}
                  </template>

                  <template #cell(email)="data">
                    {{ data.item.email }}
                  </template>

                  <template #cell(tags)="data">
                    <div class="d-flex gap-2">
                      <a
                        href="#"
                        v-for="(item, index) in data.item.tags"
                        :key="index"
                        class="badge badge-soft-primary"
                        >{{ item }}</a
                      >
                    </div>
                  </template>

                  <template #cell(action)>
                    <b-dropdown variant="light" right size="sm">
                      <template v-slot:button-content>
                        <i class="uil uil-ellipsis-h"></i>
                      </template>
                      <b-dropdown-item>Action</b-dropdown-item>
                      <b-dropdown-item>Another action</b-dropdown-item>
                      <b-dropdown-item>Something else here</b-dropdown-item>
                    </b-dropdown>
                  </template>
                </b-table>
              </div>
            </div>
            <!-- end table responsive -->

            <div class="row g-0 text-center text-sm-start">
              <!-- end col -->
              <div class="col-sm-12">
                <div class="row">
                  <div class="col">
                    <div
                      class="dataTables_paginate paging_simple_numbers float-end"
                    >
                      <!-- pagination -->
                      <b-pagination
                        class="pagination-rounded"
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                      ></b-pagination>
                    </div>
                  </div>
                </div>
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
