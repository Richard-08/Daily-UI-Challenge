<template>
  <div class="text-field">
    <div class="text-field__head">
      <div class="text-field__title">
        <h2 v-if="isReadonly">{{ sessions[currentSession].name }}</h2>
        <input v-else type="text" v-model="sessions[currentSession].name" />
      </div>
      <div class="text-field__btns">
        <button
          class="text-field__save-btn btn"
          @click.stop="$emit('save-text')"
          :disabled="isReadonly"
        >
          Save
        </button>

        <button class="text-field__write-btn btn" @click.stop="editText">
          <img :src="writeIcon" alt="write" />
        </button>

        <button class="text-field__more-btn btn">
          <img :src="moreIcon" alt="more" />
        </button>
      </div>
    </div>

    <div class="text-field__text-content">
      <textarea
        v-model="sessions[currentSession].text"
        class="text"
        :readonly="isReadonly"
      ></textarea>
    </div>
  </div>
</template>

<script>
import writeIcon from "../assets/img/write-icon.svg";
import moreIcon from "../assets/img/more-icon.svg";

export default {
  props: ["sessions", "currentSession"],
  data() {
    return {
      writeIcon,
      moreIcon,
      isReadonly: true,
    };
  },
  methods: {
    editText() {
      this.isReadonly = false;
    },
  },
};
</script>

<style>
.text-field {
  flex: 4;
  padding: 22px 34px 30px 30px;
  border-left: 1px solid hsla(223, 51%, 21%, 0.1);
  color: #1a2950;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.text-field__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 33px;
}

.text-field__title input {
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
}

.text-field__title h2 {
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
}

.text-field__btns {
  display: flex;
  align-items: center;
}

.text-field__save-btn.btn {
  background-color: #328bf3;
  color: #fff;
  border-radius: 3px;
  padding: 5px;
  margin-right: 30px;
  font-weight: 500;
}

.text-field__save-btn.btn:hover {
  background-color: transparent;
  box-shadow: 0px 0px 0px 2px hsl(212, 89%, 57%);
  color: #328bf3;
}

.text-field__write-btn {
  margin-right: 30px;
}

.text-field__write-btn:hover {
  border-bottom: 1px solid #1a2950;
}

.text-field__more-btn {
}

.text-field__text-content {
  height: 90%;
}

.text {
  width: 100%;
  height: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-align: justify;
  color: #1a2950;
  resize: none;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>
