<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { projectList } from "./data-list";

/**
 * Projects List component
 */
export default {
  page: {
    title: "Projects List",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      projectList: projectList,
      title: "Projects List",
      items: [
        {
          text: "Projects",
        },
        {
          text: "Projects List",
          active: true,
        },
      ],
      activeProject: [],
      completedProject: [],
    };
  },
  components: {
    Layout,
    PageHeader,
  },
  mounted() {
    this.activeProject = this.projectList.filter(
      (element) => element.category === "active"
    );

    this.completedProject = this.projectList.filter(
      (element) => element.category === "completed"
    );
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
              <div class="col-md-3">
                <div class="mb-3">
                  <router-link to="/projects/create" class="btn btn-light">
                    <i class="uil uil-plus me-1"></i> Add New
                  </router-link>
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-9">
                <div
                  class="d-flex flex-wrap align-items-start justify-content-md-end gap-2 mb-3"
                >
                  <div class="search-box ">
                    <div class="position-relative">
                      <input
                        type="text"
                        class="form-control bg-light border-light rounded"
                        placeholder="Search..."
                      />
                      <i class="uil uil-search search-icon"></i>
                    </div>
                  </div>

                  <div>
                    <ul class="nav nav-pills">
                      <li class="nav-item">
                        <router-link
                          class="nav-link active"
                          to="/projects/list"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="List"
                          ><i class="uil uil-list-ul"></i
                        ></router-link>
                      </li>
                      <li class="nav-item">
                        <router-link
                          class="nav-link"
                          to="/projects/grid"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Grid"
                          ><i class="uil uil-apps"></i
                        ></router-link>
                      </li>
                    </ul>
                  </div>
                  <b-dropdown
                    toggle-class="text-dark shadow-none"
                    right
                    variant="white"
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

            <div class="mt-2">
              <b-tabs class="nav-tabs-custom mb-4" content-class="mt-4">
                <b-tab title="All">
                  <div
                    class="card border shadow-none"
                    v-for="(item, index) in projectList"
                    :key="index"
                  >
                    <div class="card-body">
                      <div class="d-flex">
                        <div class="flex-grow-1 me-2 flex-wrap">
                          <h5 class="font-size-15 mb-1">
                            <router-link
                              to="/projects/overview"
                              class="text-dark"
                              >{{ item.title }}</router-link
                            >
                          </h5>
                          <p class="text-muted mb-0">
                            {{ item.content }}
                          </p>
                        </div>
                        <div class="flex-shrink-0">
                          <div class="d-flex gap-2">
                            <div>
                              <a href="#" class="btn btn-light btn-sm"
                                ><i class="uil uil-pen"></i
                              ></a>
                            </div>
                            <b-dropdown variant="light" right size="sm">
                              <template v-slot:button-content>
                                <feather
                                  type="more-horizontal"
                                  class="icon-xs"
                                ></feather>
                              </template>
                              <li>
                                <a class="dropdown-item" href="#">Action</a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#"
                                  >Another action</a
                                >
                              </li>
                              <li><hr class="dropdown-divider" /></li>
                              <li>
                                <a class="dropdown-item" href="#"
                                  >Separated link</a
                                >
                              </li>
                            </b-dropdown>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end card body -->

                    <div class="row g-0">
                      <div class="col-xl-3 col-sm-6">
                        <div class="border p-3 h-100">
                          <div>
                            <p class="text-muted font-size-13 mb-2">
                              Department
                            </p>
                            <div class="badge badge-soft-primary font-size-12">
                              {{ item.department }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6">
                        <div class="border p-3 h-100">
                          <div>
                            <p class="text-muted font-size-13 mb-2">
                              Due Date
                            </p>
                            <h5 class="font-size-14 mb-0">{{ item.date }}</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6">
                        <div class="border p-3 h-100">
                          <div>
                            <p class="text-muted font-size-13 mb-2">
                              Status
                            </p>
                            <div class="badge font-size-12" :class="{'bg-success': item.status === 'Completed', 'bg-warning': item.status === 'Active'}">
                              {{ item.status }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6">
                        <div class="border p-3 h-100">
                          <div>
                            <div class="avatar-group align-items-center">
                              <div
                                class="avatar-group-item"
                                v-for="(user, index) in item.users"
                                :key="index"
                              >
                                <a
                                  href="javascript: void(0);"
                                  class="d-block"
                                  v-if="user.profile"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  v-b-tooltip.hover
                                  :title="user.name"
                                >
                                  <div class="avatar-sm">
                                    <img
                                      :src="`${user.profile}`"
                                      alt=""
                                      class="img-fluid rounded-circle"
                                    />
                                  </div>
                                </a>
                                <a
                                  href="javascript: void(0);"
                                  v-if="!user.profile"
                                  class="d-block"
                                  v-b-tooltip.hover
                                  :title="user.name"
                                >
                                  <div class="avatar-sm">
                                    <div
                                      class="avatar-title rounded-circle bg-primary"
                                    >
                                      {{ user.name.charAt(0) }}
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row -->
                  </div>
                  <!-- end card -->
                </b-tab>
                <b-tab title="Active">
                  <div
                    class="card border shadow-none"
                    v-for="(item, index) in activeProject"
                    :key="index"
                  >
                    <div class="card-body">
                      <div class="d-flex">
                        <div class="flex-grow-1 me-2 flex-wrap">
                          <h5 class="font-size-15 mb-1">
                            <router-link
                              to="/projects/overview"
                              class="text-dark"
                              >{{ item.title }}</router-link
                            >
                          </h5>
                          <p class="text-muted mb-0">
                            {{ item.content }}
                          </p>
                        </div>
                        <div class="flex-shrink-0">
                          <div class="d-flex gap-2">
                            <div>
                              <a href="#" class="btn btn-light btn-sm"
                                ><i class="uil uil-pen"></i
                              ></a>
                            </div>
                            <b-dropdown variant="light" right size="sm">
                              <template v-slot:button-content>
                                <feather
                                  type="more-horizontal"
                                  class="icon-xs"
                                ></feather>
                              </template>
                              <li>
                                <a class="dropdown-item" href="#">Action</a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#"
                                  >Another action</a
                                >
                              </li>
                              <li><hr class="dropdown-divider" /></li>
                              <li>
                                <a class="dropdown-item" href="#"
                                  >Separated link</a
                                >
                              </li>
                            </b-dropdown>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end card body -->

                    <div class="row g-0">
                      <div class="col-xl-3 col-sm-6">
                        <div class="border p-3 h-100">
                          <div>
                            <p class="text-muted font-size-13 mb-2">
                              Department
                            </p>
                            <div class="badge badge-soft-primary font-size-12">
                              {{ item.department }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6">
                        <div class="border p-3 h-100">
                          <div>
                            <p class="text-muted font-size-13 mb-2">
                              Due Date
                            </p>
                            <h5 class="font-size-14 mb-0">{{ item.date }}</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6">
                        <div class="border p-3 h-100">
                          <div>
                            <p class="text-muted font-size-13 mb-2">
                              Status
                            </p>
                           <div class="badge font-size-12" :class="{'bg-success': item.status === 'Completed', 'bg-warning': item.status === 'Active'}">
                              {{ item.status }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6">
                        <div class="border p-3 h-100">
                          <div>
                            <div class="avatar-group align-items-center">
                              <div
                                class="avatar-group-item"
                                v-for="(user, index) in item.users"
                                :key="index"
                              >
                                <a
                                  href="javascript: void(0);"
                                  class="d-block"
                                  v-if="user.profile"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  v-b-tooltip.hover
                                  :title="user.name"
                                >
                                  <div class="avatar-sm">
                                    <img
                                      :src="`${user.profile}`"
                                      alt=""
                                      class="img-fluid rounded-circle"
                                    />
                                  </div>
                                </a>
                                <a
                                  href="javascript: void(0);"
                                  v-if="!user.profile"
                                  class="d-block"
                                  v-b-tooltip.hover
                                  :title="user.name"
                                >
                                  <div class="avatar-sm">
                                    <div
                                      class="avatar-title rounded-circle bg-primary"
                                    >
                                      {{ user.name.charAt(0) }}
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row -->
                  </div>
                  <!-- end card -->
                </b-tab>
                <b-tab title="Completed">
                  <div
                    class="card border shadow-none"
                    v-for="(item, index) in completedProject"
                    :key="index"
                  >
                    <div class="card-body">
                      <div class="d-flex">
                        <div class="flex-grow-1 me-2 flex-wrap">
                          <h5 class="font-size-15 mb-1">
                            <router-link
                              to="/projects/overview"
                              class="text-dark"
                              >{{ item.title }}</router-link
                            >
                          </h5>
                          <p class="text-muted mb-0">
                            {{ item.content }}
                          </p>
                        </div>
                        <div class="flex-shrink-0">
                          <div class="d-flex gap-2">
                            <div>
                              <a href="#" class="btn btn-light btn-sm"
                                ><i class="uil uil-pen"></i
                              ></a>
                            </div>
                            <b-dropdown variant="light" right size="sm">
                              <template v-slot:button-content>
                                <feather
                                  type="more-horizontal"
                                  class="icon-xs"
                                ></feather>
                              </template>
                              <li>
                                <a class="dropdown-item" href="#">Action</a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#"
                                  >Another action</a
                                >
                              </li>
                              <li><hr class="dropdown-divider" /></li>
                              <li>
                                <a class="dropdown-item" href="#"
                                  >Separated link</a
                                >
                              </li>
                            </b-dropdown>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end card body -->

                    <div class="row g-0">
                      <div class="col-xl-3 col-sm-6">
                        <div class="border p-3 h-100">
                          <div>
                            <p class="text-muted font-size-13 mb-2">
                              Department
                            </p>
                            <div class="badge badge-soft-primary font-size-12">
                              {{ item.department }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6">
                        <div class="border p-3 h-100">
                          <div>
                            <p class="text-muted font-size-13 mb-2">
                              Due Date
                            </p>
                            <h5 class="font-size-14 mb-0">{{ item.date }}</h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6">
                        <div class="border p-3 h-100">
                          <div>
                            <p class="text-muted font-size-13 mb-2">
                              Status
                            </p>
                            <div class="badge font-size-12" :class="{'bg-success': item.status === 'Completed', 'bg-warning': item.status === 'Active'}">
                              {{ item.status }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-sm-6">
                        <div class="border p-3 h-100">
                          <div>
                            <div class="avatar-group align-items-center">
                              <div
                                class="avatar-group-item"
                                v-for="(user, index) in item.users"
                                :key="index"
                              >
                                <a
                                  href="javascript: void(0);"
                                  class="d-block"
                                  v-if="user.profile"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  v-b-tooltip.hover
                                  :title="user.name"
                                >
                                  <div class="avatar-sm">
                                    <img
                                      :src="`${user.profile}`"
                                      alt=""
                                      class="img-fluid rounded-circle"
                                    />
                                  </div>
                                </a>
                                <a
                                  href="javascript: void(0);"
                                  v-if="!user.profile"
                                  class="d-block"
                                  v-b-tooltip.hover
                                  :title="user.name"
                                >
                                  <div class="avatar-sm">
                                    <div
                                      class="avatar-title rounded-circle bg-primary"
                                    >
                                      {{ user.name.charAt(0) }}
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row -->
                  </div>
                  <!-- end card -->
                </b-tab>
              </b-tabs>
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
