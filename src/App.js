import React from 'react';
import './App.css';
import ContactCard from "./part1"

function App() {
  return (
    <div className="App">
      <h1>Contact Cards</h1>
      <div class="card">
        <ContactCard name="Tatiana" number={"123-456-7890"} email="tat@fun.com" /></div>
      <div class="card">
        <ContactCard name="Sam" number={"987-654-3210"} email="sam@fun.com" /></div>
      <div class="card">
        <ContactCard name="mis" number={"911"} email="mis@gmail.com"/></div>
    </div>
  );
}

export default App;