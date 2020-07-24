<template>
  <header class="header">
    <div class="container">
      <div class="header__logo">
        <router-link to="/">
          <h1>Github <span>Jobs</span></h1>
        </router-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import "../assets/scss/_stylebase.scss";

.header {
  padding: 32px 0;

  &__logo {
    h1 {
      font-size: 24px;
      color: $head-title;
      font-weight: bold;
    }

    span {
      font-weight: 300;
    }
  }
}
</style>
