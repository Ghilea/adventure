import React, { StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@comp/app/app';

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);