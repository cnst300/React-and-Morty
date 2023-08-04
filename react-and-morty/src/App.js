import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import css from "./App.css";
import logo from "./logo.png";
//import { useCharacters, useLocations } from "./api/useData";

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./Pages/Characters";
import Location from "./Pages/Location";
import Episodes from "./Pages/Episodes";
import CardDetails from "./components/Cards/CardDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<CardDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CardDetails />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
        
      </Routes>
    </Router>
  );
}
const Home = ()=>{
  return (
    <div className="App">
    <div className="d-flex flex-column justify-content-center">
        <img className={css.img} src={logo} alt=''></img>
        <div className="top-left">The Rick and Morty API is a REST(ish) and GraphQL API based on the television show Rick and Morty. You will have access to about hundreds of characters, images, locations and episodes. The Rick and Morty API is filled with canonical information as seen on the TV show.</div>
    </div>
    </div>
  );

}

export default App;
