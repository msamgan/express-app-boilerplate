/**
 *
 * @param message
 * @param payload
 * @returns {{package, message, status: boolean}}
 */
exports.successResponse = (message, payload) => {
    return {
        status: true,
        message: message,
        package: payload
    }
}

/**
 *
 * @param message
 * @returns {{message, status: boolean}}
 */
exports.failResponse = message => {
    return {
        status: false,
        message: message,
    }
}

/**
 *
 * @type {{message: string, status: boolean}}
 */
exports.notFountResponse = {
    status: false,
    message: 'Unable to find the requested resource!',
}
