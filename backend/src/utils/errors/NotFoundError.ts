export class NotFoundError extends Error {
    statusCode: number = 404
    constructor(mensaje: string) {
        super(mensaje)
    }
}