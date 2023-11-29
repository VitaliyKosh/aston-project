/* eslint-disable no-console */

export class Logger {
    static prefix = '<Logger> : ';

    static log (text: string): void {
        console.log(Logger.prefix + text);
    }
}
