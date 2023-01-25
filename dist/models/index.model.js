"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = exports.sequelize = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const todo_model_1 = __importDefault(require("./todo.model"));
exports.Todo = todo_model_1.default;
const dbconfig_1 = __importDefault(require("../config/dbconfig"));
const config = dbconfig_1.default['development'];
console.log('config', config);
exports.sequelize = new sequelize_1.default.Sequelize(config.database, config.username, config.password, config);
todo_model_1.default.initiate(exports.sequelize);
todo_model_1.default.associate();
