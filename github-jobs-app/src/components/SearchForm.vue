<template>
  <div class="search">
    <div class="search-wrapper">
      <form class="search__form" @submit.prevent="onSubmit">
        <input
          type="text"
          placeholder="Title, companies, expertise or benefits"
          class="search__input"
          v-model="query"
        />
        <button type="submit" class="search__btn">Search</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("on-submit", this.query);
      this.query = "";
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_stylebase.scss";

.search-wrapper {
  padding: 42px 18px;
  background: url("../assets/img/backgroundImg.png");
  background-size: cover;
  background-position: center center;
  border-radius: 8px;
}

.search {
  &__form {
    max-width: 790px;
    margin: 0 auto;
    padding: 4px;
    position: relative;

    display: flex;
    justify-content: space-between;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    &::before {
      content: url("../assets/img/briefcase.svg");
      position: absolute;
      top: 42%;
      transform: translateY(-50%);
      left: 17px;
      width: 15px;
      height: 15px;
    }
  }

  &__input {
    width: 100%;
    font-size: 12px;
    padding: 15px 38px 18px 38px;

    @include media(460px) {
      max-width: 180px;
    }
  }

  &__btn {
    background-color: $controls-bg;
    color: #fff;
    padding: 0 48px;
    border-radius: 4px;
    font-weight: 500;

    @include media(460px) {
      width: 104px;
      padding: 0;
    }
  }
}
</style>
