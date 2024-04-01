<script>
import Vertical from "./vertical";
import Horizontal from "./horizontal";

import { layoutComputed } from "@/state/helpers";

/**
 * Main layout
 */
export default {
  props: {
  },
  computed: {
    ...layoutComputed,
    isMode: layoutComputed.layoutMode,
    
  },
  components: { Vertical, Horizontal },
  mounted() {
    if (layoutComputed.layoutMode == "dark") {
      {
        document.body.setAttribute("data-layout-mode", "dark");
        document.body.setAttribute("data-topbar", "dark");
      }
    }
  },
};
</script>

<template>
  <div>
    <Vertical v-if="layoutType === 'vertical'" :layout="layoutType">
      <slot />
    </Vertical>

    <Horizontal v-if="layoutType === 'horizontal'" :layout="layoutType">
      <slot />
    </Horizontal>
  </div>
</template>
