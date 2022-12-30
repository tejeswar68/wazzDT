import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { MdLogin } from "react-icons/md";
import {BsReception3, BsFillFilePersonFill,BsMailbox,BsFillTelephoneFill, BsBook} from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
function Admin() {
  
 return (
    <div className='container-fluid mt-5 text-dark'  >
      <div className="bg-light w-50 rounded mx-auto" style={{backgroundImage:`Url(https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30499.jpg?w=2000)`,backgroundRepeat:'NoRepeat', backgroundSize:'cover',marginTop:'6rem'}}>
      <div className="display-4 text-center  mt-5 mb-2">Admin SignUp</div>
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6  mx-auto">
      <Form className="text-dark">
        <Form.Group className="mb-3">
          <Form.Label> <BsFillFilePersonFill className='me-2'/>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Bharadwaj"
            
          />
          
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> <AiTwotoneMail  className='me-2'/>Email ID</Form.Label>
          <Form.Control
            type="mail"
            placeholder="Enter Email ID"
            
          />
          
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> <BsFillTelephoneFill className='me-2'/>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Phone Number"
            
          />
          
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> <BsFillFilePersonFill className='me-2'/>Password</Form.Label>
          <Form.Control
            type="text"
            
          />
          
        </Form.Group>
      </Form>
      <div>
      <p>Already have an account? <a href='login' className="text-end">login</a></p>
      </div>
      <Button  variant="light" type="submit" className="mb-3">
          <a href='/' style={{textDecoration:'None'}} className='text-dark'>Sign up</a>
        </Button>
      </div>
      </div>
      </div>
      
    </div>
  );
}

export default Admin;