import React from 'react'


//    Demonstration of Usereducer hooks

const reducer=(state,action)=>{
    if(action.type==='INCR'){
        state=state+1;
    }
    if(action.type==="DECR"){
        if(state>0){
            state=state-1;
        }else{
            state=0;
        }
    }
    return  state;
};

const UseReducer = () => {
    //const initialData=10;
    //const [myNum,setmyNum]=React.useState(initialData);


    const initialData=0;
    const [state,dispatch]=React.useReducer(reducer,initialData);

  return (
    <>
    <div className="center-div">
    <p>{state}</p>    
    <div class="button2" onClick={()=>dispatch({type:"INCR"})}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
       INCR
    </div>  
    <div class="button2" onClick={()=>dispatch({type:"DECR"})}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
       DECR
    </div>   
    </div>   
    </> )
}

export default UseReducer;