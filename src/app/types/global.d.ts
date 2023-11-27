import { type Application } from 'features/application';

declare global {
    interface Window { app: Application }
    namespace NodeJS {
        interface ProcessEnv {
            DB: 'LS' | 'FIREBASE'
            API_URL: string
        }
    }
}

export {};
