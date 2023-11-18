import { Navigate, Route, Routes } from 'react-router-dom';
import { type RC } from 'shared/types/component';
import { type RouteConfig } from '../config';
import { Page } from './page';

interface Props {
    routeConfigs: RouteConfig[]
}

export const AppRouter: RC<Props> = ({ routeConfigs }) => {
    return (
        <Routes>
            {routeConfigs.map(routeConfig => Object.values(routeConfig).map(({ element, path, title }) => (
                <Route
                    key={path}
                    path={path}
                    element={<Page title={title}>{element}</Page>}
                />
            )))}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
