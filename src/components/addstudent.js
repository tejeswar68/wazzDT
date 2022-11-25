import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { MdLogin } from "react-icons/md";
import {BsFillPersonFill,BsFillTelephoneFill,BsFillLockFill,BsBook,BsCalendar2Date,BsFillHddStackFill,BsMap,BsPersonPlusFill} from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
function AddStudent() {
 return (
    <div className='container-fluid mt-5 text-light'  >
      <div className="bg-light w-50 rounded mx-auto" style={{backgroundImage:`Url(https://media.istockphoto.com/id/1300397135/vector/violet-purple-and-navy-blue-defocused-blurred-motion-gradient-abstract-background.jpg?s=612x612&w=0&k=20&c=YH_QbC3h3uaxsr9X55MG4oeeySjmSXHL8yKTYVYfsSU=)`,backgroundRepeat:'NoRepeat', backgroundSize:'cover'}}>
      <div className="display-4 text-center  mt-5">Add Student</div>
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6  mx-auto">
      <Form>
        {/* username */}
        <Form.Group className="mb-3">
          <Form.Label> <BsPersonPlusFill className='me-2'/>Roll No</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Roll No"
            
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> <BsFillPersonFill className='me-2'/>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            
          />
          
        </Form.Group>

    
        <Form.Group className="mb-3">
          <Form.Label><BsFillHddStackFill className='me-2'/>Branch</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter branch"
            
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
          <Form.Label><BsCalendar2Date className='me-2'/>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter DOB"
            
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label><BsFillTelephoneFill className='me-2'/>Mobile No.</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Mobile No."
            
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label><BsMap className='me-2'/>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label><BsBook className='me-2'/>Medical Proof</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Medical Proof confirmation"
            
          />
        </Form.Group>
        <Button variant="light" type="submit">
          Add Student <MdLogin />
        </Button>
      </Form>
      </div>
      </div>
      </div>
      
    </div>
  );
}

export default AddStudent;