import React from 'react';
import './style.css';

//to manipulate a number
const UseState=()=> {
    const initialData=10;
    const [myNum,setmyNum]=React.useState(initialData);
  return (
    <>
    <div className="center-div">
    <p>{myNum}</p>    
    <div class="button2" onClick={()=>setmyNum(myNum+1)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
       INCR
    </div>  
    <div class="button2" onClick={()=> myNum>0?setmyNum(myNum-1):0}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
       DECR
    </div>   
    </div>   
    </> )
}

export default UseState;