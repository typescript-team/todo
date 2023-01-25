import morgan from 'morgan';
import express from 'express';
import { sequelize } from './models/index.model';
import TodoValidator from './validator/todoValidator';
import { errorHandleValidation } from './middle/errors';
import TodoController from './controller/index.control';

const app = express();
sequelize.sync({ force: false })
  .then(() => { console.log('데이터 베이스 연결'); })
  .catch((err) => { console.error(err); })
app.use(morgan('dev'));
app.use(express.json());

app.get('/', TodoController.home);
app.post('/create', TodoValidator.checkCreateTodo(), errorHandleValidation, TodoController.create);
app.get('/read', TodoValidator.checkReadTodo(), errorHandleValidation, TodoController.readPagination);
app.get('/read/:bunho', TodoValidator.checkBunhoParam(), errorHandleValidation, TodoController.readByID);
app.put('/update/:bunho', TodoValidator.checkBunhoParam(), errorHandleValidation, TodoController.update);
app.delete('/delete/:bunho', TodoValidator.checkBunhoParam(), errorHandleValidation, TodoController.delete);

app.listen(8080, () => {
  console.log('http://localhost:8080');
});