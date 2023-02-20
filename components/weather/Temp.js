import React ,{useEffect}  from 'react';
import { useState } from 'react';
import Weathercard from './Weathercard.js';
import './style.css';

const Temp = () => {
   
    const [searchValue,setSearchValue]=React.useState('pune');
    const [tempInfo,setTempInfo]=useState({});
    const getWeather=async()=>{
        try{
            
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=4e92f38e5da9aa934017303d908c0573`;

      const res= await fetch(url);
      const data=await res.join();
     
      const {temp,humidity,pressure}=data.main;
      const {main:weathermood}=data.weather[0];
      const {name}=data;
      const {speed}=data.wind;
      const {country,sunset}=data.sys;
      const myNewWeatherInfo={
        temp,humidity,pressure,weathermood,name,speed,country,sunset,
      };

       setTempInfo(myNewWeatherInfo);


        }catch(err){
            console.log(err);
        }
    };
useEffect(()=>{
    getWeather();

},[]);
  return (
   <>
   <div className="wrap">
    <div className="search">
        <input type="search" autoFocus  placeholder='search..' id='search' className='searchTerm'  value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
        <button className='searchButton' type='button' onClick={getWeather()}>search</button>
        
    </div>
   </div>

  
    <Weathercard  tempInfo={tempInfo}/>
   </>
  )
}

export default Temp;