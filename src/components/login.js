import React, { useState ,useEffect} from 'react'
import './Login.css'
import {FaUserAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {useForm} from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onFormSubmit = (userCredObj) => {
    console.log(userCredObj);
    localStorage.setItem("email",userCredObj.email);
    localStorage.setItem("name",userCredObj.name);
    navigate("/order");
  }
  return (
    <div>
        <section className="vh-100">
  <div className="container h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                <form onSubmit={handleSubmit(onFormSubmit)} className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MdEmail/>
                    <div className="form-outline flex-fill mb-0 ms-3">
                      <input type="email" id="email" className="form-control" placeholder='Email' {...register("email")}/>
                      
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <RiLockPasswordFill/>
                    <div className="form-outline flex-fill mb-0 ms-3">
                      <input type="password" id="password" className="form-control" placeholder='Password' {...register("password")}/>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg me-3 " >Login</button>
                    <button type="submit" className="btn btn-success btn-lg text-white"><Link to='/signup' className='text-white' style={{ textDecoration: 'none'}}>Signup</Link> </button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Login