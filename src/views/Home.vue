<template>
  <div class="home">
    <AppCard :msg="getUsername" />
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "Home",

  components: {},

  setup() {
    const userName = ref("Sawi")

    const getUsername = computed(() => `${userName.value} Kalakul Bloemendal`)

    return { getUsername }
  },
});
</script>
