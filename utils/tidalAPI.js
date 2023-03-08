// Axios is a popular NPM package used for preforming API requests
import axios from 'axios';

// Using axios, we create a search method that is specific to our use case and export it at the bottom
const tidalAPI = (query) =>
  axios.get(`https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=today&station=9414290&product=water_level&datum=MLLW&time_zone=gmt&units=english&application=DataAPI_Sample&format=xml`);

// Export an object with a "search" method that searches the Giphy API for the passed query
export default tidalAPI;
