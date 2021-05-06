import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('projetfullstack', 'root', 'root', {
  host: 'localhost',
  port: 3306,
  dialect: 'mariadb'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return sequelize.sync();
  })
  .then(() => console.log('Database synchronized'))
  .catch(err => console.error('Database error:', err));
