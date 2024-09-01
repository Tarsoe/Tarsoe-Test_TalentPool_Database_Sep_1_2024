import React, { useState, useEffect } from 'react';
import { deleteEmployee, fetchEmployees } from '../API/employeesApi';
import { navigate } from 'wouter/use-browser-location';

interface EmployeeType {
    id: number;
    name: string;
    position: string;
    skills: string;
}

const EmployeeList: React.FC = () => {
    const [employees, setEmployees] = useState<EmployeeType[]>([]);
    const [token, setToken] = useState<string | null>(null);

    const handleDelete = async (id: number) => {
        try {
            if (token) {
                await deleteEmployee(id, token); // Pass token to deleteEmployee function
                setEmployees(employees.filter(employee => employee.id !== id));
            }
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    const GoToAddEmployee = () => {
        navigate("/add");
    };

    const goToEditEmployee = (id: number) => {
        navigate(`/update/${id}`);
    };

    // Sort employees by ID in ascending order
    const sortedEmployees = [...employees].sort((a, b) => a.id - b.id);

    useEffect(() => {
        const getEmployees = async () => {
            const storedToken = localStorage.getItem('token');
            console.log('Stored Token:', storedToken);
            if (storedToken) {
                setToken(storedToken);
                try {
                    const data = await fetchEmployees(storedToken);
                    console.log('Fetched Employees:', data);
                    setEmployees(data);
                } catch (error) {
                    console.error('Error fetching employees:', error);
                }
            } else {
                console.log('No token found, redirecting to login');
                navigate('/');
            }
        };
        getEmployees();
    }, []); // Run only once on component mount

    return (
        <div>
            <h1>Employee List</h1>
            <button onClick={() => navigate('/vacancies')} className=' bg-blue-600 rounded text-white px-4 py-2 mr-2'>Vacancies</button>
            <button onClick={GoToAddEmployee} className=' bg-blue-600 rounded text-white px-4 py-2'>Add new employee</button>
            <ul>
                {sortedEmployees.map((employee) => (
                    <li key={employee.id}>
                        <div>Name: {employee.name}</div>
                        <div>Position: {employee.position}</div>
                        <div>Skill: {employee.skills}</div>
                        <button onClick={() => goToEditEmployee(employee.id)} className='bg-yellow-500 text-white mr-2'>Edit</button>
                        <button onClick={() => handleDelete(employee.id)} className='bg-red-500 text-white mb-4'>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;







// import React, { useState, useEffect } from 'react';
// import { deleteEmployee, fetchEmployees } from '../API/employeesApi';
// // import AddEmployeeCard from '../components/AddEmployeeCard';
// import { navigate } from 'wouter/use-browser-location';

// interface EmployeeType {
//     id: number;
//     name: string;
//     position: string;
//     skills: string;
// }

// const EmployeeList: React.FC = () => {
//     const [employees, setEmployees] = useState<EmployeeType[]>([]);
//     // const [showAddEmployee, setShowAddEmployee] = useState(false);

//     const handleDelete = async (id: number) => {
//         try {
//             await deleteEmployee(id);
//             setEmployees(employees.filter(employee => employee.id !== id));
//         } catch (error) {
//             console.error('Error deleting employee:', error);
//         }
//     };

//     const GoToAddEmployee = () => {
//         navigate("/add");
//     }

//     const goToEditEmployee = (id: number) => {
//         navigate(`/update/${id}`);
//     };

//     // Sort employees by ID in ascending order
//     const sortedEmployees = [...employees].sort((a, b) => a.id - b.id);


//     // const handleAddEmployee = (addedEmployee: EmployeeType) => {
//     //     setEmployees([...employees, addedEmployee]);
//     //     setShowAddEmployee(false);
//     // };

//     // const handleCloseAddEmployee = () => {
//     //     setShowAddEmployee(false);
//     // };

//     useEffect(() => {
//         const getEmployees = async () => {
//             const data = await fetchEmployees();
//             setEmployees(data);
//         };
//         getEmployees();
//     }, []);

//     return (
//         <div>
//             <h1>Employee List</h1>
//             <button onClick={() => navigate('/vacancies')} className=' bg-blue-600 rounded text-white px-4 py-2 mr-2'>Vacancies</button>
//             <button onClick={GoToAddEmployee} className=' bg-blue-600 rounded text-white px-4 py-2'>Add new employee</button>
//             <ul>
//                 {sortedEmployees.map((employee) => (
//                     <li key={employee.id}>
//                         <div>Name: {employee.name}</div>
//                         <div>Position: {employee.position}</div>
//                         <div>Skill: {employee.skills}</div>
//                         <button onClick={() => goToEditEmployee(employee.id)} className='bg-yellow-500 text-white mr-2'>Edit</button>
//                         <button onClick={() => handleDelete(employee.id)} className='bg-red-500 text-white mb-4'>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default EmployeeList;


// import React, { useState, useEffect } from 'react';
// import { deleteEmployee, fetchEmployees } from '../API/employeesApi';
// import AddEmployeeCard from '../components/AddEmployeeCard';
// // import { fetchEmployees } from '../api/employeesApi';

// // Define the type for an employee
// interface EmployeeType {
//     id: number;
//     name: string;
//     position: string;
//     skills: string;
// }

// const EmployeeList: React.FC = () => {
//     const [employees, setEmployees] = useState<EmployeeType[]>([]);
//     const [showAddEmployee, setShowAddEmployee] = useState(false);

//     const handleDelete = async (id: number) => {
//         try {
//             await deleteEmployee(id);
//             setEmployees(employees.filter(employee => employee.id !== id));
//         } catch (error) {
//             console.error('Error deleting employee:', error);
//         }
//     };

//     const handleAddEmployee = (addedEmployee: EmployeeType) => {
//         setEmployees([...employees, addedEmployee]);
//         setShowAddEmployee(false);
//     };

//     useEffect(() => {
//         const getEmployees = async () => {
//             const data = await fetchEmployees();
//             console.log(data);
//             setEmployees(data);
//         };
//         getEmployees();
//     }, []);

//     return (
//         <div>
//             <h1>Employee List</h1>
//             <button onClick={() => setShowAddEmployee(true)}>Add new employee</button>
//             {showAddEmployee && <AddEmployeeCard onAddEmployee={handleAddEmployee} onClose={function (): void {
//                 throw new Error('Function not implemented.');
//             }} />}
//             <ul>
//                 {employees.map((employee) => (
//                     <li key={employee.id}>
//                         <div>Name: {employee.name}</div>
//                         <div>Position: {employee.position}</div>
//                         <div>Skill: {employee.skills}</div>
//                         <button onClick={() => handleDelete(employee.id)} className=' bg-red-500 text-white mb-4'>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default EmployeeList;
