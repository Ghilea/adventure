import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';

const container = document.querySelector('main');
const root = createRoot(container);

root.render(< App />);