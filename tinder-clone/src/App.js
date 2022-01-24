
import './App.css';
import Header from "./Header"
import TinderCards from './TinderCards';
import SwipeBottons from './SwipeButtons';

function App() {
  return (
    <div className="app">

      <Header/>
      <TinderCards></TinderCards>
      <SwipeBottons/>
    </div>
  );
}

export default App;
