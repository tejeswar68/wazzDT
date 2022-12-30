import React, { useState ,useEffect} from 'react'
import './SignUp.css'
import { FaUserAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'



function SignUp() {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onFormSubmit = (userCredObj) => {
    localStorage.setItem("studentname" , JSON.stringify(userCredObj.name))
    navigate('/login')
      
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

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form onSubmit={handleSubmit(onFormSubmit)}  className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <FaUserAlt />
                          <div className="form-outline flex-fill mb-0 ms-3">
                            <input type="text" id="name" className="form-control" placeholder='Name' {...register("name",{required:true})} />
                            {errors.name?.type === 'required' && <p className='text-danger'>*Name is Required</p>}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <MdEmail />
                          <div className="form-outline flex-fill mb-0 ms-3">
                            <input type="email" id="email" className="form-control" placeholder='Email' {...register("email",{required:true})} />
                            {errors.email?.type === 'required' && <p className='text-danger'>*Email Required</p>}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <RiLockPasswordFill />
                          <div className="form-outline flex-fill mb-0 ms-3">
                            <input type="password" id="password" className="form-control" placeholder='Password' {...register("password",{required:true})} />
                            {errors.password?.type === 'required' && <p className='text-danger'>*Password Required</p>}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <BsFillTelephoneFill />
                          <div className="form-outline flex-fill mb-0 ms-3">
                            <input type="number" id="phone" className="form-control" placeholder='Mobile Number' {...register("phone",{required:true})} />
                            {errors.phone?.type === 'required' && <p className='text-danger'>*Mobile Number Required</p>}

                          </div>
                        </div>

                       
                         
                        

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" {...register("check")} />
                          <label className="form-check-label" htmlFor="form2Example3c">
                            I agree all statements in <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button  type="submit" className="btn btn-primary btn-lg">Register</button>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />

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

export default SignUp
