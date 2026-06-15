"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (req, res, next) => {
    var token = req.headers.authorization;
    token = token.split(" ")[1];
    if (token) {
        next();
        return;
    }
    res.status(401).json({ message: "No autorizado por falta de token" });
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map