import { forwardRef, type ChangeEvent, type ForwardedRef, type HTMLInputTypeAttribute } from 'react';
import c from './input.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';

export type InputSize = 's' | 'm' | 'l';

export interface Props {
    ref?: ForwardedRef<HTMLInputElement>
    className?: string
    size?: InputSize
    name?: string
    type?: HTMLInputTypeAttribute
    value?: string
    setValue?: (value: string) => void
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
}

export const Input: RC<Props> = ({
    className,
    size = 'm',
    type = 'text',
    setValue,
    onChange,
    placeholder = '',
    ...otherProps
}) => {
    return (
        <input
            className={classNames([
                c.input,
                className,
                c[`size-${size}`]
            ])}
            type={type}
            placeholder={placeholder}
            onChange={(e) => {
                if (onChange) {
                    onChange(e);
                } else if (setValue) {
                    setValue(e.target.value);
                }
            }}
            {...otherProps}
        />
    );
};

export const InputWithRef = forwardRef<HTMLInputElement, Props>((props, ref) => Input({ ...props, ref }));
InputWithRef.displayName = 'Input';
