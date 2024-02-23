<script setup>
import { useAuthStore } from "/store";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { role } = storeToRefs(authStore);

const header = {
  employee: "Помогаем студентам найти работу в море вакансий",
  employer: "Найдём молодого специалиста в команду",
};

const order = {
  employee: 0,
  employer: 1,
};
</script>

<template>
  <div class="flex flex-col gap-[76px]">
    <SlideTransition :index="order[role]">
      <h1 :key="role">{{ header[role] }}</h1>
    </SlideTransition>
    <SearchBar />
  </div>
</template>
