<script>
import simplebar from "simplebar-vue";

import { authMethods, authFackMethods } from "@/state/helpers";

import i18n from "../i18n";

/**
 * Topbar component
 */
export default {
  data () {
    return {
      languages: [
        {
          flag: require("@/assets/images/flags/us.jpg"),
          language: "en",
          title: "English",
        },
        {
          flag: require("@/assets/images/flags/spain.jpg"),
          language: "es",
          title: "Spanish",
        },
        {
          flag: require("@/assets/images/flags/germany.jpg"),
          language: "de",
          title: "German",
        },
        {
          flag: require("@/assets/images/flags/italy.jpg"),
          language: "it",
          title: "Italian",
        },
        {
          flag: require("@/assets/images/flags/russia.jpg"),
          language: "ru",
          title: "Russian",
        },
      ],
      lan: i18n.locale,
      text: null,
      flag: null,
      value: null,
    }
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    layoutscroll: {
      type: Boolean,
      required: true,
    },
  },
  mounted() {
    this.value = this.languages.find((x) => x.language === i18n.locale);
    this.text = this.value.title;
    this.flag = this.value.flag;
  },
  methods: {
    authLogout: authMethods.logOut,
    authFakeLogout: authFackMethods.logout,
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    logout() {
      if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
        this.authLogout().then(() => {
          this.$router.push(
            this.$route.query.redirectFrom || {
              name: "login",
            }
          );
        });
      } else if (process.env.VUE_APP_DEFAULT_AUTH === "fakebackend") {
        this.authFakeLogout().then(() => {
          this.$router.push(
            this.$route.query.redirectFrom || {
              name: "login",
            }
          );
        });
      }
    },
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    setLanguage(locale, country, flag) {
      this.lan = locale;
      this.text = country;
      this.flag = flag;
      i18n.locale = locale;
    },
  },
  components: {
    simplebar,
  },
  watch: {
    type: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.body.setAttribute("data-topbar", "dark");
              break;
            case "light":
              document.body.setAttribute("data-topbar", "light");
              document.body.removeAttribute("data-layout-size", "boxed");
              break;
            default:
              document.body.setAttribute("data-topbar", "dark");
              break;
          }
        }
      },
    },
    layoutscroll: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case false:
              document.body.setAttribute("data-layout-scrollable", "false");
              break;
            case true:
              document.body.setAttribute("data-layout-scrollable", "true");
              break;
            default:
              document.body.setAttribute("data-layout-scrollable", "false");
              break;
          }
        }
      },
    },
  },
};
</script>

