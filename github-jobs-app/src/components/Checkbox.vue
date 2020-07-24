<template>
  <label class="checkbox-container"
    >{{ filter.name }}
    <input
      type="checkbox"
      class="checkbox"
      v-model="filter.checked"
      @change="$emit('change-filter')"
    />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  props: ["filter"],
  data() {
    return {
      checkedFilters: [],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
@import "../assets/scss/_stylebase.scss";

.checkbox-container {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 19px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: $mainFont;
  font-size: 14px;
  font-weight: 500;
}

.checkbox-container .checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: transparent;
  border: 1px solid #b9bdcf;
  box-sizing: border-box;
  border-radius: 2px;
}

.checkbox-container:hover .checkbox ~ .checkmark {
  background-color: #ccc;
}

.checkbox-container .checkbox:checked ~ .checkmark {
  background-color: $controls-bg;
  border: 1px solid $controls-bg;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container .checkbox:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 15%;
  top: 45%;
  width: 7px;
  height: 13px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg) translate(-50%, -50%);
}
</style>
