import { type Application } from 'features/application';

// TODO не знаю стоит ли использовать тут нейминг хука, планируется использование только в компонентах реакта, но других хуков в нем не используется
export function useApp (): Application {
    return global.window.app;
};
