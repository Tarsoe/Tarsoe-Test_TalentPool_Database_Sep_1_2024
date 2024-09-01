import React, { useState } from 'react';
import { addEmployee } from '../API/employeesApi';

interface AddEmployeeCardProps {
    onAddEmployee: (employee: EmployeeType) => void;
    onClose: () => void;
}

interface EmployeeType {
    id: number;
    name: string;
    position: string;
    skills: string;
}

const AddEmployeeCard: React.FC<AddEmployeeCardProps> = ({ onAddEmployee, onClose }) => {
    const [newEmployee, setNewEmployee] = useState<EmployeeType>({
        id: 0,
        name: '',
        position: '',
        skills: ''
    });

    const [error, setError] = useState<string>('');

    const handleAddEmployee = async () => {
        if (!newEmployee.name || !newEmployee.position || !newEmployee.skills) {
            setError('All fields are required');
            return;
        }
        
        try {
            const addedEmployee = await addEmployee(newEmployee);
            onAddEmployee(addedEmployee);
            setNewEmployee({
                id: 0,
                name: '',
                position: '',
                skills: ''
            });
            onClose();
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-8">
                <h2 className="text-xl font-semibold mb-4">Add Employee</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <input
                    type="text"
                    placeholder="Name"
                    className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
                    value={newEmployee.name}
                    onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Position"
                    className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
                    value={newEmployee.position}
                    onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Skills"
                    className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
                    value={newEmployee.skills}
                    onChange={(e) => setNewEmployee({ ...newEmployee, skills: e.target.value })}
                />
                <div className="flex justify-end">
                    <button
                        onClick={handleAddEmployee}
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    >
                        Add
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddEmployeeCard;

