export class ApiError extends Error {
  status: number;
  data?: any;

  constructor(status: number, message: string, data?: any) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

export class InValidServiceException extends ApiError {
  constructor(data?: any, message = 'Invalid request') {
    super(400, message, data);
    this.name = 'InValidServiceException';
  }
}

export class UnAuthorizedException extends ApiError {
  constructor(data?: any, message = 'Unauthorized') {
    super(401, message, data);
    this.name = 'UnAuthorizedException';
  }
}

export class InternalServerException extends ApiError {
  constructor(data?: any, message = 'Internal server error') {
    super(500, message, data);
    this.name = 'InternalServerException';
  }
}

export class UnprocessableException extends ApiError {
  constructor(data?: any, message = 'Unprocessable entity') {
    super(422, message, data);
    this.name = 'UnprocessableException';
  }
}
