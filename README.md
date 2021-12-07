## :white_check_mark: FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS

## :white_check_mark: User Story: 
As a user, I should be able to toggle an event’s details so that I choose how much information is visible.

## :white_check_mark: Scenario 1: An event element is collapsed by default.
:small_orange_diamond: Given a user is on the main page,
:small_orange_diamond: When an event is displayed
:small_orange_diamond: Then event details will be collapsed.

## :white_check_mark: Scenario 2: User can expand an event to see its details.
:small_orange_diamond: Given a user has list of events
:small_orange_diamond: When the user clicks on an individual event
:small_orange_diamond:Then the event details will be displayed.

## :white_check_mark: Scenario 3: User can collapse an event to hide its details.
:small_orange_diamond: Given a user has expanded an individual event,
:small_orange_diamond: When a user has clicked “minimize”
:small_orange_diamond:Then the event details will be hidden.

## :white_check_mark:FEATURE 3: SPECIFY NUMBER OF EVENTS

## :white_check_mark: User Story: As a user, I should be able to specify number of events I want to view so
that I can see more or fewer events in the events list.

Scenario 1: When user hasn’t specified a number, 32 is the default number.
:small_orange_diamond: Given a user is on the main page,
:small_orange_diamond: When the user hasn’t specified a number of events
:small_orange_diamond: Then the default amount, 32, events will be shown.

## :white_check_mark: Scenario 2: User can change the number of events they want to see.
:small_orange_diamond: Given a user is on the main page
:small_orange_diamond: When a user specifies the number of events
:small_orange_diamond: Then the specified number of events is displayed

## :white_check_mark:FEATURE 4: USE THE APP WHEN OFFLINE

## :white_check_mark:User Story: As a user, I should be able to use the app when offline so that I can see
events without an internet connection.

## :white_check_mark: Scenario 1: Show cached data when there’s no internet connection.
:small_orange_diamond: When the user opens the app
:small_orange_diamond:Then cached data shows events from previous session.

## :white_check_mark: Scenario 2: Show error when user changes the settings (city, time range).
:small_orange_diamond: Given a user is offline. 
:small_orange_diamond: When the user changes the settings
:small_orange_diamond: Then an error message is displayed

## :white_check_mark:FEATURE 5: DATA VISUALIZATION

## :white_check_mark:User Story: As a user, I should be able to see a visualization of events so that I know which are events are in which city.

## :white_check_mark:Scenario 1: Show a chart with the number of upcoming events in each city.
:small_orange_diamond: Given the main page is open
:small_orange_diamond: When the user wants to see the location of events
:small_orange_diamond: Then a chart showing the cities and the events happening in them is displayed