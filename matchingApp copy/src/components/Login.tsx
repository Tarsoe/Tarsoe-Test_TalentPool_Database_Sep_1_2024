import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/AuthService';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Make sure you have react-icons installed
// import LoadingSpinner from './LoadingSpinner';

interface LoginProps {
    setToken: (token: string) => void;
    setUser: (user: { userId: number; username: string; email: string }) => void;
}

const Login: React.FC<LoginProps> = ({ setToken, setUser }) => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // State for loading indicator
    const [errorMessage, setErrorMessage] = useState(''); // State for error message
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true); // Start loading
        
        try {
            const response = await login(usernameOrEmail, password);
            setToken(response.token);
            console.log("response.token", response.token);
            setUser({ userId: response.userId, username: response.username, email: response.email });
            console.log("response.user", { userId: response.userId, username: response.username, email: response.email });
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify({ userId: response.userId, username: response.username, email: response.email }));
            navigate('/home');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Login failed', error);
                if (error.response && error.response.data) {
                    setErrorMessage(error.response.data); // Set the error message from the response
                } else {
                    setErrorMessage('An unexpected error occurred. Please try again.');
                }
            } else {
                setErrorMessage('An unexpected error occurred. Please try again.');
            }
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Login</h2>

            <div className="flex justify-center items-center mb-4">
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-500"></div>
                <span className=' ml-2'>Loading...</span>
            </div>

            <div className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className=' border-blue-500' cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
                <span className="ml-2">Loading..</span>
            </div>

            <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-4 border-t-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
                <span className="ml-2">Loading...</span>
            </div>

            <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-4 border-t-4 border-t-transparent border-white rounded-full animate-spin"></div>
                <span className="ml-2">Loading...</span>
            </div>

            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
                <div className="mb-4">
                    <label className="block text-gray-700">Username or Email:</label>
                    <input
                        type="text"
                        value={usernameOrEmail}
                        onChange={(e) => setUsernameOrEmail(e.target.value)}
                        required
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                </div>
                <div className="mb-4 relative">
                    <label className="block text-gray-700">Password:</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                    <div
                        className=" absolute inset-y-10 right-3 cursor-pointer"
                        // className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {/* {showPassword ? <FaEyeSlash /> : <FaEye />} */}
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-2 px-4 bg-blue-500 text-white rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {loading ? (
                        // <div className="flex items-center justify-center">
                        //     <svg
                        //         className="animate-spin h-5 w-5 text-white"
                        //         xmlns="http://www.w3.org/2000/svg"
                        //         fill="none"
                        //         viewBox="0 0 24 24"
                        //     >
                        //         <circle
                        //             className="opacity-25"
                        //             cx="12"
                        //             cy="12"
                        //             r="10"
                        //             stroke="currentColor"
                        //             strokeWidth="4"
                        //         ></circle>
                        //         <path
                        //             className="opacity-75"
                        //             fill="currentColor"
                        //             d="M4 12a8 8 0 018-8v8H4z"
                        //         ></path>
                        //     </svg>
                        //     <span className="ml-2">Loading...</span>
                        // </div>
                        // < LoadingSpinner />
                        <div className="flex justify-center items-center mb-4">
                            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                            <span className=' ml-2'>Loading...</span>
                        </div>
                    ) : (
                        'Login'
                    )}
                </button>
                <a href="/registrationForm" className='flex mt-4 underline items-center justify-center'>Register User</a>
                <a href="/request" className='flex mt-4 underline items-center justify-center'>Forgot password</a>
            </form>
            {errorMessage && (
                <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error! </strong>
                    <span className="block sm:inline">{errorMessage}</span>
                </div>
            )}
        </div>
    );
};

export default Login;

{/* <div className="mb-4">
                    <label className="block text-gray-700">Password:</label>
                    <input
                        // type="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                    <div
                        // className="absolute inset-y-0 right-40 pr-3 flex items-center cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                </div> */}


//? End

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../services/AuthService';

// interface LoginProps {
//     setToken: (token: string) => void;
//     setUser: (user: { username: string; email: string }) => void;
// }

// const Login: React.FC<LoginProps> = ({ setToken, setUser }) => {
//     const [usernameOrEmail, setUsernameOrEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false); // State for loading indicator
//     const navigate = useNavigate();

