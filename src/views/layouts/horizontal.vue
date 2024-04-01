<script>
import { layoutComputed } from "@/state/helpers";

import Topbar from "@/components/topbar";
import Rightsidebar from "@/components/right-sidebar";
import Footer from "@/components/footer";
import HorizontalNav from "@/components/horizontal-nav";

/**
 * Horizontal-layout
 */
export default {
  computed: {
    ...layoutComputed,
  },
  mounted() {
    document.body.setAttribute("data-layout", "horizontal");
    document.body.removeAttribute("data-sidebar");
  },
  components: {
    Topbar,
    Rightsidebar,
    Footer,
    HorizontalNav,
  },
  methods: {
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
    toggleMenu() {
      let element = document.getElementById("topnav-menu-content");
      element.classList.toggle("show");
    },
  },
};
</script>

<template>
  <!-- Begin page -->
  <div id="layout-wrapper">
    <header id="page-topbar">
      <Topbar :type="topbar" :layoutscroll="layoutScrollable" />
      <HorizontalNav :width="layoutWidth" />
    </header>
    <!-- ============================================================== -->
    <!-- Start right Content here -->
    <!-- ============================================================== -->
    <div class="main-content" id="mainContent">
      <div class="page-content">
        <div class="container-fluid">
          <slot />
        </div>
        <!-- container-fluid -->
      </div>
      <!-- End Page-content -->
      <Footer />
    </div>
    <!-- end main content-->
    <Rightsidebar />
  </div>
</template>
