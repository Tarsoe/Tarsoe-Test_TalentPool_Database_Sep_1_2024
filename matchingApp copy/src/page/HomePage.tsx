import React, { useEffect, useState, useContext } from 'react';
import { fetchEmployees, addEmployee, updateEmployee, deleteEmployee, EmployeeType } from '../API/employeesApi';
import { AuthContext } from '../App';
// import { AuthContext } from './App';

const HomePage: React.FC = () => {
  const [employees, setEmployees] = useState<EmployeeType[]>([]);
  const [newEmployee, setNewEmployee] = useState<EmployeeType>({ id: 0, name: '', position: '', skills: '' });
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const data = await fetchEmployees();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    getEmployees();
  }, []);

  const handleAddEmployee = async () => {
    try {
      const data = await addEmployee(newEmployee);
      setEmployees([...employees, data]);
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const handleUpdateEmployee = async (id: number) => {
    try {
      const updatedEmployee = { ...newEmployee, id };
      const data = await updateEmployee(id, updatedEmployee);
      setEmployees(employees.map((emp) => (emp.id === id ? data : emp)));
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const handleDeleteEmployee = async (id: number) => {
    try {
      await deleteEmployee(id);
      setEmployees(employees.filter((emp) => emp.id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  if (!token) {
    return <div>Please <a href="/">log</a> in to manage employees.</div>;
  }

  return (
    <div>
      <h1>Employee Management</h1>
      <div>
        <h2>Add New Employee</h2>
        <input
          type="text"
          placeholder="Name"
          value={newEmployee.name}
          onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Position"
          value={newEmployee.position}
          onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
        />
        <input
          type="text"
          placeholder="Skills"
          value={newEmployee.skills}
          onChange={(e) => setNewEmployee({ ...newEmployee, skills: e.target.value })}
        />
        <button onClick={handleAddEmployee}>Add Employee</button>
      </div>
      <div>
        <h2>Employee List</h2>
        {employees.map((employee) => (
          <div key={employee.id}>
            <span>{employee.name} - {employee.position} - {employee.skills}</span>
            <button onClick={() => handleUpdateEmployee(employee.id)}>Update</button>
            <button onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;



// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../App';
// import { fetchEmployees } from '../API/employeesApi';

// interface EmployeeType {
//   id: number;
//   name: string;
//   position: string;
//   skills: string;
// }

// const HomePage: React.FC = () => {
//   const { token } = useContext(AuthContext);
//   const [employees, setEmployees] = useState<EmployeeType[]>([]);

//   useEffect(() => {
//     if (token) {
//       console.log('Token in HomePage:', token);
//       const getEmployees = async () => {
//         const data = await fetchEmployees();
//       }
//       // You can also make an API call here with the token
//     }
//   }, [token]);

//   return (
//     <>
//       <h1>{token ? `Token: ${JSON.stringify(token)}` : 'No Token Available'}</h1>
//       <div>Welcome to the Home Page</div>
//     </>
//   );
// };

// export default HomePage;


