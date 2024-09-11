import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import './EmpEdit.css';
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function EmpEdit() {
  const [searchParams] = useSearchParams();
  const _id = searchParams.get("_id");

  const [name, setname] = useState('');
  const [deptname, setdeptname] = useState('');
  const [contactno, setcontactno] = useState('');
  const [age, setage] = useState('');
  const [button, setbutton] = useState(false);
  const [validated, setValidated] = useState(false);

  // GET method to fetch employee data by _id
  useEffect(() => {
    axios.get(`http://localhost:7000/update?id=${_id}`).then((res) => {
      const employee = res.data;
      setname(employee.name);
      setdeptname(employee.deptname);
      setcontactno(employee.contactno);
      setage(employee.age);
    }).catch((err) => {
      console.log(err);
    });
  }, [_id]);

  const handleButtonChange = (e) => {
    e.preventDefault();
    if (!name || !deptname || !contactno || !age) {
      setValidated(true);
      return;
    }

    const reqData = {
      "name": name,
      "deptname": deptname,
      "contactno": contactno,
      "age": age
    };

    // PUT method to update employee data
    axios.put(`http://localhost:7000/update/${_id}`, reqData)
      .then((res) => {
        const getemployee = res.data;
        setname(getemployee.name);
        setdeptname(getemployee.deptname);
        setcontactno(getemployee.contactno);
        setage(getemployee.age);
        console.log("Employee Updated");
      })
      .catch(err => {
        console.error(err);
        console.log(_id);
      });

    setbutton(true);
  };

  return (
    <div className="empedit">
      <h3>Edit Employee</h3>
      <div className="form">
        <FloatingLabel controlId="empeditName" label="Name" className="add">
          <Form.Control
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            isInvalid={validated && !name}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a name.
          </Form.Control.Feedback>
        </FloatingLabel>
        <br />
        <FloatingLabel controlId="empeditDept" label="Deptname" className="add">
          <Form.Control
            type="text"
            placeholder="deptname"
            value={deptname}
            onChange={(e) => setdeptname(e.target.value)}
            isInvalid={validated && !deptname}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a department name.
          </Form.Control.Feedback>
        </FloatingLabel>
        <br />
        <FloatingLabel controlId="empeditContact" label="Contact No" className="add">
          <Form.Control
            type="number"
            placeholder="contactno"
            value={contactno}
            onChange={(e) => setcontactno(e.target.value)}
            isInvalid={validated && !contactno}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a contact number.
          </Form.Control.Feedback>
        </FloatingLabel>
        <br />
        <FloatingLabel controlId="empeditAge" label="Age" className="add">
          <Form.Control
            type="number"
            placeholder="age"
            value={age}
            onChange={(e) => setage(e.target.value)}
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
          <h4>Edited</h4>
          <p><b>Name: {name}</b></p>
          <p><b>DeptName: {deptname}</b></p>
          <p><b>ContactNo: {contactno}</b></p>
          <p><b>Age: {age}</b></p>
        </div>
      )}
    </div>
  );
}

export default EmpEdit;
