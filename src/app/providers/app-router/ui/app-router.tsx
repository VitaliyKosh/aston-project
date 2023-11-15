import { Navigate, Route, Routes } from 'react-router-dom';
import c from './app-router.module.scss';
import type { RouteConfig } from 'app/providers/app-router/config';
import { type RC } from 'shared/types/component';

interface Props {
    routeConfig: RouteConfig
}

export const PartialAppRouter: RC<Props> = ({ routeConfig }) => {
    return (
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
    );
};
