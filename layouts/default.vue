<template>
  <div class="w-[1440px] min-h-screen flex flex-col m-auto">
    <Header />
    <div class="px-20 py-40">
      <slot />
    </div>
    <Footer class="mt-auto" />
  </div>
</template>
