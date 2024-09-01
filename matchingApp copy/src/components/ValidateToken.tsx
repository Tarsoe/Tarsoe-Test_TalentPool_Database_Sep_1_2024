import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateToken } from '../services/api';
// import { validateToken } from './api';
// import { useHistory } from 'react-router-dom';

const ValidateToken: React.FC = () => {
    const [token, setToken] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [nextVisible, setNextVisible] = useState<boolean>(false);
    // const history = useHistory();
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await validateToken(token);
            setMessage(response.message);
            setNextVisible(true);
        } catch (error) {
            setNextVisible(true);
            setMessage('Invalid or expired token.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Validate Token</h2>
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
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                    {loading ? 'Validating...' : 'Validate Token'}
                </button>
            </form>
            {message && <p className="mt-4 p-2 bg-green-200 text-green-800 rounded">{message}</p>}
            {nextVisible && (
                <button onClick={() => navigate('/reset')} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">
                    Next
                </button>
            )}
        </div>
    );
};

export default ValidateToken;


//* End

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { validateToken } from '../services/api';
// // import { validateToken } from './api';
// // import { useHistory } from 'react-router-dom';

// const ValidateToken: React.FC = () => {
//     const [token, setToken] = useState<string>('');
//     const [message, setMessage] = useState<string>('');
//     const [loading, setLoading] = useState<boolean>(false);
//     // const history = useHistory();
//     const navigate = useNavigate();

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//         setLoading(true);
//         try {
//             const response = await validateToken(token);
//             setMessage(response.message);
//         } catch (error) {
//             setMessage('Invalid or expired token.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="p-4">
//             <h2 className="text-2xl mb-4">Validate Token</h2>
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
//                 <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
//                     {loading ? 'Validating...' : 'Validate Token'}
//                 </button>
//             </form>
//             {message && <p className="mt-4 p-2 bg-green-200 text-green-800 rounded">{message}</p>}
//             <button onClick={() => navigate('/reset')} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">
//                 Next
//             </button>
//         </div>
//     );
// };

// export default ValidateToken;


//? End

// import React, { useState } from 'react';
// import { validateToken } from '../services/api';
// import { useNavigate } from 'react-router-dom';
// // import { validateToken } from './api';

// const ValidateToken: React.FC = () => {
//     const [token, setToken] = useState<string>('');
//     const [message, setMessage] = useState<string>('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//         try {
//             const response = await validateToken(token);
//             setMessage(response.message);
//             navigate('/reset');
//         } catch (error) {
//             setMessage('Invalid or expired token.');
//         }
//     };

//     return (
//         <div>
//             <h2>Validate Token</h2>
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
//                 <button type="submit">Validate Token</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// };

// export default ValidateToken;
