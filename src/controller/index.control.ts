import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';
import { Todo } from '../models/index.model';

class TodoController {
  async home(req: Request, res: Response) {
    res.send('Todo Home');
  }

  async create(req: Request, res: Response) {
    const bunho = uuidv4();
    try {
      const record = await Todo.create({ ...req.body, bunho });
      return res.json({ record, msg: "Successfully create Todo" });
    } catch (error) {
      return res.json({ msg: "fail to create", status: 500, route: "/create" });
    }
  }

  async readPagination(req: Request, res: Response) {
    try {
      // const limit = req.query?.limit as number | undefined;
      // const offset = req.query?.offset as number | undefined;
      const limit = Number(req.query?.limit);
      const offset = Number(req.query?.offset);

      console.log("limit :: ", limit);
      console.log("offset :: ", offset);

      const records = await Todo.findAll({ where: {}, limit, offset });
      return res.json(records);
    } catch (error) {
      return res.json({ msg: "fail to read", status: 500, route: "/read" });
    }
  }

  async readByID(req: Request, res: Response) {
    try {
      const { bunho } = req.params;
      const record = await Todo.findOne({ where: { bunho } });
      return res.json(record);
    } catch (error) {
      return res.json({ msg: "fail to read", status: 500, route: "/read/:id" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { bunho } = req.params;
      const record = await Todo.findOne({ where: { bunho } });

      if (!record) {
        return res.json({ msg: 'Can not find existing record' });
      }

      const updateRecord = await record.update({ completed: !record.getDataValue('completed') });
      return res.json({ record: updateRecord });
    } catch (error) {
      return res.json({ msg: "fail to update", status: 500, route: "/update/:id" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { bunho } = req.params;
      const record = await Todo.findOne({ where: { bunho } });

      if (!record) {
        return res.json({ msg: 'Can not find existing record' });
      }

      const deleteRecord = await record.destroy();
      return res.json({ record: deleteRecord });
    } catch (error) {
      return res.json({ msg: "fail to delete", status: 500, route: "/delete/:id" });
    }
  }
};

export default new TodoController();