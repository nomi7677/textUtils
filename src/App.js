import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  
const toggleMode= ()=>{
  if (mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
  }else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }
  
} 

  return (
   <>
   <Router>
  <Navbar title="TextUtils" mode={mode} aboutText="About_TextUtils" toggleMode={toggleMode}/> 
  {/* <Navbar /> */}

  <div className="container my-3">

  <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route path="/" exact>
          <TextForm heading="Enter the text to analyze" mode={mode}/>
          </Route>
  </Switch>
  </div>
</Router>

  </>
  );
}

export default App;
