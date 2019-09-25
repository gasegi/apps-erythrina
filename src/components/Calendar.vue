<template>
  <div>
    <h3>calender.vue</h3>
    <button @click="searchCalender">カレンダー取得</button>
    <div>{{calenders}}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    calenders: null
  }),
  methods: {
    searchCalender() {
      // this.calenders = listUpcomingEvents();
      google.script.run
        .withSuccessHandler(function(e, e2) {
          console.log("withSuccessHandler", e, e2);
        })
        .withFailureHandler(function(e, e2) {
          console.log("withFailureHandler", e, e2);
        })
        .doPost();
      // axios.get("").then(res => console.log(res));
      // axios.post("https://script.google.com/macros/s/AKfycbwJVSdftYAU6XDUzoiKHhkSQjDxV2qnVSIajOkMrg/exec").then(res => console.log(res));
    }
  }
};
</script>

<style></style>