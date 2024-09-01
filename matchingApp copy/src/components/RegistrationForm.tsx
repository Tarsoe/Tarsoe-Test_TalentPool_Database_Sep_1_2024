import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { UserData, registerUser } from '../API/userApi';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const isAxiosError = (error: unknown): error is AxiosError => {
    return axios.isAxiosError(error);
};

const RegistrationForm: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<UserData>({
        username: '',
        email: '',
        password: '',
    });

    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        setLoading(true);

        // Check if passwords match
        if (formData.password !== confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            // Register user
            const respond = await registerUser(formData);
            console.log("response under const respond = await registerUser(formData); = ", respond.data);
            // Handle successful registration
            setSuccess(respond.data);
            // setSuccess('User registered successfully');
        } catch (error: unknown) {
            // Handle error response
            if (isAxiosError(error) && error.response) {
                const errorMessage = (error.response.data as { message: string }).message;
                setError(`Registration failed because, ${errorMessage}` || 'Registration failed');
                // setError(errorMessage || 'Registration failed');
            } else {
                setError('Registration failed');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">Registration Form</h2>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                {success && <div className="text-green-500 mb-4">{success}. Please use this information to <strong>login</strong></div>}
                {loading && (
                    <div className="flex justify-center items-center mb-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                )}
                <form onSubmit={handleSubmit} className={`${loading ? 'opacity-50' : ''}`}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Username:</label>
                        <input
                            required
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email:</label>
                        <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-gray-700">Password:</label>
                        <input
                            required
                            // type="password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                            disabled={loading}
                        />
                        <div className=' absolute inset-y-10 right-3 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </div>
                    </div>
                    <div className="mb-6 relative">
                        <label className="block text-gray-700">Confirm Password:</label>
                        <input
                            required
                            // type="password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                            disabled={loading}
                        />
                        <div className=' absolute inset-y-10 right-3 cursor-pointer' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition-colors"
                        disabled={loading}
                    >
                        Register
                    </button>
                    <button
                        type="button"
                        className="bg-gray-500 text-white p-2 rounded w-full mt-4 hover:bg-gray-600 transition-colors"
                        onClick={() => navigate('/')}
                    >
                        Back to Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
