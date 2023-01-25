import Sequelize from 'sequelize';

import Todo from './todo.model';
import dbConfig from '../config/dbconfig';

const config = dbConfig['development'];
console.log('config', config);

export const sequelize = new Sequelize.Sequelize(
  config.database, config.username, config.password, config,
);

Todo.initiate(sequelize);
Todo.associate();

export { Todo };