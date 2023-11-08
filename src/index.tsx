import React from 'react'
import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import App from 'app/App'
// import { ErrorBoundary } from 'app/providers/ErrorBoundary'
// import { StoreProvider } from 'app/providers/StoreProvider'
// import { AuthProvider } from 'app/providers/AuthProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        Hello world
        {/* <BrowserRouter>
            <ErrorBoundary>
                <StoreProvider>
                    <AuthProvider>
                        <App/>
                    </AuthProvider>
                </StoreProvider>
            </ErrorBoundary>
        </BrowserRouter> */}
    </React.StrictMode>
)
