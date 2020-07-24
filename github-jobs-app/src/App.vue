<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/_stylebase.scss";

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: none;
  list-style: none;
  text-decoration: none;
}

input,
button {
  font-family: $secondaryFont;
  color: $small-text-color;
}

button {
  cursor: pointer;
}

img {
  max-width: 100%;
}

#app {
  font-family: $mainFont;
  color: $mainFontColor;
  font-size: $mainFontSize;
  background-color: $main-bg;
  min-height: 100vh;
  padding-bottom: 100px;
}

.container {
  max-width: 100%;
  width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
