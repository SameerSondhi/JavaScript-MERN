import React from "react";
import {Routes, Route} from "react-router-dom";
import People from './components/People'
import Planets from './components/Planets'
import LukeAPI from "./components/LukeAPI";
import Error from "./components/Error";


function App() {
  return (
    <div className="App">
      <LukeAPI/>
      <Routes>
        <Route path="/people/:id" element={<People/>}/>
        <Route path="/planets/:id" element={<Planets/>}/>
        <Route path="/error" element={<Error/>}/>
        </Routes>
    </div>

  );
}

export default App;
