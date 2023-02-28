import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';


function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-indigo-400 to-cyan-700">
      <TopButtons />
      <Inputs />
    </div>
  );
}

export default App;
