import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';
//import web from './tut/src/pic3.jpg';
//D:\nodeex\basic\react\tut\src\website\images\2.png
var img=require('./images/2.png');


const About = () => {
  return (
    <>
    <Common  name='Welcome to Our  About page' info='click here to contact us' imgsrc={img} visit='/contact' btname='Contact Now' />

    </>
  )
}

export default About