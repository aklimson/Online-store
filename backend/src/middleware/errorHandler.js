import http from 'http'

export const errorHandler = {};

errorHandler.notFoundDefault = (req, res, next) => {
    const err = new Error(http.STATUS_CODES[404] || 'Not Found');
    err.status = 404;
    next(err);
}


errorHandler.errorDefault = (err, req, res, next) => {
    if (process.env.NODE_ENV !== 'test') {
        console.log(err.stack);
    }

    const statusCode = 500;
    const message = 
        process.env.NODE_ENV === 'production'
            ? 'Something went wrong'
            : err.message
    ;
    res.status(statusCode).json({
        status: statusCode,
        message
    });
}