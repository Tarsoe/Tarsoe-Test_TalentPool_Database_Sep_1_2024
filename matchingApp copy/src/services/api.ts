import axios from 'axios';

// const API_URL = 'http://localhost:8080/password-reset'; // Adjust this URL based on your backend configuration
const API_URL = 'https://matching-production-b463.up.railway.app/password-reset'; // Adjust this URL based on your backend configuration

export const requestPasswordReset = async (email: string) => {
    const response = await axios.post(`${API_URL}/request`, null, { params: { email } });
    return response.data;
};

export const validateToken = async (token: string) => {
    const response = await axios.get(`${API_URL}/validate`, { params: { token } });
    return response.data;
};

export const resetPassword = async (token: string, password: string) => {
    const response = await axios.post(`${API_URL}/reset`, null, { params: { token, password } });
    return response.data;
};  