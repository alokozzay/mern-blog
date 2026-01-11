class HttpError extends Error {
    constructor(message, errorCode, details) {
        super(message);
        this.code = errorCode;
        this.details = details || null;
    }
}

module.exports = HttpError;
