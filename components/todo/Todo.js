import React,{useState,useEffect} from 'react';
import './style1.css';

const getLocalData=()=>{
    const lists=localStorage.getItem('mytodo');
    if(lists){
        return JSON.parse(lists);
    }else{
        return [];
    }
}


const Todo = () => {
const [inputData,setInputData]=useState('');
const [items,setItems]=useState(getLocalData());
const [isEditedItem,setisEditedItem]=useState('');
const [toggleBtn,setToggleBtn]=useState(false);

const addItem=()=>{
if(!inputData){
    alert('filldata bro!')
}else if(inputData && toggleBtn){
setItems(items.map((curElem)=>{
    if(curElem.id===isEditedItem){
        return {...curElem,name:inputData};
    }
    return curElem;

}))
setInputData('');
setisEditedItem(null);
setToggleBtn(false);

}
else{
    const myNewInputData={
        id:new Date().getTime().toString(),
        name:inputData

    }
    setItems([...items,myNewInputData]);
    console.log(inputData);
    setInputData('');
}
}

const editItem=(index)=>{
   const edited= items.find((curElem)=>{
    return curElem.id===index;

   })
   setInputData(edited.name);
   setisEditedItem(index);
   setToggleBtn(true);


}

const deleteItem=(id)=>{
    const updateList=items.filter((curElem)=>{
        return curElem.id !==id;
    })

    setItems(updateList);


}

const removeAll=()=>{
    setItems([]);
}


useEffect(()=>{
  localStorage.setItem("mytodo",JSON.stringify(items));
},[items]);


  return (
    <>
    <div className='main-div'>
        <div className="child-div">
            
                <figure>
                
                <figcaption>TODO LIST</figcaption>
               
                <figcaption>Add Your Items Here</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder='add items' className='form-control' value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
                    {toggleBtn? (<button className='far edit-btn' onClick={addItem}>edit</button>):  <button className='fas add-btn' onClick={addItem}>add</button>}
                  
                    
                    
                </div>
                <div className="showItems">

                 {
                    items.map((curElem,index)=>{
                        return (
                            <div className="eachItem"  key={index}>
                            <h3>{curElem.name}</h3>
                            <div className='todo-btn'>
                            <button className='far fa-edit add-btn' onClick={()=>editItem(curElem.id)}>edit</button>
                            <button className='far fa-trash-alt add-btn' onClick={()=>deleteItem(curElem.id)}>delete</button>
                            </div>
                        </div>
                    
                        )
                    })
                 } 
                 </div>  


                    
                <div className="showItems"><button className='btn effect04' data-sm-link-text='Remove all' onClick={removeAll}>  <span>check List</span> </button></div>
               
            
        </div>

    </div>
    </>
  )
}

export default Todo