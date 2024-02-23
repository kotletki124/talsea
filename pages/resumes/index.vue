<script setup>
import { useAuthStore } from "/store";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { role } = storeToRefs(authStore);

role.value = "employer";
</script>

<template>
  <div class="flex items-center text-center">Резюме</div>
</template>
