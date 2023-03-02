import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Kyiv" />
      <div className="app-footer">
        <a
          className="link-code"
          href="https://github.com/bohdanalu/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        <span>by Bohdana Lutska</span>
      </div>
    </div>
  );
}

export default App;
