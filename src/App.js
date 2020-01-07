import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Service from './Components/Service';
import BrandLogo from './Components/BrandLogo';
import Platforme from './Components/Platforme';
import Offices from './Components/Offices';
import Footer from './Components/Footer'


const tabNav=[{title:'About us',
link:'#',
active:true
},
{title:'Career',
link:'#',
active:false
},
{title:'Departments',
link:'#',
active:false
},

];
const TabPlatform=[
{
title :"The world's biggest healthcare platform",
parag:'We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.',
img :'https://www.docplanner.com/img/logo.png'

}
]


function App() {
  return (
    <div className="App"> 
    <div className="Nav-header">
      <div className="Navbar">
      <h1>
			<a href="/">
				<img class="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"></img>
			</a>
		</h1>
      <ul className="link-header">{tabNav.map(elm=><NavBar item={elm}/>)} </ul>
    </div>
    </div>
      
    <Header/>
    
    <Service/>
    <BrandLogo/>
    {TabPlatform.map(el=><Platforme element={el}/> )}
    <Offices/>
    <Footer/>
  </div>
   
   
  );
}

export default App;
