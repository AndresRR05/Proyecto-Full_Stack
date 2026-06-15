export class BadRequestError extends Error {
    statusCode: number = 400
    constructor(mensaje: string) {
        super(mensaje)
    }
}