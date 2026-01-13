const HttpError = require("../models/errorModule");

function handleHttpError(
    error,
    next,
    defaultMessage = "An unknown error occurred",
    defaultStatus = 500
) {
    if (error instanceof HttpError) {
        console.log(error); // логируем только кастомные ошибки
        return next(error);
    }
    return next(new HttpError(defaultMessage, defaultStatus));
}

module.exports = { handleHttpError };
