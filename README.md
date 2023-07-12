## Holiday Checker

This JavaScript code provides functionality to determine if a given date corresponds to a holiday. It supports both static holidays (such as Christmas and New Year's Day) and dynamic holidays (such as Memorial Day and Labor Day) that depend on specific occurrences and weekdays.

### Code Overview

The code is structured as follows:

- The `getDate()` function retrieves the current date in the format "MM/DD/YYYY" and returns it as a string.

- Constants are defined for days of the week, months, and occurrences.

- The `CUSTOM_DATES` object stores static holidays, mapping the holiday name to the corresponding month and day.

- The `HOLIDAYS` object stores dynamic holidays, mapping the holiday name to an array representing the occurrence, weekday, and month of the holiday.

- Several helper functions (`getMonthAWeekFromDate()`, `isDate()`, `isDay()`, `getRegisteredOccurrence()`, `getRegisteredDate()`, `Easter()`, and `padout()`) are used to perform various calculations and comparisons related to dates and holidays.

- The `checkHoliday()` function is the main function that determines if a provided date is a holiday. It checks for Easter, dynamic holiday occurrences, and static holidays. If no holiday is found, it returns 0.

### Usage

To use the holiday checker:

1. Include the provided JavaScript code in your project.

2. Call the `checkHoliday(date)` function, passing a date object as the `date` parameter.

3. The function will return the name of the holiday corresponding to the given date, or 0 if it is not a holiday.

### Example

```javascript
const currentDate = getDate();
const holiday = checkHoliday(currentDate);
console.log(holiday);
```

This will retrieve the current date, check if it corresponds to a holiday, and log the holiday name or 0 to the console.

Feel free to integrate this code into your project to check for holidays based on specific dates or dynamic occurrences throughout the year.

*Note: Please make sure to adapt and customize the code to suit your specific requirements and date formats.*
