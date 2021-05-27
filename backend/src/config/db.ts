import { Sequelize } from "sequelize"


const sequelize = new Sequelize(String(process.env.DATABASE), String(process.env.DB_USER), String(process.env.DB_PASSWORD), {
  host: String(process.env.DB_HOST),
  dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
})

// const sequelize = new Sequelize(String('mariadolldb'), String('mhope'), String('NpontuTestPassword'), {
//   host: String('localhost'),
//   dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// })


let test_db_conn = async () => {

  try {
  await sequelize.authenticate();
  console.log('MySQL DB Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database due to:', error);
}

}

test_db_conn()


module.exports = sequelize