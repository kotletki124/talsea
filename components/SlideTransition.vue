<script setup>
const props = defineProps({ index: Number });
let prevIndex = props.index;
const transitionName = computed(() => {
  const newValue = props.index >= prevIndex ? "slide-right" : "slide-left";
  prevIndex = props.index;
  return newValue;
});
</script>

<template>
  <Transition :name="transitionName" mode="out-in">
    <slot />
  </Transition>
</template>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: 0.1s ease-in-out;
}
.slide-left-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translate(20px, 0);
}
.slide-right-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-20px, 0);
}
</style>
