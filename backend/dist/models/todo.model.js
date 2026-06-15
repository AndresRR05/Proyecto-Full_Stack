"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ToDoSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: mongoose_1.default.Types.ObjectId, ref: "Users", required: true },
    status: { type: String, default: "Pendiente", enum: ["Pendiente", "En Proceso", "Finalizado"] },
    endDate: { type: String, required: true }
});
exports.ToDoModel = mongoose_1.default.model("ToDo", ToDoSchema);
//# sourceMappingURL=todo.model.js.map