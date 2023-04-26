// // Function to validate input-- when user enters in city, changes to uppercase, calls on getLongLat()
// function validateInput(event) {
//     if (event) {
//       event.preventDefault();
//     }
//     const city = document.getElementById('city').value.toUpperCase();
//     if (city === "") {
//       alert("Please enter a city.");
//       return false;
//     }
//     getLongLat(city);
//     document.getElementById("form").reset();
//   }
  


//   // Inputs user's city into geocode API to get long & lat, sends it to API call getWeather()
//   function getLongLat(city) {
//     const requestGeo = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${DIRECT_APIKEY}`;
  
//     fetch(requestGeo)
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         }
//       })
//       .then(function (data) {
//         if (data.length === 0) {
//           showError();
//           return;
//         }
//         getWeather(city, data);
//       })
//   }
  
//   // Error message for improper user entry
//   function showError() {
//     alert("Not a valid city, please try again.")
//   }
  
  
//   // Gets weather data and send city & data to displayCurrentWeather()
//   function getWeather(city, data) {
//     const lat = data[0].lat;
//     const long = data[0].lon;
//     const requestUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&units=imperial&appid=${ONECALL_APIKEY}`;
  
//     fetch(requestUrl)
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         }
//       })
//       .then(function (data) {
//         // TO DO: Create forcast weather elements, adds data and date
//         // TO DO: Display current weather from data array sent
//       })
//   }
  