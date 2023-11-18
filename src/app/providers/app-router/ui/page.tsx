import { type ReactNode } from 'react';
import { type RC } from 'shared/types/component';
import { Helmet } from 'react-helmet-async';
import c from './app-router.module.scss';

interface Props {
    title: string
    children: ReactNode
}

export const Page: RC<Props> = ({ title, children }) => {
    return (
        <div className={c.pageWrapper}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {children}
        </div>
    );
};
