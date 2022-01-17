import { IResponseBody } from '../interfaces/IResponseBody';

function mapToResponseBody(status: string, message: string, payload: any) {
    const responseBody = {} as IResponseBody;
    responseBody.status = status;
    responseBody.message = message;
    responseBody.payload = payload;

    return responseBody;
}

export { mapToResponseBody };