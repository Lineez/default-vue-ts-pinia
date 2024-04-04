import { defineStore } from "pinia";
import { ref } from "vue";

const useLoaderState = defineStore("isLoading", () => {
  const state = ref(false);

  const changeStateTrue = () => {
    state.value = true;
  };

  const changeStateFalse = () => {
    state.value = false;
  };

  return { state, changeStateTrue, changeStateFalse };
});

export default useLoaderState;
