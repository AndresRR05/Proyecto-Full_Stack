"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = connectDB;
const mongoose_1 = __importDefault(require("mongoose"));
function connectDB(callback) {
    mongoose_1.default.connect("mongodb://localhost:27017/")
        .then(() => callback())
        .catch(error => console.error(error));
}
//# sourceMappingURL=db.config.js.map