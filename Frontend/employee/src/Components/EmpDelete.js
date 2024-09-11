import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './EmpDelete.css';

function EmpDelete() {
  const [name, setname] = useState('');
  const [deptname, setdeptname] = useState('');
  const [contactno, setcontactno] = useState('');
  const [age, setage] = useState('');
  const [button, setbutton] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleNameChange = (e) => {
    setname(e.target.value);
  };

  const handleDeptnameChange = (e) => {
    setdeptname(e.target.value);
  };

  const handleContactnoChange = (e) => {
    setcontactno(e.target.value);
  };

  const handleAgeChange = (e) => {
    setage(e.target.value);
  };

  const handleButtonChange = (e) => {
    e.preventDefault();
    if (name && deptname && contactno && age) {
      setbutton(true);
    } else {
      setValidated(true);
    }
  };

  return (
    <div className="empdelete">
      <h3>Delete</h3>
      <div className="form">
        <FloatingLabel
          controlId="empdeleteName"
          label="Name"
          className="add"
        >
          <Form.Control
            type="text"
            placeholder="name"
            value={name}
            onChange={handleNameChange}
            isInvalid={validated && !name}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a name.
          </Form.Control.Feedback>
        </FloatingLabel>
        <br />
        <FloatingLabel
          controlId="empdeleteDept"
          label="Deptname"
          className="add"
        >
          <Form.Control
            type="text"
            placeholder="deptname"
            value={deptname}
            onChange={handleDeptnameChange}
            isInvalid={validated && !deptname}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a department name.
          </Form.Control.Feedback>
        </FloatingLabel>
        <br />
        <FloatingLabel
          controlId="empdeleteContact"
          label="Contact No"
          className="add"
        >
          <Form.Control
            type="number"
            placeholder="contactno"
            value={contactno}
            onChange={handleContactnoChange}
            isInvalid={validated && !contactno}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a contact number.
          </Form.Control.Feedback>
        </FloatingLabel>
        <br />
        <FloatingLabel
          controlId="empdeleteAge"
          label="Age"
          className="add"
        >
          <Form.Control
            type="number"
            placeholder="age"
            value={age}
            onChange={handleAgeChange}
            isInvalid={validated && !age}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide an age.
          </Form.Control.Feedback>
        </FloatingLabel>
        <br />
        <Button variant="primary" onClick={handleButtonChange}>Submit</Button>{' '}
      </div>
      {button && (
        <div className="details">
          <h4>Deleted</h4>
          <p><b>Name: {name}</b></p>
          <p><b>DeptName: {deptname}</b></p>
          <p><b>ContactNo: {contactno}</b></p>
          <p><b>Age: {age}</b></p>
        </div>
      )}
    </div>
  );
}

export default EmpDelete;
