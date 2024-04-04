<template>
  <div v-show="isLoading.state" class="global-loader">
    <Loader />
  </div>
  <RouterView />
</template>

<script lang="ts" setup>
import Loader from "@/components/Loader.vue";
import useLoaderState from "@/store/modules/loader";

const isLoading = useLoaderState();
</script>

<style lang="scss">
@import "@/assets/styles/default/index.scss";

.global-loader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  svg {
    width: 100px;
    height: auto;
  }
}
</style>
