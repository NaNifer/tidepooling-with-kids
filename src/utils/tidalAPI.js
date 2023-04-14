import axios from 'axios';
// require('dotenv').config();
// import {useQuery} from 'react-query';



const tidalAPI = (options) =>
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

// Export an object with a "search" method that searches the Giphy API for the passed query
export default tidalAPI;
