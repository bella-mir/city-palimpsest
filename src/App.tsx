import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MapContainer, Navigation, Panel, Title } from "./components";
import { FormPage } from "./components/form";

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
      <Route path="/city-palimpsest/feedback" element={<FormPage />} />
    </Routes>
  );
}

export default App;
