"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const index_model_1 = require("../models/index.model");
class TodoController {
    home(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send('Todo Home');
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bunho = (0, uuid_1.v4)();
            try {
                const record = yield index_model_1.Todo.create(Object.assign(Object.assign({}, req.body), { bunho }));
                return res.json({ record, msg: "Successfully create Todo" });
            }
            catch (error) {
                return res.json({ msg: "fail to create", status: 500, route: "/create" });
            }
        });
    }
    readPagination(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const limit = req.query?.limit as number | undefined;
                // const offset = req.query?.offset as number | undefined;
                const limit = Number((_a = req.query) === null || _a === void 0 ? void 0 : _a.limit);
                const offset = Number((_b = req.query) === null || _b === void 0 ? void 0 : _b.offset);
                console.log("limit :: ", limit);
                console.log("offset :: ", offset);
                const records = yield index_model_1.Todo.findAll({ where: {}, limit, offset });
                return res.json(records);
            }
            catch (error) {
                return res.json({ msg: "fail to read", status: 500, route: "/read" });
            }
        });
    }
    readByID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { bunho } = req.params;
                const record = yield index_model_1.Todo.findOne({ where: { bunho } });
                return res.json(record);
            }
            catch (error) {
                return res.json({ msg: "fail to read", status: 500, route: "/read/:id" });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { bunho } = req.params;
                const record = yield index_model_1.Todo.findOne({ where: { bunho } });
                if (!record) {
                    return res.json({ msg: 'Can not find existing record' });
                }
                const updateRecord = yield record.update({ completed: !record.getDataValue('completed') });
                return res.json({ record: updateRecord });
            }
            catch (error) {
                return res.json({ msg: "fail to update", status: 500, route: "/update/:id" });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { bunho } = req.params;
                const record = yield index_model_1.Todo.findOne({ where: { bunho } });
                if (!record) {
                    return res.json({ msg: 'Can not find existing record' });
                }
                const deleteRecord = yield record.destroy();
                return res.json({ record: deleteRecord });
            }
            catch (error) {
                return res.json({ msg: "fail to delete", status: 500, route: "/delete/:id" });
            }
        });
    }
}
;
exports.default = new TodoController();
