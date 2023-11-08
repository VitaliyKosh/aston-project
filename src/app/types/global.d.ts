declare module 'react-manifest'

declare module '*.scss' {
    type IClassNames = Record<string, string>;
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

declare interface Window {
    skipWaiting?: any
    __WB_MANIFEST?: any
}
