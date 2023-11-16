import { useSelector } from 'react-redux';

export const useObservableState = <TSelected>(state: () => TSelected): TSelected => {
    return useSelector(() => state());
};
