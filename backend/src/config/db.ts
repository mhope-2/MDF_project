import { Sequelize } from "sequelize"


// const sequelize = new Sequelize(String(process.env.DATABASE), String(process.env.DB_USER), String(process.env.DB_PASSWORD), {
//   host: String(process.env.DB_HOST),
//   dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// })

const sequelize = new Sequelize(String('mariadolldb'), String('mhope'), String('NpontuTestPassword'), {
  host: String('localhost'),
  dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
})




module.exports = sequelize