<template>
  <div class="location-filter">
    <label for="location">Location</label>
    <input
      name="location"
      type="text"
      placeholder="City, state, zip code or country"
      class="location-filter__input"
      v-model="location"
      @keyup.enter="searchLocation"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: "",
    };
  },
  methods: {
    searchLocation() {
      this.$emit("search-location", this.location);
      this.location = "";
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_stylebase.scss";

.location-filter {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 35px 0 27px 0;

  &::before {
    content: url("../assets/img/globe.svg");
    position: absolute;
    top: 63%;
    transform: translateY(-50%);
    left: 17px;
    width: 15px;
    height: 15px;
  }

  label {
    font-family: $mainFont;
    font-weight: 700;
    color: $small-text-color;
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 14px;
  }

  input {
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    font-size: 12px;
    padding: 17px 17px 17px 45px;
  }
}
</style>
