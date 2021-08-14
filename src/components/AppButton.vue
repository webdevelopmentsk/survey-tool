<template>
  <router-link #default="{ navigate }" :to="to" custom>
    <button
      v-bind="$attrs"
      class="button transition duration-300 focus:outline-none"
      :class="[
        buttonSize,
        buttonRounded,
        buttonTypes,
        isUppercase && 'uppercase',
        disabled && 'is-disabled',
      ]"
      :disabled="disabled"
      @click="to ? navigate() : $emit('click')"
    >
      <slot />
    </button>
  </router-link>
</template>

<script>
import { defineComponent, computed } from "vue";

const types = Object.freeze({
  primary: "is-primary",
  secondary: "is-secondary",
});

export default defineComponent({
  name: "AppButton",

  props: {
    to: {
      default: "",
    },

    type: {
      default: "primary",
    },

    size: {
      default: "md",
    },

    rounded: {
      default: "sm",
    },

    isUppercase: {
      default: false,
    },

    disabled: {
      default: false,
    },
  },

  emits: ["click"],

  setup(props) {
    const buttonSize = computed(() => {
      return `size-${props.size}`;
    });

    const buttonRounded = computed(() => {
      return `rounded-${props.rounded}`;
    });

    const buttonTypes = computed(() => {
      return types[props.type];
    });

    return { buttonSize, buttonRounded, buttonTypes };
  },
});
</script>

<style lang="scss" scoped>
.button {
  &.size-md,
  &.size-lg {
    font-size: 3rem;
  }
  &.is-primary {
    background-color: red;
    &:hover {
      background-color: green;
    }
    &:active,
    &:focus {
      outline: none;
      transform: translateY(-1px);
    }

    &.is-disabled {
    }

    &:not(.is-disabled) {
    }
  }
}
</style>
