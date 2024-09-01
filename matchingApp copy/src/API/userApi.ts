// src/api.ts
import axios from 'axios';

export interface UserData {
  username: string;
  email: string;
  password: string;
}

const URL = 'http://localhost:8080';
// const URL = 'https://matching-production-b463.up.railway.app';

export const registerUser = async (userData: UserData) => {
  return await axios.post(`${URL}/register`, userData);
  // return await axios.post('http://localhost:8080/register', userData);
};

// api.ts

const BASE_URL = 'http://localhost:8080'; // Update with your backend URL

export const login = async (username: string, password: string): Promise<{ token: string }> => {
  // const response = await fetch('/api/authenticate', {
  const response = await fetch(`${BASE_URL}/authenticate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
};


// export const login = async (username: string, password: string) => {
//   try {
//     const response = await fetch(`${BASE_URL}/authenticate`, {
//       // const response = await fetch(`${BASE_URL}/api/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     if (response.ok) {
//       return await response.json();
//     } else {
//       throw new Error('Login failed');
//     }
//   } catch (error: unknown) { // Specify the type of error variable
//     if (error instanceof Error) { // Check if error is an instance of Error
//       throw new Error('Error during login: ' + error.message);
//     } else {
//       throw new Error('Unknown error during login');
//     }
//   }
// };

