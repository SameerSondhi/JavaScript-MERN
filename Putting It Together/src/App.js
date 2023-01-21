import './App.css';
import React from 'react';
import PersonCard from './components/PersonCardComponent';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <PersonCard firstName = "John" lastName="Doe" age = {45} hairColor="Brown"/><hr></hr>
      <PersonCard firstName = "Ronald" lastName="McDonald" age = {56} hairColor="Black"/><hr></hr>
      <PersonCard firstName = "John" lastName="Wick" age = {35} hairColor="Brown" /><hr></hr>
      <PersonCard firstName = "Tony" lastName="Stark" age = {32} hairColor="Black" /><hr></hr>
    </div>
  );
}

export default App;
