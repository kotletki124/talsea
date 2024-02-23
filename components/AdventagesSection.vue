<script setup>
import { useAuthStore } from "/store";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { role, order } = storeToRefs(authStore);

const content = {
  employee: [
    {
      id: 1,
      header: "Индивидуальные подборы вакансий",
      text: "Наш алгоритм подбирает вам вакансии на основе ваших навыков, опыта и карьерных целей.",
      class: "bg-secondary-lavender",
    },
    {
      id: 2,
      header: "Прокачка карьеры",
      text: "Мы предоставляем персонализированные рекомендации по развитию карьеры, которые помогут вам достичь долгосрочных карьерных целей.",
      class: "bg-secondary-lime",
    },
    {
      id: 3,
      header: "Рекомендация курсов",
      text: "Мы рекомендуем курсы повышения квалификации, которые помогут вам быть в курсе последних тенденций и навыков в отрасли.",
      class: "bg-secondary-coral",
    },
  ],
  employer: [
    {
      id: 1,
      header: "Высококвалифицированные кандидаты",
      text: "Мы собрали на платформе выпускников и студентов топ ВУЗов России.",
      class: "bg-secondary-lavender",
    },
    {
      id: 2,
      header: "Повышение охватов",
      text: "Talent Search поможет преподнести вашу компанию привлекательной для соискателей",
      class: "bg-secondary-lime",
    },
    {
      id: 3,
      header: "Помощь в сборе заявок с карьерных событий",
      text: "Всю рутину со сбором заявок соискателей с карьерных событий мы возьмем на себя!",
      class: "bg-secondary-coral",
    },
  ],
};
</script>

<template>
  <div class="flex flex-col gap-[48px] w-full">
    <h2>Чем мы порадуем</h2>
    <SlideTransition :index="order[role]">
      <div :key="role" class="flex gap-5">
        <AdventageCard
          v-for="item of content[role]"
          :key="item.id"
          :class="item.class"
          :imgUrl="`/png/adventage/${role}_${item.id}.png`"
        >
          <template #header>
            {{ item.header }}
          </template>
          <template #text>
            {{ item.text }}
          </template>
        </AdventageCard>
      </div>
    </SlideTransition>
  </div>
</template>
