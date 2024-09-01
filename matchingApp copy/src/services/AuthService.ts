import axios from 'axios';

const API_URL = 'http://localhost:8080';
// const API_URL = 'https://matching-production-b463.up.railway.app';
// const API_URL = 'https://matching-render.onrender.com';
// const API_URL = '/api/auth';

// interface LoginResponse {
//     token: string;
//     user: {
//         username: string;
//         email: string;
//     };
// }

// export const login = async (usernameOrEmail: string, password: string): Promise<LoginResponse> => {
//     const response = await axios.post(`${API_URL}/authenticate`, { usernameOrEmail, password });
//     return response.data;
// };
export const login = async (usernameOrEmail: string, password: string) => {
    const response = await axios.post(`${API_URL}/authenticate`, { usernameOrEmail, password });
    return response.data; // This should now include token, username, and email
};

export const logout = async (token: string): Promise<void> => {
    await axios.post(`${API_URL}/logout`, {}, { headers: { Authorization: `Bearer ${token}` } });
};

export interface User {
    userId: number;
    username: string;
    email: string;
}

export interface UpdateResponse {
    message: string;
    username: string;
    email: string;
    userId: number;
}

// const API_URL = 'http://localhost:8080';

export const updateUser = async (token: string, user: User): Promise<UpdateResponse> => {
    const response = await axios.put<UpdateResponse>(`${API_URL}/user/${user.userId}`, user, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const deleteUser = async (token: string, userId: number): Promise<void> => {
    await axios.delete(`${API_URL}/user/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};


//! below code is good
// export interface User {
//     // id: number;
//     userId: number;
//     username: string;
//     email: string;
//     message: string;
// }

// export const updateUser = async (token: string, user: User): Promise<User> => {
//     // const response = await axios.put(`/api/user/${user.id}`, user, {
//     const response = await axios.put(`${API_URL}/user/${user.userId}`, user, {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     });
//     return response.data;
// };

// export const deleteUser = async (token: string, userId: number): Promise<void> => {
//     await axios.delete(`${API_URL}/user/${userId}`, {
//     // await axios.delete(`/api/user/${userId}`, {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     });
// };

//! End
// import axios from 'axios';

// // const API_URL = 'http://localhost:8080/api/auth'; // Update with your backend URL
// const API_URL = 'http://localhost:8080'; // Update with your backend URL

// interface LoginResponse {
//     accessToken: string;
//     user: {
//         username: string;
//         email: string;
//     };
// }

// const login = (usernameOrEmail: string, password: string) => {
//     return axios.post<LoginResponse>(`${API_URL}/authenticate`, { usernameOrEmail, password });
// };

// // export default {
// //     login,
// // };

// const logout = (token: string) => {
//     return axios.post(`${API_URL}/logout`, {}, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
// };

// export default {
//     login,
//     logout,
// };
