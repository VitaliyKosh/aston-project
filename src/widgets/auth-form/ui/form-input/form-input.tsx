import c from './form-input.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import { InputWithRef } from 'shared/ui/input/input';
import { type UseFormRegisterReturn } from 'react-hook-form';
import { type HTMLInputTypeAttribute } from 'react';

interface Props {
    className?: string
    placeholder?: string
    label: string
    registerProps: UseFormRegisterReturn
    error?: string
    type?: HTMLInputTypeAttribute
}

export const FormInput: RC<Props> = ({
    className,
    label,
    placeholder,
    registerProps,
    error,
    type
}) => {
    return (
        <div className={classNames([c.formInput, className])}>
            <label>{label}</label>
            <InputWithRef
                placeholder={placeholder}
                type={type}
                {...registerProps}
            />
            {error && <div className={c.error}>{error}</div>}
        </div>
    );
};
