// EXAMPLE 1 - Subtract Days from a Date in JavaScript

function subtractDays(date, days) {
  date.setDate(date.getDate() - days);

  return date;
}

// ✅ Subtract 1 day from the current Date
const result1 = subtractDays(new Date(), 1);
console.log(result1); // 👉️ 2023-07-28T03:30:37.511Z

// ✅ Subtract 2 days from a different date
const date = new Date('2024-03-18T06:30:10.000Z');
const result2 = subtractDays(date, 2);
console.log(result2); // 👉️ 2024-03-16T06:30:10.000Z

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get a date of X days and reset it to Midnight

// function getDateXDaysAgo(numOfDays, date = new Date()) {
//   const daysAgo = new Date(date.getTime());

//   daysAgo.setDate(date.getDate() - numOfDays);

//   daysAgo.setHours(0, 0, 0, 0);

//   return daysAgo;
// }

// const date = new Date('2022-01-17');

// // 👇️ Fri Dec 31 2021 00:00:00
// console.log(getDateXDaysAgo(17, date));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Subtract Days from a Date without mutation

// function subtractDays(date, days) {
//   const dateCopy = new Date(date);

//   dateCopy.setDate(dateCopy.getDate() - days);

//   return dateCopy;
// }

// const date = new Date('2024-03-18T06:30:10.000Z');

// const result = subtractDays(date, 6);
// console.log(result); // 👉️ 2024-03-12T06:30:10.000Z

// console.log(date); // 👉️ 2024-03-18T06:30:10.000Z

// ------------------------------------------------------------------

// // EXAMPLE 4 - Subtract Days from a Date using date-fns

// import {subDays} from 'date-fns';

// const date = new Date('2024-03-18T06:30:10.000Z');

// const result1 = subDays(date, 6);
// console.log(result1); // 👉️ 2024-03-12T06:30:10.000Z

// const result2 = subDays(date, 10);
// console.log(result2); // 👉️ 2024-03-08T06:30:10.000Z

// console.log(date); // 👉️ 2024-03-18T06:30:10.000Z

// ------------------------------------------------------------------

// // EXAMPLE 5 - Subtract Days from a Date using moment.js

// import moment from 'moment';

// const date = new Date('2024-03-18T06:30:10.000Z');

// const result1 = moment(date).subtract(6, 'days');
// console.log(result1); // 👉️ 2024-03-12T06:30:10.000Z

// const result2 = moment(date).subtract(10, 'days');
// console.log(result2); // 👉️ 2024-03-08T06:30:10.000Z

// console.log(date); // 👉️ 2024-03-18T06:30:10.000Z
