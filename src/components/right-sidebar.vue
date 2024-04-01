<script>
import { layoutMethods, layoutComputed } from "@/state/helpers";

/**
 * Right sidebar component
 */
export default {
  data() {
    return {
      config: {
        handler: this.handleRightBarClick,
        middleware: this.middleware,
        events: ["click"],
      },
    };
  },
  methods: {
    ...layoutMethods,
    hide() {
      this.$parent.toggleRightSidebar();
    },
    handleRightBarClick() {
      this.$parent.hideRightSidebar();
    },
    middleware(event) {
      return !event.target.classList.contains("toggle-right");
    },
    changeLayout(layout) {
      this.changeLayoutType({ layoutType: layout });
    },
    changeType(type) {
      this.changeLayoutType({ layoutType: "vertical" });
      return this.changeLeftSidebarType({ leftSidebarType: type });
    },
    changeWidth(width) {
      return this.changeLayoutWidth({ layoutWidth: width });
    },
    changeTopbartype(value) {
      return this.changeTopbar({ topbar: value });
    },
    changeloader() {
      return this.changeLoaderValue({ loader: this.loader });
    },
    /**
     * Change sidebar color change
     */
    sidebarColorChange(color) {
      return this.changeSidebarColor({
        sidebarColor: color,
      });
    },

    /**
     * Change layout position
     */
    changePosition(value) {
      return this.changeLayoutPosition({
        layoutScrollable: value,
      });
    },
  },
  computed: {
    ...layoutComputed,
    loader: {
      get() {
        return this.$store ? this.$store.state.layout.loader : {} || {};
      },
      set(value) {
        this.changeLoaderValue({
          loader: value,
        });
      },
    },
    color: {
      get() {
        return this.$store ? this.$store.state.layout.sidebarColor : {} || {};
      },
      set(value) {
        return this.changeSidebarColor({
          sidebarColor: value,
        });
      },
    },
    sidebarType: {
      get() {
        return this.$store
          ? this.$store.state.layout.leftSidebarType
          : {} || {};
      },
      set(value) {
        return this.changeLeftSidebarType({
          leftSidebarType: value,
        });
      },
    },
    scrollable: {
      get() {
        return this.$store
          ? this.$store.state.layout.layoutScrollable
          : {} || {};
      },
      set(value) {
        return this.changeLayoutPosition({
          layoutScrollable: value,
        });
      },
    },
    layout: {
      get() {
        return this.$store ? this.$store.state.layout.layoutType : {} || {};
      },
      set(value) {
        this.changeLayoutType({
          layoutType: value,
        });
        if (value === "horizontal") {
          this.changeTopbar({
            topbar: "dark",
          });
        } else if (value === "vertical") {
          this.changeTopbar({
            topbar: "light",
          });
        }
      },
    },
    topbar: {
      get() {
        return this.$store ? this.$store.state.layout.topbar : {} || {};
      },
      set(value) {
        this.changeTopbar({
          topbar: value,
        });
      },
    },
    mode: {
      get() {
        return this.$store ? this.$store.state.layout.layoutMode : {} || {};
      },
      set(value) {
        if (value === "dark") {
          document.body.setAttribute("data-layout-mode", "dark");
          document.body.setAttribute("data-topbar", "dark");
          this.changeTopbar({
            topbar: "dark",
          });

          this.changeSidebarColor({
            sidebarColor: "dark",
          });
        } else {
          document.body.setAttribute("data-layout-mode", "light");
          document.body.setAttribute("data-topbar", "light");
          this.changeTopbar({
            topbar: "light",
          });
          this.changeSidebarColor({
            sidebarColor: "light",
          });
        }
      },
    },
    width: {
      get() {
        return this.$store ? this.$store.state.layout.layoutWidth : {} || {};
      },
      set(value) {
        this.changeLayoutWidth({
          layoutWidth: value,
        });
      },
    },
  },
  watch: {
    mode: {
      immediate: true,
      handler: function(newVal) {
        switch (newVal) {
          case "light":
            document.body.setAttribute("data-layout-mode", "light");
            document.body.setAttribute("data-topbar", "light");
            this.changeTopbar({
              topbar: "light",
            });
            this.changeSidebarColor({
              sidebarColor: "light",
            });
            break;
          case "dark":
            document.body.setAttribute("data-layout-mode", "dark");
            document.body.setAttribute("data-topbar", "dark");
            this.changeTopbar({
              topbar: "dark",
            });

            this.changeSidebarColor({
              sidebarColor: "dark",
            });
            break;
        }
      },
    },
  },
};
</script>

