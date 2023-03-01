import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CityButtons from './components/CityButtons';
import CitySearch from './components/CitySearch';
import Header from './components/Header'


function App() {
  return (
    <div className="mx-auto max-w-screen-sm mt-4 py-5 px-32 bg-gradient-to-br from-indigo-400 to-cyan-700">
      <Header />
      <CityButtons />
      <CitySearch />
    </div>
  );
}

export default App;
