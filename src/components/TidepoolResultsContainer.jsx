import { useState, useEffect } from 'react';
import TidepoolResults from './TidepoolResults';

// Import search method
import search from '../utils/API';


const TidepoolResultContainer = () => {
  // Declare a new state variable, "results"
  const [results, setResults] = useState([]);

  // Method to get search results and set state
  const searchTidepools = async (query) => {
    const response = await search(query);
    setResults(response.data.data);
  };

  // Run this method when the component first loads for info to display?
  // Dependency array as 2nd argument so only runs when the component first loads
  useEffect(() => {
    searchTidepools('some stuff here');
  }, []);

  return (
    <div>
      {/* Pass our results to the TidepoolResults component to map over */}
      <TidepoolResults results={results} />
    </div>
  );
};

export default TidepoolResultContainer;