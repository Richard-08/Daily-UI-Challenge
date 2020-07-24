<template>
  <section class="filters">
    <Checkbox
      v-for="filter in filter"
      v-bind:filter="filter"
      v-bind:key="filter.id"
      @change-filter="changeFilter"
    />

    <LocationInput @search-location="searchLocation" />

    <Checkbox
      v-for="(filter, index) in locationFilters"
      v-bind:filter="filter"
      v-bind:key="index"
      @change-filter="changeFilter"
    />
  </section>
</template>

<script>
import Checkbox from "./Checkbox.vue";
import LocationInput from "./LocationInput.vue";

export default {
  props: ["filter", "locationFilters"],
  data() {
    return {};
  },
  methods: {
    changeFilter() {
      this.$emit("filter-search");
    },
    searchLocation(location) {
      console.log(location);
      this.$emit("search-by-location", location);
    },
  },
  components: {
    Checkbox,
    LocationInput,
  },
};
</script>

<style lang="scss">

.filters {
  margin-right: 32px;
}

</style>
