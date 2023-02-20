import React from 'react'
import { useEffect } from 'react';

const Weathercard = ( {tempInfo}) => {


    const [weatherState,setweatherState]=React.useState('');
    const {
        temp,humidity,pressure,weathermood,name,speed,country,sunset,
      }=tempInfo;
      
React.useEffect((weathermood)=>{
    if(weathermood){
        switch(weathermood){
            case 'Clouds': setweatherState('wi-day-cloudy');
                break;
            case 'Haze': setweatherState('wi-fog');
                break;
            case "Mist":setweatherState("wi-dust");
                 break;
            case 'Clear': setweatherState('wi-day-sunny');
                break;
            default:setweatherState('wi-day-sunny');
                break;
        }
    }
},[weathermood]);
   
let secs=sunset;
      let date=new Date(secs*1000);
      let timeStr=`${date.getHours()}:${date.getMinutes()}`;

  return (
    <>

<article className='widget'>
    <div className="weatherIcon">
        <i className={`wi ${setweatherState}`}></i>
    </div>
    <div className="weatherInfo">
        <div className="temperature">
            <span>{temp}&deg;</span>
        </div>
        <div className="description">
            <div className="weatherCondition">
                {weathermood}
            </div>
            <div className="place"> {name}, {country}</div>
        </div>
    </div>
    <div className="date">{new Date().toLocaleString()}
    </div>
    <div className="extra-temp">
        <div className="temp-info-minmax">
            <div className="two-sided-section">
                <p><i className={'wi wi-sunset'}></i></p>
                <p className="extra-info-leftside">{timeStr} PM <br /> sunset</p>
            </div>
            <div className="two-sided-section">
                <p><i className={'wi wi-humidity'}></i></p>
                <p className="extra-info-leftside"> {humidity}  <br /> humidity</p>
            </div>           
        </div>
        <div className="weather-extra-info">
        <div className="two-sided-section">
                <p><i className={'wi wi-rain'}></i></p>
                <p className="extra-info-leftside">{pressure}  <br />  pressure</p>
            </div>
            <div className="two-sided-section">
                <p><i className={'wi wi-strong-wind'}></i></p>
                <p className="extra-info-leftside">{speed} <br /> speed</p>
            </div>
       </div>
            </div>
   </article>

    
    </>
  )
}

export default Weathercard;