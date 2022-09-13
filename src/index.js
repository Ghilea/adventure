import React, { StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
//import { MapEditor } from '@editor/MapEditor';
import { App } from '@comp/app/App';

const container = document.querySelector('main');
const root = createRoot(container);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);