<template>
  <div>
    <!-- Right Sidebar -->
    <div v-click-outside="config" class="right-bar">
      <div data-simplebar class="h-100">
        <div class="rightbar-title d-flex align-items-center bg-dark p-3">
          <h5 class="m-0 me-2 text-white">Theme Customizer</h5>
          <a href="javascript:void(0);" class="right-bar-toggle-close ms-auto">
            <i class="mdi mdi-close noti-icon"></i>
          </a>
        </div>
        <!-- Settings -->
        <hr class="m-0" />

        <div class="p-4">
          <h6 class="mb-3">Layout</h6>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              v-model="layout"
              type="radio"
              name="layoutmode"
              id="layoutmodeRadio1"
              value="vertical"
            />
            <label class="form-check-label" for="layoutmodeRadio1"
              >Vertical</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              v-model="layout"
              type="radio"
              name="layoutmode"
              id="layoutmodeRadio2"
              value="horizontal"
            />
            <label class="form-check-label" for="layoutmodeRadio2"
              >Horizontal</label
            >
          </div>

          <h6 class="mt-4 mb-3">Layout Mode</h6>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              v-model="mode"
              type="radio"
              name="layout-mode"
              id="layout-mode-light"
              value="light"
            />
            <label class="form-check-label" for="layout-mode-light"
              >Light</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              v-model="mode"
              type="radio"
              name="layout-mode"
              id="layout-mode-dark"
              value="dark"
            />
            <label class="form-check-label" for="layout-mode-dark">Dark</label>
          </div>

          <h6 class="mt-4 mb-3">Layout Width</h6>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              v-model="width"
              name="layout-width"
              id="layout-width-fluid"
              value="fluid"
            />
            <label class="form-check-label" for="layout-width-fluid"
              >Fluid</label
            >
          </div>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              v-model="width"
              name="layout-width"
              id="layout-width-boxed"
              value="boxed"
            />
            <label class="form-check-label" for="layout-width-boxed"
              >Boxed</label
            >
          </div>

          <h6 class="mt-4 mb-3">Layout Position</h6>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              v-model="scrollable"
              type="radio"
              name="layout-position"
              id="layout-position-fixed"
              :value="false"
            />
            <label class="form-check-label" for="layout-position-fixed"
              >Fixed</label
            >
          </div>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              v-model="scrollable"
              type="radio"
              name="layout-position"
              id="layout-position-scrollable"
              :value="true"
            />
            <label class="form-check-label" for="layout-position-scrollable"
              >Scrollable</label
            >
          </div>

          <h6 class="mt-4 mb-3">Topbar Color</h6>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              v-model="topbar"
              type="radio"
              name="topbar-color"
              id="topbar-color-light"
              value="light"
            />
            <label class="form-check-label" for="topbar-color-light"
              >Light</label
            >
          </div>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              v-model="topbar"
              type="radio"
              name="topbar-color"
              id="topbar-color-dark"
              value="dark"
            />
            <label class="form-check-label" for="topbar-color-dark">Dark</label>
          </div>

          <div v-if="layout === 'vertical'">
            <h6 class="mt-4 mb-3 sidebar-setting">Sidebar Size</h6>

            <div class="form-check sidebar-setting">
              <input
                class="form-check-input"
                v-model="sidebarType"
                type="radio"
                name="sidebar-size"
                id="sidebar-size-default"
                value="default"
              />
              <label class="form-check-label" for="sidebar-size-default"
                >Default</label
              >
            </div>

            <div class="form-check sidebar-setting">
              <input
                class="form-check-input"
                v-model="sidebarType"
                type="radio"
                name="sidebar-size"
                id="sidebar-size-compact"
                value="compact"
              />
              <label class="form-check-label" for="sidebar-size-compact"
                >Compact</label
              >
            </div>
            <div class="form-check sidebar-setting">
              <input
                class="form-check-input"
                v-model="sidebarType"
                type="radio"
                name="sidebar-size"
                id="sidebar-size-small"
                value="icon"
              />
              <label class="form-check-label" for="sidebar-size-small"
                >Small (Icon View)</label
              >
            </div>

            <h6 class="mt-4 mb-3 sidebar-setting">Sidebar Color</h6>

            <div class="form-check sidebar-setting">
              <input
                class="form-check-input"
                v-model="color"
                type="radio"
                name="sidebar-color"
                id="sidebar-color-default"
                value="light"
              />
              <label class="form-check-label" for="sidebar-color-default"
                >Light</label
              >
            </div>

            <div class="form-check sidebar-setting">
              <input
                class="form-check-input"
                v-model="color"
                type="radio"
                name="sidebar-color"
                id="sidebar-color-dark"
                value="dark"
              />
              <label class="form-check-label" for="sidebar-color-dark"
                >Dark</label
              >
            </div>
            <div class="form-check sidebar-setting">
              <input
                class="form-check-input"
                v-model="color"
                type="radio"
                name="sidebar-color"
                id="sidebar-color-brand"
                value="brand"
              />
              <label class="form-check-label" for="sidebar-color-brand"
                >Brand</label
              >
            </div>
          </div>
        </div>
        <!-- Topbar -->
      </div>
      <!-- Preloader -->
    </div>
    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>
  </div>
</template>
