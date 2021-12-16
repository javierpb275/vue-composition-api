<template>
  <div>
    <p>{{ num }}</p>
    <button type="button" @click.prevent="increment">increment</button>
    <p>{{name}}</p>
    <input type="text" v-model="phrase"/>
    <p>{{reversedPhrase}}</p>
  </div>
</template>

<script>
import { ref, reactive, toRefs, watch } from "vue";

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

    const phrase = ref("");
    const reversedPhrase = ref("");

    /* watch([phrase], ([newVal], [oldVal]) => {
      reversedPhrase.value = phrase.value.split("").reverse().join("");
    }); */

    watch(() => {
      reversedPhrase.value = phrase.value.split("").reverse().join("");
    });

    return {
      num,
      increment,
      ...toRefs(user),
      phrase,
      reversedPhrase
    };
  },
};
</script>
