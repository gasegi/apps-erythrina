<template>
  <div>
    <h3>calender.vue</h3>
    <button @click="searchCalender">カレンダー取得</button>
    <div>{{calenders}}</div>
  </div>
</template>

<script>
function listUpcomingEvents() {
  var calendarId = "primary";
  var optionalArgs = {
    timeMin: new Date().toISOString(),
    showDeleted: false,
    singleEvents: true,
    maxResults: 10,
    orderBy: "startTime"
  };
  var response = Calendar.Events.list(calendarId, optionalArgs);
  var events = response.items;
  if (events.length > 0) {
    for (i = 0; i < events.length; i++) {
      var event = events[i];
      var when = event.start.dateTime;
      if (!when) {
        when = event.start.date;
      }
      Logger.log("%s (%s)", event.summary, when);
      console.log("%s (%s)", event.summary, when);
      return event.sammary;
    }
  } else {
    Logger.log("No upcoming events found.");
  }
}

export default {
  data: () => ({
    calenders: null
  }),
  methods: {
    searchCalender() {
      this.calenders = listUpcomingEvents();
    }
  }
};
</script>

<style></style>