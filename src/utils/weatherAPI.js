import axios from 'axios';
require('dotenv').config();

const options = {
  method: 'GET',
  url: 'https://noaa-tides.p.rapidapi.com/stations/9411340/tides',
  params: {date: '20220625'},
  headers: {
    'X-RapidAPI-Key': process.env.TIDE_APIKEY,
    'X-RapidAPI-Host': 'noaa-tides.p.rapidapi.com'
  }
};

const weatherAPI = (query) =>
axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

// Export an object with a "search" method that searches the Giphy API for the passed query
export default weatherAPI;




