import { useSelector } from 'react-redux';

export const useObservableState = <TSelected>(selector: () => TSelected): TSelected => {
    return useSelector(() => selector());
};
