import { type RC } from 'shared/types/component';
import { useObservableState } from 'repositories/redux/hooks/useTypedSelector';
import { getApp } from 'shared/helpers/get-app';
import { AuthStatus } from 'models/user';
import { AuthorizedUser } from './authorized-user';
import { UnauthorizedUser } from './unauthorized-user';

export const UserSection: RC = () => {
    const app = getApp();
    const authStatus = useObservableState(() => app.user.getAuthStatus());

    switch (authStatus) {
        case AuthStatus.SignedIn:
            return <AuthorizedUser />;
        case AuthStatus.SignedOut:
            return <UnauthorizedUser />;
        default:
            return null;
    }
};
