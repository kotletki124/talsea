<script setup>
const props = defineProps({ placeholder: String, modelValue: String });
const emit = defineEmits(["submit"]);
const localValue = ref(props.modelValue);
</script>

<template>
  <form class="relative w-full" @submit.prevent="emit('submit', localValue)">
    <InputBasic
      v-bind="props"
      :noHelperText="true"
      v-model="localValue"
      :placeholder="props.placeholder"
    >
      <template #startAdornment>
        <svgo-icon-search class="w-6 h-6 icon" :fontControlled="false" />
      </template>
    </InputBasic>
  </form>
</template>

<style scoped>
.icon::v-deep(*) {
  fill: theme(colors.text.grey);
}
</style>
