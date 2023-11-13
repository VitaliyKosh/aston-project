import { type Application } from 'features/application';

declare global {
    interface Window { app: Application }
}

export {};
