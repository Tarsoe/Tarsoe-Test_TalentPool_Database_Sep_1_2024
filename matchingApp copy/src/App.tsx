// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import Login from './components/Login';
// import EditPage from './components/EditPage';

// const App: React.FC = () => {
//   const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
//   const [user, setUser] = useState<{ userId: number; username: string; email: string } | null>(
//     JSON.parse(localStorage.getItem('user') || 'null')
//   );

//   useEffect(() => {
//     const userData = localStorage.getItem('user');
//     if (userData) {
//       setUser(JSON.parse(userData));
//       console.log(user);
//     }
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login setToken={setToken} setUser={setUser} />} />
//         <Route path="/home" element={<HomePage token={token!} />} />
//         <Route path="/edit/:userId" element={<EditPage token={token!} />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


//! Below code is good 

import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Route, Routes, Navigate, Router } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
import RequestPasswordReset from './components/RequestPasswordReset';
import ResetPassword from './components/ResetPassword';
import ValidateToken from './components/ValidateToken';
import RegistrationForm from './components/RegistrationForm';
import EditPage from './components/EditPage';
// import RegistrationForm from './page/UserRegistrationForm';
// import { logout } from './services/AuthService';
// import { logout } from './api';

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [user, setUser] = useState<{ username: string; email: string } | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
      console.log(user);
    }
  }, []);

  // const handleLogout = async () => {
  //   await logout();
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('user');
  //   setToken(null);
  //   setUser(null);
  // };

  return (
    // <Router>
    <Routes>
      <Route
        path="/"
        element={<Login setToken={setToken} setUser={setUser} />}
      // element={<Login setToken={setToken} setUser={setUser} />}
      />
      <Route
        path="/home"
        element={token ? <HomePage token={token} /> : <Navigate to="/" />}
      />
      <Route
        path="/"
        element={<Navigate to={token ? "/home" : "/"} />}
      />
      <Route path="/edit/:userId" element={<EditPage token={token!} />} />
      {/* <Route path="/request-password-reset" component={RequestPasswordReset} /> */}
      {/* <Route path="/password-reset/request" element={<RequestPasswordReset />} /> */}
      {/* <Route path="/reset-password/:token" element={<ResetPassword />} /> */}
      {/* <Route path="/password-reset/reset/:token" element={<ResetPassword />} /> */}

      <Route path="/registrationForm" element={<RegistrationForm />} />
      <Route path="/request" element={<RequestPasswordReset />} />
      <Route path="/validate" element={<ValidateToken />} />
      <Route path="/reset" element={<ResetPassword />} />
    </Routes>
    // </Router>
    //     <Routes>
    //   <Route
    //     path="/"
    //     element={<Login setToken={setToken} setUser={setUser} />}
    //   />
    //   <Route
    //     path="/home"
    //     element={token ? <HomePage token={token} /> : <Navigate to="/" />}
    //   />
    //   <Route path="/edit/:userId" element={<EditPage token={token!} />} />
    //   <Route path="/registrationForm" element={<RegistrationForm />} />
    //   <Route path="/request" element={<RequestPasswordReset />} />
    //   <Route path="/validate" element={<ValidateToken />} />
    //   <Route path="/reset" element={<ResetPassword />} />
    // </Routes>
  );
};

export default App;

//! End


// import React, { useState, useEffect } from 'react';
// // import { BrowserRouter as Route, Routes, Navigate, Router } from 'react-router-dom';
// import Login from './components/Login';
// import HomePage from './components/HomePage';
// import { Navigate, Route, Routes } from 'react-router-dom';
// // import { logout } from './services/AuthService';
// // import { logout } from './api';

// const App: React.FC = () => {
//   const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
//   const [user, setUser] = useState<{ username: string; email: string } | null>(null);

//   useEffect(() => {
//     const userData = localStorage.getItem('user');
//     if (userData) {
//       setUser(JSON.parse(userData));
//       console.log(user);
//     }
//   }, []);

//   // const handleLogout = async () => {
//   //   await logout();
//   //   localStorage.removeItem('token');
//   //   localStorage.removeItem('user');
//   //   setToken(null);
//   //   setUser(null);
//   // };

