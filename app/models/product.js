// ----------------------------------------------------------
// Example Model
// ----------------------------------------------------------
'use strict';
const { v4: uuidv4 } = require('uuid')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    uuid: DataTypes.STRING,
    barCode: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    discount: DataTypes.DECIMAL,
    discountType: DataTypes.STRING,
    featuredLevel: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'products',
    timestamps: true,
    hooks: {
      beforeValidate: (model, options) => {
        model.uuid = uuidv4() // generate uuid
      }
    }
  });
  return Product;
};