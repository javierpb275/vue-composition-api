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
import {
  ref,
  reactive,
  toRefs,
  watch,
  computed,
  onBeforeMount,
  onMounted,
} from "vue";
import Alert from "./components/Alert.vue";

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

    let num = ref(0);

    const increment = () => num.value++;

    const user = reactive({
      name: "Pepe",
      age: 24,
    });

    setTimeout(() => {
      user.name = "Paco";
    }, 3000);

    const phrase = ref("");
    const reversedPhrase = ref("");

    /* watch([phrase], ([newVal], [oldVal]) => {
      reversedPhrase.value = phrase.value.split("").reverse().join("");
    }); */

    watch(() => {
      reversedPhrase.value = phrase.value
        .split("")
        .reverse()
        .join("");
    });

    const double = computed(() => num.value * 2);

    return {
      num,
      increment,
      ...toRefs(user),
      phrase,
      reversedPhrase,
      double,
      user,
      btn,
    };
  },
};
</script>
