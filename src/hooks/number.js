import { ref, computed } from "vue";

export const useNumber = () => {
  let num = ref(0);

  const increment = () => num.value++;

  const double = computed(() => num.value * 2);

  return {
    num,
    increment,
    double,
  };
};
