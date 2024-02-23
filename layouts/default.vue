<template>
  <div class="flex flex-col min-h-screen">
    <div class="w-[1440px] flex flex-col items-center mx-auto">
      <Header />
      <div class="px-20 py-40">
        <slot />
      </div>
    </div>
    <Footer class="mt-auto" />
  </div>
</template>
