export class customError extends Error {
    constructor(errorCode, errorMessage) {
        super();
        this.status = errorCode;
        this.message = errorMessage;
    }
}