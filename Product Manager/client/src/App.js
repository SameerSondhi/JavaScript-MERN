import React from 'react';
import Display from './components/Display';
import Create from './components/Create';
import Details from './components/Details'
import Update from './components/Update'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Routes, Route } from 'react-router-dom';

const Homepage = () => (
  <div>
    <h1>Product Manager</h1>
    <Create/>
    <Display/>
  </div>
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element ={<Homepage/>}>
          <Route path="/" element={<Create />} />
          <Route path="/" element={<Display />} />
      </Route>
          <Route path="/details/:id" element={<Details />}/>
          <Route path="/update/:id" element={<Update />}/>
      </Routes>
    </div>
  );
}
export default App;


