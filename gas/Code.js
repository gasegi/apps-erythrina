// eslint-disable-next-line no-unused-vars
function doGet() {
  const html = HtmlService.createHtmlOutputFromFile("index");
  return html;
}

function makeContent(content) {
  return ContentService.createTextOutput(
    JSON.stringify({ content: content })
  ).setMimeType(ContentService.MimeType.JSON);
}

function makeContent(content) {
  return ContentService.createTextOutput(
    JSON.stringify({ content: content })
  ).setMimeType(ContentService.MimeType.JSON);
}

// eslint-disable-next-line no-unused-vars
function getCalenderList() {
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
      var i;
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

  return makeContent(listUpcomingEvents());
}

