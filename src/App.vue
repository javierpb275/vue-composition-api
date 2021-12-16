<template>
  <div>
    <p>{{ num }}</p>
    <button type="button" @click.prevent="increment">increment</button>
    <p>{{name}}</p>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";

export default {
  name: "App",
  setup(props) {
    let num = ref(0);

    const increment = () => num.value++;

    const user = reactive({
      name: 'Pepe',
      age: 24
    });

    setTimeout(() => {
      user.name = 'Paco'
    }, 3000);

    return {
      num,
      increment,
      ...toRefs(user)
    };
  },
};
</script>
