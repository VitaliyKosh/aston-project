import { Logo } from 'widgets/logo';
import c from './header.module.scss';
import { type RC } from 'shared/types/component';
import { UserSection } from './user-section/user-section';
import { classNames } from 'shared/lib/class-names';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { useTheme } from 'app/providers/theme-provider';

export const Header: RC = () => {
    const { toggleTheme } = useTheme();

    return (
        <div className={classNames([c.header])}>
            <div className={c.headerContent}>
                <Logo />
                <Button
                    theme={ButtonTheme.Clear}
                    onClick={toggleTheme}
                >
                    <FontAwesomeIcon size='xs' icon={faLightbulb}/>
                </Button>
                <UserSection />
            </div>
        </div>
    );
};
