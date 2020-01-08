import React from 'react';
import './App.css';
import NavBar from "./NavBar";

function App() {
  const tab =[
  {
    title : 'Home',
    link :'#' ,
    active : true 
  },
  {
    title : 'Services',
    link :'#' ,
    active : false ,
    submenu :['For entrepreneurs','for students','for hobbyists']
  },
  {
    title : 'Contact',
    link :'#' ,
    active : true 
  }

  ]
  return (
    <div className="App">
    <NavBar array={tab}/>
    </div>
  );
}

export default App;
