import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { MdLogin } from "react-icons/md";
import {BsReception3, BsFillFilePersonFill,BsMailbox,BsFillTelephoneFill, BsBook} from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
function Admin() {
 return (
    <div className='container-fluid mt-5 text-light'  >
      <div className="bg-light w-50 rounded mx-auto" style={{backgroundImage:`Url(https://media.istockphoto.com/id/1300397135/vector/violet-purple-and-navy-blue-defocused-blurred-motion-gradient-abstract-background.jpg?s=612x612&w=0&k=20&c=YH_QbC3h3uaxsr9X55MG4oeeySjmSXHL8yKTYVYfsSU=)`,backgroundRepeat:'NoRepeat', backgroundSize:'cover',marginTop:'6rem'}}>
      <div className="display-4 text-center  mt-5 mb-2">Admin SignUp</div>
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6  mx-auto">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label> <BsFillFilePersonFill className='me-2'/>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ravinder Kumar"
            
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
          <Form.Label> <BsBook className='me-2'/>Class & Section</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter class and Section"
            
          />
          
        </Form.Group>
      </Form>
      <Button  variant="light" type="submit" className="mb-3">
          Sign Up
        </Button>
      </div>
      </div>
      </div>
      
    </div>
  );
}

export default Admin;