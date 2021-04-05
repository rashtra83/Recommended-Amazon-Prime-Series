import React from 'react';
import './App.css';
import Heading from './Heading';
import Component from './Componext';
import SData from './SData';

function App() {
  return (
    <>
        <Heading/>

        {SData.map((val) => {
          return (
          <Component 
            imgsrc= {val.imgscr} 
            sname={val.sname} 
            link ={val.links}
            />)
        })}


    </>
  )
}
export default App;
