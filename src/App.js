import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header'
import ResultsPage from './components/ResultsPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const queryClient = new QueryClient();


function App() {
  // API request
  // const getRepoIssues = async (repo) => {
  //   let issuesURL = `XXX`;
  //   const response = await fetch(issuesURL);
  //   const data = await response.json();
  //   setIssues(data);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="mx-auto max-w-screen-sm mt-4 py-5 px-32 bg-gradient-to-br from-indigo-400 to-cyan-700">
          <Header />
          <ResultsPage />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;


All Guides

How to fetch data from APIs using React Query?
API
•

Mon Apr 04 2022

•

3 min read

Ahmad Bilal
Ahmad Bilal

Share

Twitter
Facebook
LinkedIn
Today, more and more applications use APIs for one reason or another. React Query is a library that provides React hooks for fetching data from APIs.

React Query
React Query is a library of React Hooks intended to make data fetching better. It offers the following features:

Built-in caching of data for future use.

Refetching.

Request cancellation.

Detecting outdated (stale) data and updating it.

Prefetching and pagination etc.

React Query also supports queries and mutations for GraphQL APIs. It offers a custom hook, useQuery for managing these features.

Why does it matter?
The Fetch API and other libraries like Axios are enough for requesting data from APIs. However, they do not include features like caching or pagination. So, you have to implement these features manually, and this is where libraries like React Query come in. You can use it to implement complex features while keeping your code simple.

useQuery()
React Query provides useQuery for interacting with APIs. It is a custom React Hook that accepts two parameters. It looks like this:

JS
Copy
const {data, error, isLoading} = useQuery(key, fetcher);
Here key is anything that uniquely identifies the query, and fetcher is a function that will call the API using Fetch or any other library like Axios. data, error, and isLoading are properties returned by the hook. Here are all the available properties:

JS
Copy
const {
	data,
	error,
	failureCount,
	isError,
	isFetchedAfterMount,
	isFetching,
	isIdle,
	isLoading,
	isPreviousData,
	isStale,
	isSuccess,
	refetch,
	remove,
	status
} = useQuery(key, fetcher);
Usage
Let's talk a bit about how we can use it.

Install React Query
We can install React Query using the following command:

SH
Copy
npm install react-query
Import and Configure Provider
Before we can start using the hook, we need to import QueryClient and QueryClientProvider from react-query like this:

JS
Copy
import {QueryClient, QueryClientProvider} from 'react-query';
Then, we will initialize the client and wrap our application with the provider to make it globally available. For example:

JSX
Copy
// app.js
import {QueryClient, QueryClientProvider} from 'react-query';
// Initialze the client
const queryClient = new QueryClient();
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>....</Router>
		</QueryClientProvider>
	);
}
Using the Hook
Now we can fetch data by using the useQuery hook inside any component:

JSX
Copy
// Component.js
import {useQuery} from 'react-query';
We can call the hook inside the component like this:

JSX
Copy
import {useQuery} from 'react-query';
function Component() {
	// Fetcher function
	const getFacts = async () => {
		const res = await fetch('https://random-facts2.p.rapidapi.com/getfact');
		return res.json();
	};
	// Using the hook
	const {data, error, isLoading} = useQuery('randomFacts', getFacts);
}
Here randomFacts is the key, and getFacts is the async fetcher function that calls the API.

Finally, here is how we can display random facts from the Random Facts API on RapidAPI Hub inside the component.


// import {useQuery} from 'react-query';
// function Component() {
// 	// Fetcher function
// 	const getFacts = async () => {
// 		const res = await fetch('https://random-facts2.p.rapidapi.com/getfact');
// 		return res.json();
// 	};
// 	// Using the hook
// 	const {data, error, isLoading} = useQuery('randomFacts', getFacts);
// 	// Error and Loading states
// 	if (error) return <div>Request Failed</div>;
// 	if (isLoading) return <div>Loading...</div>;
// 	// Show the response if everything is fine
// 	return (
// 		<div>
// 			<h1>Random Fact:</h1>
// 			<p>{data.randomFact}</p>
// 		</div>
// 	);
// }