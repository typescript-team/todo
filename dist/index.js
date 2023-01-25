"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const index_model_1 = require("./models/index.model");
const todoValidator_1 = __importDefault(require("./validator/todoValidator"));
const errors_1 = require("./middle/errors");
const index_control_1 = __importDefault(require("./controller/index.control"));
const app = (0, express_1.default)();
index_model_1.sequelize.sync({ force: false })
    .then(() => { console.log('데이터 베이스 연결'); })
    .catch((err) => { console.error(err); });
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.get('/', index_control_1.default.home);
app.post('/create', todoValidator_1.default.checkCreateTodo(), errors_1.errorHandleValidation, index_control_1.default.create);
app.get('/read', todoValidator_1.default.checkReadTodo(), errors_1.errorHandleValidation, index_control_1.default.readPagination);
app.get('/read/:bunho', todoValidator_1.default.checkBunhoParam(), errors_1.errorHandleValidation, index_control_1.default.readByID);
app.put('/update/:bunho', todoValidator_1.default.checkBunhoParam(), errors_1.errorHandleValidation, index_control_1.default.update);
app.delete('/delete/:bunho', todoValidator_1.default.checkBunhoParam(), errors_1.errorHandleValidation, index_control_1.default.delete);
app.listen(8080, () => {
    console.log('http://localhost:8080');
});
