export const useAuthStore = defineStore("auth", () => {
  const role = ref("employee");

  return {
    role,
  };
});
