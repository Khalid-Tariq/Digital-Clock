# Digital Clock

This project is a simple digital clock that displays the current time, including hours, minutes, seconds, and AM/PM indicator. It's built using HTML, CSS, and JavaScript.

## Features

* Displays hours, minutes, and seconds in a clear and readable format.
* Includes an AM/PM indicator based on the 24-hour time format.
* Shows the current year in the copyright section.
* Uses a visually appealing design with customizable colors and background image.
## Technologies Used

* HTML: Structures the content of the webpage, including the clock display, copyright information, and stylesheet reference.
* CSS: Defines the visual appearance of the clock elements, including layout, colors, fonts, shadows, and responsiveness.
* JavaScript: Adds interactivity and functionality by continuously updating the time display and handling AM/PM logic.

## How it Works

### The JavaScript code (digitalClock.js) performs the following actions:

* Selects elements from the HTML document using getElementById for clock display elements (hours, minutes, seconds, AM/PM, copyright), enabling manipulation of their content.
* Defines a function secondUpdate that executes every second (1000 milliseconds) using setTimeout.
### Within secondUpdate:
* Creates a new Date object to access the current time.
* Updates the inner text of the hours, minutes, and seconds elements with the corresponding values from the Date object.
* Updates the copyright year by displaying the full year from the Date object using string interpolation.
### Implements AM/PM logic:
If the hours value is greater than 12, it subtracts 12 and changes the AM/PM indicator to "PM".
Otherwise, it keeps the original hour value and sets the AM/PM indicator to "AM".

## Additional Notes
This is a basic digital clock implementation. You can extend its functionality to include features like a date display, alarm functionality, or different clock face designs.
Consider adding comments within the code to improve readability and maintainability.
