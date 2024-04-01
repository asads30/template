<script>
import Layout from "../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * File-manager component
 */
export default {
  page: {
    title: "File Manager",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "File Manager",
      items: [
        {
          text: "Apps",
        },
        {
          text: "File Manager",
          active: true,
        },
      ],
      series: [76],
      chartOptions: {
        chart: {
          height: 150,
          type: "radialBar",
          sparkline: {
            enabled: true,
          },
        },
        colors: ["#038edc"],
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 5, // margin is in pixels
            },
            hollow: {
              size: "60%",
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                offsetY: -2,
                fontSize: "16px",
              },
            },
          },
        },
        grid: {
          padding: {
            top: -10,
          },
        },
        labels: ["Storage"],
      },
      fileData: [
        {
          icon: "fas fa-file-alt text-primary",
          name: "Index.html",
          date: "12-10-2020, 09:45",
          size: "09 KB",
        },
        {
          icon: "fas fa-file-archive text-warning",
          name: "Project-A.zip",
          date: "11-10-2020, 17:05",
          size: "115 KB",
        },
        {
          icon: "fas fa-image text-muted",
          name: "Img-1.jpeg",
          date: "11-10-2020, 13:26",
          size: "86 KB",
        },
        {
          icon: "fas fa-file-alt text-muted",
          name: "Update list.txt",
          date: "10-10-2020, 11:32",
          size: "08 KB",
        },
        {
          icon: "fas fa-folder text-warning",
          name: "Project B",
          date: "10-10-2020, 10:51",
          size: "72 KB",
        },
        {
          icon: "fas fa-file-alt text-muted",
          name: "Changes list.txt",
          date: "09-10-2020, 17:05",
          size: "07 KB",
        },
        {
          icon: "fas fa-image text-success",
          name: "Img-2.png",
          date: "09-10-2020, 15:12",
          size: "31 KB",
        },
        {
          icon: "fas fa-folder text-warning",
          name: "Project C",
          date: "09-10-2020, 10:11",
          size: "20 KB",
        },
        {
          icon: "fas fa-file-alt text-primary",
          name: "Starter-page.html",
          date: "08-10-2020, 03:22",
          size: "11 KB",
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
    <div class="d-xl-flex">
      <div class="w-100">
        <div class="d-md-flex">
          <div class="card filemanager-sidebar me-md-3">
            <div class="card-body">
              <div class="d-flex flex-column h-100">
                <div class="mb-4">
                  <ul class="list-unstyled categories-list">
                    <li>
                      <div class="custom-accordion">
                        <a
                          class="text-body fw-medium py-1 d-flex align-items-center"
                          v-b-toggle.categories-collapse
                          data-bs-toggle="collapse"
                          href="javascript:void(0);"
                        >
                          <i
                            class="fas fa-folder text-warning font-size-13 me-2"
                          ></i>
                          Files
                          <i
                            class="mdi mdi-chevron-up accor-down-icon ms-auto"
                          ></i>
                        </a>
                        <b-collapse
                          visible
                          class="collapse show"
                          id="categories-collapse"
                        >
                          <div class="card border-0 shadow-none ps-2 mb-0">
                            <ul class="list-unstyled mb-0">
                              <li>
                                <a href="#" class="d-flex align-items-center"
                                  ><span class="me-auto">Design</span></a
                                >
                              </li>
                              <li>
                                <a href="#" class="d-flex align-items-center"
                                  ><span class="me-auto">Development</span>
                                  <i
                                    class="fas fa-map-pin font-size-10 ms-auto"
                                  ></i
                                ></a>
                              </li>
                              <li>
                                <a href="#" class="d-flex align-items-center"
                                  ><span class="me-auto">Project A</span></a
                                >
                              </li>
                              <li>
                                <a href="#" class="d-flex align-items-center"
                                  ><span class="me-auto">Admin</span>
                                  <i
                                    class="fas fa-map-pin font-size-10 ms-auto"
                                  ></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                        </b-collapse>
                      </div>
                    </li>
                    <li>
                      <a
                        href="javascript: void(0);"
                        class="text-body d-flex align-items-center"
                      >
                        <i
                          class="fab fa-google-drive text-muted font-size-13 me-2"
                        ></i>
                        <span class="me-auto">Google Drive</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript: void(0);"
                        class="text-body d-flex align-items-center"
                      >
                        <i
                          class="fab fa-dropbox font-size-13 me-2 text-primary"
                        ></i>
                        <span class="me-auto">Dropbox</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript: void(0);"
                        class="text-body d-flex align-items-center"
                      >
                        <i
                          class="fas fa-share-alt text-muted font-size-13 me-2"
                        ></i>
                        <span class="me-auto">Shared</span>
                        <i class="mdi mdi-circle-medium text-danger ms-2"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript: void(0);"
                        class="text-body d-flex align-items-center"
                      >
                        <i class="far fa-star text-muted font-size-13 me-2"></i>
                        <span class="me-auto">Starred</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript: void(0);"
                        class="text-body d-flex align-items-center"
                      >
                        <i
                          class="fas fa-trash-alt text-danger font-size-13 me-2"
                        ></i>
                        <span class="me-auto">Trash</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript: void(0);"
                        class="text-body d-flex align-items-center"
                      >
                        <i class="fas fa-cog text-muted font-size-13 me-2"></i>
                        <span class="me-auto">Setting</span
                        ><span class="badge bg-success rounded-pill ms-2"
                          >01</span
                        >
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="mt-auto">
                  <b-alert show dismissible>
                    <div class="mb-3">
                      <i class="fas fa-folder-open h1 text-info"></i>
                    </div>
                    <div>
                      <h5 class="text-info">Upgrade Features</h5>
                      <p>
                        Upgrade your plan from a
                        <span class="fw-semibold">Free trial</span>, to ‘Premium
                        Plan’
                      </p>
                      <div class="text-center mt-4">
                        <router-link
                          to="/pricing/basic"
                          class="btn btn-link text-decoration-none text-info w-100 shadow-none"
                          >Upgrade <i class="mdi mdi-arrow-right"></i
                        ></router-link>
                      </div>
                    </div>
                  </b-alert>
                </div>
              </div>
            </div>
            <!-- end cardbody-->
          </div>
          <!-- end card -->
          <!-- filemanager-leftsidebar -->

          <div class="w-100">
            <div class="card">
              <div class="card-body">
                <div>
                  <div class="row mb-3">
                    <div class="col-lg-4 col-sm-6">
                      <div class="search-box mb-2">
                        <div class="position-relative">
                          <input
                            type="text"
                            class="form-control bg-light border-light rounded"
                            placeholder="Search..."
                          />
                          <i class="uil uil-search search-icon"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-8 col-sm-6">
                      <div
                        class="mt-4 mt-sm-0 d-flex align-items-center justify-content-sm-end"
                      >
                        <div class="mb-2 me-2">
                          <b-dropdown variant="primary" class="dropdown" right>
                            <template v-slot:button-content>
                              <i class="uil uil-plus me-1"></i> Create New
                            </template>

                            <b-dropdown-item
                              ><i class="uil uil-folder me-1"></i>
                              Folder</b-dropdown-item
                            >
                            <b-dropdown-item
                              ><i class="uil uil-file me-1"></i>
                              File</b-dropdown-item
                            >
                          </b-dropdown>
                        </div>

                        <b-dropdown
                          right
                          variant="white"
                          class="mb-0"
                          toggle-class="btn-link text-muted p-1 mt-n2"
                        >
                          <template v-slot:button-content>
                            <i class="uil uil-ellipsis-v font-size-20"></i>
                          </template>
                          <b-dropdown-item>Share Files</b-dropdown-item>
                          <b-dropdown-item>Share with me</b-dropdown-item>
                          <b-dropdown-item>Other Actions</b-dropdown-item>
                        </b-dropdown>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div class="row">
                    <div class="col-xl-4 col-sm-6">
                      <div class="card shadow-none border">
                        <div class="card-body p-3">
                          <div>
                            <div class="float-end ms-2">
                              <b-dropdown
                                variant="white"
                                right
                                toggle-class="font-size-16 text-muted p-0"
                              >
                                <template v-slot:button-content>
                                  <i class="uil uil-ellipsis-h"></i>
                                </template>
                                <b-dropdown-item>Open</b-dropdown-item>
                                <b-dropdown-item>Edit</b-dropdown-item>
                                <b-dropdown-item>Rename</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item>Remove</b-dropdown-item>
                              </b-dropdown>
                            </div>
                            <div class="avatar-sm me-3 mb-3">
                              <div class="avatar-title bg-transparent rounded">
                                <i
                                  class="fab fa-google-drive font-size-24 text-muted"
                                ></i>
                              </div>
                            </div>
                            <div>
                              <h5 class="font-size-14 text-truncate">
                                <a href="javascript: void(0);" class="text-body"
                                  >Google Drive</a
                                >
                              </h5>
                              <div class="mt-3">
                                <p class="text-muted font-size-13 mb-1">
                                  20GB of 50GB used
                                </p>
                                <div
                                  class="progress animated-progess custom-progress"
                                >
                                  <div
                                    class="progress-bar"
                                    role="progressbar"
                                    style="width: 25%"
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- end card body -->
                      </div>
                      <!-- end card -->
                    </div>
                    <!-- end col -->

                    <div class="col-xl-4 col-sm-6">
                      <div class="card shadow-none border">
                        <div class="card-body p-3">
                          <div>
                            <div class="float-end ms-2">
                              <b-dropdown
                                variant="white"
                                right
                                toggle-class="font-size-16 text-muted p-0"
                              >
                                <template v-slot:button-content>
                                  <i class="uil uil-ellipsis-h"></i>
                                </template>
                                <b-dropdown-item>Open</b-dropdown-item>
                                <b-dropdown-item>Edit</b-dropdown-item>
                                <b-dropdown-item>Rename</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item>Remove</b-dropdown-item>
                              </b-dropdown>
                            </div>
                            <div class="avatar-sm me-3 mb-3">
                              <div class="avatar-title bg-transparent rounded">
                                <i
                                  class="fab fa-dropbox font-size-24 text-primary"
                                ></i>
                              </div>
                            </div>
                            <div>
                              <h5 class="font-size-14 text-truncate">
                                <a href="javascript: void(0);" class="text-body"
                                  >Dropbox</a
                                >
                              </h5>
                              <div class="mt-3">
                                <p class="text-muted font-size-13 mb-1">
                                  15GB of 40GB used
                                </p>
                                <div
                                  class="progress animated-progess custom-progress"
                                >
                                  <div
                                    class="progress-bar"
                                    role="progressbar"
                                    style="width: 25%"
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- end card body -->
                      </div>
                      <!-- end card -->
                    </div>
                    <!-- end col -->

                    <div class="col-xl-4 col-sm-6">
                      <div class="card shadow-none border">
                        <div class="card-body p-3">
                          <div>
                            <div class="float-end ms-2">
                              <b-dropdown
                                variant="white"
                                right
                                toggle-class="font-size-16 text-muted p-0"
                              >
                                <template v-slot:button-content>
                                  <i class="uil uil-ellipsis-h"></i>
                                </template>
                                <b-dropdown-item>Open</b-dropdown-item>
                                <b-dropdown-item>Edit</b-dropdown-item>
                                <b-dropdown-item>Rename</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item>Remove</b-dropdown-item>
                              </b-dropdown>
                            </div>
                            <div class="avatar-sm me-3 mb-3">
                              <div class="avatar-title bg-transparent rounded">
                                <i
                                  class="fas fa-folder-open font-size-24 text-warning"
                                ></i>
                              </div>
                            </div>
                            <div>
                              <h5 class="font-size-14 text-truncate">
                                <a href="javascript: void(0);" class="text-body"
                                  >Drive</a
                                >
                              </h5>
                              <div class="mt-3">
                                <p class="text-muted font-size-13 mb-1">
                                  12GB of 30GB used
                                </p>
                                <div
                                  class="progress animated-progess custom-progress"
                                >
                                  <div
                                    class="progress-bar"
                                    role="progressbar"
                                    style="width: 20%"
                                    aria-valuenow="20"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
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
                </div>

                <div class="mt-4">
                  <div class="d-flex flex-wrap">
                    <h5 class="font-size-16 me-3">Folder</h5>

                    <div class="ms-auto">
                      <a
                        href="javascript: void(0);"
                        class="fw-medium text-reset"
                        >View All</a
                      >
                    </div>
                  </div>
                  <hr class="mt-2" />

                  <div class="row">
                    <div class="col-xl-4 col-sm-6">
                      <div class="card shadow-none border">
                        <div class="card-body p-3">
                          <div class="">
                            <div class="float-end ms-2">
                              <b-dropdown
                                variant="white"
                                right
                                toggle-class="font-size-16 text-muted p-0"
                              >
                                <template v-slot:button-content>
                                  <i class="uil uil-ellipsis-h"></i>
                                </template>
                                <b-dropdown-item>Open</b-dropdown-item>
                                <b-dropdown-item>Edit</b-dropdown-item>
                                <b-dropdown-item>Rename</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item>Remove</b-dropdown-item>
                              </b-dropdown>
                            </div>
                            <div class="avatar-sm me-3 mb-3">
                              <div class="avatar-title bg-transparent rounded">
                                <i
                                  class="fas fa-folder font-size-24 text-warning"
                                ></i>
                              </div>
                            </div>
                            <div class="d-flex">
                              <div class="overflow-hidden me-auto">
                                <h5 class="font-size-14 text-truncate mb-1">
                                  <a
                                    href="javascript: void(0);"
                                    class="text-body"
                                    >Design</a
                                  >
                                </h5>
                                <p class="text-muted text-truncate mb-0">
                                  12 Files
                                </p>
                              </div>
                              <div class="align-self-end ms-2">
                                <p class="text-muted mb-0">6GB</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- end card body-->
                      </div>
                      <!-- end card -->
                    </div>
                    <!-- end col -->

                    <div class="col-xl-4 col-sm-6">
                      <div class="card shadow-none border">
                        <div class="card-body p-3">
                          <div class="">
                            <div class="float-end ms-2">
                              <b-dropdown
                                variant="white"
                                right
                                toggle-class="font-size-16 text-muted p-0"
                              >
                                <template v-slot:button-content>
                                  <i class="uil uil-ellipsis-h"></i>
                                </template>
                                <b-dropdown-item>Open</b-dropdown-item>
                                <b-dropdown-item>Edit</b-dropdown-item>
                                <b-dropdown-item>Rename</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item>Remove</b-dropdown-item>
                              </b-dropdown>
                            </div>
                            <div class="avatar-sm me-3 mb-3">
                              <div class="avatar-title bg-transparent rounded">
                                <i
                                  class="fas fa-folder font-size-24 text-warning"
                                ></i>
                              </div>
                            </div>
                            <div class="d-flex">
                              <div class="overflow-hidden me-auto">
                                <h5 class="font-size-14 text-truncate mb-1">
                                  <a
                                    href="javascript: void(0);"
                                    class="text-body"
                                    >Development</a
                                  >
                                </h5>
                                <p class="text-muted text-truncate mb-0">
                                  20 Files
                                </p>
                              </div>
                              <div class="align-self-end ms-2">
                                <p class="text-muted mb-0">8GB</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- end card body-->
                      </div>
                      <!-- end card -->
                    </div>
                    <!-- end col -->

                    <div class="col-xl-4 col-sm-6">
                      <div class="card shadow-none border">
                        <div class="card-body p-3">
                          <div class="">
                            <div class="float-end ms-2">
                              <b-dropdown
                                variant="white"
                                right
                                toggle-class="font-size-16 text-muted p-0"
                              >
                                <template v-slot:button-content>
                                  <i class="uil uil-ellipsis-h"></i>
                                </template>
                                <b-dropdown-item>Open</b-dropdown-item>
                                <b-dropdown-item>Edit</b-dropdown-item>
                                <b-dropdown-item>Rename</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item>Remove</b-dropdown-item>
                              </b-dropdown>
                              <!-- end dropdown -->
                            </div>
                            <div class="avatar-sm me-3 mb-3">
                              <div class="avatar-title bg-transparent rounded">
                                <i
                                  class="fas fa-folder font-size-24 text-warning"
                                ></i>
                              </div>
                            </div>
                            <div class="d-flex">
                              <div class="overflow-hidden me-auto">
                                <h5 class="font-size-14 text-truncate mb-1">
                                  <a
                                    href="javascript: void(0);"
                                    class="text-body"
                                    >Project A</a
                                  >
                                </h5>
                                <p class="text-muted text-truncate mb-0">
                                  06 Files
                                </p>
                              </div>
                              <div class="align-self-end ms-2">
                                <p class="text-muted mb-0">2GB</p>
                              </div>
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
                </div>

                <div class="mt-4">
                  <div class="d-flex flex-wrap">
                    <h5 class="font-size-16 me-3">Recent Files</h5>

                    <div class="ms-auto">
                      <a
                        href="javascript: void(0);"
                        class="fw-medium text-reset"
                        >View All</a
                      >
                    </div>
                  </div>
                  <hr class="mt-2" />

                  <div class="table-responsive">
                    <table
                      class="table align-middle table-nowrap table-hover mb-0"
                    >
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Date Modified</th>
                          <th scope="col" colspan="2">Size</th>
                        </tr>
                        <!-- end tr -->
                      </thead>
                      <!-- end thead -->
                      <tbody>
                        <tr v-for="(item, index) in fileData" :key="index">
                          <td>
                            <a
                              href="javascript: void(0);"
                              class="text-dark fw-medium"
                              ><i :class="`${item.icon} align-middle me-2`"></i>
                              {{ item.name }}</a
                            >
                          </td>
                          <td>{{ item.date }}</td>
                          <td>{{ item.size }}</td>
                          <td>
                            <b-dropdown
                              variant="white"
                              toggle-class="font-size-16 text-muted p-0"
                              
                            >
                              <template v-slot:button-content>
                                <i class="uil uil-ellipsis-h"></i>
                              </template>
                              <b-dropdown-item>Open</b-dropdown-item>
                              <b-dropdown-item>Edit</b-dropdown-item>
                              <b-dropdown-item>Rename</b-dropdown-item>
                              <b-dropdown-divider></b-dropdown-divider>
                              <b-dropdown-item>Remove</b-dropdown-item>
                            </b-dropdown>
                          </td>
                        </tr>
                        <!-- end tr -->
                      </tbody>
                      <!-- end tbody -->
                    </table>
                    <!-- end table -->
                  </div>
                  <!-- end table responsive -->
                </div>
              </div>
              <!-- end cardbody-->
            </div>
            <!-- end card -->
          </div>
          <!-- end w-100 -->
        </div>
      </div>

      <div class="card filemanager-sidebar ms-lg-3">
        <div class="card-body">
          <div class="text-center">
            <h5 class="font-size-15 mb-4">Storage</h5>
            <apexchart
              id="radial-chart"
              class="apex-charts"
              height="150"
              dir="ltr"
              :series="series"
              :options="chartOptions"
            ></apexchart>
            <p class="text-muted mt-4">48.02 GB (76%) of 64 GB used</p>
          </div>

          <div class="mt-4">
            <div class="card border shadow-none mb-2">
              <a href="javascript: void(0);" class="text-body">
                <div class="p-2">
                  <div class="d-flex">
                    <div class="avatar-sm align-self-center me-2">
                      <div
                        class="avatar-title rounded bg-transparent text-success font-size-18"
                      >
                        <i class="fas fa-image"></i>
                      </div>
                    </div>

                    <div class="overflow-hidden me-auto">
                      <h5 class="font-size-13 text-truncate mb-1">Images</h5>
                      <p class="text-muted text-truncate mb-0">176 Files</p>
                    </div>

                    <div class="ms-2">
                      <p class="text-muted">6 GB</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <!-- end card -->

            <div class="card border shadow-none mb-2">
              <a href="javascript: void(0);" class="text-body">
                <div class="p-2">
                  <div class="d-flex">
                    <div class="avatar-sm align-self-center me-2">
                      <div
                        class="avatar-title rounded bg-transparent text-danger font-size-18"
                      >
                        <i class="far fa-play-circle"></i>
                      </div>
                    </div>

                    <div class="overflow-hidden me-auto">
                      <h5 class="font-size-13 text-truncate mb-1">Video</h5>
                      <p class="text-muted text-truncate mb-0">45 Files</p>
                    </div>

                    <div class="ms-2">
                      <p class="text-muted">4.1 GB</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <!-- end card -->

            <div class="card border shadow-none mb-2">
              <a href="javascript: void(0);" class="text-body">
                <div class="p-2">
                  <div class="d-flex">
                    <div class="avatar-sm align-self-center me-2">
                      <div
                        class="avatar-title rounded bg-transparent text-info font-size-18"
                      >
                        <i class="fas fa-music"></i>
                      </div>
                    </div>

                    <div class="overflow-hidden me-auto">
                      <h5 class="font-size-13 text-truncate mb-1">Music</h5>
                      <p class="text-muted text-truncate mb-0">21 Files</p>
                    </div>

                    <div class="ms-2">
                      <p class="text-muted">3.2 GB</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <!-- end card -->

            <div class="card border shadow-none mb-2">
              <a href="javascript: void(0);" class="text-body">
                <div class="p-2">
                  <div class="d-flex">
                    <div class="avatar-sm align-self-center me-2">
                      <div
                        class="avatar-title rounded bg-transparent text-primary font-size-18"
                      >
                        <i class="fas fa-file-alt"></i>
                      </div>
                    </div>

                    <div class="overflow-hidden me-auto">
                      <h5 class="font-size-13 text-truncate mb-1">Document</h5>
                      <p class="text-muted text-truncate mb-0">21 Files</p>
                    </div>

                    <div class="ms-2">
                      <p class="text-muted">2 GB</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <!-- end card -->

            <div class="card border shadow-none">
              <a href="javascript: void(0);" class="text-body">
                <div class="p-2">
                  <div class="d-flex">
                    <div class="avatar-sm align-self-center me-2">
                      <div
                        class="avatar-title rounded bg-transparent text-warning font-size-18"
                      >
                        <i class="fas fa-folder"></i>
                      </div>
                    </div>

                    <div class="overflow-hidden me-auto">
                      <h5 class="font-size-13 text-truncate mb-1">Others</h5>
                      <p class="text-muted text-truncate mb-0">20 Files</p>
                    </div>

                    <div class="ms-2">
                      <p class="text-muted">1.4 GB</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <!-- end card -->
          </div>
        </div>
        <!-- end card body -->
      </div>
      <!-- end card -->
    </div>
    <!-- end row -->
  </Layout>
</template>
