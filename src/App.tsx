import "./App.css";
import {
  // CopyrightSignature,
  MapContainer,
  Navigation,
  Panel,
  Title,
} from "./components";

function App() {
  return (
    <>
      <div className="slide">
        <div className="panel">
          <Title />
          <Navigation />
          <Panel />
        </div>
        <MapContainer />
      </div>
    </>
  );
}

export default App;
