import {
    type SubmitHandler,
    useForm,
    type SubmitErrorHandler
} from 'react-hook-form';
import { type RC } from 'shared/types/component';
import { useState } from 'react';
import { FormInput } from '../form-input/form-input';
import {
    useConfirmPasswordRegisterProps,
    useEmailRegisterProps,
    usePasswordRegisterProps
} from 'widgets/auth-form/lib/use-register-props';
import { getApp } from 'shared/helpers/get-app';
import { useNavigate } from 'react-router-dom';
import { publicRoutePaths } from 'app/providers/app-router/config/route-configs';
import {
    AppError,
    BaseErrorCodes,
    errorMessages
} from 'shared/lib/app-error/app-error';
import { Form } from '../form/form';

interface SignUpFormValues {
    email: string
    password: string
    confirmPassword: string
}

interface Props {
    className?: string
}

export const SignUpForm: RC<Props> = ({ className }) => {
    const app = getApp();

    const { register, handleSubmit, watch } = useForm<SignUpFormValues>();
    const navigate = useNavigate();

    const [emailError, setEmailError] = useState<string | undefined>(undefined);
    const [passwordError, setPasswordError] = useState<string | undefined>(undefined);
    const [confirmPasswordError, setConfirmPasswordError] = useState<string | undefined>(undefined);
    const [rootError, setRootError] = useState<string | undefined>(undefined);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
        try {
            setIsLoading(true);
            setEmailError(undefined);
            setPasswordError(undefined);
            setConfirmPasswordError(undefined);

            await app.user.signedUp(data.email, data.password);

            navigate(publicRoutePaths.MAIN);
        } catch (error) {
            if (error instanceof AppError) {
                setRootError(error.message);
            } else {
                setRootError(errorMessages[BaseErrorCodes.UNKNOWN_ERROR]);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const onError: SubmitErrorHandler<SignUpFormValues> = (data) => {
        setEmailError(data.email?.message);
        setPasswordError(data.password?.message);
        setConfirmPasswordError(data.confirmPassword?.message);
    };

    const emailRegisterProps = useEmailRegisterProps('email', register);
    const passwordRegisterProps = usePasswordRegisterProps('password', register);
    const confirmPasswordRegisterProps = useConfirmPasswordRegisterProps('confirmPassword', 'password', register, watch);

    return (
        <Form
            className={className}
            onSubmit={(e) => {
                void handleSubmit(onSubmit, onError)(e);
            }}
            header={'Регистрация'}
            rootError={rootError}
            submitText='Зарегистрироваться'
            isLoading={isLoading}
        >
            <FormInput
                label="Email"
                registerProps={emailRegisterProps}
                error={emailError}
                type="email"
            />
            <FormInput
                label="Пароль"
                registerProps={passwordRegisterProps}
                error={passwordError}
                type="password"
            />
            <FormInput
                label="Подтверждение пароля"
                registerProps={confirmPasswordRegisterProps}
                error={confirmPasswordError}
                type="password"
            />
        </Form>
    );
};
