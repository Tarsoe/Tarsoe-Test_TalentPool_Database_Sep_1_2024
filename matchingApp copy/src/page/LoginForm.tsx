import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import { login } from '../API/userApi';
import axios, { AxiosError } from 'axios';
// import { login } from './api';
// import { AuthContext } from './App';

const isAxiosError = (error: unknown): error is AxiosError => {
    return axios.isAxiosError(error);
};

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setToken } = useContext(AuthContext);

    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const data = await login(username, password);
            setToken(data.token);
            localStorage.setItem('token', data.token); // Save token to local storage
            // navigate('/employees'); // Navigate to Employee Management page
            navigate('/home'); // Navigate to Employee Management page
        } catch (error: unknown) {
            if (isAxiosError(error) && error.response) {
                const errorMessage = (error.response.data as { message: string }).message;
                setError(`Login failed, ${errorMessage}` || 'Login failed');
            } else {
                console.error('Login failed:', 'An unknown error occurred');
            }
        }
        // } catch (error) {
        //     if (error instanceof Error) {
        //         console.error('Login failed:', error.message);
        //     } else {
        //         console.error('Login failed:', 'An unknown error occurred');
        //     }
        // }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;



// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../App';
// import { login } from '../API/userApi';
// // import { login } from './api';
// // import { AuthContext } from './App';

// const LoginForm: React.FC = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();
//     const { setToken } = useContext(AuthContext);

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//         try {
//             const data = await login(username, password);
//             // setToken(data.token);
//             setToken(data.token);
//             // setToken(data);
//             console.log('token in LoginForm ', data);
//             navigate('/home');
//         } catch (error) {
//             if (error instanceof Error) {
//                 console.error('Login failed:', error.message);
//             } else {
//                 console.error('Login failed:', 'An unknown error occurred');
//             }
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>
//                     Username:
//                     <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//                 </label>
//             </div>
//             <div>
//                 <label>
//                     Password:
//                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 </label>
//             </div>
//             <button type="submit">Login</button>
//             <button className=' ml-4' onClick={() => navigate('/registerUser')}>Register</button>
//         </form>
//     );
// };

// export default LoginForm;


// // LoginForm.tsx
// import React, { useState } from 'react';

// interface LoginFormProps {
//     onLogin: (username: string, password: string) => void;
// }

// const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (event: React.FormEvent) => {
//         event.preventDefault();
//         onLogin(username, password);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Username:</label>
//                 <input
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//             </div>
//             <div>
//                 <label>Password:</label>
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//             </div>
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default LoginForm;






// // LoginForm.tsx

// import React, { useState } from 'react';
// import { login } from '../API/userApi';
// import { navigate } from 'wouter/use-browser-location';

// // interface LoginFormProps {
// //     onLogin: (username: string, password: string) => void;
// // }

// const LoginForm: React.FC = () => {
// // const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setUsername(e.target.value);
//     };

//     const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(e.target.value);
//     };

//     // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     //     e.preventDefault();
//     //     // Call the onLogin function passed from the parent component
//     //     onLogin(username, password);
//     //     // Clear the input fields after submission
//     //     setUsername('');
//     //     setPassword('');
//     // };

//     const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//     // const handleLogin = async (username: string, password: string) => {
//         e.preventDefault();
//         try {
//             const data = await login(username, password);
//             console.log('Login successful:', data);
//             navigate('/employeeList');
//         } catch (error) {
//             if (error instanceof Error) {
//                 console.error('Login failed:', error.message);
//             } else {
//                 console.error('Login failed:', 'An unknown error occurred');
//             }
//         }
//     };

//     return (
//         <form onSubmit={handleLogin}>
//         {/* <form onSubmit={handleSubmit}> */}
//             <div>
//                 <label htmlFor="username">Username:</label>
//                 <input
//                     type="text"
//                     id="username"
//                     value={username}
//                     onChange={handleUsernameChange}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="password">Password:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={handlePasswordChange}
//                 />
//             </div>
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default LoginForm;


// // LoginForm.tsx

// import React, { useState } from 'react';

// interface LoginFormProps {
//     onLogin: (username: string, password: string) => void;
// }

// const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setUsername(e.target.value);
//     };

//     const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(e.target.value);
//     };

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         // Call the onLogin function passed from the parent component
//         onLogin(username, password);
//         // Clear the input fields after submission
//         setUsername('');
//         setPassword('');
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor="username">Username:</label>
//                 <input
//                     type="text"
//                     id="username"
//                     value={username}
//                     onChange={handleUsernameChange}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="password">Password:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={handlePasswordChange}
//                 />
//             </div>
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default LoginForm;
