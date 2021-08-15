<template>
  <div class="card">
    <div class="card__title">{{ message }}</div>
    <div class="card__img__container">
      <img :alt="quote.alt" :src="quote.src" class="card__img">
    </div>
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppCard",

  props: {
    message: String,
    quote: Object
  }
});
</script>

<style lang="scss" scoped>
.card {
  width: 600px;
  background-color: rgba(135,206,235);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;

  @media(max-width: 767px) {
    width: 320px;
  }

  &__title {
    width: 100%;
    padding: 0.5rem 0;
    border-bottom: 1px solid #E0FFFF;
    font-size: 1.5rem;
    color: white;
  }

  &__img {
    width: 100%;

    &__container {
      width: 500px;
      margin-top: 2rem;

      @media(max-width: 767px) {
        width: 320px;
      }
    }
  }
}
</style>
