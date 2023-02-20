import React from 'react';
// Demonstration of useeffect hooks is presented here by swarup

const UseEffect=()=> {
    const initialData=0;
    const [myNum,setmyNum]=React.useState(initialData);
  React.useEffect(()=>{
    document.title=`chats(${myNum})`;
  });

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
    
   
    
    </div>
    </>
    )
}

export default UseEffect;