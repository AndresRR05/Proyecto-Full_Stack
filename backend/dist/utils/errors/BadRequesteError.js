"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
class BadRequestError extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.statusCode = 400;
    }
}
exports.BadRequestError = BadRequestError;
//# sourceMappingURL=BadRequesteError.js.map