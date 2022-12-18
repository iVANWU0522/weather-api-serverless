import { APIGatewayProxyResult } from 'aws-lambda'
export const returnOK = (responseObject: any): APIGatewayProxyResult => {
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: responseObject,
    };
};

export const returnError = (error: any): APIGatewayProxyResult => {
    return {
        statusCode: error?.statusCode || 500,
        body: error?.message || 'Internal Server Error',
    };
}