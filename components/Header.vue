<script setup>
import { useAuthStore } from "/store";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { role } = storeToRefs(authStore);
</script>

<template>
  <div
    class="flex w-full px-[80px] py-[16px] text-nowrap sticky top-0 bg-whiteMainBg z-10"
  >
    <button @click="navigateTo('/')">
      <Logo :two-lines="true" class="w-[226px] h-[75px]" />
    </button>
    <RoleSwitch class="ml-32" />
    <div class="flex items-center gap-12 ml-auto">
      <NavLink v-if="role === 'employee'" to="/vacancies">все вакансии</NavLink>
      <NavLink v-else to="/resumes">все резюме</NavLink>
      <NavLink to="/news">новости</NavLink>
      <NavButton>войти</NavButton>
    </div>
  </div>
</template>
