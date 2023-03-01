import './App.css';
import CityButtons from './components/CityButtons';
import CitySearch from './components/CitySearch';


function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-indigo-400 to-cyan-700">
      <CityButtons />
      <CitySearch />
    </div>
  );
}

export default App;
