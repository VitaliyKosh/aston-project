import { type Application } from 'features/application/application';

declare global {
    interface Window { app: Application }
    namespace NodeJS {
        interface ProcessEnv {
            DB: 'LS' | 'FIREBASE'
            API_URL: string
            FB_API_KEY: string
            FB_AUTH_DOMAIN: string
            FB_PROJECT_ID: string
            FB_STORAGE_BUCKET: string
            FB_MESSAGING_SENDER_ID: string
            FB_APP_ID: string
            FB_DB_URL: string
        }
    }
}

export { };
