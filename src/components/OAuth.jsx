import React from 'react'
import {FcGoogle} from "react-icons/fc"

const OAuth = () => {
  return (
    <button className='flex items-center gap-2 justify-center w-full bg-red-700 hover:bg-red-800 active:bg-red-900 transition-all shadow-md hover:shadow-lg rounded-lg text-white px-7 py-3 uppercase text-sm font-semibold'><FcGoogle className='text-2xl bg-white rounded-full '/>Continue with Google</button>
  )
}

export default OAuth