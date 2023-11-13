import { ApiLibrary, type RequestGetConfig, type RequestPostConfig } from '../../types';

const config = {
    // TODO to env
    base: 'http://localhost:3000/api'
};

class FetchApiLibrary extends ApiLibrary {
    public getJSON = async <T>(requestConfig: RequestGetConfig): Promise<T> => {
        const absolute = new URL(requestConfig.url, this.base);
        const response = await fetch(absolute);
        if (!response.ok) throw new Error('Failed to perform the request.');

        return await response.json();
    };

    public postJSON = async <T>(requestConfig: RequestPostConfig): Promise<T> => {
    // TODO implement method
        throw new Error('Method not implemented.');
    };
}

export const fetchApi = new FetchApiLibrary(config);