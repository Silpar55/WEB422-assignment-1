/**************************
*
•⁠  ⁠WEB422 – Assignment 1
•⁠  ⁠I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
•⁠  ⁠No part of this assignment has been copied manually or electronically from any other source
•⁠  ⁠(including web sites) or distributed to other students.
* 
•⁠  ⁠Name: Alejandro Student ID: 142655224 Date: 2024-05-28
*
**************************
**/
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function metersPerSecondToMilesPerHour(mps) {
  return mps * 2.23694;
}

function milesPerHourToMetersPerSecond(mph) {
  return mph * 0.44704;
}

// Function to convert Unix timestamp to human-readable format considering timezone offset
function convertTimestampToTime(timestamp, timezoneOffset) {
  const date = new Date((timestamp + timezoneOffset) * 1000); // Adjust timestamp with timezone offset
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}
