<template>
  <div v-if="!flag" style="color: red;">Name changed!</div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "Alert",
  props: ["user"],
  setup(props, context) {
    //context.emit('eventName', {})
    const flag = computed(() => props.user.name === "Pepe");
    return {
      flag,
    };
  },
};
</script>
