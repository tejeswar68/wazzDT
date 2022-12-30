import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { MdLogin } from "react-icons/md";
import {BsReception3, BsFillFilePersonFill,BsMailbox,BsFillTelephoneFill, BsBook} from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
function Login() {
 return (
    <div className='container-fluid mt-5 text-dark'  >
      <div className="bg-light w-50 rounded mx-auto" style={{backgroundImage:`Url(https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30499.jpg?w=2000)`,backgroundRepeat:'NoRepeat', backgroundSize:'cover',marginTop:'6rem'}}>
      <div className="display-4 text-center  mt-5 mb-2">Login</div>
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
          <Form.Label> <BsFillFilePersonFill className='me-2'/>Password</Form.Label>
          <Form.Control
            type="text"
            
          />
          
        </Form.Group>
      </Form>
      <Button  variant="light" type="submit" className="mb-3">
      <a href='/' style={{textDecoration:'None'}} className='text-dark'>Login</a>
        </Button>
      </div>
      </div>
      </div>
      
    </div>
  );
}

export default Login;