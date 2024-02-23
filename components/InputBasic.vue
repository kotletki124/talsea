<script setup>
const props = defineProps({
  label: String,
  placeholder: String,
  required: Boolean,
  type: String,
  disabled: Boolean,
  noHelperText: { type: Boolean, default: false },
  modelValue: String,
});

const inputEl = ref(null);
defineExpose({ inputEl });

const emit = defineEmits(["update:modelValue", "focus", "blur"]);
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const isFocused = ref(false);
const inputContainerClass = computed(
  () =>
    `relative flex items-center gap-4 bg-white border input ${
      isFocused.value ? "border-secondary-lavender" : "border-transparent"
    }`
);

const handleFocus = (e) => {
  isFocused.value = true;
  emit("focus", e);
};

const handleBlur = (e) => {
  isFocused.value = false;
  emit("blur", e);
};
</script>

<template>
  <div class="flex flex-col gap-2">
    <label v-if="label" class="text-text-grey">
      {{ label }}
      <span v-if="required" class="text-primaryRed">*</span>
    </label>
    <div :class="inputContainerClass">
      <div>
        <slot name="startAdornment" />
      </div>
      <input
        ref="inputEl"
        :type="type || 'text'"
        :placeholder="placeholder"
        :disabled="disabled"
        class="w-full placeholder:text-text-grey disabled:text-text-grey border-none outline-none"
        v-model="value"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <div class="absolute right-3 leading-[0] -translate-y-[150%]">
        <slot name="endAdornment" />
      </div>
    </div>
    <div v-if="!noHelperText" class="helperText">
      <slot name="helperText">&nbsp;</slot>
    </div>
  </div>
</template>

<style scoped>
.input {
  width: 100%;
  height: 60px;
  border-radius: 8px;
  box-shadow: 5px 10px 80px 0px #052f5f0d;
  padding: 12px 40px;
}
</style>
