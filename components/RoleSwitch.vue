<script setup>
import { useAuthStore } from "/store";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { role } = storeToRefs(authStore);

const itemClass = "w-[204px] py-4 transition-all duration-100";

const employeeClass = computed(
  () =>
    `${itemClass} ${
      role.value === "employee"
        ? "pointer-events-none bg-secondary-lavender"
        : "text-text-grey"
    }`
);
const employerClass = computed(
  () =>
    `${itemClass} ${
      role.value === "employer"
        ? "pointer-events-none bg-secondary-coral"
        : "text-text-grey"
    }`
);
</script>

<template>
  <div class="container flex text-center rounded-lg overflow-hidden w-fit">
    <button :class="employeeClass" @click="role = 'employee'">
      <h6>Ищу работу</h6>
    </button>
    <button :class="employerClass" @click="role = 'employer'">
      <h6>Ищу сотрудника</h6>
    </button>
  </div>
</template>

<style scoped>
.container {
  box-shadow: 5px 10px 80px 0px #052f5f0d;
}
</style>
