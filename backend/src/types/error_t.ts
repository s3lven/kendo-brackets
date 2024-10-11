export interface IHTTPError extends Error {
    // because default Error class does not have status code
      statusCode: number;
    }