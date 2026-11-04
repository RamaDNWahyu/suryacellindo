import React from 'react';
import { createRoot } from 'react-dom/client';
import LandingPage from './LandingPage';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(
        <React.StrictMode>
            <LandingPage />
        </React.StrictMode>
    );
}
