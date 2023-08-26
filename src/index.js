import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import ErrorPage from './routes/ErrorPage';
import ContactDetails from './routes/ContactDetails';

//1 - configurando router
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },

//   {
//     path: "contact",
//     element: <Contact />
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // 3- Página de Erro
    errorElement: <ErrorPage/>,
    children: [              
      {
        path: "/",
        element: <Home />
      },
    
      {
        path: "contact",
        element: <Contact />
      },
      
      // 5 - Nested Routes - identificador unico
      {
        path: "/contact/:id",
        element: <ContactDetails/>,
      },

      //7 - Navigate para páginas não existentes
      {
        path: "oldcontact",
        element: <Navigate to="/contact"/>
      }
    ]
  },  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
