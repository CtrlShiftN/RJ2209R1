import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import LifeDemo from './components/LifeDemo';
import Counting from './components/CountingLifeCycleDemo';
import { EffectDemo } from './components/EffectDemo';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<EffectDemo />);