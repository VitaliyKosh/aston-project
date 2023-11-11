import { ApiLibrary, type RequestGetConfig, type RequestPostConfig } from '../../types';

const config = {
    // TODO to env
    base: 'http://localhost:3000/api'
};

export class AxiosApiLibrary extends ApiLibrary {
    // TODO implement method
    async getJSON<T>(requestConfig: RequestGetConfig): Promise<T> {
        throw new Error('Method not implemented.');
    }

    // TODO implement method
    async postJSON<T>(requestConfig: RequestPostConfig): Promise<T> {
        throw new Error('Method not implemented.');
    }
}

export const axiosApi = new AxiosApiLibrary(config);