//     const handleLogin = async (event: React.FormEvent) => {
//         event.preventDefault();
//         setLoading(true); // Start loading
//         try {
//             const response = await login(usernameOrEmail, password);
//             setToken(response.token);
//             console.log("response.token", response.token);
//             setUser({ username: response.username, email: response.email });
//             console.log("response.user", { username: response.username, email: response.email });
//             localStorage.setItem('token', response.token);
//             localStorage.setItem('user', JSON.stringify({ username: response.username, email: response.email }));
//             navigate('/home');
//         } catch (error) {
//             console.error('Login failed', error);
//         } finally {
//             setLoading(false); // Stop loading
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//             <h2 className="text-2xl font-bold mb-4">Login</h2>
//             <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Username or Email:</label>
//                     <input
//                         type="text"
//                         value={usernameOrEmail}
//                         onChange={(e) => setUsernameOrEmail(e.target.value)}
//                         required
//                         className="mt-1 p-2 border border-gray-300 rounded w-full"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700">Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         className="mt-1 p-2 border border-gray-300 rounded w-full"
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     disabled={loading}
//                     className={`w-full py-2 px-4 bg-blue-500 text-white rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''
//                         }`}
//                 >
//                     {loading ? (
//                         <div className="flex items-center justify-center">
//                             <svg
//                                 className="animate-spin h-5 w-5 text-white"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <circle
//                                     className="opacity-25"
//                                     cx="12"
//                                     cy="12"
//                                     r="10"
//                                     stroke="currentColor"
//                                     strokeWidth="4"
//                                 ></circle>
//                                 <path
//                                     className="opacity-75"
//                                     fill="currentColor"
//                                     d="M4 12a8 8 0 018-8v8H4z"
//                                 ></path>
//                             </svg>
//                             <span className="ml-2">Loading...</span>
//                         </div>
//                     ) : (
//                         'Login'
//                     )}
//                 </button>
//                 <a href="/registrationForm" className=' flex mt-4 underline items-center justify-center'>Register User</a>
//                 <a href="/request" className=' flex mt-4 underline items-center justify-center'>Forgot password</a>
//             </form>
//         </div>
//     );
// };

// export default Login;


//! End 

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../services/AuthService';

// interface LoginProps {
//     setToken: (token: string) => void;
//     setUser: (user: { username: string; email: string }) => void;
// }

// const Login: React.FC<LoginProps> = ({ setToken, setUser }) => {
//     const [usernameOrEmail, setUsernameOrEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async (event: React.FormEvent) => {
//         event.preventDefault();
//         try {
//             const response = await login(usernameOrEmail, password);
//             setToken(response.token);
//             console.log("response.token", response.token);
//             setUser({ username: response.username, email: response.email });
//             console.log("response.user", { username: response.username, email: response.email });
//             localStorage.setItem('token', response.token);
//             localStorage.setItem('user', JSON.stringify({ username: response.username, email: response.email }));
//             navigate('/home');
//         } catch (error) {
//             console.error('Login failed', error);
//         }
//     };


//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit={handleLogin}>
//                 <div>
//                     <label>Username or Email:</label>
//                     <input
//                         type="text"
//                         value={usernameOrEmail}
//                         onChange={(e) => setUsernameOrEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;


// const handleLogin = async (event: React.FormEvent) => {
//     event.preventDefault();
//     try {
//         const response = await login(usernameOrEmail, password);
//         setToken(response.token);
//         console.log("response.token", response.token);
//         setUser(response.user);
//         console.log("response.user", response.user);
//         localStorage.setItem('token', response.token);
//         navigate('/home');
//     } catch (error) {
//         console.error('Login failed', error);
//     }
// };


//! End 

// import React, { useState } from 'react';
// import AuthService from '../services/AuthService';
// import { useAuth } from '../context/AuthContext';

// const Login = () => {
//     const [usernameOrEmail, setUsernameOrEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const { login } = useAuth();

//     const handleLogin = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             const response = await AuthService.login(usernameOrEmail, password);
//             login(response.data.accessToken, response.data.user);
//             console.log("In the components Login.txs")
//         } catch (error) {
//             console.error('Login failed', error);
//         }
//     };

//     return (
//         <form onSubmit={handleLogin}>
//             <div>
//                 <label>Username or Email:</label>
//                 <input
//                     type="text"
//                     value={usernameOrEmail}
//                     onChange={(e) => setUsernameOrEmail(e.target.value)}
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

// export default Login;
