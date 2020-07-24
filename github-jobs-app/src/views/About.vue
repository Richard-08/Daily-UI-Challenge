<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      job: null,
      loading: false,
    };
  },
  created() {
    this.fetchJob();
  },
  methods: {
    fetchJob() {
      this.loading = true;

      fetch(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${this.$route.params.id}.json`
      )
        .then((response) => response.json())
        .then((data) => {
          this.job = data;
          this.loading = false;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
