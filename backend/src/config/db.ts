import { Sequelize } from "sequelize"

const sequelize = new Sequelize(String(process.env.DATABASE), String(process.env.DB_USER), String(process.env.DB_PASSWORD), {
  host: String(process.env.DB_HOST),
  dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});


// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

module.exports = sequelize