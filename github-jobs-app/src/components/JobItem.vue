<template>
  <router-link :to="{ name: 'About', params: { id: job.id } }">
    <div class="job">
      <div class="job__company-logo">
        <img :src="job.company_logo" alt="" v-if="job.company_logo" />
        <span v-else>not found</span>
      </div>

      <div class="job__info-wrapper">
        <div class="job__information">
          <div class="job__company-name">
            <h5>{{ job.company }}</h5>
          </div>

          <div class="job__title">
            <h2>{{ job.title }}</h2>
          </div>

          <div class="job__tag">
            <h5>{{ job.type }}</h5>
          </div>
        </div>

        <div class="job__location-date">
          <div class="job__location">
            <img src="../assets/img/globe.svg" alt="globe" />
            <p>{{ job.location }}</p>
          </div>

          <div class="job__date">
            <img src="../assets/img/time.svg" alt="time" />
            <p>{{ job.created_at | getDate }} days ago</p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["job"],
  filters: {
    getDate(value) {
      const createdDate = new Date(value);
      const dateNow = Date.now();
      const difference = dateNow - createdDate.getTime();
      return Math.round(difference / (24 * 3600 * 1000));
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_stylebase.scss";

.job {
  display: grid;
  grid-template-columns: auto 1fr;
  background-color: #fff;
  margin-bottom: 32px;
  padding: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  font-family: $secondaryFont;

  &__company-logo {
    width: 90px;
    height: 90px;
    border-radius: 4px;
    overflow: hidden;
    margin-right: 16px;

    display: flex;
    align-items: center;

    span {
      @include size(100%);
      background-color: #f1f1f1;
      display: grid;
      place-items: center;
      font-size: 12px;
      font-weight: bold;
      color: $small-text-color;
    }
  }

  &__info-wrapper {
    display: flex;
  }

  &__information {
    flex: 1 1 auto;
  }

  &__company-name h5,
  &__tag h5 {
    font-size: 12px;
    font-weight: 700;
  }

  &__title {
    font-size: 18px;
    margin: 8px 0 12px 0;
  }

  &__tag {
    display: inline-block;
    padding: 6px 8px;
    border: 1px solid $mainFontColor;
    border-radius: 4px;
  }

  &__location-date {
    display: flex;
    align-items: center;
    align-self: flex-end;
  }

  &__location {
    display: flex;
    align-items: center;
    margin-right: 30px;

    img {
      width: 15px;
      height: 15px;
    }

    p {
      margin-left: 7.5px;
      font-size: 12px;
      font-weight: 500;
      color: $small-text-color;
    }
  }

  &__date {
    display: flex;
    align-items: center;

    img {
      width: 15px;
      height: 15px;
    }

    p {
      margin-left: 7.5px;
      font-size: 12px;
      font-weight: 500;
      color: $small-text-color;
    }
  }
}
</style>
