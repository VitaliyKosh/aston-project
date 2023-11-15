import { type Application } from 'features/application';

declare global {
    interface Window { app: Application }
    namespace NodeJS {
        interface ProcessEnv {
            DB: 'LS' | 'FIREBASE'
        }
    }
}

export {};
