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

// Function to convert Unix timestamp to human-readable format
function convertTimestampToTime(timestamp) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}
