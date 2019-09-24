<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>休み</span>
        <span class="font-weight-light">カレンダー</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="https://calendar.google.com" target="_blank">
        <span class="mr-2">Google カレンダー</span>
      </v-btn>
    </v-app-bar>

    <v-content>
     <Calendar></Calendar> 
      <router-view></router-view>
      <!-- <HelloWorld/> -->

      <!-- <router-link to="/home">Go to home</router-link>
      <router-link to="/add">Go to add</router-link> -->
    </v-content>
  </v-app>
</template>

<script> 
import HelloWorld from "./components/HelloWorld.vue";
import Calendar from "./components/Calendar.vue";

export default {
  name: "App",
  components: {
    HelloWorld
    ,Calendar
  },
  data: () => ({
    //
  })
};
</script>
