import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import './Empadd.css';
import axios from "axios"

function Empadd() {
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

    const reqData = {
      "name": name,
      "deptname": deptname,
      "contactno": contactno,
      "age": age
    }
    
    axios({
      url: "http://localhost:7000/create",
      method: "post",
      data: reqData
    }).then(res => {
      console.log(res, "posted")
      window.alert("Employee added Successfully!!")
    })
  };

  return (
    <div className="empadd">
      <h3>Add</h3>
      <div className="form">
        <FloatingLabel
          controlId="empaddName"
          label="Name"
          className="add"
        >
          <Form.Control
            type="text"
            placeholder="name"
            value={name}
            onChange={handleNameChange}
            isInvalid={validated && !name}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a name.
          </Form.Control.Feedback>
        </FloatingLabel>
        <br />
        <FloatingLabel
          controlId="empaddDept"
          label="Deptname"
          className="add"
        >
          <Form.Control
            type="text"
            placeholder="deptname"
            value={deptname}
            onChange={handleDeptnameChange}
            isInvalid={validated && !deptname}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a department name.
          </Form.Control.Feedback>
        </FloatingLabel>
        <br />
        <FloatingLabel
          controlId="empaddContact"
          label="Contact No"
          className="add"
        >
          <Form.Control
            type="number"
            placeholder="contactno"
            value={contactno}
            onChange={handleContactnoChange}
            isInvalid={validated && !contactno}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a contact number.
          </Form.Control.Feedback>
        </FloatingLabel>
        <br />
        <FloatingLabel
          controlId="empaddAge"
          label="Age"
          className="add"
        >
          <Form.Control
            type="number"
            placeholder="age"
            value={age}
            onChange={handleAgeChange}
            isInvalid={validated && !age}
          />
          <Form.Control.Feedback type="invalid">
            Please provide an age.
          </Form.Control.Feedback>
        </FloatingLabel>
        <br />
        <Button variant="primary" onClick={handleButtonChange}>Submit</Button>{' '}
      </div>
      <br />
      {button && (
        <div className="details">
          <h4>Added</h4>
          <p><b>Name: {name}</b></p>
          <p><b>DeptName: {deptname}</b></p>
          <p><b>ContactNo: {contactno}</b></p>
          <p><b>Age: {age}</b></p>
        </div>
      )}
    </div>
  );
}

export default Empadd;
