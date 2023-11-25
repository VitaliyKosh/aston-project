import c from './auth-page.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import { SignUpForm, SignInForm } from 'widgets/auth-form';

export type AuthFormType = 'signIn' | 'signUp';

interface Props {
    type: AuthFormType
}

const AuthPage: RC<Props> = ({ type }) => {
    const Form = type === 'signIn' ? SignInForm : SignUpForm;

    return (
        <div className={classNames([c.authPage])}>
            <Form className={c.form}/>
        </div>
    );
};

export default AuthPage;
