<script>
import { layoutComputed } from "@/state/helpers";

import simplebar from "simplebar-vue";

import SideNav from "./side-nav.vue";

/**
 * Sidebar component
 */
export default {
  components: {
    SideNav,
    simplebar,
  },
  props: {
    isCondensed: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...layoutComputed,
  },
  data() {
    return {
      settings: {
        minScrollbarLength: 60,
      },
    };
  },
  watch: {
    $route: {
      handler: "onRoutechange",
      immediate: true,
      deep: true,
    },
    type: {
      immediate: true,
      handler(newVal, oldVal) {
        
        if (newVal !== oldVal) {
          switch (newVal) {
            case "default":
              document.body.setAttribute("data-sidebar-size", "lg");
              break;
            case "compact":
              document.body.setAttribute("data-sidebar-size", "md");
              document.body.classList.remove("vertical-collpsed");
              break;
            case "icon":
              document.body.setAttribute("data-sidebar-size", "sm");
              break;
            default:
              document.body.setAttribute("data-sidebar-size", "lg");
              break;
          }
        }
      },
    },
    width: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "boxed":
              document.body.setAttribute("data-layout-size", "boxed");
              break;
            case "fluid":
              document.body.setAttribute("data-layout-size", "fluid");
              break;
            default:
              document.body.setAttribute("data-layout-size", "fluid");
              break;
          }
        }
      },
    },
    color: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "light":
              document.body.setAttribute("data-sidebar", "light");
              break;
            case "dark":
              document.body.setAttribute("data-sidebar", "dark");
              break;
            case "brand":
              document.body.setAttribute("data-sidebar", "brand");
              break;
            default:
              document.body.setAttribute("data-sidebar", "dark");
              break;
          }
        }
      },
    },
  },
  methods: {
    onRoutechange() {
      setTimeout(() => {
        if(document.getElementsByClassName("mm-active").length > 0) {
        const currentPosition = document.getElementsByClassName("mm-active")[0].offsetTop;
        if (currentPosition > 500)
          this.$refs.isSimplebar.SimpleBar.getScrollElement().scrollTop =
            currentPosition + 300;
        }
      }, 300);
    },
    toggleMenu() {
      this.$parent.toggleMenu();
    },
  }
};
</script>

<template>
  <!-- ========== Left Sidebar Start ========== -->
  <div class="vertical-menu">
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
        <span class="logo-lg">
          <img src="@/assets/images/logo-light.png" alt="" height="22" />
        </span>
        <span class="logo-sm">
          <img src="@/assets/images/logo-sm-light.png" alt="" height="22" />
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

    <simplebar
      v-if="!isCondensed"
      :settings="settings"
      class="sidebar-menu-scroll"
      ref="isSimplebar"
    >
      <SideNav />
    </simplebar>

    <simplebar v-else class="sidebar-menu-scroll">
      <SideNav />
    </simplebar>
  </div>
  <!-- Left Sidebar End -->
</template>
