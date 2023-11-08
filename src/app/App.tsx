import { type FC } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/class-names';
// import { PageLoader } from 'widgets/PageLoader'
// import { AppRouter } from './providers/AppRouter'
// import { Header } from 'widgets/Header'

const App: FC = () => {
    return (
        // TODO
        <div className={classNames('app')}>
            {/* <Header />
            <Suspense fallback={<PageLoader />}>
                <AppRouter />
            </Suspense> */}
        </div>
    );
};

export default App;
