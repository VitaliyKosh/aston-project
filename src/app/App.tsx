import './styles/index.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';

export const App: RC = () => {
    return (
        <div className={classNames('app')}></div>
    );
};
