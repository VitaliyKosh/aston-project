import {
    type UseFormRegisterReturn,
    type UseFormRegister,
    type Path,
    type FieldValues,
    type UseFormWatch
} from 'react-hook-form';
import { formErrorMessages, formRegExpressions } from '../types/types';

export const useEmailRegisterProps = <T extends FieldValues>(
    name: Path<T>,
    register: UseFormRegister<T>
): UseFormRegisterReturn => {
    return register(name, {
        required: {
            message: formErrorMessages.required(),
            value: true
        },
        maxLength: {
            message: formErrorMessages.maxLength(120),
            value: 120
        },
        minLength: {
            message: formErrorMessages.minLength(3),
            value: 3
        },
        pattern: {
            message: formErrorMessages.emailFormat(),
            value: formRegExpressions.email
        }
    });
};

export const usePasswordRegisterProps = <T extends FieldValues>(
    name: Path<T>,
    register: UseFormRegister<T>
): UseFormRegisterReturn => {
    return register(name, {
        required: {
            message: formErrorMessages.required(),
            value: true
        },
        maxLength: {
            message: formErrorMessages.maxLength(60),
            value: 60
        },
        minLength: {
            message: formErrorMessages.minLength(6),
            value: 6
        }
    });
};

export const useConfirmPasswordRegisterProps = <T extends FieldValues>(
    name: Path<T>,
    validName: Path<T>,
    register: UseFormRegister<T>,
    watch: UseFormWatch<T>
): UseFormRegisterReturn => {
    return register(name, {
        required: {
            message: formErrorMessages.required(),
            value: true
        },
        validate: (value: string) => {
            if (watch(validName) !== value) {
                return formErrorMessages.passwordsDoNotMatch();
            };
        }
    });
};
