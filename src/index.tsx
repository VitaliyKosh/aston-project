import { App } from 'app/app';
import { ErrorBoundary } from 'app/providers/error-boundary';
import { Application } from 'features/application';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

global.window.app = new Application();

root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </React.StrictMode>
);
