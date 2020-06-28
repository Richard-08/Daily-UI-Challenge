<template>
  <div id="app">
    <Header @delete-session="deleteSession" v-bind:sessions="sessions" />
    <Main
      v-bind:sessions="sessions"
      @open-session="openSession"
      v-bind:currentSession="getCurrentSession"
      @add-session="addNewSession"
      @save-text="saveSessionOnStorage"
    />

    <CreateModal v-show="isShow" @create-session="createNewSession" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import CreateModal from "./components/CreateModal.vue";

export default {
  name: "App",
  data() {
    return {
      sessions: JSON.parse(localStorage.getItem("sessions")) || [
        { name: "Title", text: "Hello:) Edit this text...", show: false },
      ],
      currentSession: 0,
      isShow: false,
    };
  },
  components: {
    Header,
    Main,
    CreateModal,
  },
  methods: {
    openSession(index) {
      const arr = this.sessions.map((value) => (value.show = false));
      this.sessions[index].show = true;
      this.currentSession = index;
    },
    addNewSession() {
      this.isShow = true;
    },
    createNewSession(title) {
      this.isShow = false;
      const newSession = {
        name: title,
        text: "Edit this text...",
        show: false,
      };
      this.sessions.push(newSession);
    },
    saveSessionOnStorage() {
      localStorage.setItem("sessions", JSON.stringify(this.sessions));
    },
    deleteSession() {
      this.sessions = this.sessions.filter(
        (value, index) => index !== this.currentSession
      );
      localStorage.setItem("sessions", JSON.stringify(this.sessions));
    },
  },
  computed: {
    getCurrentSession() {
      return (this.currentSession =
        this.sessions.findIndex((value) => value.show) || 0);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap");
/* font-family: 'Montserrat', sans-serif; */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  border: none;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
}

img {
  max-width: 100%;
}

#app {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #1e1a50;
  min-height: 100vh;
}

.container {
  max-width: 100%;
  width: 1366px;
  margin: 0 auto;
  padding: 0 15px;
}

.small-text {
  color: hsla(244, 51%, 21%, 0.5);
  font-size: 12px;
  font-weight: 400;
}

.btn {
  cursor: pointer;
  font-weight: 500;
  font-size: 12px;
  color: hsla(223, 51%, 21%, 0.6);
  background-color: transparent;
  transition: all 0.3s ease;
}
</style>
