<script>
import draggable from "vuedraggable";
import simplebar from "simplebar-vue";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { upcomingTasks, progressTasks, completedTasks } from "./data";

/**
 * kanban board component
 */
export default {
  page: {
    title: "Kanban Board",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "Kanban Board",
      items: [
        {
          text: "Apps",
          href: "/",
        },
        {
          text: "Kanban Board",
          active: true,
        },
      ],
      upcomingTasks: upcomingTasks,
      progressTasks: progressTasks,
      completedTasks: completedTasks,
    };
  },
  components: {
    draggable,
    Layout,
    PageHeader,
    simplebar,
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body p-4">
            <div class="border-bottom pb-4 mb-4">
              <div class="row">
                <div class="col-sm-6">
                  <div class="d-flex">
                    <div class="avatar flex-shrink-0 me-3">
                      <div class="avatar-title bg-light rounded-circle">
                        <img
                          src="@/assets/images/logo-sm.png"
                          alt=""
                          height="28"
                        />
                      </div>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-16 mb-1">
                        Dashonic Admin Dashboard
                      </h5>
                      <p class="text-muted mb-0">
                        Lorem ipsum dolor sit amet adipiscing elit
                      </p>
                    </div>
                  </div>
                </div>
                <!-- end col -->
                <div class="col-sm-6">
                  <div class="mt-4 mt-sm-0">
                      <div class="avatar-group justify-content-sm-end">          
                          <div class="avatar-group-item">
                              <a href="javascript: void(0);" class="d-block" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Emily Surface">
                                  <div class="avatar-sm">
                                      <div class="avatar-title rounded-circle bg-primary">
                                          E
                                      </div>
                                  </div>
                              </a>
                          </div><!-- end avatar group item -->
                          <div class="avatar-group-item">
                              <a href="javascript: void(0);" class="d-block" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="James Scott">
                                  <div class="avatar-sm">
                                      <img src="@/assets/images/users/avatar-2.jpg" alt="" class="img-fluid rounded-circle">
                                  </div>
                              </a>
                          </div><!-- end avatar group item -->
                          <div class="avatar-group-item">
                              <a href="javascript: void(0);" class="d-block" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Lynn Hackett">
                                  <div class="avatar-sm">
                                      <div class="avatar-title rounded-circle bg-info">
                                          L
                                      </div>
                                  </div>
                              </a>
                          </div><!-- end avatar group item -->
                          <div class="avatar-group-item">
                              <a href="javascript: void(0);" class="d-block" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Add New">
                                  <div class="avatar-sm">
                                      <div class="avatar-title rounded-circle bg-light text-primary">
                                          <i class="mdi mdi-plus fs-5"></i>
                                      </div>
                                  </div>
                              </a>
                          </div><!-- end avatar group item -->
                      </div><!-- end avatar-group -->
                  </div>
              </div>
              </div>
            </div>

            <div class="task-board">
              <div class="task-list">
                <div class="card bg-light shadow-none h-100">
                  <div
                    class="card-header bg-transparent border-bottom d-flex align-items-start"
                  >
                    <div class="flex-grow-1">
                      <h4 class="card-title mb-0">
                        Todo <span class="ml-1 text-muted">({{upcomingTasks.length}})</span>
                      </h4>
                    </div>
                    <div class="flex-shrink-0">
                      <b-dropdown
                        class="arrow-none font-size-16"
                        variant="light"
                        right
                        toggle-class="p-0"
                      >
                        <template v-slot:button-content>
                          <i class="uil uil-ellipsis-h text-muted"></i>
                        </template>
                        <b-dropdown-item>Edit</b-dropdown-item>
                        <b-dropdown-item>Delete</b-dropdown-item>
                      </b-dropdown>
                      <!-- end dropdown -->
                    </div>
                  </div>
                  <!-- end card-header -->
                  <div class="text-center p-3">
                    <a
                      href="javascript: void(0);"
                      class="btn btn-primary btn-soft w-100"
                      ><i class="mdi mdi-plus mr-1"></i> Add New</a
                    >
                  </div>
                  <simplebar class="tasklist-content p-3">
                    <draggable
                      id="todo-task"
                      class="tasks"
                      group="tasks"
                      :list="upcomingTasks"
                    >
                      <div
                        v-for="task in upcomingTasks"
                        :key="task.id"
                        class="card task-box"
                      >
                        <div class="card task-box">
                          <div class="card-body">
                            <div class="d-flex align-items-start mb-2">
                              <div class="flex-grow-1">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="task-todoCheck1"
                                  />
                                  <label
                                    class="form-check-label text-primary"
                                    for="task-todoCheck1"
                                    >{{ task.id }}</label
                                  >
                                </div>
                              </div>

                              <div class="flex-shrink-0 ms-2">
                                <b-dropdown
                                  variant="white"
                                  toggle-class="font-size-16 text-muted p-0"
                                >
                                  <template v-slot:button-content>
                                    <i class="mdi mdi-dots-horizontal"></i>
                                  </template>
                                  <b-dropdown-item>View</b-dropdown-item>
                                  <b-dropdown-item>Edit</b-dropdown-item>
                                  <b-dropdown-item>Remove</b-dropdown-item>
                                </b-dropdown>
                              </div>
                            </div>
                            <h5 class="font-size-14 mb-1">
                              {{ task.title }}
                            </h5>

                            <p class="text-muted text-truncate">
                              {{ task.content }}
                            </p>

                            <div class="avatar-group">
                              <div
                                class="avatar-group-item"
                                v-for="(item, index) in task.users"
                                :key="index"
                              >
                                <a
                                  href="javascript: void(0);"
                                  class="d-block"
                                  v-if="item.profile"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  v-b-tooltip.hover
                                  :title="item.name"
                                >
                                  <div class="avatar-sm">
                                    <img
                                      :src="`${item.profile}`"
                                      alt=""
                                      class="img-fluid rounded-circle"
                                    />
                                  </div>
                                </a>
                                <a
                                  href="javascript: void(0);"
                                  v-if="!item.profile"
                                  class="d-block"
                                  v-b-tooltip.hover
                                  :title="item.name"
                                >
                                  <div class="avatar-sm">
                                    <div
                                      class="avatar-title rounded-circle bg-primary"
                                    >
                                      {{ item.name.charAt(0) }}
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            class="card-footer bg-transparent border-top d-flex"
                          >
                            <div class="flex-grow-1">
                              <div class="font-size-13 text-muted">
                                {{ task.date }}
                              </div>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <span
                                class="badge badge-soft-primary font-size-12"
                                >{{ task.status }}</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </draggable>
                  </simplebar>
                </div>
              </div>

              <div class="task-list">
                <div class="card bg-light shadow-none h-100">
                  <div
                    class="card-header bg-transparent border-bottom d-flex align-items-start"
                  >
                    <div class="flex-grow-1">
                      <h4 class="card-title mb-0">
                        In Progress <span class="ml-1 text-muted">({{progressTasks.length}})</span>
                      </h4>
                    </div>
                    <div class="flex-shrink-0">
                      <b-dropdown
                        class="arrow-none font-size-16"
                        variant="light"
                        right
                        toggle-class="p-0"
                      >
                        <template v-slot:button-content>
                          <i class="uil uil-ellipsis-h text-muted"></i>
                        </template>
                        <b-dropdown-item>Edit</b-dropdown-item>
                        <b-dropdown-item>Delete</b-dropdown-item>
                      </b-dropdown>
                      <!-- end dropdown -->
                      <!-- end dropdown -->
                    </div>
                  </div>
                  <!-- end card-header -->
                  <div class="text-center p-3">
                    <a
                      href="javascript: void(0);"
                      class="btn btn-primary btn-soft w-100"
                      ><i class="mdi mdi-plus mr-1"></i> Add New</a
                    >
                  </div>
                  <simplebar class="tasklist-content p-3">
                    <draggable
                      id="todo-task"
                      class="tasks"
                      group="tasks"
                      :list="progressTasks"
                    >
                      <div
                        v-for="task in progressTasks"
                        :key="task.id"
                        class="card task-box"
                      >
                        <div class="card task-box">
                          <div class="card-body">
                            <div class="d-flex align-items-start mb-2">
                              <div class="flex-grow-1">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="task-todoCheck1"
                                  />
                                  <label
                                    class="form-check-label text-primary"
                                    for="task-todoCheck1"
                                    >{{ task.id }}</label
                                  >
                                </div>
                              </div>

                              <div class="flex-shrink-0 ms-2">
                                <b-dropdown
                                  variant="white"
                                  toggle-class="font-size-16 text-muted p-0"
                                >
                                  <template v-slot:button-content>
                                    <i class="mdi mdi-dots-horizontal"></i>
                                  </template>
                                  <b-dropdown-item>View</b-dropdown-item>
                                  <b-dropdown-item>Edit</b-dropdown-item>
                                  <b-dropdown-item>Remove</b-dropdown-item>
                                </b-dropdown>
                              </div>
                            </div>
                            <h5 class="font-size-14 mb-1">
                              {{ task.title }}
                            </h5>

                            <p class="text-muted text-truncate">
                              {{ task.content }}
                            </p>

                            <div class="avatar-group">
                              <div
                                class="avatar-group-item"
                                v-for="(item, index) in task.users"
                                :key="index"
                              >
                                <a
                                  href="javascript: void(0);"
                                  class="d-block"
                                  v-if="item.profile"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  v-b-tooltip.hover
                                  :title="item.name"
                                >
                                  <div class="avatar-sm">
                                    <img
                                      :src="`${item.profile}`"
                                      alt=""
                                      class="img-fluid rounded-circle"
                                    />
                                  </div>
                                </a>
                                <a
                                  href="javascript: void(0);"
                                  v-if="!item.profile"
                                  class="d-block"
                                  v-b-tooltip.hover
                                  :title="item.name"
                                >
                                  <div class="avatar-sm">
                                    <div
                                      class="avatar-title rounded-circle bg-primary"
                                    >
                                      {{ item.name.charAt(0) }}
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            class="card-footer bg-transparent border-top d-flex"
                          >
                            <div class="flex-grow-1">
                              <div class="font-size-13 text-muted">
                                {{ task.date }}
                              </div>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <span
                                class="badge badge-soft-primary font-size-12"
                                >{{ task.status }}</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </draggable>
                  </simplebar>
                </div>
              </div>

              <div class="task-list">
                <div class="card bg-light shadow-none h-100">
                  <div
                    class="card-header bg-transparent border-bottom d-flex align-items-start"
                  >
                    <div class="flex-grow-1">
                      <h4 class="card-title mb-0">
                        Completed <span class="ml-1 text-muted">({{completedTasks.length }})</span>
                      </h4>
                    </div>
                    <div class="flex-shrink-0">
                      <b-dropdown
                        class="arrow-none font-size-16"
                        variant="light"
                        right
                        toggle-class="p-0"
                      >
                        <template v-slot:button-content>
                          <i class="uil uil-ellipsis-h text-muted"></i>
                        </template>
                        <b-dropdown-item>Edit</b-dropdown-item>
                        <b-dropdown-item>Delete</b-dropdown-item>
                      </b-dropdown>
                      <!-- end dropdown -->
                      <!-- end dropdown -->
                    </div>
                  </div>
                  <!-- end card-header -->
                  <div class="text-center p-3">
                    <a
                      href="javascript: void(0);"
                      class="btn btn-primary btn-soft w-100"
                      ><i class="mdi mdi-plus mr-1"></i> Add New</a
                    >
                  </div>
                  <simplebar class="tasklist-content p-3">
                    <draggable
                      id="todo-task"
                      class="tasks"
                      group="tasks"
                      :list="completedTasks"
                    >
                      <div
                        v-for="task in completedTasks"
                        :key="task.id"
                        class="card task-box"
                      >
                        <div class="card task-box">
                          <div class="card-body">
                            <div class="d-flex align-items-start mb-2">
                              <div class="flex-grow-1">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="task-todoCheck1"
                                  />
                                  <label
                                    class="form-check-label text-primary"
                                    for="task-todoCheck1"
                                    >{{ task.id }}</label
                                  >
                                </div>
                              </div>

                              <div class="flex-shrink-0 ms-2">
                                <b-dropdown
                                  variant="white"
                                  toggle-class="font-size-16 text-muted p-0"
                                >
                                  <template v-slot:button-content>
                                    <i class="mdi mdi-dots-horizontal"></i>
                                  </template>
                                  <b-dropdown-item>View</b-dropdown-item>
                                  <b-dropdown-item>Edit</b-dropdown-item>
                                  <b-dropdown-item>Remove</b-dropdown-item>
                                </b-dropdown>
                              </div>
                            </div>
                            <h5 class="font-size-14 mb-1">
                              {{ task.title }}
                            </h5>

                            <p class="text-muted text-truncate">
                              {{ task.content }}
                            </p>

                            <div class="avatar-group">
                              <div
                                class="avatar-group-item"
                                v-for="(item, index) in task.users"
                                :key="index"
                              >
                                <a
                                  href="javascript: void(0);"
                                  class="d-block"
                                  v-if="item.profile"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  v-b-tooltip.hover
                                  :title="item.name"
                                >
                                  <div class="avatar-sm">
                                    <img
                                      :src="`${item.profile}`"
                                      alt=""
                                      class="img-fluid rounded-circle"
                                    />
                                  </div>
                                </a>
                                <a
                                  href="javascript: void(0);"
                                  v-if="!item.profile"
                                  class="d-block"
                                  v-b-tooltip.hover
                                  :title="item.name"
                                >
                                  <div class="avatar-sm">
                                    <div
                                      class="avatar-title rounded-circle bg-primary"
                                    >
                                      {{ item.name.charAt(0) }}
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            class="card-footer bg-transparent border-top d-flex"
                          >
                            <div class="flex-grow-1">
                              <div class="font-size-13 text-muted">
                                {{ task.date }}
                              </div>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                              <span
                                class="badge badge-soft-primary font-size-12"
                                >{{ task.status }}</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </draggable>
                  </simplebar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
