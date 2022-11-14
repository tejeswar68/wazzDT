import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { MdLogin } from "react-icons/md";
import {BsFillPersonFill,BsFillTelephoneFill,BsFillLockFill,BsBook } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
function Login() {
 return (
    <div className='container-fluid mt-5 text-light'  >
      <div className="bg-light w-50 rounded mx-auto" style={{backgroundImage:`Url(https://media.istockphoto.com/id/1300397135/vector/violet-purple-and-navy-blue-defocused-blurred-motion-gradient-abstract-background.jpg?s=612x612&w=0&k=20&c=YH_QbC3h3uaxsr9X55MG4oeeySjmSXHL8yKTYVYfsSU=)`,backgroundRepeat:'NoRepeat', backgroundSize:'cover'}}>
      <div className="display-4 text-center  mt-5">Sign Up</div>
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6  mx-auto">
      <Form>
        {/* username */}
        <Form.Group className="mb-3">
          <Form.Label> <BsFillPersonFill className='me-2'/>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> <AiTwotoneMail className='me-2'/>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Mail ID"
            
          />
          
        </Form.Group>

    
        <Form.Group className="mb-3">
          <Form.Label><BsFillTelephoneFill className='me-2'/>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Phone Number"
            
          />
        </Form.Group>
        {/* city */}
        <Form.Group className="mb-3">
          <Form.Label>< BsFillLockFill className='me-2'/>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label><BsBook className='me-2'/>Section</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Section"
            
          />
        </Form.Group>
        <Button variant="light" type="submit">
          Signup <MdLogin />
        </Button>
      </Form>
      <p className="lead">Already have an account?Click here to <a href="login" className="text-light">Login</a></p>
      </div>
      </div>
      </div>
      
    </div>
  );
}

export default Login;