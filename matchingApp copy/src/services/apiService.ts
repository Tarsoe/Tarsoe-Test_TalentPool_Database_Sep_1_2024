// src/apiService.ts
import axios, { AxiosError } from 'axios';

function isAxiosError(error: unknown): error is AxiosError {
    return axios.isAxiosError(error);
}

// const API_BASE_URL = 'http://your-api-base-url.com/api'; // Replace with your actual API base URL
const API_BASE_URL = 'http://localhost:8080'; // Replace with your actual API base URL

export const requestPasswordReset = async (email: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/password-reset/request`, { email });
        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            throw error.response?.data || 'Error requesting password reset';
        } else {
            throw 'Error requesting password reset';
        }
    }
};

export const resetPassword = async (token: string, password: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/password-reset/reset`, { token, password });
        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            throw error.response?.data || 'Error resetting password';
        } else {
            throw 'Error resetting password';
        }
    }
};
