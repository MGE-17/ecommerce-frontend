import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element ={<Shop}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
