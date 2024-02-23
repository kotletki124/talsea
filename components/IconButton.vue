<template>
  <button class="flex items-center justify-center rounded-lg">
    <slot />
  </button>
</template>

<style scoped>
button:disabled {
  opacity: 0.3;
}
</style>
