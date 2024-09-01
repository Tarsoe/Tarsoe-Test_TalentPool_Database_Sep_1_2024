import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestPasswordReset } from '../services/api';
// import { requestPasswordReset } from './api';
// import { useHistory } from 'react-router-dom';

const RequestPasswordReset: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [nextVisible, setNextVisible] = useState<boolean>(false);
    // const history = useHistory();
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await requestPasswordReset(email);
            setMessage(response.message);
            setNextVisible(true);
        } catch (error) {
            setNextVisible(true);
            setMessage('Error sending password reset email.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Request Password Reset</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-2">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 border border-gray-300 rounded w-full"
                        required
                    />
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                    {loading ? 'Sending...' : 'Send Reset Email'}
                </button>
                <button onClick={() => navigate('/')} className="px-4 py-2 ml-4 outline outline-blue-500 hover:bg-blue-500 rounded">
                    Back
                </button>
            </form>
            {message && <p className="mt-4 p-2 bg-green-200 text-green-800 rounded">{message}</p>}
            {nextVisible && (
                <button onClick={() => navigate('/validate')} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">
                    Next
                </button>
            )}
        </div>
    );
};

export default RequestPasswordReset;


//! End

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { requestPasswordReset } from '../services/api';
// // import { requestPasswordReset } from './api';
// // import { useHistory } from 'react-router-dom';

// const RequestPasswordReset: React.FC = () => {
//     const [email, setEmail] = useState<string>('');
//     const [message, setMessage] = useState<string>('');
//     const [loading, setLoading] = useState<boolean>(false);
//     // const history = useHistory();
//     const navigate = useNavigate();

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//         setLoading(true);
//         try {
//             const response = await requestPasswordReset(email);
//             setMessage(response.message);
//         } catch (error) {
//             setMessage('Error sending password reset email.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="p-4">
//             <h2 className="text-2xl mb-4">Request Password Reset</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                     <label className="block mb-2">Email:</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="p-2 border border-gray-300 rounded w-full"
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
//                     {loading ? 'Sending...' : 'Send Reset Email'}
//                 </button>
//             </form>
//             {message && <p className="mt-4 p-2 bg-green-200 text-green-800 rounded">{message}</p>}
//             <button onClick={() => navigate('/validate')} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">
//                 Next
//             </button>
//         </div>
//     );
// };

// export default RequestPasswordReset;


//! End

// import React, { useState } from 'react';
// import { requestPasswordReset } from '../services/api';
// import { useNavigate } from 'react-router-dom';
// // import { requestPasswordReset } from './api';

// const RequestPasswordReset: React.FC = () => {
//     const [email, setEmail] = useState<string>('');
//     const [message, setMessage] = useState<string>('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//         try {
//             const response = await requestPasswordReset(email);
//             setMessage(response.message);
//             navigate('/validate');
//         } catch (error) {
//             setMessage('Error sending password reset email.');
//         }
//     };

//     return (
//         <div>
//             <h2>Request Password Reset</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Send Reset Email</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// };

// export default RequestPasswordReset;


//! End

// // src/components/RequestPasswordReset.tsx
// import React, { useState } from 'react';
// import { requestPasswordReset } from '../services/apiService';
// // import { requestPasswordReset } from '../apiService';

// const RequestPasswordReset: React.FC = () => {
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             await requestPasswordReset(email);
//             setMessage('Password reset link sent to your email.');
//         } catch (error) {
//             setMessage(String(error));
//         }
//     };

//     return (
//         <div>
//             <h2>Request Password Reset</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Email:
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <button type="submit">Request Reset</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// };

// export default RequestPasswordReset;
