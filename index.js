function expressJsonErrorHandler() {
    return function(err, req, res, next) {
        if (!err) {
            next();
        }
        res.api.error(400, 'invalid_json', 'JSON was malformed');
    };
}

module.exports = expressJsonErrorHandler;
