import { Sequelize, Model, DataTypes } from "sequelize"

const sequelize = new Sequelize("mysql://root:asd123@localhost:3306/mydb")

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
    },
  },
  {
    tableName: "products",
    sequelize, // passing the `sequelize` instance is required
    timestamps: true
  }
)

async function doStuffWithUserModel() {
  const newProduct = await Products.create({
    location_name: "Johnny",
    preferredName: "John",
  })
  console.log(newProduct)

  const foundProduct = await Products.findOne({ where: { name: "Johnny" } })
  if (foundProduct === null) return
  console.log(foundProduct)
}


export default Products