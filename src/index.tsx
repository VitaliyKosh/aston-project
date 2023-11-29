import { App } from 'app/app';
import { ErrorBoundary } from 'app/providers/error-boundary';
import { Application } from 'features/application/application';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppError, ReactErrorCodes } from 'shared/lib/app-error/app-error';

global.window.app = new Application();

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new AppError(ReactErrorCodes.NO_ROOT);
}
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </React.StrictMode>
);
