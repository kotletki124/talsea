export const useAuthStore = defineStore("auth", () => {
  const role = ref("employee");

  const order = {
    employee: 0,
    employer: 1,
  };

  return {
    role,
    order,
  };
});
