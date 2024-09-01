// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// interface PrivateRouteProps {
//     children: React.ReactNode;
// }

// const PrivateRoute = ({ children }: PrivateRouteProps) => {
//     const { token } = useAuth();
//     const location = useLocation();

//     if (!token) {
//         return <Navigate to="/login" state={{ from: location }} />;
//     }

//     return <>{children}</>;
// };

// export default PrivateRoute;
