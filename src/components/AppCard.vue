<template>
  <div class="card">
    {{ msg }}
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppCard",

  props: {
    msg: String,
  },
});
</script>
