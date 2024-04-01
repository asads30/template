<script>
export default {
  data() {
    return {
      orderData: [
        {
          id: "#DK1018",
          date: "1 Jun, 11:21",
          status: "Paid",
          name: "Alex Fox",
          product: require("@/assets/images/users/avatar-1.jpg"),
          purchased: "Wireframing Kit for Figma",
          revenue: "$129.99",
        },
        {
          id: "#DK1017",
          date: "29 May, 18:36",
          status: "Paid",
          name: "Joya Calvert",
          product: require("@/assets/images/users/avatar-3.jpg"),
          purchased: "Mastering the Grid +2 more",
          revenue: "$228.88",
        },
        {
          id: "#DK1016",
          date: "25 May , 08:09",
          status: "Refunded",
          name: "Gracyn Make",
          product: require("@/assets/images/users/avatar-4.jpg"),
          purchased: "Wireframing Kit for Figma",
          revenue: "$9.99",
        },
        {
          id: "#DK1015",
          date: "19 May , 14:09",
          status: "Paid",
          name: "Monroe Mock",
          product: require("@/assets/images/users/avatar-5.jpg"),
          purchased: "Spiashify 2.0",
          revenue: "$44.00",
        },
        {
          id: "#DK1014",
          date: "10 May , 10:00",
          status: "Paid",
          name: "Lauren Bond",
          product: require("@/assets/images/users/avatar-6.jpg"),
          purchased: "Mastering the Grid",
          revenue: "$75.87",
        },
        {
          id: "#DK1011",
          date: "29 Apr , 12:46",
          status: "Changeback",
          name: "Ricardo Schaefer",
          product: require("@/assets/images/users/avatar-9.jpg"),
          purchased: "Spiashify 2.0",
          revenue: "$63.99",
        },
        {
          id: "#DK1010",
          date: "27 Apr , 10:53",
          status: "Paid",
          name: "Arvi Hasan",
          product: require("@/assets/images/users/avatar-10.jpg"),
          purchased: "Wireframing Kit for Figma",
          revenue: "$51.00",
        },
      ],
    };
  },
  methods: {
    initCheckAll() {
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
  }
};
</script>

<template>
  <div class="col-xl-8">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h4 class="card-title mb-4">Orders</h4>
          <div>
            <b-dropdown
              class="d-inline"
              variant="white"
              toggle-class="text-muted me-3 mb-3 align-middle p-0"
              menu-class="dropdown-menu-lg dropdown-menu-end"
              right
            >
              <template v-slot:button-content>
                <i class="bx bx-search font-size-16"></i>
              </template>

              <form class="p-2">
                <div class="search-box">
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control rounded bg-light border-0"
                      placeholder="Search..."
                    />
                    <i class="bx bx-search font-size-16 search-icon"></i>
                  </div>
                </div>
              </form>
            </b-dropdown>

            <b-dropdown
              variant="white"
              class="d-inline"
              toggle-class="text-reset mb-3 p-0"
            >
              <template v-slot:button-content>
                <span class="fw-semibold">Report By:</span>
                <span class="text-muted"
                  >Monthly<i class="mdi mdi-chevron-down ms-1"></i
                ></span>
              </template>
              <b-dropdown-item href="#">Yearly</b-dropdown-item>
              <b-dropdown-item href="#">Monthly</b-dropdown-item>
              <b-dropdown-item href="#">Weekly</b-dropdown-item>
              <b-dropdown-item href="#">Today</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>

        <div class="table-responsive">
          <table
            class="table table-hover table-nowrap mb-0 align-middle table-check"
          >
            <thead class="bg-light">
              <tr>
                <th class="rounded-start" style="width: 15px;" @click="initCheckAll">
                  <div class="form-check">
                    <input
                      class="form-check-input font-size-16"
                      type="checkbox"
                      value=""
                      id="checkAll"
                    />
                    <label class="form-check-label" for="checkAll"> </label>
                  </div>
                </th>
                <th>ID</th>
                <th>Date</th>
                <th>Status</th>
                <th>Customer</th>
                <th>Purchased</th>
                <th colspan="2" class="rounded-end">Revenue</th>
              </tr>
              <!-- end tr -->
            </thead>
            <!-- end thead -->
            <tbody>
              <tr v-for="(item, index) in orderData" :key="index">
                <td>
                  <div class="form-check">
                    <input
                      class="form-check-input font-size-16"
                      type="checkbox"
                      value=""
                      id="flexCheckexampleone"
                    />
                    <label class="form-check-label" for="flexCheckexampleone">
                    </label>
                  </div>
                </td>
                <td class="fw-medium">
                  {{item.id}}
                </td>
                <td>
                  {{item.date}}
                </td>
                <td>
                  <div class="d-flex">
                    <div class="me-2">
                      <i class="mdi mdi-check-circle-outline text-success"
                      :class="{
                        'mdi-arrow-left-thin-circle-outline text-warning': item.status == 'Refunded',
                        'mdi-close-circle-outline text-danger': item.status == 'Changeback'
                       }"
                      ></i>
                    </div>
                    <div>
                      <p class="mb-0">{{item.status}}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="me-2">
                      <img
                        :src="`${item.product}`"
                        class="avatar-sm img-thumbnail h-auto rounded-circle"
                        alt="Error"
                      />
                    </div>
                    <div>
                      <h5 class="font-size-14 text-truncate mb-0">
                        <a href="#" class="text-reset">{{item.name}}</a>
                      </h5>
                    </div>
                  </div>
                </td>
                <td>
                  {{item.purchased}}
                </td>
                <td>
                  {{item.revenue}}
                </td>
                <td>
                  <b-dropdown variant="white" toggle-class="p-0"> 
                    <template v-slot:button-content>
                      <i class="mdi mdi-dots-horizontal font-size-18 text-muted"></i>
                    </template>
                    <li>
                      <b-dropdown-item><i class="mdi mdi-pencil font-size-16 text-success me-1"></i>
                        Edit</b-dropdown-item>
                    </li>
                    <li>
                      <b-dropdown-item><i class="mdi mdi-trash-can font-size-16 text-danger me-1"></i>
                        Delete</b-dropdown-item>
                    </li>
                  </b-dropdown>
                </td>
              </tr>
              <!-- end /tr -->
             
            </tbody>
            <!-- end tbody -->
          </table>
          <!-- end table -->
        </div>
      </div>
    </div>
  </div>
</template>
