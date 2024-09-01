import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../services/api';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { resetPassword } from './api';
// import { useHistory } from 'react-router-dom';

const ResetPassword: React.FC = () => {
    const [token, setToken] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [nextVisible, setNextVisible] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState(false);

    // const history = useHistory();
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await resetPassword(token, password);
            setMessage(response.message);
            setNextVisible(true);
        } catch (error) {
            setMessage('Error resetting password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Reset Password</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-2">Token:</label>
                    <input
                        type="text"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                        className="p-2 border border-gray-300 rounded w-full"
                        required
                    />
                </div>
                <div className=' relative'>
                    <label className="block mb-2">New Password:</label>
                    <input
                        // type="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-2 border border-gray-300 rounded w-full"
                        required
                    />
                    <div className=' absolute inset-y-11 right-3 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                    {loading ? 'Resetting...' : 'Reset Password'}
                </button>
            </form>
            {message && <p className="mt-4 p-2 bg-green-200 text-green-800 rounded">{message}</p>}
            {nextVisible && (
                <button onClick={() => navigate('/')} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">
                    Back to Login
                </button>
            )}
        </div>
    );
};

export default ResetPassword;


//! End

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { resetPassword } from '../services/api';
// // import { resetPassword } from './api';
// // import { useHistory } from 'react-router-dom';

// const ResetPassword: React.FC = () => {
//     const [token, setToken] = useState<string>('');
//     const [password, setPassword] = useState<string>('');
//     const [message, setMessage] = useState<string>('');
//     const [loading, setLoading] = useState<boolean>(false);
//     // const history = useHistory();
//     const navigate = useNavigate();

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//         setLoading(true);
//         try {
//             const response = await resetPassword(token, password);
//             setMessage(response.message);
//         } catch (error) {
//             setMessage('Error resetting password.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="p-4">
//             <h2 className="text-2xl mb-4">Reset Password</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                     <label className="block mb-2">Token:</label>
//                     <input
//                         type="text"
//                         value={token}
//                         onChange={(e) => setToken(e.target.value)}
//                         className="p-2 border border-gray-300 rounded w-full"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label className="block mb-2">New Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="p-2 border border-gray-300 rounded w-full"
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
//                     {loading ? 'Resetting...' : 'Reset Password'}
//                 </button>
//             </form>
//             {message && <p className="mt-4 p-2 bg-green-200 text-green-800 rounded">{message}</p>}
//             <button onClick={() => navigate('/request')} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">
//                 Back to Request
//             </button>
//         </div>
//     );
// };

// export default ResetPassword;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { resetPassword } from '../services/api';
// // import { resetPassword } from './api';
// // import { useHistory } from 'react-router-dom';

// const ResetPassword: React.FC = () => {
//     const [token, setToken] = useState<string>('');
//     const [password, setPassword] = useState<string>('');
//     const [message, setMessage] = useState<string>('');
//     const [loading, setLoading] = useState<boolean>(false);
//     // const history = useHistory();
//     const navigate = useNavigate();

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//         setLoading(true);
//         try {
//             const response = await resetPassword(token, password);
//             setMessage(response.message);
//         } catch (error) {
//             setMessage('Error resetting password.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="p-4">
//             <h2 className="text-2xl mb-4">Reset Password</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                     <label className="block mb-2">Token:</label>
//                     <input
//                         type="text"
//                         value={token}
//                         onChange={(e) => setToken(e.target.value)}
//                         className="p-2 border border-gray-300 rounded w-full"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label className="block mb-2">New Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="p-2 border border-gray-300 rounded w-full"
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
//                     {loading ? 'Resetting...' : 'Reset Password'}
//                 </button>
//             </form>
//             {message && <p className="mt-4 p-2 bg-green-200 text-green-800 rounded">{message}</p>}
//             <button onClick={() => navigate('/request')} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">
//                 Back to Request
//             </button>
//         </div>
//     );
// };

// export default ResetPassword;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { resetPassword } from '../services/api';
// // import { resetPassword } from './api';
// // import { useHistory } from 'react-router-dom';

// const ResetPassword: React.FC = () => {
//     const [token, setToken] = useState<string>('');
//     const [password, setPassword] = useState<string>('');
//     const [message, setMessage] = useState<string>('');
//     const [loading, setLoading] = useState<boolean>(false);
//     // const history = useHistory();
//     const navigate = useNavigate();

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//         setLoading(true);
//         try {
//             const response = await resetPassword(token, password);
//             setMessage(response.message);
//         } catch (error) {
//             setMessage('Error resetting password.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="p-4">
//             <h2 className="text-2xl mb-4">Reset Password</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                     <label className="block mb-2">Token:</label>
//                     <input
//                         type="text"
//                         value={token}
//                         onChange={(e) => setToken(e.target.value)}
//                         className="p-2 border border-gray-300 rounded w-full"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label className="block mb-2">New Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="p-2 border border-gray-300 rounded w-full"
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
//                     {loading ? 'Resetting...' : 'Reset Password'}
//                 </button>
//             </form>
//             {message && <p className="mt-4 p-2 bg-green-200 text-green-800 rounded">{message}</p>}
//             <button onClick={() => navigate('/request')} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">
//                 Back to Request
//             </button>
//         </div>
//     );
// };

// export default ResetPassword;


//* End 

// import React, { useState } from 'react';
// import { resetPassword } from '../services/api';
// // import { resetPassword } from './api';

// const ResetPassword: React.FC = () => {
//     const [token, setToken] = useState<string>('');
//     const [password, setPassword] = useState<string>('');
//     const [message, setMessage] = useState<string>('');

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//         try {
//             const response = await resetPassword(token, password);
//             setMessage(response.message);
//         } catch (error) {
//             setMessage('Error resetting password.');
//         }
//     };

//     return (
//         <div>
//             <h2>Reset Password</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Token:</label>
//                     <input
//                         type="text"
//                         value={token}
//                         onChange={(e) => setToken(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>New Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Reset Password</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// };

// export default ResetPassword;


//! End

// // src/components/ResetPassword.tsx
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { resetPassword } from '../services/apiService';
// // import { resetPassword } from '../apiService';

// const ResetPassword: React.FC = () => {
//     const { token } = useParams<{ token: string }>();
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         if (!token) {
//             setMessage('Invalid token.');
//             return;
//         }
//         if (password !== confirmPassword) {
//             setMessage('Passwords do not match.');
//             return;
//         }
//         try {
//             await resetPassword(token, password);
//             setMessage('Password reset successfully.');
//         } catch (error) {
//             setMessage(String(error));
//         }
//     };

//     return (
//         <div>
//             <h2>Reset Password</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     New Password:
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <label>
//                     Confirm Password:
//                     <input
//                         type="password"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <button type="submit">Reset Password</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// };

// export default ResetPassword;
