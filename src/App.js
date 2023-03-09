import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header'
import ResultsPage from './components/ResultsPage';


function App() {
  return (
    <div className="mx-auto max-w-screen-sm mt-4 py-5 px-32 bg-gradient-to-br from-indigo-400 to-cyan-700">
      <Header />
      <ResultsPage />
    </div>
  );
}

export default App;
