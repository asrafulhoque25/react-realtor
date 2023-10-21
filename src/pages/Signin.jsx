import { useState } from 'react';
import login from '/assets/img/login.avif';
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
const Signin = () => {

  // catch the input value
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

  //password hide and show

const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="mt-10">
      <div className="container">
        <div className="sign-wrap">
          <h2 className="text-3xl text-center font-bold mb-16">Sign In</h2>
          <div className="sign-in-wrap grid grid-cols-2 items-center gap-12">
            <div>
              <img src={login} className='w-full' alt="" />
            </div>
            <div>
             <form action="">
              <input type="email" id='email' placeholder='input email' value={email} onChange={changeHandle}  className='w-full h-12 border block px-4 py-1 text-xl mb-3'/>
              <div className='relative'>
              <input type={showPassword ? "text" : "password"} id='password' placeholder='input password' value={password} onChange={changeHandle}  className='w-full h-12 border text-xl block px-4 py-1 mb-3'/>
               {showPassword ? (<AiFillEyeInvisible className="absolute right-4 top-5 text-xl cursor pointer" onClick={()=>setShowPassword((prev=>!prev))}/>) : <AiFillEye className="absolute right-4 top-5 text-xl- cursor pointer" onClick={()=>setShowPassword((prev=>!prev))} />}
              </div>

              <div className='flex items-center gap-5 justify-between my-5'>
              <div className='flex items-center gap-2'>
                <p className='text-xl text-black'>Don't have an account?</p>
                <Link to={"/signup"} className='text-red-500 text-xl'>Register</Link>
              </div>
              <Link to={"/forget-password"} className=' text-xl text-blue-600'>Forget Password?</Link>
            </div>
            <button type='submit' className=' bg-blue-500 hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:bg-blue-800 text-sm text-white py-3 w-full rounded-lg text-center uppercase font-semibold'>Sign In</button>
             <div className='my-4 items-center flex before:border-t before:flex-1 before:border-gray-300  
             after:border-t after:flex-1 after:border-gray-300'>
              <p className='text-center font-semibold mx-4'>OR</p>
             </div>
             <OAuth />
             </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin