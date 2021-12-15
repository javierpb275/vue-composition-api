<template>
  <div>
    <p>{{ num }}</p>
    <button type="button" @click.prevent="increment">increment</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  setup(props) {
    let num = ref(0);
    const increment = () => num.value++;
    return {
      num,
      increment,
    };
  },
};
</script>
