import "./App.css";
import { Main, MapContainer } from "./components";

function App() {
  return (
    <>
      <div className="slide">
        <Main />
      </div>
      <div className="slide">
        <MapContainer />
      </div>
    </>
  );
}

export default App;
