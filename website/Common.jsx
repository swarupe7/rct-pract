import React from 'react';
import { NavLink } from 'react-router-dom';
//import web from './tut/src/pic3.jpg';
//D:\nodeex\basic\react\tut\src\website\images\2.png
var img=require('./images/2.png');

const Common = (props) => {
  return (
    <>
       <section id="header" className='d-flex  align-items-center'>
       <div className="container-fluid nav _bg ">
       <div className="row">
    <div className="col-10 mx-auto">
      <div className="row">
         <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <h1>{props.name} </h1>

            <h2 className="my-3">
             {props.info}
            </h2>
            <div className="mt-3">
                 <NavLink  to={props.visit} className='btn-get-started'>{props.btname}</NavLink> 
            </div>

         </div>
         <div className="collg-6 order-1 order-lg-2 header-img">
            <img src={props.imgsrc} alt="image" className='img-fluid animated' />
         </div>
         </div>


        </div>
        </div>
        </div>
       </section>

    </>
  )
}

export default Common