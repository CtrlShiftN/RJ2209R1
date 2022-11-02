import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// import Index from './components/product-choose/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/login/Index';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Index />);