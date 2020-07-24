<template>
  <div class="job-list">
    <JobItem v-for="job in jobs" v-bind:key="job.id" v-bind:job="job" />
  </div>
</template>

<script>
import JobItem from "./JobItem.vue";

export default {
  props: ["jobs"],
  components: {
    JobItem,
  },
};
</script>

<style lang="scss"></style>
