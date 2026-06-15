"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const db_config_1 = require("./utils/db.config");
const todo_routes_1 = __importDefault(require("./routes/todo.routes"));
const auth_middleware_1 = require("./middlewares/auth.middleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/users', user_routes_1.default);
app.use('/tasks', auth_middleware_1.authMiddleware, todo_routes_1.default);
function initServer() {
    app.listen(3000, () => console.log("Servidor corriendo en: http://localhost:3000/" + "\nhttp://localhost:3000/users"));
}
(0, db_config_1.connectDB)(initServer);
//# sourceMappingURL=index.js.map