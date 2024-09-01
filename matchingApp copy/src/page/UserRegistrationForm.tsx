import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { UserData, registerUser } from '../API/userApi';
import { useNavigate } from 'react-router-dom';
// import { navigate } from 'wouter/use-hash-location'; //! Used navigate like this is not good

// export interface UserData {
//     username: string;
//     email: string;
//     password: string;
// }

// const registerUser = async (userData: UserData) => {
//     return await axios.post('http://localhost:8080/register', userData);
// };

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

        // Check if passwords match
        if (formData.password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            // Register user
            const respond = await registerUser(formData);
            console.log("respone under const respond = await registerUser(formData); = ", respond.data);
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
        }
    };

    return (
        <div>
            <h2>Registration Form</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {success && <div style={{ color: 'green' }}>{success}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                </div>
                <button type="submit">Register</button>
                <button className=' ml-4' onClick={() => navigate('/')}>Login</button>  
            </form>
        </div>
    );
};

export default RegistrationForm;






// // src/components/UserRegistrationForm.tsx

// import React, { useState } from 'react';
// // import axios from 'axios';
// import { UserData, registerUser } from '../API/userApi';

// const UserRegistrationForm: React.FC = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         if (password !== confirmPassword) {
//             setError('Passwords do not match');
//             return;
//         }

//         try {
//             const userData: UserData = {
//                 username,
//                 email,
//                 password: confirmPassword,
//             };
//             await registerUser(userData);
//             setUsername('');
//             setEmail('');
//             setPassword('');
//             setConfirmPassword('');
//             alert('User registered successfully!');
//         } catch (error) {
//             alert('Failed to register user');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//             />
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//             />
//             <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//             />
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <button type="submit">Register</button>
//         </form>
//     );
// };

// export default UserRegistrationForm;
