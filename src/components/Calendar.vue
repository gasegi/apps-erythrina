<template>
  <div>
    <h3>calender.vue</h3>
    <button @click="searchCalender">カレンダー取得</button>
    <div>{{calenders}}</div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data: () => ({
    calenders: null
  }),
  methods: {
    searchCalender() {
      this.calenders = listUpcomingEvents();

      axios.post("/dev").then(res => console.log(res));
    }
  }
};
</script>

<style></style>