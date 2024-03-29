import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header'
import ResultsPage from './components/ResultsPage';
// TESTing github
// import { QueryClient, QueryClientProvider } from 'react-query';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


// const queryClient = new QueryClient();


function App() {
  console.log('APP');
  // API request
  // const getRepoIssues = async (repo) => {
  //   let issuesURL = `XXX`;
  //   const response = await fetch(issuesURL);
  //   const data = await response.json();
  //   setIssues(data);

  return (
    // <QueryClientProvider client={queryClient}>
      // <Router>
        <div className="mx-auto max-w-screen-sm mt-4 py-5 px-32 bg-gradient-to-br from-indigo-400 to-cyan-700">
          <Header />
          <ResultsPage />
        </div>
      // </Router>
    // </QueryClientProvider>
  );
}

export default App;

