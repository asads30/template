<script>
import simplebar from "simplebar-vue";
import { required } from "vuelidate/lib/validators";
import appConfig from "@/app.config";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import { chatData, chatMessagesData } from "./data";

/**
 * Chat component
 */
export default {
  page: {
    title: "Chat",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      chatData: chatData,
      chatMessagesData: chatMessagesData,
      title: "Chat",
      items: [
        {
          text: "Apps",
          href: "/",
        },
        {
          text: "Chat",
          active: true,
        },
      ],
      submitted: false,
      form: {
        message: "",
      },
      username: "Daniel Pickering",
      profile: require("@/assets/images/users/avatar-2.jpg"),
    };
  },
  components: {
    Layout,
    PageHeader,
    simplebar,
  },
  validations: {
    form: {
      message: {
        required,
      },
    },
  },
  methods: {
    /**
     * Get the name of user
     */
    chatUsername(name, profile) {
      console.log(profile);
      this.profile = profile;
      this.username = name;
      this.usermessage = "Hello";
      this.chatMessagesData = [];
      const currentDate = new Date();

      this.chatMessagesData.push({
        name: this.username,
        message: this.usermessage,
        time: currentDate.getHours() + ":" + currentDate.getMinutes(),
        profile: this.profile,
      });
    },

    /**
     * Char form Submit
     */
    formSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      } else {
        const message = this.form.message;
        const currentDate = new Date();
        this.chatMessagesData.push({
          align: "right",
          name: "kate",
          message,
          time: currentDate.getHours() + ":" + currentDate.getMinutes(),
          profile: require("@/assets/images/users/avatar-1.jpg"),
        });
        this.handleScroll();
      }
      this.submitted = false;
      this.form = {};
    },

    handleScroll() {
      if (this.$refs.current.$el) {
        setTimeout(() => {
          this.$refs.current.SimpleBar.getScrollElement().scrollTop =
            this.$refs.current.SimpleBar.getScrollElement().scrollHeight + 1500;
        }, 500);
      }
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="d-lg-flex mb-4">
      <div class="chat-leftsidebar card">
        <div class="p-4 bg-soft-primary rounded-top">
          <div class="d-flex align-items-start mb-4 pb-2">
            <div class="flex-grow-1">
              <img
                src="@/assets/images/logo-sm.png"
                class="avatar-sm h-auto"
                alt=""
              />
            </div>

            <div class="flex-shrink-0">
              <div class="d-flex gap-2 align-items-start">
                <b-dropdown
                  right
                  variant="white"
                  class="chat-noti-dropdown"
                  toggle-class="py-0 shadow-none"
                  menu-class="dropdown-menu-md p-2"
                >
                  <template v-slot:button-content>
                    <i class="uil uil-search"></i>
                  </template>
                  <form class="px-2">
                    <input
                      type="text"
                      class="form-control bg-light rounded"
                      placeholder="Search..."
                    />
                  </form>
                </b-dropdown>
                <b-dropdown
                  class="chat-noti-dropdown"
                  variant="white"
                  right
                  toggle-class="py-0"
                >
                  <template v-slot:button-content>
                    <i class="uil uil-ellipsis-h"></i>
                  </template>
                  <b-dropdown-item>Profile</b-dropdown-item>
                  <b-dropdown-item>Edit</b-dropdown-item>
                  <b-dropdown-item>Add Contact</b-dropdown-item>
                  <b-dropdown-item>Setting</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>
        </div>
        <div class="chat-leftsidebar-nav">
            <b-tabs
              content-class=""
              justified
              nav-wrapper-class="nav-tabs-custom border-bottom-0"
            >
              <b-tab active>
                <template #title>
                  <i class="uil uil-comment-lines font-size-20 d-sm-none"></i>
                  <span class="d-none d-sm-block">Chat</span>
                </template>
                <simplebar id="chat-list" class="chat-message-list">
                  <div class="p-4">
                  <h5 class="font-size-14 mb-3">Recent</h5>
                  <ul class="list-unstyled chat-list">
                    <li
                      v-for="data of chatData"
                      :key="data.id"
                      @click="chatUsername(data.name, data.profile)"
                      :class="{ active: username == data.name }"
                    >
                      <a href="javascript: void(0);">
                        <div class="d-flex align-items-start">
                          <div
                            class="flex-shrink-0 user-img align-self-center me-3"
                            v-if="data.profile"
                          >
                            <img
                              :src="`${data.profile}`"
                              class="rounded-circle avatar-sm"
                              alt=""
                            />
                            <span class="user-status"></span>
                          </div>

                          <div
                            class="flex-shrink-0 user-img align-self-center me-3"
                            v-if="!data.profile"
                          >
                            <div class="avatar-sm align-self-center">
                              <span
                                class="avatar-title rounded-circle bg-soft-primary text-primary"
                                >{{ data.name.charAt(0) }}</span
                              >
                            </div>
                          </div>
                          <div class="flex-grow-1 overflow-hidden">
                            <h5 class="text-truncate font-size-14 mb-1">
                              {{ data.name }}
                            </h5>
                            <p class="text-truncate mb-0">{{ data.message }}</p>
                          </div>
                          <div class="flex-shrink-0">
                            <div class="font-size-11">{{ data.time }}</div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                  </div>
                </simplebar>
              </b-tab>
              <b-tab>
                <template #title>
                  <i class="uil uil-users-alt font-size-20 d-sm-none"></i>
                  <span class="d-none d-sm-block">Groups</span>
                </template>
                <simplebar class="chat-message-list">
                  <div class="p-4">
                    <div>
                      <div class="d-flex">
                        <h5 class="font-size-14">Groups</h5>
                        <div class="ms-auto">
                          <a href="#"><i class="uil uil-plus"></i> Add New</a>
                        </div>
                      </div>

                      <ul class="list-unstyled chat-list">
                        <li>
                          <a href="#">
                            <div class="d-flex align-items-start">
                              <div
                                class="flex-shrink-0 user-img online align-self-center me-3"
                              >
                                <div class="avatar-sm align-self-center">
                                  <span
                                    class="avatar-title rounded-circle bg-soft-primary text-primary"
                                  >
                                    G
                                  </span>
                                </div>
                              </div>

                              <div class="flex-grow-1 overflow-hidden">
                                <h5 class="text-truncate font-size-14 mb-1">
                                  General
                                </h5>
                                <p class="text-truncate mb-0">12 Members</p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <!-- end li -->
                        <li>
                          <a href="#">
                            <div class="d-flex align-items-start">
                              <div
                                class="flex-shrink-0 user-img online align-self-center me-3"
                              >
                                <div class="avatar-sm align-self-center">
                                  <span
                                    class="avatar-title rounded-circle bg-soft-primary text-primary"
                                  >
                                    R
                                  </span>
                                </div>
                              </div>

                              <div class="flex-grow-1 overflow-hidden">
                                <h5 class="text-truncate font-size-14 mb-1">
                                  Reporting
                                </h5>
                                <p class="text-truncate mb-0">12 Members</p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <!-- end li -->
                        <li>
                          <a href="#">
                            <div class="d-flex align-items-start">
                              <div
                                class="flex-shrink-0 user-img online align-self-center me-3"
                              >
                                <div class="avatar-sm align-self-center">
                                  <span
                                    class="avatar-title rounded-circle bg-soft-primary text-primary"
                                  >
                                    A
                                  </span>
                                </div>
                              </div>

                              <div class="flex-grow-1 overflow-hidden">
                                <h5 class="text-truncate font-size-14 mb-1">
                                  Project A
                                </h5>
                                <p class="text-truncate mb-0">04 Members</p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <!-- end li -->
                        <li>
                          <a href="#">
                            <div class="d-flex align-items-start">
                              <div
                                class="flex-shrink-0 user-img online align-self-center me-3"
                              >
                                <div class="avatar-sm align-self-center">
                                  <span
                                    class="avatar-title rounded-circle bg-soft-primary text-primary"
                                  >
                                    B
                                  </span>
                                </div>
                              </div>

                              <div class="flex-grow-1 overflow-hidden">
                                <h5 class="text-truncate font-size-14 mb-1">
                                  Reporting
                                </h5>
                                <p class="text-truncate mb-0">02 Members</p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <!-- end li -->
                      </ul>
                      <!-- end ul -->
                    </div>
                  </div>
                </simplebar>
              </b-tab>
              <b-tab>
                <template #title>
                  <i class="uil uil-user-circle font-size-20 d-sm-none"></i>
                  <span class="d-none d-sm-block">Contacts</span>
                </template>
                <simplebar class="chat-message-list">
                  <div class="p-4">
                    <div>
                      <div class="d-flex">
                        <h5 class="font-size-14">Contacts</h5>
                        <div class="ms-auto">
                          <a href="#"><i class="uil uil-plus"></i> Add New</a>
                        </div>
                      </div>

                      <div class="mt-2">
                        <div class="contact-list mb-0">A</div>

                        <ul class="list-unstyled chat-list">
                          <li>
                            <a href="#">
                              <h5 class="font-size-14 mb-0">Adam Miller</h5>
                            </a>
                          </li>
                          <!-- end li -->
                          <li>
                            <a href="#">
                              <h5 class="font-size-14 mb-0">Alfonso Fisher</h5>
                            </a>
                          </li>
                          <!-- end li -->
                        </ul>
                        <!-- end ul -->
                      </div>

                      <div class="mt-4">
                        <div class="contact-list mb-0">B</div>

                        <ul class="list-unstyled chat-list">
                          <li>
                            <a href="#">
                              <h5 class="font-size-14 mb-0">Bonnie Harney</h5>
                            </a>
                          </li>
                        </ul>
                        <!-- end ul -->
                      </div>

                      <div class="mt-4">
                        <div class="contact-list mb-0">C</div>

                        <ul class="list-unstyled chat-list">
                          <li>
                            <a href="#">
                              <h5 class="font-size-14 mb-0">Charles Brown</h5>
                            </a>
                            <a href="#">
                              <h5 class="font-size-14 mb-0">Carmella Jones</h5>
                            </a>
                            <a href="#">
                              <h5 class="font-size-14 mb-0">Carrie Williams</h5>
                            </a>
                          </li>
                        </ul>
                        <!-- end ul -->
                      </div>

                      <div class="mt-4">
                        <div class="contact-list mb-0">D</div>

                        <ul class="list-unstyled chat-list">
                          <li>
                            <a href="#">
                              <h5 class="font-size-14 mb-0">Dolores Minter</h5>
                            </a>
                          </li>
                        </ul>
                        <!-- end ul -->
                      </div>
                    </div>
                  </div>
                </simplebar>
              </b-tab>
            </b-tabs>
          </div>
      </div>
      <!-- end chat-leftsidebar -->

      <div class="w-100 user-chat mt-4 mt-sm-0 ms-lg-1">
        <div class="card">
          <div class="p-3 border-bottom">
            <div class="row">
              <div class="col-xl-4 col-7">
                <div class="d-flex align-items-center">
                  <div
                    class="flex-shrink-0 avatar me-3 d-sm-block d-none"
                    v-if="profile"
                  >
                    <img
                      :src="`${profile}`"
                      alt=""
                      class="img-thumbnail d-block rounded-circle"
                    />
                  </div>
                  <div
                    class="flex-shrink-0 user-img align-self-center me-3"
                    v-if="!profile"
                  >
                    <div class="avatar-sm align-self-center">
                      <span
                        class="avatar-title rounded-circle bg-soft-primary text-primary"
                        >{{ username.charAt(0) }}</span
                      >
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h5 class="font-size-14 mb-1 text-truncate">
                      <a href="#" class="text-dark">{{ username }}</a>
                    </h5>
                    <p class="text-muted text-truncate mb-0">
                      <i
                        class="mdi mdi-circle text-success font-size-10 align-middle me-1"
                      ></i
                      >Online
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-8 col-5">
                <ul class="list-inline user-chat-nav text-end mb-0">
                  <li class="list-inline-item">
                    <b-dropdown
                      variant="white"
                      menu-class="dropdown-menu-md p-2"
                      toggle-class="nav-btn"
                      right
                    >
                      <template v-slot:button-content>
                        <i class="uil uil-search"></i>
                      </template>
                      <form class="px-2">
                        <div>
                          <input
                            type="text"
                            class="form-control bg-light rounded"
                            placeholder="Search..."
                          />
                        </div>
                      </form>
                    </b-dropdown>
                  </li>
                  <!-- end li -->
                  <li class="list-inline-item">
                    <b-dropdown
                      variant="white"
                      menu-class="dropdown-menu-end p-2"
                      toggle-class="nav-btn"
                    >
                      <template v-slot:button-content>
                        <i class="uil uil-ellipsis-h"></i>
                      </template>
                      <b-dropdown-item>Profile</b-dropdown-item>
                      <b-dropdown-item>Archive</b-dropdown-item>
                      <b-dropdown-item>Muted</b-dropdown-item>
                      <b-dropdown-item>Delete</b-dropdown-item>
                    </b-dropdown>
                  </li>
                  <!-- end li -->
                </ul>
                <!-- end ul -->
              </div>
            </div>
          </div>
          <div>
            <simplebar class="chat-conversation p-3" ref="current">
              <ul class="list-unstyled mb-0">
                <li class="chat-day-title">
                  <div class="title">Today</div>
                </li>
                <li
                  v-for="data of chatMessagesData"
                  :key="data.message"
                  :class="{ right: `${data.align}` === 'right' }"
                >
                  <div class="conversation-list">
                    <div class="ctext-wrap">
                      <div class="chat-avatar">
                        <img
                          v-if="data.profile"
                          :src="`${data.profile}`"
                          alt="avatar-2"
                        />
                        <div
                          class="avatar-sm align-self-center"
                          v-if="!data.profile"
                        >
                          <span
                            class="avatar-title rounded-circle bg-soft-primary text-primary"
                            >{{ data.name.charAt(0) }}</span
                          >
                        </div>
                      </div>
                      <div class="ctext-wrap-content">
                        <h5 class="conversation-name">
                          <a href="#" class="user-name">{{ data.name }}</a>
                          <span class="time">10:00</span>
                        </h5>
                        <p class="mb-0">{{ data.message }}</p>
                      </div>
                      <b-dropdown variant="white" class="align-self-start">
                        <template v-slot:button-content>
                          <i class="uil uil-ellipsis-v"></i>
                        </template>
                        <b-dropdown-item>Copy</b-dropdown-item>
                        <b-dropdown-item>Save</b-dropdown-item>
                        <b-dropdown-item>Forward</b-dropdown-item>
                        <b-dropdown-item>Delete</b-dropdown-item>
                      </b-dropdown>
                    </div>
                  </div>
                </li>
              </ul>
              <!-- end ul -->
            </simplebar>
          </div>
          <div class="p-3 chat-input-section">
            <form @submit.prevent="formSubmit" class="row">
              <div class="col">
                <div class="position-relative">
                  <input
                    type="text"
                    v-model="form.message"
                    class="form-control chat-input rounded"
                    placeholder="Enter Message..."
                    :class="{
                      'is-invalid': submitted && $v.form.message.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.form.message.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.message.required"
                      >This value is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-auto">
                <button
                  type="submit"
                  class="btn btn-primary btn-rounded chat-send w-md"
                >
                  <span class="d-none d-sm-inline-block me-2">Send</span>
                  <i class="mdi mdi-send"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- End d-lg-flex  -->
  </Layout>
</template>
