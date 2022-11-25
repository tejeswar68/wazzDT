import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { MdLogin } from "react-icons/md";
import {BsReception3 } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
function Login() {
 return (
    <div className='container-fluid mt-5 text-light'  >
      <div className="bg-light w-50 rounded mx-auto" style={{backgroundImage:`Url(https://media.istockphoto.com/id/1300397135/vector/violet-purple-and-navy-blue-defocused-blurred-motion-gradient-abstract-background.jpg?s=612x612&w=0&k=20&c=YH_QbC3h3uaxsr9X55MG4oeeySjmSXHL8yKTYVYfsSU=)`,backgroundRepeat:'NoRepeat', backgroundSize:'cover',marginTop:'6rem'}}>
      <div className="display-4 text-center  mt-5">Add Attendance</div>
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6  mx-auto">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label> <BsReception3 className='me-2'/>DBMS</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Attendance"
            
          />
          
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> <BsReception3 className='me-2'/>OS</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Attendance"
            
          />
          
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> <BsReception3 className='me-2'/>OR</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Attendance"
            
          />
          
        </Form.Group>
      </Form>
      <Button  variant="light" type="submit" className="mb-3">
          Save 
        </Button>
      </div>
      </div>
      </div>
      
    </div>
  );
}

export default Login;