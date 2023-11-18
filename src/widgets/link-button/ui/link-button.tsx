import React from 'react';
import { type RC } from 'shared/types/component';
import { Button, type ButtonSize, type ButtonTheme } from 'shared/ui/button/button';
import { Link } from 'react-router-dom';

interface Props {
    className?: string
    theme?: ButtonTheme
    size?: ButtonSize
    children?: React.ReactNode
    to: string
}

export const LinkButton: RC<Props> = props => {
    const {
        className,
        children,
        to,
        ...otherProps
    } = props;

    return (
        <Link to={to}>
            <Button
                className={className}
                {...otherProps}
            >
                {children}
            </Button>
        </Link>
    );
};
