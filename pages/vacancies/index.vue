<script setup>
import { useAuthStore } from "/store";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { role } = storeToRefs(authStore);

role.value = "employee";
</script>

<template>
  <div class="flex items-center text-center">Вакансии</div>
</template>
