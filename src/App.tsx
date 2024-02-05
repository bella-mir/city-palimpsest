import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AdminPage, MainPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route
        path="/city-palimpsest/"
        element={
          <>
            <MainPage />
          </>
        }
      />
      <Route
        path="/city-palimpsest/admin/"
        element={
          <>
            <AdminPage />
          </>
        }
      />
    </Routes>
  );
}

export default App;
