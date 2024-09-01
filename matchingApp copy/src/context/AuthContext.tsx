// import React, { createContext, useState, ReactNode } from 'react';
// // import AuthService from '../services/AuthService';

// interface AuthContextType {
//     token: string | null;
//     user: {
//         username: string;
//         email: string;
//     } | null;
//     login: (token: string, user: { username: string; email: string }) => void;
//     logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//     const [token, setToken] = useState<string | null>(null);
//     const [user, setUser] = useState<{ username: string; email: string } | null>(null);

//     const login = (token: string, user: { username: string; email: string }) => {
//         setToken(token);
//         setUser(user);
//     };

//     const logout = async () => {
//         if (token) {
//             try {
//                 await AuthService.logout(token);
//             } catch (error) {
//                 console.error('Logout failed', error);
//             }
//         }
//         setToken(null);
//         setUser(null);
//     };

//     return (
//         <AuthContext.Provider value={{ token, user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     const context = React.useContext(AuthContext);
//     if (context === undefined) {
//         throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context;
// };
