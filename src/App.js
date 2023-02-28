import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Weather defaultCity="Kyiv" />
      <a
        href="https://github.com/bohdanalu/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>
      <span>by Bohdana Lutska</span>
    </div>
  );
}

export default App;
