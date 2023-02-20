import React,{useState} from 'react'

const Contact = () => {
  const [data,setData]=useState({
    fullname:'',phone:'',email:'',message:'',
  });
const formSubmit=(e)=>{
  e.preventDefault();
  alert(`My name: ${data.fullname} phone no:${data.phone} email :${data.email} message:${data.message}`)

}
const inputEvent=(e)=>{
  const {name,value}=e.target;
  setData((preVal)=>{
    return {
      ...preVal,[name]:value,
    }
  })
}



  return (

    <>
       <div className="my-5">
        <h1 className='text-center'>Contact US</h1>
       </div>

       <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <form  className="mb-3" onSubmit={formSubmit}>
          <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"name='fullname' value={data.fullname} onChange={inputEvent} placeholder="Enter Name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" name='phone' value={data.phone} onChange={inputEvent} placeholder=" Enter Phone number"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"  name='email' value={data.email} onChange={inputEvent} placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"name='message' value={data.message} onChange={inputEvent} placeholder='Enter your message Here!'></textarea>
</div>
<div className="col-12">
  <button className="btn-outline-primary btn" type='submit'>submit form</button>

</div>
</form>
          </div>
        </div>
       </div>



    </>
    
  )
}

export default Contact

