<template>
  <div class="create-session">
    <form class="form" @submit.prevent="createSession">
      <div class="form__input-wrapper">
        <label for="title">Title:</label>
        <input type="text" name="title" class="session-title" v-model="title" />
      </div>

      <button type="submit" class="create-btn">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    createSession() {
      this.$emit("create-session", this.title);
      this.title = "";
    },
  },
};
</script>

<style>
.create-session {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: appear 0.5s ease-in-out;
}

@keyframes appear {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

.form {
  max-width: 100%;
  width: 500px;
  box-shadow: 0px 0px 2px 3px rgba(30, 26, 80, 0.05);
  background-color: #fff;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form__input-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
}

.session-title {
  width: 100%;
  border: 1px solid rgba(30, 26, 80, 0.1);
  padding: 5px;
  border-radius: 3px;
  margin: 15px 0;
  font-size: 18px;
  font-weight: 500;
}

label {
  font-size: 18px;
  font-weight: 500;
  margin-right: 15px;
}

.create-btn {
  padding: 5px 10px;
  background-color: #328bf3;
  color: #fff;
  font-weight: 500;
  border-radius: 3px;
  cursor: pointer;
}
</style>
