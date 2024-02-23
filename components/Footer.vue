<script setup>
import { useAuthStore } from "/store";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { role } = storeToRefs(authStore);

const containerClass = computed(
  () =>
    `container-full flex items-center justify-center duration-100 transition-all ${
      role.value === "employee" ? "bg-green" : "bg-coral"
    }`
);
</script>

<template>
  <div :class="containerClass">
    <div class="flex justify-between w-[1278px] h-[92px]">
      <Logo :two-lines="true" class="logo w-[266px] h-[92px]" />
      <div class="flex gap-10 items-center">
        <div class="flex flex-col justify-between h-full">
          <FooterLink to="/vacancies">Все вакансии</FooterLink>
          <FooterLink to="/resumes">Все резюме</FooterLink>
          <FooterLink to="/news">Новости</FooterLink>
        </div>
        <div class="flex flex-col justify-between h-full">
          <FooterLink to="/vacancies">Пользовательское соглашение</FooterLink>
          <FooterLink to="/resumes">Политика конфиденциальности</FooterLink>
          <FooterLink to="/news">Фонд содействия инновациям</FooterLink>
        </div>
      </div>
      <div class="flex gap-5">
        <IconButton>
          <svgo-icon-telegram-round
            class="logo w-12 h-12"
            :fontControlled="false"
            :filled="false"
          />
        </IconButton>
        <IconButton>
          <svgo-icon-mail
            class="logo w-12 h-12"
            :fontControlled="false"
            :filled="false"
          />
        </IconButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-full {
  height: 386px;
  background-image: url("/assets/svg/footer/bg-full.svg");
  background-size: cover;
}
.logo::v-deep(*) {
  fill: white;
}
</style>
