<script>
import router from "@/router";

import Topbar from "@/components/topbar";
import SideBar from "@/components/side-bar";
import Rightsidebar from "@/components/right-sidebar";
import Footer from "@/components/footer";
import { layoutComputed } from "@/state/helpers";

/**
 * Vertical component
 */
export default {
  data() {
    return {
      type: this.$store
        ? this.$store.state.layout.leftSidebarType
        : null || null,
      width: this.$store ? this.$store.state.layout.layoutWidth : null || null,
    };
  },
  components: { Topbar, SideBar, Rightsidebar, Footer },
  created: () => {
    document.body.removeAttribute("data-layout", "horizontal");
    document.body.removeAttribute("data-topbar", "dark");
  },
  computed: {
    ...layoutComputed,
  },
  methods: {
    toggleMenu() {
      var currentSIdebarSize = document.body.getAttribute("data-sidebar-size");
      document.body.classList.toggle("sidebar-enable");
      if (window.screen.width >= 992) {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
        });
        if (currentSIdebarSize == null) {
          document.body.getAttribute("data-sidebar-size") == null ||
          document.body.getAttribute("data-sidebar-size") == "lg"
            ? document.body.setAttribute("data-sidebar-size", "sm")
            : document.body.setAttribute("data-sidebar-size", "lg");
        } else if (currentSIdebarSize == "md") {
          document.body.getAttribute("data-sidebar-size") == "md"
            ? document.body.setAttribute("data-sidebar-size", "sm")
            : document.body.setAttribute("data-sidebar-size", "md");
        } else {
          document.body.getAttribute("data-sidebar-size") == "sm"
            ? document.body.setAttribute("data-sidebar-size", "lg")
            : document.body.setAttribute("data-sidebar-size", "sm");
        }
      } else {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
        });
        document.body.classList.remove("vertical-collpsed");
      }
      this.isMenuCondensed = !this.isMenuCondensed;
    },
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
  },
};
</script>

<template>
  <div>
    <!-- Begin page -->
    <div id="layout-wrapper">
      <header id="page-topbar">
        <Topbar :type="topbar" :layoutscroll="layoutScrollable" />
      </header>
      <SideBar
        :type="leftSidebarType"
        :width="layoutWidth"
        :color="sidebarColor"
      />
      <!-- ============================================================== -->
      <!-- Start right Content here -->
      <!-- ============================================================== -->
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <slot />
          </div>
        </div>
        <Footer />
      </div>
    </div>
    <Rightsidebar />
  </div>
</template>
