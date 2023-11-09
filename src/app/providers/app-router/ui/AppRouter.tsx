import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import c from './AppRouter.module.scss';
import type { RouteConfig } from 'app/providers/app-router/config';
import { type RC } from 'shared/types/component';

interface Props {
    routeConfig: RouteConfig
}

export const AppRouter: RC<Props> = ({ routeConfig }) => {
    return (
    // TODO
    // <Suspense fallback={<PageLoader/>}>
        <BrowserRouter>
            <Suspense>
                <Routes>
                    {Object.values(routeConfig).map(({ element, path }) => (
                        <Route
                            key={path}
                            path={path}
                            element={<div className={c.pageWrapper}>{element}</div>}
                        />
                    ))}
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};
