import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// React icons imports
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import axios from 'axios'
const Login = () => {
  const [show,setShow] = useState(false)
  const [details,setDetails] = useState({email:'',password: ''})
  const [error,setError] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(details)
    const login = await axios.post('/users/login',details,{withCredentials:true})
  }
  const togglePasswordVisibility = () => {
    setShow((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className='h-screen w-screen flex justify-center items-center '>
      <div className='bg-gray-50 rounded-lg w-4/5 h-[80vh] mx-auto my-5 shadow-lg grid grid-cols-12'>
        <div className='col-span-6 bg-pink-600 text-white p-12 h-full hidden sm:flex flex-col justify-center items-center'>
        {/* <img src={Logo} alt='logo' className='h-1/2' /> */}
        <p className='text-xl font-medium'>Login to Vastra<span className='text-pink-200'>Agaya</span></p>
        </div>
        <div className='sm:col-span-6 col-span-12 flex-col my-auto px-10 justify-center items-center'>
        <h3 className="text-5xl font-bold text-gray-800 pb-5 text-center">
          Sign in
        </h3>
          <form className='space-y-4 p' onSubmit={handleSubmit}>
            <label htmlFor='Email'>Email: </label>
            <input type='email' id='Email' placeholder='suresh@example.com' value={details.email} onChange={(e) => setDetails({...details, email: e.target.value})} className='border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-gray-500' />
            
            <label htmlFor='password'>Password: </label>
            <div className='relative'>
            <input type={show ? "text" : "password"} placeholder='Enter your password' id='password' value={details.password} onChange={(e) => setDetails({...details, password: e.target.value})} className='border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-gray-500' /> 
            <button type="button" className="absolute top-0 right-0 p-2" onClick={togglePasswordVisibility}>
              {show ?  <IconContext.Provider value={{  size: "27px" }}>
                <BiSolidHide />
              </IconContext.Provider> : <IconContext.Provider value={{  size: "27px" }}>
                <BiSolidShow />
              </IconContext.Provider>}
            </button>
            </div>
            <div className="sm:flex justify-between items-center">
                <div className='flex flex-col gap-2 sm:gap-4'>
                <Link to="/" className="text-blue-600 hover:text-blue-400">
              Forgot password?
            </Link>
            <Link to="/register" className="text-blue-600 hover:text-blue-400">
            Don't have an account? Sign up
          </Link>
                </div>
            <button
              className="bg-red-800 mt-10 sm:mt-0 w-full sm:w-1/4 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
              type="submit"
            >
              Sign In
            </button>
          </div>
          
          </form>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  )
}

export default Login
