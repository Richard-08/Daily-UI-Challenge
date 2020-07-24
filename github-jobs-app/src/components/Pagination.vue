<template>
  <ul class="pagination">
    <li
      class="pagination__item prev"
      v-if="hasPrev()"
      @click="changePage(prevPage)"
    >
      <i class="fas fa-chevron-left"></i>
    </li>

    <li class="pagination__item" v-if="hasFirst()" @click="changePage(1)">
      <a href="#">1</a>
    </li>
    <li v-if="hasFirst()" class="pagination__item more">
      <i class="fas fa-ellipsis-h"></i>
    </li>

    <PaginationItem
      v-for="(page, index) in setPages"
      v-bind:key="index"
      v-bind:page="page"
      @change-page="changePage(page)"
      :class="{ active: currentPage === page }"
    />

    <li v-if="hasLast()" class="pagination__item more">
      <i class="fas fa-ellipsis-h"></i>
    </li>
    <li
      class="pagination__item"
      v-if="hasLast()"
      @click="changePage(totalPages)"
    >
      <a href="#">{{ totalPages }}</a>
    </li>

    <li
      class="pagination__item next"
      v-if="hasNext()"
      @click="changePage(nextPage)"
    >
      <i class="fas fa-chevron-right"></i>
    </li>
  </ul>
</template>

<script>
import PaginationItem from "./PaginationItem.vue";
import prevIcon from "../assets/img/prev.svg";
import nextIcon from "../assets/img/next.svg";

export default {
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    pages: {
      type: Array,
      required: true,
    },
    pageSize: {
      type: Number,
      default: 5,
    },
    maxPages: {
      type: Number,
      default: 3,
    },
    pageRange: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {};
  },
  components: {
    PaginationItem,
  },
  computed: {
    setPages() {
      const pages = [];
      for (let i = this.rangeStart; i <= this.rangeEnd; i += 1) {
        pages.push(i);
      }
      return pages;
    },
    rangeStart() {
      const start = this.currentPage - this.pageRange;
      return start > 0 ? start : 1;
    },
    rangeEnd() {
      const end = this.currentPage + this.pageRange;
      return end < this.totalPages ? end : this.totalPages;
    },
    totalPages() {
      return Math.ceil(this.pages.length / this.pageSize);
    },
    nextPage() {
      return this.currentPage + 1;
    },
    prevPage() {
      return this.currentPage - 1;
    },
  },
  methods: {
    hasFirst() {
      return this.rangeStart !== 1;
    },
    hasLast() {
      return this.rangeEnd < this.totalPages;
    },
    hasPrev() {
      return this.currentPage > 1;
    },
    hasNext() {
      return this.currentPage < this.totalPages;
    },
    changePage(page) {
      this.$emit("page-changed", page);
    },
  },
};
</script>

<style lang="scss">
.pagination {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &__item.more {
    border: none;
  }
}
</style>
