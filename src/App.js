
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React, { useState } from 'react'

import Footer from './components/Footer';


function App() {
  const [mode, setMode] = useState('light')
  
  


 
  
 const toggleMode=()=>{
   if (mode==='light') {
     setMode('dark')
     document.body.style.backgroundColor="black"
     
    
     
   }else{
     setMode('light')
     document.body.style.backgroundColor="white"
   
   }
  
     
    
   }
 
  

  
  return (
   <div>
     <Navbar title="Texttool" mode={mode} toggleMode={toggleMode}/>
     
     

     <Form style={{color:"red"}} heading="TEXTtool...." mode={mode}/>
     <Footer/>
     
    
     
    </div>
  );
}

export default App;
