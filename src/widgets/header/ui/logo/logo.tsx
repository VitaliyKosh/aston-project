import { Link } from 'react-router-dom';
import c from './logo.module.scss';
import { type RC } from 'shared/types/component';
import { publicRoutePaths } from 'app/providers/app-router';
import LogoSvg from './assets/logo.svg';

export const Logo: RC = () => {
    return (
        <Link to={publicRoutePaths.MAIN} className={c.logo}>
            <LogoSvg className={c.logoSvg}/>
        </Link>
    );
};
