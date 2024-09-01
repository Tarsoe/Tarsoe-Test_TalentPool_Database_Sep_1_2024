import React, { useState } from 'react';
import { addEmployee } from '../API/employeesApi';


const AddEmployeeForm: React.FC = () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [skills, setSkills] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addEmployee({
            name, position, skills,
            id: 0
        });
        // Optionally, you can update the state or display a success message
        setName('');
        setPosition('');
        setSkills('');
    };

    return (
        <div>
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)} />
                <input type="text" placeholder="Skill" value={skills} onChange={(e) => setSkills(e.target.value)} />
                <button type="submit">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployeeForm;
