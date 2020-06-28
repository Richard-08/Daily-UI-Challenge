<template>
  <header class="header">
    <div class="container flex">
      <div class="header__title">
        <div class="header__home">
          <img :src="homeIcon" alt="home" />
        </div>
        <div class="header__text">
          <h3>Learn How To Motivate Yourself</h3>
          <p class="small-text">
            {{ sessions | countWords }} total words |
            {{ sessions.length }} sessions
          </p>
        </div>
      </div>

      <div class="header__btns">
        <button
          class="header__delete-btn btn"
          @click.stop="$emit('delete-session')"
        >
          Delete
        </button>
        <button class="header__export-btn btn">Export</button>
      </div>
    </div>
  </header>
</template>

<script>
import homeIcon from "../assets/img/home.svg";

export default {
  props: ["sessions"],
  data() {
    return {
      homeIcon,
    };
  },
  filters: {
    countWords(arr) {
      return arr.reduce((a, b) => a + b.text.split(" ").length, 0);
    },
  },
};
</script>

<style>
.header {
  background-color: #fff;
  padding: 15px 0 11px 0;
  box-shadow: 0px 2px 5px rgba(30, 26, 80, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__title {
  display: flex;
  align-items: center;
}

h3 {
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}

.header__home {
  margin: 0 27px 0 13px;
}

.header__text {
}

.header__btns {
}

.header__delete-btn {
  margin-right: 30px;
}

.header__export-btn {
}

.header__delete-btn:hover,
.header__export-btn:hover {
  color: #1e1a50;
  border-bottom: 1px solid hsla(223, 51%, 21%, 1);
}
</style>