//   return (
//     // <Router>
//     <Routes>
//       <Route
//         path="/"
//         element={<Login setToken={setToken} setUser={setUser} />}
//       // element={<Login setToken={setToken} setUser={setUser} />}
//       />
//       {/* <Route
//         path="/login"
//         element={<Login setToken={setToken} setUser={setUser} />}
//       // element={<Login setToken={setToken} setUser={setUser} />}
//       /> */}
//       <Route
//         path="/home"
//         element={token ? <HomePage token={token} /> : <Navigate to="/" />}
//       />
//       {/* <Route
//         path="/home"
//         element={token ? <HomePage token={token} /> : <Navigate to="/login" />}
//       /> */}
//       <Route
//         path="/"
//         element={<Navigate to={token ? "/home" : "/"} />}
//       />
//     </Routes>
//     // </Router>
//   );
// };

// export default App;


//! End 

// import React from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import Login from './components/Login';
// import HomePage from './components/HomePage';

// const App: React.FC = () => {
//   const [token, setToken] = React.useState<string | null>(localStorage.getItem('token'));
//   const [user, setUser] = React.useState<{ username: string; email: string } | null>(null);

//   return (
//     <Routes>
//       <Route path="/login" element={<Login setToken={setToken} setUser={setUser} />} />
//       <Route path="/home" element={token ? <HomePage token={token} user={user} /> : <Navigate to="/login" />} />
//       <Route path="*" element={<Navigate to="/login" />} />
//     </Routes>
//   );
// };

// export default App;


//! End

// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Login from './components/Login';
// import Home from './components/HomePage';
// import { AuthProvider } from './context/AuthContext';
// import PrivateRoute from './components/PrivateRoute';

// const App = () => {
//   return (
//     <AuthProvider>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/home" element={
//           <PrivateRoute>
//             <Home />
//           </PrivateRoute>
//         } />
//         <Route path="/" element={<Navigate to="/login" />} />
//       </Routes>
//     </AuthProvider>
//   );
// };

// export default App;


// ! End 


// import React, { createContext } from 'react';
// // import { BrowserRouter as Redirect, Routes } from 'react-router-dom';
// import { BrowserRouter as Routes, Route, Navigate } from 'react-router-dom';
// // import AddEmployeeForm from './page/AddEmployeeForm';
// // import EmployeeList from './page/EmployeeList';
// // import { Route, Router, Switch, } from 'wouter';
// // import AddEmployee from './page/AddEmployee';
// // import UpdateEmployee from './page/UpdateEmployee';
// // import Vacancies from './page/vacancies/Vacancies';
// // import AddNewVacancy from './page/vacancies/AddNewVacancy';
// // import RecommendedCandidates from './page/vacancies/RecommendedCandidates';
// // import EditVacancy from './page/vacancies/EditVacancy';
// // import ViewRecommendCan from './page/vacancies/ViewRecommendCan';
// // // import UserRegistrationForm from './page/UserRegistrationForm';
// // // import LoginForm from './page/LoginForm';
// // // import HomePage from './page/HomePage';
// // import EmployeeList from './page/EmployeeList';
// // // import LoginForm from './page/LoginForm';
// // // import HomePage from './page/HomePage';
// // import RegistrationForm from './page/UserRegistrationForm';
// // import { AuthProvider, useAuth } from './context/AuthContext';
// import Home from './components/Home';
// import Login from './components/Login';
// // import PrivateRoute from './components/PrivateRoute';
// import { AuthProvider } from './context/AuthContext';
// import PrivateRoute from './components/PrivateRoute';
// // import { login } from './API/userApi';
// // import PrivateRoute from './page/PrivateRoute';
// // import HomePage from './page/HomePage';
// // import EmployeeList from './page/EmployeeList';
// // import VacancySearch from './page/vacancies/VacancySearch';


// export const AuthContext = createContext<{ token: string | null; setToken: React.Dispatch<React.SetStateAction<string | null>> }>({ token: null, setToken: () => { } });

// const App: React.FC = () => {

