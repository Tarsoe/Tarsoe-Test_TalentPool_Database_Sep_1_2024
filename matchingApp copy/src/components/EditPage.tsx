import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser, User, UpdateResponse } from '../services/AuthService';
import { TextField, Button, Snackbar, Alert } from '@mui/material';

interface EditPageProps {
    token: string;
}

const EditPage: React.FC<EditPageProps> = ({ token }) => {
    const { userId } = useParams<{ userId: string }>();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState<string>('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, [userId]);

    const handleUpdate = async () => {
        if (user) {
            setLoading(true);
            try {
                const response: UpdateResponse = await updateUser(token, user);
                localStorage.setItem('user', JSON.stringify({ userId: response.userId, username: response.username, email: response.email }));
                setUser({ userId: response.userId, username: response.username, email: response.email });
                setResponseMessage(response.message);
                setSnackbarOpen(true);

                // Show the response message for 2 seconds before navigating back to the homepage
                setTimeout(() => {
                    setSnackbarOpen(false);
                    navigate('/home');
                }, 5000); // Adjust the timeout duration as needed
            } catch (error) {
                console.error('Update failed', error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Edit User</h1>
            {user && (
                <>
                    <TextField
                        label="Username"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        margin="normal"
                    />
                    <TextField
                        label="Email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        margin="normal"
                    />
                    <Button
                        onClick={handleUpdate}
                        variant="contained"
                        color="primary"
                        disabled={loading}
                        className="mt-4"
                    >
                        {loading ? 'Updating...' : 'Save'}
                    </Button>
                </>
            )}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={5000} // Adjust the duration as needed
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
                    {responseMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default EditPage;


//! End

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { updateUser, User } from '../services/AuthService';
// import { TextField, Button } from '@mui/material';

// interface EditPageProps {
//     token: string;
// }

// const EditPage: React.FC<EditPageProps> = ({ token }) => {
//     const { userId } = useParams<{ userId: string }>();
//     const [user, setUser] = useState<User | null>(null);
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const userData = localStorage.getItem('user');
//         if (userData) {
//             setUser(JSON.parse(userData));
//         }
//     }, [userId]);

//     const handleUpdate = async () => {
//         if (user) {
//             setLoading(true);
//             try {
//                 const updatedUser = await updateUser(token, user);
//                 localStorage.setItem('user', JSON.stringify(updatedUser));
//                 setUser(updatedUser);
//                 navigate('/home');
//             } catch (error) {
//                 console.error('Update failed', error);
//             } finally {
//                 setLoading(false);
//             }
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//             <h1 className="text-2xl font-bold mb-4">Edit User</h1>
//             {user && (
//                 <>
//                     <TextField
//                         label="Username"
//                         value={user.username}
//                         onChange={(e) => setUser({ ...user, username: e.target.value })}
//                         margin="normal"
//                     />
//                     <TextField
//                         label="Email"
//                         value={user.email}
//                         onChange={(e) => setUser({ ...user, email: e.target.value })}
//                         margin="normal"
//                     />
//                     <Button
//                         onClick={handleUpdate}
//                         variant="contained"
//                         color="primary"
//                         disabled={loading}
//                         className="mt-4"
//                     >
//                         {loading ? 'Updating...' : 'Save'}
//                     </Button>
//                 </>
//             )}
//         </div>
//     );
// };

// export default EditPage;
