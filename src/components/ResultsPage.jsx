import React from 'react';
import CityButtons from './CityButtons';
import CitySearch from './CitySearch';
import TidepoolResultContainer from './TidepoolResultsContainer';

function ResultsPage(props) {
  return (
   <div>
    <CityButtons />
    <CitySearch />
    <TidepoolResultContainer />
   </div>
  );
}

export default ResultsPage;
