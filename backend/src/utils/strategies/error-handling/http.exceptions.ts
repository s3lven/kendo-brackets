import createError from "http-errors"
import { HTTPStatusCode } from "./http-status-codes.enum"

export class BadRequestException {
    constructor (message = 'Bad Request') {
        throw createError(HTTPStatusCode.BadRequest, message)
    }
  }

  export class UnauthorizedException {
    constructor (message = 'Unauthorized') {
        throw createError(HTTPStatusCode.Unauthorized, message)
    }
  }

  export class ForbiddenException {
    constructor (message = 'Forbidden') {
        throw createError(HTTPStatusCode.Forbidden, message)
    }
  }

  export class NotFoundException {
    constructor (message = 'NotFound') {
        throw createError(HTTPStatusCode.NotFound, message)
    }
  }
  