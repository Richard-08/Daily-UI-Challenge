<template>
  <main class="main">
    <div class="container">
      <div class="sessions-wrapper">
        <sessionsList
          v-bind:sessions="sessions"
          @select-session="selectSession"
          @add-session="$emit('add-session')"
        />
        <TextField
          v-bind:sessions="sessions"
          v-bind:currentSession="currentSession"
          @save-text="$emit('save-text')"
        />
      </div>
    </div>
  </main>
</template>

<script>
import sessionsList from "./sessionsList.vue";
import TextField from "./TextField.vue";

export default {
  props: ["sessions", "currentSession"],
  data() {
    return {};
  },
  components: {
    sessionsList,
    TextField,
  },
  methods: {
    selectSession(index) {
      this.$emit("open-session", index);
    },
  },
};
</script>

<style>
.main {
  background-color: rgba(241, 241, 241, 0.3);
  padding-top: 15px;
  margin-top: 65px;
}

.sessions-wrapper {
  height: 100vh;
  display: flex;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(30, 26, 80, 0.1);
  border-radius: 2px 2px 0px 0px;
  padding: 8px 0;
}
</style>
