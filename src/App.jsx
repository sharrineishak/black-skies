import CrewList from "./pages/CrewList";
import { CrewProvider } from "./contexts/CrewContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";

function App() {
  return (
    <CrewProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="crew" element={<CrewList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CrewProvider>
  );
}

export default App;
