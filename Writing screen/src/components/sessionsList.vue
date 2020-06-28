<template>
  <div class="sessions">
    <div class="sessions__head">
      <div>
        <button class="sessions__add-btn btn" @click="$emit('add-session')">
          <img :src="addBtn" alt="add" />
        </button>

        <div>
          <h3>Sessions</h3>
          <p class="small-text">{{ sessions | countWords }} total words</p>
        </div>
      </div>

      <button class="sessions__search-btn btn">
        <img :src="searchIcon" alt="search" />
      </button>
    </div>

    <ul class="sessions__list">
      <sessionItem
        v-for="(session, index) in sessions"
        v-bind:session="session"
        v-bind:index="index"
        v-bind:key="index"
        @select-item="selectItem"
      />
    </ul>
  </div>
</template>

<script>
import addBtn from "../assets/img/add-btn.svg";
import searchIcon from "../assets/img/search-icon.svg";
import sessionItem from "./sessionItem.vue";

export default {
  props: ["sessions"],
  data() {
    return {
      addBtn,
      searchIcon,
    };
  },
  components: {
    sessionItem,
  },
  methods: {
    selectItem(index) {
      this.$emit("select-session", index);
    },
  },
  filters: {
    countWords(arr) {
      return arr.reduce((a, b) => a + b.text.split(" ").length, 0);
    },
  },
};
</script>

<style>
.sessions {
  flex: 1;
  height: 100%;
  overflow-y: auto;
  padding: 9px 15px 17px 20px;
}

.sessions__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
}

.sessions__head > div {
  display: flex;
}

.sessions__add-btn {
  margin-right: 15px;
}

.sessions__add-btn img {
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.sessions__add-btn img:hover {
  transform: rotate(180deg);
}

.small-text {
}

.sessions__search-btn {
}

.sessions__list {
}
</style>
