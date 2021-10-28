import { Sequelize, Model, DataTypes } from "sequelize"
const sequelize = require('../config/db')


class Products extends Model {
  public id!: number
  public location_name!: string
  public catalog_name!: string
  public color!: string
  public size!: string
  public quantity!: number
  public del_flag!: boolean
}


Products.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    location_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    catalog_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    del_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: "products",
    sequelize, // passing the `sequelize` instance is required
    timestamps: true
  }
)

Products.sync()


export default Products
