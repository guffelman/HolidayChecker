// HolidayChecker 
// Garrett Uffelman

function getDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  return today;
}

const DAYS_IN_WEEK = 7;
const SUN = 1, MON = 2, TUE = 3, WED = 4, THU = 5, FRI = 6, SAT = 7;
const JAN = 1, FEB = 2, MAR = 3, APR = 4, MAY = 5, JUN = 6, JUL = 7, AUG = 8, SEP = 9, OCT = 10, NOV = 11, DEC = 12;
const FIRST = 1, SECOND = 2, THIRD = 3, FOURTH = 4, LAST = -1;

// STATIC HOLIDAYS, like CHRISTMAS, NEW YEARS.
const CUSTOM_DATES = {
  "Independence Day": [JUL, 4],
  "Christmas": [DEC, 25],
  "New Year's Eve": [DEC, 31],
  "Christmas Eve": [DEC, 24],
  "Day After Christmas": [DEC, 26],
  "Spring Holiday": [APR, 7],
  "Test": [MAY, 17],
};

// DYNAMIC HOLIDAYS, like MLK, Presidents Day, etc.
const HOLIDAYS = {
  "New Year's Day": [FIRST, MON, JAN],
  "Memorial Day": [LAST, MON, MAY],
  "Labor Day": [FIRST, MON, SEP],
  "Thanksgiving Day": [LAST, THU, NOV],
  "Presidents Day": [THIRD, MON, FEB],
};

function getMonthAWeekFromDate(date) {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + DAYS_IN_WEEK);
  return newDate.getMonth() + 1;
}

function isDate(date, month, day) {
  date = new Date(date);
  return date.getMonth() === month - 1 && date.getDate() === day;
}

function isDay(date, occurrence, weekDay, month) {
  date = new Date(date);
  if (date.getMonth() !== month - 1 || date.getDay() !== weekDay - 1)
    return false;

  if (occurrence === Math.ceil(date.getDate() / DAYS_IN_WEEK))
    return true;

  if (occurrence !== LAST)
    return false;

  return month !== getMonthAWeekFromDate(date);
}

function getRegisteredOccurrence(date) {
  date = new Date(date);
  const results = Object.keys(HOLIDAYS).filter(function (val) {
    const occurrence = HOLIDAYS[val][0];
    const weekDay = HOLIDAYS[val][1];
    const month = HOLIDAYS[val][2];

    return isDay(date, occurrence, weekDay, month);
  });

  return results[0] || null;
}

function getRegisteredDate(date) {
  const results = Object.keys(CUSTOM_DATES).filter(function (val) {
    const month = CUSTOM_DATES[val][0];
    const day = CUSTOM_DATES[val][1];

    return isDate(date, month, day);
  });

  return results[0] || null;
}

function Easter(Y) {
  const C = Math.floor(Y / 100);
  const N = Y - 19 * Math.floor(Y / 19);
  const K = Math.floor((C - 17) / 25);
  let I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15;
  I = I - 30 * Math.floor(I / 30);
  I = I - Math.floor(I / 28) * (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - N) / 11));
  let J = Y + Math.floor(Y / 4) + I + 2 - C + Math.floor(C / 4);
  J = J - 7 * Math.floor(J / 7);
  const L = I - J;
  let M = 3 + Math.floor((L + 40) / 44);
  let D = L + 28 - 31 * Math.floor(M / 4);

  M = padout(M);
  D = padout(D);

  return M + "." + D;
}

function padout(number) {
  return number < 10 ? "0" + number : number;
}

// Main function to check the holiday
function checkHoliday(date) {
  const today = new Date();
  const year = today.getFullYear();
  const mm = padout(today.getMonth() + 1);
  const dd = padout(today.getDate());
  const formattedToday = mm + "." + dd;

  if (Easter(year) === formattedToday) {
    return "Easter";
  }

  let holiday = getRegisteredOccurrence(date);
  if (holiday !== null) {
    return holiday;
  }

  holiday = getRegisteredDate(date);
  if (holiday !== null) {
    return holiday;
  }

  return 0;
}

const currentDate = getDate();
const holiday = checkHoliday(currentDate);
console.log(holiday);
