import c from './page-title.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import PropTypes from 'prop-types';

interface Props {
    className?: string
    children: string
}

export const PageTitle: RC<Props> = ({ className, children }) => {
    return (
        <div className={classNames([c.pageTitle, className])}>
            {children}
        </div>
    );
};

PageTitle.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string.isRequired
};
