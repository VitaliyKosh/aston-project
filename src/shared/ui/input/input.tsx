import c from './input.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';

export type InputSize = 's' | 'm' | 'l';

export interface Props {
    className?: string
    size: InputSize
    value: string
    setValue: (value: string) => void
    placeholder?: string
}

export const Input: RC<Props> = (props) => {
    const {
        className,
        size = 'm',
        value,
        setValue,
        placeholder = ''
    } = props;

    return (
        <input
            className={classNames([
                c.input,
                className,
                c[`size-${size}`]
            ])}
            type='text'
            value={value}
            placeholder={placeholder}
            onChange={(e) => { setValue(e.target.value); }}
        />
    );
};
