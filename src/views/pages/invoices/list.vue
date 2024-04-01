<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { invoiceList } from "./data-invoices";

/**
 * Invoice List component
 */
export default {
  page: {
    title: "Invoice List",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      invoiceList: invoiceList,
      title: "Invoice List",
      items: [
        {
          text: "Invoices",
        },
        {
          text: "Invoice List",
          active: true,
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      sortDesc: false,
      sortBy: "date",
      currentTab: 0,
      date: null,
      rangeOptions: {
        mode: "range",
      },
      isModalOpen: false,
    };
  },
  components: {
    Layout,
    PageHeader,
    flatPickr,
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.invoiceList.length;
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    /**
     * Search the table data with search input
     */
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },

    showTab(n) {
      // This function will display the specified tab of the form...
      const x = document.getElementsByClassName("wizard-tab");

      if (x[n] !== undefined) {
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
      }
    },

    nextPrev(n) {
      // This function will figure out which tab to display
      const x = document.getElementsByClassName("wizard-tab");

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

    showModal() {
      this.isModalOpen = true;
      this.showTab(0);
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
            <div class="row align-items-start">
              <div class="col-sm">
                <div>
                  <button
                    type="button"
                    class="btn btn-light mb-4"
                    @click="showModal"
                  >
                    <i class="mdi mdi-plus me-1"></i> Add Invoice
                  </button>
                </div>
              </div>
              <div class="col-sm-auto">
                <div class="d-flex gap-1">
                  <div class="input-group">
                    <flat-pickr
                      mode="range"
                      v-model="date"
                      :config="rangeOptions"
                      placeholder="Select a date"
                      name="birthdate"
                      class="form-control"
                    ></flat-pickr>
                    <span class="input-group-text"
                      ><i class="uil uil-calender"></i
                    ></span>
                  </div>
                  <b-dropdown
                    variant="white"
                    toggle-class="btn-link text-body shadow-none"
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
            </div>

            <div class="table-responsive mt-3 mb-0">
              <b-table
                :items="invoiceList"
                responsive="sm"
                :per-page="perPage"
                :current-page="currentPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                @filtered="onFiltered"
              >
                
                <template #cell(invoice_id)="data">
                  <router-link
                    to="/invoices/detail"
                    class="text-dark fw-medium"
                    >{{ data.item.invoice_id }}</router-link
                  >
                </template>

                <template #cell(status)="data">
                  <div
                    class="badge font-size-12"
                    :class="{
                      'badge-soft-success': data.item.status == 'Paid',
                      'badge-soft-warning': data.item.status == 'Pending',
                    }"
                  >
                    {{ data.item.status }}
                  </div>
                </template>

                <template #cell(action)>
                  <b-dropdown right variant="light" size="sm">
                    <template v-slot:button-content>
                      <i class="uil uil-ellipsis-h"></i>
                    </template>
                    <b-dropdown-item>Edit</b-dropdown-item>
                    <b-dropdown-item>Print</b-dropdown-item>
                    <b-dropdown-item>Delete</b-dropdown-item>
                  </b-dropdown>
                </template>
              </b-table>
            </div>

            <div class="row">
              <div class="col">
                <div
                  class="dataTables_paginate paging_simple_numbers float-end"
                >
                  <ul class="pagination pagination-rounded mb-0">
                    <!-- pagination -->
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="rows"
                      :per-page="perPage"
                    ></b-pagination>
                  </ul>
                </div>
              </div>
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

    <!-- Modal -->
    <b-modal
      v-model="isModalOpen"
      centered
      scrollable
      size="xl"
      title="Add Invoice"
      hide-footer
    >
      <form>
        <div>
          <ul class="wizard-nav mb-5">
            <li class="wizard-list-item">
              <div class="list-item">
                <div
                  class="step-icon"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Customer Info"
                >
                  <i class="uil uil-user-circle"></i>
                </div>
              </div>
            </li>
            <li class="wizard-list-item">
              <div class="list-item">
                <div
                  class="step-icon"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Invoice Details"
                >
                  <i class="uil uil-invoice"></i>
                </div>
              </div>
            </li>

            <li class="wizard-list-item">
              <div class="list-item">
                <div
                  class="step-icon"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Order Summery"
                >
                  <i class="uil uil-clipboard-notes"></i>
                </div>
              </div>
            </li>
          </ul>
          <!-- wizard-nav -->

          <div class="wizard-tab" style="display: block;">
            <div class="text-center mb-4">
              <h5>Customer Information</h5>
              <p class="card-title-desc">Fill all information below</p>
            </div>
            <div>
              <div class="row">
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label for="customerinfo-name-input" class="form-label"
                      >Customer Name :</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter customer name"
                      id="customerinfo-name-input"
                    />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label for="customerinfo-email-input" class="form-label"
                      >Email :</label
                    >
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter email"
                      id="customerinfo-email-input"
                    />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label for="customerinfo-phone-input" class="form-label"
                      >Phone :</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter phone"
                      id="customerinfo-phone-input"
                    />
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label for="customerinfo-address-input" class="form-label"
                  >Address :</label
                >
                <textarea
                  class="form-control"
                  id="customerinfo-address-input"
                  rows="2"
                  placeholder="Enter Address"
                ></textarea>
              </div>
            </div>
          </div>
          <!-- wizard-tab -->

          <div class="wizard-tab" style="">
            <div class="text-center mb-4">
              <h5>Invoice Details</h5>
              <p class="card-title-desc">Fill Invoice Details.</p>
            </div>
            <div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label for="invoicenumberinput" class="form-label"
                      >Invoice #</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="invoicenumberinput"
                      placeholder="Invoice ID"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Invoice Date</label>
                    <flat-pickr
                      mode="range"
                      v-model="date"
                      placeholder="Select a date"
                      name="birthdate"
                      class="form-control"
                    ></flat-pickr>
                  </div>
                  <div class="mb-3">
                    <label for="invoicedescriptioninput" class="form-label"
                      >Description (Optional)</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="invoicedescriptioninput"
                      placeholder="Description"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label">Payment method :</label>
                    <select class="form-select">
                      <option selected>Select Payment method</option>
                      <option value="CR">Credit / Debit Card</option>
                      <option value="PY">Paypal</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- wizard-tab -->

          <div class="wizard-tab" style="">
            <div class="text-center mb-4">
              <h5>Order Summery</h5>
              <p class="card-title-desc">Fill Order Summery Details.</p>
            </div>
            <div>
              <div class="table-responsive">
                <table class="table table-nowrap">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Item name</th>
                      <th scope="col">Description</th>
                      <th scope="col" width="120px">Price</th>
                      <th scope="col" width="120px">Quantity</th>
                      <th scope="col" width="120px">Total</th>
                      <th scope="col" class="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        <div>
                          <input class="form-control" type="text" placeholder="" />
                        </div>
                      </td>
                      <td>
                        <div>
                          <textarea class="form-control" rows="2"></textarea>
                        </div>
                      </td>
                      <td>
                        <div>
                          <input class="form-control" type="text" />
                        </div>
                      </td>
                      <td>
                        <div>
                          <input class="form-control" type="text" />
                        </div>
                      </td>
                      <td>
                        <div>
                          <input
                            class="form-control"
                            type="text"
                            value="0.00"
                            readonly
                          />
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <a
                            href="#"
                            class="text-danger p-2 d-inline-block"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Delete"
                            ><i class="fas fa-trash-alt"></i
                          ></a>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">2</th>
                      <td>
                        <div>
                          <input class="form-control" type="text" />
                        </div>
                      </td>
                      <td>
                        <div>
                          <textarea class="form-control" rows="2"></textarea>
                        </div>
                      </td>
                      <td>
                        <div>
                          <input class="form-control" type="text" />
                        </div>
                      </td>
                      <td>
                        <div>
                          <input class="form-control" type="text" />
                        </div>
                      </td>
                      <td>
                        <div>
                          <input
                            class="form-control"
                            type="text"
                            value="0.00"
                            readonly
                          />
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <a
                            href="#"
                            class="text-danger p-2 d-inline-block"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Delete"
                            ><i class="fas fa-trash-alt"></i
                          ></a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="row justify-content-end">
                <div class="col-xl-3 col-md-4">
                  <div>
                    <div>
                      <h5 class="font-size-14 py-2">
                        Sub Total :
                        <span class="float-end fw-normal text-body">0.00</span>
                      </h5>
                    </div>
                    <div>
                      <h5 class="font-size-14 py-2">
                        Discount :
                        <span class="float-end fw-normal text-body">
                          - 0.00</span
                        >
                      </h5>
                    </div>
                    <div>
                      <h5 class="font-size-14 py-2">
                        Shipping Charge :
                        <span class="float-end fw-normal text-body"> 0.00</span>
                      </h5>
                    </div>
                    <div>
                      <h5 class="font-size-14 py-2">
                        Tax :
                        <span class="float-end fw-normal text-body"> 0.00</span>
                      </h5>
                    </div>
                    <div>
                      <h5 class="font-size-14 py-2">
                        Total : <span class="float-end"> 0.00</span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
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
        </div>
      </form>
    </b-modal>
    <!-- end modal -->
  </Layout>
</template>
