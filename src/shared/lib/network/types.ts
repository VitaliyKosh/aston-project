// TODO deprecated
export type RequestMethod = 'get' | 'post';
export type RequestPayload = Record<string, any>;

export interface RequestConfig {
    url: string
    payload?: RequestPayload
    method?: RequestMethod
};

export interface RequestGetConfig extends RequestConfig {
    method?: 'get'
}

export interface RequestPostConfig extends RequestConfig {
    method: 'post'
    payload: RequestPayload
}

export type ApiRequest<ResType, ReqType extends RequestConfig> = (config: ReqType) => Promise<ResType>;

export interface ApiConfig {
    base: string
};

export abstract class ApiLibrary {
    base: string;

    constructor (config: ApiConfig) {
        this.base = config.base;
    }

    async getJSON<T> (_requestConfig: RequestGetConfig): Promise<T> { throw new Error('Method not implemented.'); }
    async postJSON<T> (_requestConfig: RequestPostConfig): Promise<T> { throw new Error('Method not implemented.'); }
}
