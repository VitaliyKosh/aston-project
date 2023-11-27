import React, { type ButtonHTMLAttributes } from 'react';
import c from './button.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import PropTypes from 'prop-types';

export type ButtonTheme = 'clear' | 'default';
export type ButtonSize = 's' | 'm' | 'l';

export interface Props {
    className?: string
    theme?: ButtonTheme
    size?: ButtonSize
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
    children?: React.ReactNode
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
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

Button.propTypes = {
    className: PropTypes.string,
    theme: PropTypes.oneOf(['clear', 'default']),
    size: PropTypes.oneOf(['s', 'm', 'l']),
    type: PropTypes.oneOf(['submit', 'reset', 'button', null, undefined]),
    children: PropTypes.node,
    onClick: PropTypes.func
};
