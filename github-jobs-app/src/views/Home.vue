<template>
  <div class="home">
    <div class="container">
      <SearchForm @on-submit="onSubmit" />

      <div class="main-section">
        <Filters
          @filter-search="searchJobs"
          v-bind:filter="fullTimeFilter"
          v-bind:locationFilters="locationFilters"
          @search-by-location="searchByLocation"
        />

        <Loader v-if="loading" />

        <JobsList v-else v-bind:jobs="filteredJobs" />
      </div>

      <Pagination
        v-bind:currentPage="currentPage"
        v-bind:pages="jobs"
        v-bind:maxPages="maxPages"
        v-bind:pageSize="pageSize"
        @page-changed='changeCurrentPage'
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchForm from "../components/SearchForm.vue";
import Filters from "../components/Filters.vue";
import JobsList from "../components/JobsList.vue";
import Loader from "../components/Loader.vue";
import Pagination from "../components/Pagination.vue";

export default {
  name: "Home",
  data() {
    return {
      jobs: [],
      queryTitle: "",
      location: "",
      loading: false,
      fullTimeFilter: [
        {
          id: Date.now(),
          name: "Full Time",
          checked: false,
        },
      ],
      locationFilters: [
        {
          name: "London",
          checked: false,
        },
        {
          name: "Amsterdam",
          checked: false,
        },
        {
          name: "New York",
          checked: true,
        },
        {
          name: "Berlin",
          checked: false,
        },
      ],
      currentPage: 1,
      pageSize: 5,
      maxPages: 3,
    };
  },
  components: {
    SearchForm,
    Filters,
    JobsList,
    Loader,
    Pagination,
  },
  mounted() {
    this.searchJobs();
  },
  computed: {
    queryParams() {
      const queryStr = [];
      if (this.queryTitle) {
        queryStr.push(`search=${this.queryTitle.split(" ").join("+")}`);
      }

      if (this.location)
        queryStr.push(`location=${this.location.split(" ").join("+")}`);

      if (this.locationFilters.some((value) => value.checked)) {
        const selectedFilters = [];
        this.locationFilters.forEach((value) => {
          if (value.checked) {
            selectedFilters.push(value.name);
          }
        });
        queryStr.push(
          `location=${selectedFilters
            .join("")
            .split(" ")
            .join("+")}`
        );
      }

      if (this.fullTimeFilter[0].checked) {
        queryStr.push("full_time=true");
      }

      if (queryStr) {
        return queryStr.join("&");
      }

      return "";
    },
    filteredJobs() {
      return this.jobs.slice(this.prevPage, this.currentPage * this.pageSize);
    },
  },
  methods: {
    searchJobs() {
      const baseURL = "https://jobs.github.com/positions.json?";
      const cors = "https://cors-anywhere.herokuapp.com/";
      this.loading = true;

      fetch(`${cors}${baseURL}${this.queryParams}`)
        .then((response) => response.json())
        .then((data) => {
          this.jobs = data;
          this.loading = false;
        })
        .catch((err) => console.log(err));
    },
    onSubmit(query) {
      this.queryTitle = query;
      this.searchJobs();
    },
    searchByLocation(l) {
      this.location = l;
      console.log(l);
      this.searchJobs();
    },
    changeCurrentPage(page) {
      this.currentPage = page;
      this.prevPage = page * this.pageSize - this.pageSize;
    },
  },
};
</script>

<style lang="scss">
.main-section {
  margin-top: 42px;
  display: grid;
  grid-template-columns: minmax(150px, 30%) 1fr;
}
</style>
