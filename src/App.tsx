import "./App.css";
import {
  // CopyrightSignature,
  MapContainer,
  Panel,
  Title,
} from "./components";

function App() {
  return (
    <>
      <div className="slide">
        <div className="panel">
          <Title />
          <Panel />
        </div>
        <MapContainer />
      </div>
    </>
  );
}

export default App;
