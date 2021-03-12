<template>
  <div id="app">
    <!-- <Navbar /> -->
    <CloseTest />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
// import Navbar from "./components/Navbar.vue";
import CloseTest from "./components/CloseTest.vue";
export default {
  components: { CloseTest },
};
</script>

<style>
@import "~element-plus/lib/theme-chalk/index.css";
</style>
