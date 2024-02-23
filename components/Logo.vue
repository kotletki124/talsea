<script setup>
defineProps({ twoLines: { type: Boolean, default: false } });
</script>

<template>
  <svgo-logo2lines v-if="twoLines" :fontControlled="false" filled="false" />
  <svgo-logo1line
    v-else
    class="w-[404px] h-[36px]"
    :fontControlled="false"
    filled="false"
  />
</template>
