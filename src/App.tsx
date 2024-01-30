import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MapContainer, Navigation, Panel, Title } from "./components";

function App() {
  return (
    <Routes>
      <Route
        path="/city-palimpsest/"
        element={
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
        }
      />
    </Routes>
  );
}

export default App;
