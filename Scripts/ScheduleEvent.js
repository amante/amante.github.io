function initEvent(email, vacunatorio, vacuna) {
  var event = {
    'summary': 'No olvides tu próxima dosis de' + vacuna,
    'location': 'En el centro de vacunación:' + vacunatorio,
    'description': 'No olvides agendar tu próxima dosis de vacunación de' + vacuna,
    'start': {
      'dateTime': '2023-10-28T09:00:00-07:00',
      'timeZone': 'America/Chile/Santiago'
    },
    'end': {
      'dateTime': '2023-10-28T17:00:00-07:00',
      'timeZone': 'America/Chile/Santiago'
    },
    'recurrence': [
      'RRULE:FREQ=DAILY;COUNT=2'
    ],
    'attendees': [

      {'email': 'monomaldito@hotmail.com'},
      {'email': email}
    ],
    'reminders': {
      'useDefault': false,
      'overrides': [
        {'method': 'email', 'minutes': 24 * 60},
        {'method': 'popup', 'minutes': 10}
      ]
    }
  };

  var request = gapi.client.calendar.events.insert({
    'calendarId': 'primary',
    'resource': event
  });

  request.execute(function(event) {
    appendPre('Event created: ' + event.htmlLink);
  });
}