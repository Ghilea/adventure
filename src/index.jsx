import { StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import './index.scss';

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(
 
        <App />
 
);