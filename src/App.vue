<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view/>
    </div>
  </div>  
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar }
};
</script>

<style lang="scss">
@font-face {
  font-family: "SFProDisplay";
  src: local("SFProDisplay"),
    url(/fonts/sanfranciscodisplay-regular-webfont.woff) format("woff");
}
@import "~element-plus/lib/theme-chalk/index.css";
</style>
