import "./App.css";
import pokeball from "./media/pokeball.png";

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <img src={pokeball} alt="pokeball" className="pokeball-icon" />
    </div>
  );
}

export default App;
