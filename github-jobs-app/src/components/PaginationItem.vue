<template>
  <li class="pagination__item" @click="changePage(page)">
    <a href="#">{{ page }}</a>
  </li>
</template>

<script>
export default {
  props: ["page"],
  methods: {
    changePage(num) {
      this.$emit("change-page", num);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_stylebase.scss";

.pagination {
  &__item {
    @include size(35px);
    border: 1px solid $small-text-color;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    color: $small-text-color;
    font-size: 12px;
    transition: all 0.2s ease;
    cursor: pointer;

    a {
      color: $small-text-color;
    }
  }

  &__item.active,
  &__item.active:hover {
    border-color: $controls-bg;
    background-color: $controls-bg;

    a {
      color: #fff;
    }
  }

  &__item:hover {
    border-color: $controls-bg;

    a {
      color: $controls-bg;
    }
  }
}
</style>
