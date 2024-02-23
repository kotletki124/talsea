<script setup>
defineProps({ imgUrl: String });
</script>

<template>
  <Card class="flex flex-col items-center gap-6 p-6 w-[412px] h-[586px]">
    <div class="w-[348px] h-[348px] overflow-hidden relative">
      <img :src="imgUrl" class="absolute bottom-0 w-full" />
    </div>
    <h5>
      <slot name="header" />
    </h5>
    <slot name="text" />
  </Card>
</template>