//   return (
//     // <AuthProvider>
//       {/* <Router> */}
//         {/* <Switch> */}
//         // <Routes>
//         //   <Route path="/login" element={<Login />} />
//         //   <Route path="/home" element={
//         //     <PrivateRoute>
//         //       <Home />
//         //     </PrivateRoute>
//         //   } />
//         //   <Route path="/" element={<Navigate to="/login" />} />
//         // </Routes>
//         {/* <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
//             <Route path="/" element={<Navigate to="/login" />} />
//           </Routes> */}
//         {/* <Route path='/' component={EmployeeList} />
//             <Route path='/homePage' component={HomePage} /> */}
//         {/* <UserRegistrationForm /> */}
//         {/* <LoginForm onLogin={handleLogin} /> */}
//         {/* <Route path="/login" element={<LoginForm />} /> */}
//         {/* <Route path="/home" component={<HomePage />} /> */}
//         {/* <Route path="/">
//               {isLoggedIn ? <Redirect to="/employeeList" /> : <LoginForm onLogin={handleLogin} />}
//             </Route> */}
//         {/* <Route path="/home">
//               <HomePage />
//             </Route> */}
//         {/* <Route path="/">
//               {isLoggedIn ? <Redirect to="/home" /> : <LoginForm onLogin={handleLogin} />}
//             </Route>
//             <Route path="/home">
//               <HomePage />
//             </Route> */}
//         {/* <LoginForm /> */}
//         {/* <VacancySearch /> */}
//         {/* <Route path="/login" element={<LoginForm />} /> */}
//         {/* <Route path="/" component={LoginForm} /> */}
//         {/* <Route path="/home" element={<HomePage />} /> */}
//         {/* <Route path="/home" component={HomePage} /> */}
//           //! Good Code
//         {/* <Route path="/registerUser" component={RegistrationForm} />
//           <Route path='/employeeList' component={EmployeeList} />
//           <Route path='/add' component={AddEmployee} />
//           <Route path='/update/:id' component={UpdateEmployee} />
//           <Route path='/vacancies' component={Vacancies} />
//           <Route path='/addVacancies' component={AddNewVacancy} />
//           <Route path='/editVacancy/:id' component={EditVacancy} />
//           <Route path="/matching-candidates" component={RecommendedCandidates} />
//           <Route path="/viewRecommendCan" component={ViewRecommendCan} /> */}
//           //! Good Code
//         {/* <Route path="/viewRecommendCan/:id" component={ViewRecommendCan} /> */}
//         {/* </Switch> */}
//       {/* </Router> */}
//     {/* </AuthProvider> */}
//   );
// };

// export default App;

//! End

// import React, { createContext, useState } from 'react';
// // import AddEmployeeForm from './page/AddEmployeeForm';
// // import EmployeeList from './page/EmployeeList';
// import { Route, Router, Switch } from 'wouter';
// import AddEmployee from './page/AddEmployee';
// import UpdateEmployee from './page/UpdateEmployee';
// import Vacancies from './page/vacancies/Vacancies';
// import AddNewVacancy from './page/vacancies/AddNewVacancy';
// import RecommendedCandidates from './page/vacancies/RecommendedCandidates';
// import EditVacancy from './page/vacancies/EditVacancy';
// import ViewRecommendCan from './page/vacancies/ViewRecommendCan';
// // import UserRegistrationForm from './page/UserRegistrationForm';
// // import LoginForm from './page/LoginForm';
// // import HomePage from './page/HomePage';
// import EmployeeList from './page/EmployeeList';
// import LoginForm from './page/LoginForm';
// import HomePage from './page/HomePage';
// import RegistrationForm from './page/UserRegistrationForm';
// // import { login } from './API/userApi';
// // import PrivateRoute from './page/PrivateRoute';
// // import HomePage from './page/HomePage';
// // import EmployeeList from './page/EmployeeList';
// // import VacancySearch from './page/vacancies/VacancySearch';


// export const AuthContext = createContext<{ token: string | null; setToken: React.Dispatch<React.SetStateAction<string | null>> }>({ token: null, setToken: () => { } });

// const App: React.FC = () => {

//   // const [isLoggedIn, setIsLoggedIn] = React.useState(false);

//   // const handleLogin = async (username: string, password: string) => {
//   //   try {
//   //     await login(username, password);
//   //     setIsLoggedIn(true);
//   //   } catch (error) {
//   //     if (error instanceof Error) {
//   //       console.error('Login failed:', error.message);
//   //     } else {
//   //       console.error('Login failed:', 'An unknown error occurred');
//   //     }
//   //   }
//   // };

//   // const handleLogin = async (username: string, password: string) => {
//   //   try {
//   //     const data = await login(username, password);
//   //     console.log('Login successful:', data);
//   //     localStorage.setItem('token', data.token);
//   //     window.location.href = '/home'; // Redirect to homepage
//   //   } catch (error) {
//   //     if (error instanceof Error) {
//   //       console.error('Login failed:', error.message);
//   //     } else {
//   //       console.error('Login failed:', 'An unknown error occurred');
//   //     }
//   //   }
//   // };

