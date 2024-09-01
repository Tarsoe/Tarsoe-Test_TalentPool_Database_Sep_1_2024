import axios from 'axios';

const API_URL = 'http://localhost:8080';

// Axios instance
const axiosInstance = axios.create({
    baseURL: API_URL,
});

// Add a request interceptor to include the token
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Or use a context if you prefer
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Define the type for an employee
export interface EmployeeType {
    id: number;
    name: string;
    position: string;
    skills: string;
}

export const fetchEmployees = async () => {
    try {
        const response = await axiosInstance.get('/candidates');
        return response.data;
    } catch (error) {
        console.error('Error fetching employees:', error);
        throw error;
    }
};

export const fetchEmployeeById = async (id: number) => {
    try {
        const response = await axiosInstance.get(`/candidates/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching employee by ID:', error);
        throw error;
    }
};

export const addEmployee = async (employee: EmployeeType) => {
    try {
        const response = await axiosInstance.post('/candidates', employee);
        return response.data;
    } catch (error) {
        console.error('Error adding employee:', error);
        throw error;
    }
};

export const updateEmployee = async (id: number, employee: EmployeeType) => {
    try {
        const response = await axiosInstance.put(`/candidates/${id}`, employee);
        return response.data;
    } catch (error) {
        console.error('Error updating employee:', error);
        throw error;
    }
};

export const deleteEmployee = async (id: number) => {
    try {
        const response = await axiosInstance.delete(`/candidates/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting employee:', error);
        throw error;
    }
};



// import axios from 'axios';

// // Define the type for an employee
// interface EmployeeType {
//     id: number;
//     name: string;
//     position: string;
//     skills: string;
// }

// const API_URL = 'http://localhost:8080';

// export const fetchEmployees = async (token: string) => {
//     try {
//         const response = await axios.get(`${API_URL}/candidates`, {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         });
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching employees:', error);
//         throw error;
//     }
// };

// export const fetchEmployeeById = async (id: number, token: string) => {
//     try {
//         const response = await axios.get(`${API_URL}/candidates/${id}`, {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         });
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching employee by ID:', error);
//         throw error;
//     }
// };

// export const addEmployee = async (employee: EmployeeType, token: string) => {
//     try {
//         const response = await axios.post(`${API_URL}/candidates`, employee, {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         });
//         return response.data;
//     } catch (error) {
//         console.error('Error adding employee:', error);
//         throw error;
//     }
// };

// export const updateEmployee = async (id: number, employee: EmployeeType, token: string) => {
//     try {
//         const response = await axios.put(`${API_URL}/candidates/${id}`, employee, {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         });
//         return response.data;
//     } catch (error) {
//         console.error('Error updating employee:', error);
//         throw error;
//     }
// };

// export const deleteEmployee = async (id: number, token: string) => {
//     try {
//         const response = await axios.delete(`${API_URL}/candidates/${id}`, {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         });
//         return response.data;
//     } catch (error) {
//         console.error('Error deleting employee:', error);
//         throw error;
//     }
// };



// import axios from 'axios';

// // Define the type for an employee
// interface EmployeeType {
//     id: number;
//     name: string;
//     position: string;
//     skills: string;
// }

// const API_URL = 'http://localhost:8080';

// export const fetchEmployees = async () => {
//     try {
//         const response = await axios.get(`${API_URL}/candidates`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching employees:', error);
//         throw error;
//     }
// };

// export const fetchEmployeeById = async (id: number) => {
//     try {
//         const response = await axios.get(`${API_URL}/candidates/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching employee by ID:', error);
//         throw error;
//     }
// };
// // export const fetchEmployeeById = async (employee: EmployeeType) => {
// //     try {
// //         const response = await axios.get(`${API_URL}/candidates/${employee.id}`);
// //         return response.data;
// //     } catch (error) {
// //         console.error('Error fetching employee by ID:', error);
// //         throw error;
// //     }
// // };

// export const addEmployee = async (employee: EmployeeType) => {
//     try {
//         const response = await axios.post(`${API_URL}/candidates`, employee);
//         return response.data;
//     } catch (error) {
//         console.error('Error adding employee:', error);
//         throw error;
//     }
// };

// export const updateEmployee = async (id: number, employee: EmployeeType) => {
//     try {
//         const response = await axios.put(`${API_URL}/candidates/${id}`, employee);
//         return response.data;
//     } catch (error) {
//         console.error('Error updating employee:', error);
//         throw error;
//     }
// };

// export const deleteEmployee = async (id: number) => {
//     try {
//         const response = await axios.delete(`${API_URL}/candidates/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error('Error deleting employee:', error);
//         throw error;
//     }
// };

// Implement similar functions for update and delete operations
