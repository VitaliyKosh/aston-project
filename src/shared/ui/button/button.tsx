import React from 'react';
import cls from './button.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';

export enum ButtonTheme {
    Clear = 'clear',
    Default = 'default'
}

interface ButtonProps {
    className?: string
    theme?: ButtonTheme
    children?: React.ReactNode
    onClick: () => void
}

export const Button: RC<ButtonProps> = props => {
    const {
        className,
        children,
        theme = ButtonTheme.Default,
        onClick
    } = props;

    return (
        <button
            className={classNames([cls[theme], cls.button, className])}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
