export class LSError extends Error {
    type: string;

    constructor (code: string) {
        super(code);
        this.type = code;
    }
}
