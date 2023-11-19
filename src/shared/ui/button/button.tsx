import React, { type ButtonHTMLAttributes } from 'react';
import c from './button.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';

export type ButtonTheme = 'clear' | 'default';
export type ButtonSize = 's' | 'm' | 'l';

interface Props {
    className?: string
    theme?: ButtonTheme
    size?: ButtonSize
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
    children?: React.ReactNode
    onClick?: () => void
}

export const Button: RC<Props> = props => {
    const {
        className,
        children,
        theme = 'default',
        size = 'm',
        type,
        onClick
    } = props;

    return (
        <button
            type={type}
            className={classNames([
                c.button,
                c[`theme-${theme}`],
                c[`size-${size}`],
                className
            ])}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
