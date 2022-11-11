import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import AxiosDemo from './components/AxiosDemo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/user-manager/Index';
import MyRouter from './components/user-manager/MyRouter';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MyRouter />);
