// import { Link } from 'wouter';
import React, { useState } from 'react';
import { addEmployee } from '../API/employeesApi';
// import { navigate } from 'wouter/use-browser-location';
import { useNavigate } from 'react-router-dom';

function AddEmployee() {
    const [employeeData, setEmployeeData] = useState({
        id: 0,
        name: '',
        position: '',
        skills: ''
    });

    const navigate = useNavigate();

    const goBack = () => {
        // navigate('/');
        navigate('/', { replace: true });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEmployeeData({
            ...employeeData,
            [name]: value
        });
    };


    const handleAddEmployee = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log("handleAddEmployee in AddEmployee.tsx");
            await addEmployee(employeeData);
            navigate('/');
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    return (
        <div>
            <h1>Add Employee</h1>
            <form onSubmit={handleAddEmployee}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={employeeData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="position">Position:</label>
                    <input
                        type="text"
                        id="position"
                        name="position"
                        value={employeeData.position}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="skills">Skills:</label>
                    <input
                        type="text"
                        id="skills"
                        name="skills"
                        value={employeeData.skills}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Add Employee</button>
            </form>
            <button onClick={goBack}>Go back</button>
            {/* <Link href="/">Go back</Link> */}
        </div>
    );
}

export default AddEmployee;
