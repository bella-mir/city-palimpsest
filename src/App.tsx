import "./App.css";
import {
  // CopyrightSignature,
  MapContainer,
  Title,
} from "./components";

function App() {
  return (
    <>
      {/* <div className="slide">
        <Main />
      </div> */}
      <div className="slide">
        <div className="panel">
          <Title />
        </div>

        <MapContainer />
        {/* <CopyrightSignature /> */}
      </div>
    </>
  );
}

export default App;
