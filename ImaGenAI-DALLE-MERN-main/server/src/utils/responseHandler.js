class ResponseHandler {
    static success = (res, data, message = "") => {
        return res.status(200).json({
            success: true,
            message,
            code: 200,
            data,
        });
    };

    static created = (res, data, message = "") => {
        return res.status(201).json({
            success: true,
            message,
            code: 201,
            data,
        });
    };

    static serverError = (res, error, message = "Something went wrong") => {
        return res.status(500).json({
            success: false,
            message,
            code: 500,
            error,
        });
    };

    static badRequest = (res, error, message = "Bad Request") => {
        return res.status(400).json({
            success: false,
            message,
            code: 400,
            error,
        });
    };

    static notFound = (res, message) => {
        return res.status(404).json({
            success: false,
            message,
            code: 404,
        });
    };

    static unAuthorized = (res, message) => {
        return res.status(401).json({
            success: false,
            message,
            code: 401,
        });
    };
}

export default ResponseHandler 