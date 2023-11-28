import { type FormEvent, type ReactNode } from 'react';
import c from './form.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import { Button } from 'shared/ui/button/button';

interface Props {
    className?: string
    children: ReactNode
    header: string
    rootError?: string
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
    submitText: string
    isLoading: boolean
}

export const Form: RC<Props> = ({
    className,
    children,
    header,
    rootError,
    onSubmit,
    submitText,
    isLoading
}) => {
    return (
        <form
            className={classNames([c.form, className])}
            onSubmit={onSubmit}
        >
            <div className={c.header}>{header}</div>
            {children}
            <Button className={c.submitButton} type="submit">
                {isLoading ? 'Загрузка...' : submitText}
            </Button>
            {rootError && <div className={c.error}>{rootError}</div>}
        </form>
    );
};
