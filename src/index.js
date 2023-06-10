import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './features/api/apiSlice';
import Login from './components/pages/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApiProvider api={apiSlice}>
   <BrowserRouter>
   <App/>
   </BrowserRouter>

  </ApiProvider>
);
