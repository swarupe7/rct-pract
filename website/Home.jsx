import React from 'react';
import Common from './Common';
import { NavLink } from 'react-router-dom';
//import web from './tut/src/pic3.jpg';
//D:\nodeex\basic\react\tut\src\website\images\2.png
var img=require('./images/pic1.png');


const Home = () => {
  return (
    <>
     
   <Common  name='Welcome to Our  Home page' info='click here to get our list of services' imgsrc={img} visit='/service' btname='Our Services'/>

    </>
  )
}

export default Home