//   const [token, setToken] = useState<string | null>(null)

//   return (
//     <AuthContext.Provider value={{ token, setToken }}>
//       <Router>
//         <Switch>
//           {/* <Route path='/' component={EmployeeList} />
//           <Route path='/homePage' component={HomePage} /> */}
//           {/* <UserRegistrationForm /> */}
//           {/* <LoginForm onLogin={handleLogin} /> */}
//           {/* <Route path="/login" element={<LoginForm />} /> */}
//           {/* <Route path="/home" component={<HomePage />} /> */}
//           {/* <Route path="/">
//             {isLoggedIn ? <Redirect to="/employeeList" /> : <LoginForm onLogin={handleLogin} />}
//           </Route> */}
//           {/* <Route path="/home">
//             <HomePage />
//           </Route> */}
//           {/* <Route path="/">
//             {isLoggedIn ? <Redirect to="/home" /> : <LoginForm onLogin={handleLogin} />}
//           </Route>
//           <Route path="/home">
//             <HomePage />
//           </Route> */}
//           {/* <LoginForm /> */}
//           {/* <VacancySearch /> */}

//           {/* <Route path="/login" element={<LoginForm />} /> */}
//           <Route path="/" component={LoginForm} />
//           {/* <Route path="/home" element={<HomePage />} /> */}
//           <Route path="/home" component={HomePage} />
//           <Route path="/registerUser" component={RegistrationForm} />

//           <Route path='/employeeList' component={EmployeeList} />
//           <Route path='/add' component={AddEmployee} />
//           <Route path='/update/:id' component={UpdateEmployee} />
//           <Route path='/vacancies' component={Vacancies} />
//           <Route path='/addVacancies' component={AddNewVacancy} />
//           <Route path='/editVacancy/:id' component={EditVacancy} />
//           <Route path="/matching-candidates" component={RecommendedCandidates} />
//           <Route path="/viewRecommendCan" component={ViewRecommendCan} />
//           {/* <Route path="/viewRecommendCan/:id" component={ViewRecommendCan} /> */}
//         </Switch>
//       </Router>
//     </AuthContext.Provider>
//   );
// };

// export default App;

//! End

// import React, { useState, ChangeEvent, FormEvent } from 'react';
// // import axios from 'axios';
// import { fetchMatchingCandidates } from './API/vacanciesApi';

// interface Vacancy {
//   id: number;
//   title: string;
//   position: string;
//   skills: string;
// }

// interface MatchingCandidate {
//   candidate: {
//     name: string;
//     position: string;
//     skills: string;
//   };
//   matchPercentage: number;
// }

// const App: React.FC = () => {
//   const [vacancy, setVacancy] = useState<Vacancy>({
//     id: 0,
//     title: '',
//     position: '',
//     skills: ''
//   });
//   const [matchingCandidates, setMatchingCandidates] = useState<MatchingCandidate[]>([]);

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setVacancy(prevVacancy => ({
//       ...prevVacancy,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const matchingCandidatesData = await fetchMatchingCandidates(vacancy);
//       console.log("matchingCandidatesData = ", matchingCandidatesData);
//       setMatchingCandidates(matchingCandidatesData);
//     } catch (error) {
//       console.error('Error fetching matching candidates:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Matching Candidates</h1>
//       <form onSubmit={handleSubmit} className="mb-4">
//         <div className="mb-4">
//           <label htmlFor="title" className="block mb-1">Title</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={vacancy.title}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-4 py-2 w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="position" className="block mb-1">Position</label>
//           <input
//             type="text"
//             id="position"
//             name="position"
//             value={vacancy.position}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-4 py-2 w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="skills" className="block mb-1">Skills</label>
//           <input
//             type="text"
//             id="skills"
//             name="skills"
//             value={vacancy.skills}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-4 py-2 w-full"
//             required
//           />
//         </div>
//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Find Matching Candidates</button>
//       </form>
//       <div>
//         <h2 className="text-xl font-bold mb-2">Matching Candidates:</h2>
//         <ul>
//           {matchingCandidates.map((candidate, index) => (
//             <li key={index} className="mb-2">
//               <p>{candidate.candidate.name}</p>
//               <p>{candidate.candidate.position}</p>
//               <p>{candidate.candidate.skills}</p>
//               <p>Match Percentage: {candidate.matchPercentage}%</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
