<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ double }}</p>
    <button type="button" @click.prevent="increment">increment</button>
    <p>{{ name }}</p>
    <input type="text" v-model="phrase" />
    <p>{{ reversedPhrase }}</p>
    <alert :user="user" />
    <button type="button" ref="btn">Button</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs, onBeforeMount, onMounted } from "vue";
import Alert from "./components/Alert.vue";
import { useNumber } from "./hooks/number";
import { usePhrase } from "./hooks/phrase";

export default {
  name: "App",
  components: {
    Alert,
  },
  setup() {
    const btn = ref(null);

    onBeforeMount(() => {
      console.log("onBeforeMount()");
    });

    onMounted(() => {
      console.log("onMounted()");
      btn.value.addEventListener("click", () => console.log("button clicked"));
    });

    const user = reactive({
      name: "Pepe",
      age: 24,
    });

    setTimeout(() => {
      user.name = "Paco";
    }, 3000);

    const { num, increment, double } = useNumber();

    const { phrase, reversedPhrase, num: phraseNum } = usePhrase();

    return {
      num,
      increment,
      ...toRefs(user),
      phrase,
      reversedPhrase,
      double,
      user,
      btn,
      phraseNum,
    };
  },
};
</script>
