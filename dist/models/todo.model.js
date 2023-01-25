"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importStar(require("sequelize"));
class Todo extends sequelize_1.Model {
    static initiate(sequelize) {
        Todo.init({
            bunho: { type: sequelize_1.default.UUID, primaryKey: true, allowNull: false },
            title: { type: sequelize_1.default.STRING, allowNull: false },
            completed: { type: sequelize_1.default.BOOLEAN, allowNull: false, defaultValue: false }
        }, {
            sequelize,
            modelName: 'Todo',
            tableName: 'todos',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci'
        });
    }
    static associate() { }
}
exports.default = Todo;
