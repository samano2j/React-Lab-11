import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './index.css'

import { AppProvider } from './redux/store'
import AppRoute from './routes/AppRoute'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <AppProvider>
      <ToastContainer />
      <AppRoute />
    </AppProvider>
  // </React.StrictMode>,
)
