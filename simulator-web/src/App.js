import logo from './logo.svg';
import './App.css';
import Resistence from './components/basics/Resistence';

function App() {
  return (
    <div className="App">
      <Resistence initValue={200}/>
      <Resistence initValue={1000}/>
      <Resistence initValue={3224}/>
    </div>
  );
}

export default App;