<template>
  <div class="navbar-header">
    <div class="d-flex">
      <!-- LOGO -->
      <div class="navbar-brand-box">
        <router-link to="/" class="logo logo-dark">
          <span class="logo-sm">
            <img src="@/assets/images/logo-sm.png" alt="" height="22" />
          </span>
          <span class="logo-lg">
            <img src="@/assets/images/logo-dark.png" alt="" height="22" />
          </span>
        </router-link>

        <router-link to="/" class="logo logo-light">
          <span class="logo-sm">
            <img src="@/assets/images/logo-sm.png" alt="" height="22" />
          </span>
          <span class="logo-lg">
            <img src="@/assets/images/logo-light.png" alt="" height="22" />
          </span>
        </router-link>
      </div>

      <button
        type="button"
        class="btn btn-sm px-3 font-size-16 header-item vertical-menu-btn"
        @click="toggleMenu"
      >
        <i class="fa fa-fw fa-bars"></i>
      </button>

      <b-dropdown
        variant="white"
        toggle-class="header-item"
        class="d-none d-lg-block ms-2"
        menu-class="dropdown-menu-xl p-2"
      >
        <template v-slot:button-content>
          <span>{{ $t("topbar.component.text") }}</span>
          <i class="mdi mdi-chevron-down"></i>
        </template>
        <div class="row">
          <div class="col-md-6">
            <b-dropdown-item>{{
              $t("topbar.component.list.alerts")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.component.list.buttons")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.component.list.cards")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.component.list.dropdowns")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.component.list.lightbox")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.component.list.modals")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.component.list.rangeslider")
            }}</b-dropdown-item>
          </div>
          <div class="col-md-6">
            <b-dropdown-item>{{
              $t("topbar.component.list.progressbars")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.component.list.sweetalerts")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.component.list.tabs&accodions")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.component.list.typography")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.component.list.general")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.component.list.rating")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.component.list.notifications")
            }}</b-dropdown-item>
          </div>
        </div>
      </b-dropdown>

      <b-dropdown
        variant="white"
        toggle-class="header-item"
        class="dropdown-mega d-none d-lg-block"
        menu-class="dropdown-megamenu p-2"
      >
        <template v-slot:button-content>
          <span>{{ $t("topbar.categories.text") }}</span>
          <i class="mdi mdi-chevron-down"></i>
        </template>

        <div class="row">
          <div class="col">
            <h5 class="font-size-14 mx-4 mt-2">
              {{ $t("topbar.categories.list.computersaccessories") }}
            </h5>
            <b-dropdown-item>{{ $t("topbar.categories.list.laptopstablets") }}</b-dropdown-item>
            <b-dropdown-item>{{ $t("topbar.categories.list.desktopcomputers") }}</b-dropdown-item>
            <b-dropdown-item>{{ $t("topbar.categories.list.networkingproducts") }}</b-dropdown-item>
            <b-dropdown-item>{{ $t("topbar.categories.list.monitors") }}</b-dropdown-item>
            <b-dropdown-item>{{ $t("topbar.categories.list.bags") }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.categories.list.batteries")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.categories.list.charges")
            }}</b-dropdown-item>
          </div>
          <div class="col">
            <h5 class="font-size-14 ms-4 mt-2">
              {{ $t("topbar.categories.list.smartphones") }}
            </h5>
            <b-dropdown-item>{{
              $t("topbar.categories.list.appleiphone")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.categories.list.android")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.categories.list.phablets")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.categories.list.appleipad")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.categories.list.androidtablets")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.categories.list.tablets")
            }}</b-dropdown-item>
          </div>
          <div class="col">
            <h5 class="font-size-14 ms-4 mt-2">
              {{ $t("topbar.categories.list.television") }}
            </h5>
            <b-dropdown-item>{{
              $t("topbar.categories.list.tv")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.categories.list.home")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.categories.list.dvdplayers")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.categories.list.dvdvcr")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.categories.list.projectors")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.categories.list.projectionscreens")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.categories.list.satelite")
            }}</b-dropdown-item>
          </div>
          <div class="col">
            <h5 class="font-size-14 ms-4 mt-2">
              {{ $t("topbar.categories.list.cameras") }}
            </h5>
            <b-dropdown-item>{{
              $t("topbar.categories.list.point")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.categories.list.dslrcameras")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.categories.list.mirrorless")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.categories.list.body")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.categories.list.cameralenses")
            }}</b-dropdown-item>
            <b-dropdown-item>{{
              $t("topbar.categories.list.videostudio")
            }}</b-dropdown-item>
          </div>
          <div class="col">
            <div class="py-lg-2 pr-lg-2">
              <img
                src="@/assets/images/illustrator/1.png"
                alt=""
                class="img-fluid mx-auto"
                style="max-height: 250px;"
              />
            </div>
          </div>
        </div>
      </b-dropdown>
    </div>

    <div class="d-flex">
      <b-dropdown
        right
        variant="white"
        class="d-inline-block"
        toggle-class="header-item"
        menu-class="dropdown-menu-lg dropdown-menu-end p-0"
      >
        <template v-slot:button-content>
          <feather type="search" class="icon-sm"></feather>
        </template>
        <form class="p-2">
          <div class="search-box">
            <div class="position-relative">
              <input
                type="text"
                class="form-control rounded bg-light border-0"
                placeholder="Search..."
              />
              <i class="mdi mdi-magnify search-icon"></i>
            </div>
          </div>
        </form>
      </b-dropdown>

       <b-dropdown variant="white" class="d-inline-block language-switch" right toggle-class="header-item">
        <template v-slot:button-content>
          <img class :src="flag" alt="Header Language" height="16" />
          {{ text }}
        </template>
        <b-dropdown-item
          class="notify-item"
          v-for="(entry, i) in languages"
          :key="`Lang${i}`"
          :value="entry"
          @click="setLanguage(entry.language, entry.title, entry.flag)"
          :class="{ active: lan === entry.language }"
        >
          <img
            :src="`${entry.flag}`"
            alt="user-image"
            class="me-1"
            height="12"
          />
          <span class="align-middle">{{ entry.title }}</span>
        </b-dropdown-item>
      </b-dropdown>

      <b-dropdown
        toggle-class="header-item noti-icon"
        right
        variant="white"
        menu-class="dropdown-menu-lg"
        class="d-none d-lg-inline-block"
      >
        <template v-slot:button-content>
          <feather type="grid" class="icon-sm"></feather>
        </template>
        <div class="p-3 border-bottom">
          <div class="row align-items-center">
            <div class="col">
              <h5 class="m-0 font-size-15">Web Apps</h5>
            </div>
            <div class="col-auto">
              <a href="#!" class="small fw-semibold text-decoration-underline">
                View All</a
              >
            </div>
          </div>
        </div>
        <simplebar style="max-height: 270px;">
          <a class="notification-item text-reset" href="#!">
            <div class="d-flex border-bottom align-items-center">
              <div class="flex-shrink-0">
                <img src="@/assets/images/brands/slack.png" alt="slack" />
              </div>
              <div class="flex-grow-1 ms-4">
                <h6 class="mb-0">Slack</h6>
                <p class="font-size-12 text-muted mb-0">
                  This is your moment. Let’s reinvent work.
                </p>
              </div>
            </div> </a
          ><!-- end dropdown item -->
          <a class="notification-item text-reset" href="#!">
            <div class="d-flex border-bottom align-items-center">
              <div class="flex-shrink-0">
                <img src="@/assets/images/brands/behance.png" alt="behance" />
              </div>
              <div class="flex-grow-1 ms-4">
                <h6 class="mb-0">
                  Behance
                  <span class="badge bg-warning badge-pill ml-1">Free</span>
                </h6>
                <p class="font-size-12 text-muted mb-0">
                  Showcase your work.
                </p>
              </div>
            </div> </a
          ><!-- end dropdown item -->
          <a class="notification-item text-reset" href="#!">
            <div class="d-flex border-bottom align-items-center">
              <div class="flex-shrink-0">
                <img src="@/assets/images/brands/dribbble.png" alt="dribbble" />
              </div>
              <div class="flex-grow-1 ms-4">
                <h6 class="mb-0">Dribbble</h6>
                <p class="font-size-12 text-muted mb-0">
                  Dribbble is the world’s leading community for creatives to
                  share, grow, and get hired.
                </p>
              </div>
            </div> </a
          ><!-- end dropdown item -->
          <a class="notification-item text-reset" href="#!">
            <div class="d-flex border-bottom align-items-center">
              <div class="flex-shrink-0">
                <img src="@/assets/images/brands/dropbox.png" alt="dropbox" />
              </div>
              <div class="flex-grow-1 ms-4">
                <h6 class="mb-0">Dropbox</h6>
                <p class="font-size-12 text-muted mb-0">
                  Keep life organized and work moving—all in one place
                </p>
              </div>
            </div> </a
          ><!-- end dropdown item -->
          <a class="notification-item text-reset" href="#!">
            <div class="d-flex border-bottom align-items-center">
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/brands/mail_chimp.png"
                  alt="mail_chimp"
                />
              </div>
              <div class="flex-grow-1 ms-4">
                <h6 class="mb-0">
                  Mail Chimp
                  <span class="badge bg-danger badge-pill ml-1">Premium</span>
                </h6>
                <p class="font-size-12 text-muted mb-0">
                  The best value for your digital marketing budget
                </p>
              </div>
            </div> </a
          ><!-- end dropdown item -->
          <a class="notification-item text-reset" href="#!">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img src="@/assets/images/brands/github.png" alt="github" />
              </div>
              <div class="flex-grow-1 ms-4">
                <h6 class="mb-0">Github</h6>
                <p class="font-size-12 text-muted mb-0">
                  Where the world builds software
                </p>
              </div>
            </div> </a
          ><!-- end dropdown item -->
        </simplebar>
        <!-- end simplebar -->
      </b-dropdown>

      <b-dropdown
        toggle-class="header-item noti-icon"
        right
        variant="white"
        menu-class="dropdown-menu-lg dropdown-menu-end p-0"
      >
        <template v-slot:button-content>
          <feather type="bell" class="icon-sm"></feather>
          <span class="noti-dot bg-danger"></span>
        </template>
        <div class="p-3">
          <div class="row align-items-center">
            <div class="col">
              <h5 class="m-0 font-size-15">
                {{ $t("header.notifications.title") }}
              </h5>
            </div>
            <div class="col-auto">
              <a href="#!" class="small">
                {{ $t("header.notifications.view_all") }}</a
              >
            </div>
          </div>
        </div>
        <div data-simplebar style="max-height: 250px;">
          <h6 class="dropdown-header bg-light">
            {{ $t("header.notifications.new") }}
          </h6>
          <a href="javascript:void(0);" class="text-reset notification-item">
            <div class="d-flex border-bottom align-items-start">
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/users/avatar-3.jpg"
                  class="me-3 rounded-circle avatar-sm"
                  alt="user-pic"
                />
              </div>
              <div class="flex-grow-1">
                <h6 class="mb-1">
                  {{ $t("header.notifications.first.title") }}
                </h6>
                <div class="text-muted">
                  <p class="mb-1 font-size-13">
                    {{ $t("header.notifications.first.text") }}
                  </p>
                  <p class="mb-0 font-size-10 text-uppercase fw-bold">
                    <i class="mdi mdi-clock-outline"></i>
                    {{ $t("header.notifications.first.time") }}
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="javascript:void(0);" class="text-reset notification-item">
            <div class="d-flex border-bottom align-items-start">
              <div class="flex-shrink-0">
                <div class="avatar-sm me-3">
                  <span
                    class="avatar-title bg-primary rounded-circle font-size-16"
                  >
                    <i class="uil-shopping-basket"></i>
                  </span>
                </div>
              </div>
              <div class="flex-grow-1">
                <h6 class="mb-1">
                  {{ $t("header.notifications.second.title") }}
                </h6>
                <div class="text-muted">
                  <p class="mb-1 font-size-13">
                    {{ $t("header.notifications.second.text") }}
                  </p>
                  <p class="mb-0 font-size-10 text-uppercase fw-bold">
                    <i class="mdi mdi-clock-outline"></i>
                    {{ $t("header.notifications.second.time") }}
                  </p>
                </div>
              </div>
            </div>
          </a>
          <h6 class="dropdown-header bg-light">
            {{ $t("header.notifications.earlier") }}
          </h6>
          <a href="javascript:void(0);" class="text-reset notification-item">
            <div class="d-flex border-bottom align-items-start">
              <div class="flex-shrink-0">
                <div class="avatar-sm me-3">
                  <span
                    class="avatar-title bg-soft-success text-success rounded-circle font-size-16"
                  >
                    <i class="uil-truck"></i>
                  </span>
                </div>
              </div>
              <div class="flex-grow-1">
                <h6 class="mb-1">
                  {{ $t("header.notifications.third.title") }}
                </h6>
                <div class="text-muted">
                  <p class="mb-1 font-size-13">
                    {{ $t("header.notifications.third.text") }}
                  </p>
                  <p class="mb-0 font-size-10 text-uppercase fw-bold">
                    <i class="mdi mdi-clock-outline"></i>
                    {{ $t("header.notifications.third.time") }}
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a href="javascript:void(0);" class="text-reset notification-item">
            <div class="d-flex border-bottom align-items-start">
              <div class="flex-shrink-0">
                <img
                  src="@/assets/images/users/avatar-4.jpg"
                  class="me-3 rounded-circle avatar-sm"
                  alt="user-pic"
                />
              </div>
              <div class="flex-grow-1">
                <h6 class="mb-1">
                  {{ $t("header.notifications.four.title") }}
                </h6>
                <div class="text-muted">
                  <p class="mb-1 font-size-13">
                    {{ $t("header.notifications.four.text") }}
                  </p>
                  <p class="mb-0 font-size-10 text-uppercase fw-bold">
                    <i class="mdi mdi-clock-outline"></i>
                    {{ $t("header.notifications.four.time") }}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="p-2 border-top d-grid">
          <a
            class="btn btn-sm btn-link font-size-14 btn-block text-center"
            href="javascript:void(0)"
          >
            <i class="uil-arrow-circle-right me-1"></i>
            <span>{{ $t("header.notifications.load_more") }}</span>
          </a>
        </div>
      </b-dropdown>

      <div class="dropdown d-inline-block toggle-right">
        <button
          type="button"
          class="btn header-item noti-icon right-bar-toggle toggle-right"
          id="right-bar-toggle"
          @click="toggleRightSidebar"
        >
          <feather type="settings" class="icon-sm toggle-right"></feather>
        </button>
      </div>

      <b-dropdown
        variant="white"
        right
        toggle-class="header-item user text-start d-flex align-items-center"
        class="dropdown d-inline-block"
        menu-class="dropdown-menu-end pt-0"
      >
        <template v-slot:button-content>
          <img
            class="rounded-circle header-profile-user"
            src="@/assets/images/users/avatar-1.jpg"
            alt="Header Avatar"
          />
          <span class="ms-2 d-none d-sm-block user-item-desc">
            <span class="user-name">Kate Dudley</span>
            <span class="user-sub-title">Administrator</span>
          </span>
        </template>

        <div class="p-3 bg-primary border-bottom">
          <h6 class="mb-0 text-white">Kate Dudley</h6>
          <p class="mb-0 font-size-11 text-white-50 fw-semibold">
            kate.dudley@email.com
          </p>
        </div>
        <router-link class="dropdown-item" to="/pages/profile"
          ><i
            class="mdi mdi-account-circle text-muted font-size-16 align-middle me-1"
          ></i>
          <span class="align-middle">{{ $t('header.profilewidget.profile' )}}</span></router-link
        >
        <router-link class="dropdown-item" to="/apps/chat"
          ><i
            class="mdi mdi-message-text-outline text-muted font-size-16 align-middle me-1"
          ></i>
          <span class="align-middle">{{ $t('header.profilewidget.message' )}}</span></router-link
        >
        <router-link class="dropdown-item" to="/kanban-board"
          ><i
            class="mdi mdi-calendar-check-outline text-muted font-size-16 align-middle me-1"
          ></i>
          <span class="align-middle">{{ $t('header.profilewidget.taskboard' )}}</span></router-link
        >
        <router-link class="dropdown-item" to="/pages/faqs"
          ><i
            class="mdi mdi-lifebuoy text-muted font-size-16 align-middle me-1"
          ></i>
          <span class="align-middle">{{ $t('header.profilewidget.help' )}}</span></router-link
        >
        <b-dropdown-divider></b-dropdown-divider>
        <router-link class="dropdown-item" to="/pages/profile"
          ><i
            class="mdi mdi-wallet text-muted font-size-16 align-middle me-1"
          ></i>
          <span class="align-middle"
            >{{ $t('header.profilewidget.balance') }} : <b>$6951.02</b></span
          ></router-link
        >
        <router-link
          class="dropdown-item d-flex align-items-center"
          to="/user/settings"
          ><i
            class="mdi mdi-cog-outline text-muted font-size-16 align-middle me-1"
          ></i>
          <span class="align-middle">{{ $t('header.profilewidget.settings') }}</span
          ><span class="badge badge-soft-success ms-auto"
            >New</span
          ></router-link
        >
        <router-link class="dropdown-item" to="/auth/lockscreen-basic"
          ><i
            class="mdi mdi-lock text-muted font-size-16 align-middle me-1"
          ></i>
          <span class="align-middle">{{ $t('header.profilewidget.lockscreen') }}</span></router-link
        >
        <a class="dropdown-item" href="javascript:void(0);" @click="logout()"
          ><i
            class="mdi mdi-logout text-muted font-size-16 align-middle me-1"
          ></i>
          <span class="align-middle">{{ $t('header.profilewidget.logout') }}</span></a
        >
      </b-dropdown>
    </div>
  </div>
</template>
