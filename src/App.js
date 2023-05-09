import Loader from "./Components/Loader/Loader";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Loader fadeOutInterval={5000} />
      <div>hello</div>
    </div>
  );
}

export default App;
