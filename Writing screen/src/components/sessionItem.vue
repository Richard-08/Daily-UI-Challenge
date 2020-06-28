<template>
  <li
    class="sessions__item"
    v-on:click="$emit('select-item', index)"
    v-bind:class="{ selected: session.show }"
  >
    <h4 class="name">{{ session.name }}</h4>
    <p class="small-text">{{ session.text | countWords }} words</p>
  </li>
</template>

<script>
export default {
  props: ["session", "index"],
  filters: {
    countWords(str) {
      return str.split(" ").length;
    },
  },
};
</script>

<style>
.sessions__item {
  width: 100%;
  padding: 10px 0;
  padding-left: 40px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.sessions__item:hover {
  color: #fff;
  background: rgba(50, 139, 243, 0.7);
  box-shadow: 0px 2px 4px rgba(50, 139, 243, 0.4);
}

.sessions__item:hover .small-text {
  color: #fff;
}

.sessions__item.selected {
  color: #fff;
  background: #328bf3;
  box-shadow: 0px 2px 4px rgba(50, 139, 243, 0.4);
}

.sessions__item.selected .small-text {
  color: #fff;
}

.name {
}

.sessions__item .small-text {
  font-size: 10px;
}
</style>
