import { ApiLibrary, type RequestGetConfig } from '../../types';

export class FetchApi extends ApiLibrary {
    public getJSON = async <T>(requestConfig: RequestGetConfig): Promise<T> => {
        const baseAddition = this.base.split('/').slice(3).join('/');
        const absolute = new URL(`${baseAddition}/${requestConfig.url}`, this.base);
        const response = await fetch(absolute);
        if (!response.ok) throw new Error('Failed to perform the request.');

        return await response.json();
    };
}
