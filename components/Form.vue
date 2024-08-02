<script>
import { socket, state } from "/socket/client";

export default {
  name: "MyForm",

  data() {
    return {
      isLoading: false,
      value: "",
    };
  },

  methods: {
    onSubmit() {
      this.isLoading = true;

      socket.emit("ping", this.value, () => {
        this.isLoading = false;
      });
    },
  },

  computed: {
    events() {
      return state.fooEvents;
    },
  },
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input v-model="value" />

    <button type="submit" :disabled="isLoading">Submit</button>
  </form>

  <p>Computed: {{ events }}</p>
</template>
