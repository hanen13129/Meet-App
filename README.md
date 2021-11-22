FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS

User Story: As a user, I should be able to toggle an event’s details so that I choose how
much information is visible.

Scenario 1: An event element is collapsed by default.
• Given a user is on the main page,
• When an event is displayed
• Then event details will be collapsed.

Scenario 2: User can expand an event to see its details.
• Given a user has list of events
• When the user clicks on an individual event
• Then the event details will be displayed.

Scenario 3: User can collapse an event to hide its details.
• Given a user has expanded an individual event,
• When a user has clicked “minimize”
• Then the event details will be hidden.

FEATURE 3: SPECIFY NUMBER OF EVENTS

User Story: As a user, I should be able to specify number of events I want to view so
that I can see more or fewer events in the events list.

Scenario 1: When user hasn’t specified a number, 32 is the default number.
• Given a user is on the main page,
• When the user hasn’t specified a number of events
• Then the default amount, 32, events will be shown.

Scenario 2: User can change the number of events they want to see.
• Given a user is on the main page
• When a user specifies the number of events
• Then the specified number of events is displayed

FEATURE 4: USE THE APP WHEN OFFLINE

User Story: As a user, I should be able to use the app when offline so that I can see
events without an internet connection.

Scenario 1: Show cached data when there’s no internet connection.
• Given a user is offline
• When the user opens the app
•Then cached data shows events from previous session.

Scenario 2: Show error when user changes the settings (city, time range).
• Given a user is offline. 
• When the user changes the settings
• Then an error message is displayed

FEATURE 5: DATA VISUALIZATION

User Story: As a user, I should be able to see a visualization of events so that I know
which are events are in which city.

Scenario 1: Show a chart with the number of upcoming events in each city.
• Given the main page is open
• When the user wants to see the location of events
• Then a chart showing the cities and the events happening in them is displayed