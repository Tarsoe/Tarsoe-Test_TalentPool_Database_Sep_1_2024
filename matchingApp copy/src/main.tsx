// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App';

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );


//! End 

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </React.StrictMode>
  <Router>
    <App />
  </Router>,
);

//! End

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'
// // import { BrowserRouter } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>,
//   // <BrowserRouter>
//     <App />
//   // </BrowserRouter>
// )
