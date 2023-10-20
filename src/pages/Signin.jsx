import { useState } from 'react';
import login from '/assets/img/login.avif';
const Signin = () => {
  const [formData,setFormData]=useState({
    email:"",
    password:"",
  })
  const{email,password} = formData

  const changeHandle = (e)=>{
    console.log(e.target.value);
    setFormData((prev)=>({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }
  return (
    <div className="mt-10">
      <div className="container">
        <div className="sign-wrap">
          <h2 className="text-3xl text-center font-bold mb-16">Sign In</h2>
          <div className="sign-in-wrap grid grid-cols-2 gap-7">
            <div>
              <img src={login} className='w-full' alt="" />
            </div>
            <div>
             <form action="">
              <input type="email" id='email' placeholder='input email' value={email} onChange={changeHandle} />
              <input type="password" placeholder='input password' value={password} />
             </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin