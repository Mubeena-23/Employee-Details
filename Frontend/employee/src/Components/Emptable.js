import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './Emptable.css';
import axios from 'axios';

function EmpTable() {
    const navigate = useNavigate();

    const [employees, setEmployees] = useState([])

    const Empadd = () => {
        navigate("/add");
    };

    const Empedit = (_id) => {
        axios.get(`http://localhost:7000/getid/${_id}`).then((res)=>{
            const getemployee=res.data
            console.log(getemployee);
            setEmployees(getemployee.name);
            alert('Employee found');
          })
          .catch(err=>{
            console.error(err);
          })
        console.log(_id);
        navigate(`/edit?id=${_id}`);
    };

    const Empdelete = (_id) => {
        const filteredEmployees = employees.filter(emp => emp._id !== _id);
        setEmployees(filteredEmployees);
    };

    useEffect(() => {
        axios.get("http://localhost:7000/getall").then(res => {
            console.log(res, "response")
            setEmployees(res.data)
        })
    }, [])

    return (
        <div className="emptable">
            <h1>Employee Details</h1>
            <Button onClick={Empadd}><span>Add</span></Button>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>SL.no</th>
                        <th>Name</th>
                        <th>Dept Name</th>
                        <th>Contact no</th>
                        <th>Age</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={employee.id}>
                            <td>{index + 1}</td>
                            <td>{employee.name}</td>
                            <td>{employee.deptname}</td>
                            <td>{employee.contactno}</td>
                            <td>{employee.age}</td>
                            <td>
                                <Button variant="info" onClick={(e) => Empedit(employee._id)}>Edit</Button>
                            </td>
                            <td>
                                <Button variant="danger" onClick={() => Empdelete(employee._id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default EmpTable;
