import logo from './logo.svg';
import './App.css';
import Datafetch from './Datafetch.js';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Datafetch />
      <p> 
        Thank you!
      </p>
    </div>
  );
}

export default App;
