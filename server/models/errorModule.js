class HttpError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.code = code;
    }
}

module.exports = HttpError;
