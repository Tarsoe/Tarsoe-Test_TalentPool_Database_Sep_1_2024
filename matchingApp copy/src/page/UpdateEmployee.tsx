import { useParams, Link } from 'wouter';
import React, { useState, useEffect } from 'react';
import { fetchEmployeeById, updateEmployee } from '../API/employeesApi';
import { navigate } from 'wouter/use-browser-location';

interface EmployeeType {
    id: number;
    name: string;
    position: string;
    skills: string;
}

const UpdateEmployee: React.FC = () => {
    const [employeeData, setEmployeeData] = useState<EmployeeType>({
        id: 0,
        name: '',
        position: '',
        skills: ''
    });
    const { id } = useParams<{ id: string }>();
    // const [, navigate] = useRoute('/:id');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchEmployeeById(parseInt(id, 10));
                setEmployeeData(data);
            } catch (error) {
                console.error('p0: number, employee: EmployeeTypeEmployeeTypeEmployeeTypee:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEmployeeData({
            ...employeeData,
            [name]: value
        });
    };

    const handleUpdateEmployee = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await updateEmployee(parseInt(id, 10), employeeData);
            navigate('/');
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };

    return (
        <div>
            <h1>Update Employee</h1>
            <form onSubmit={handleUpdateEmployee}>
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
                <button type="submit">Update Employee</button>
            </form>
            <Link href="/">Go back</Link>
        </div>
    );
};

export default UpdateEmployee;

