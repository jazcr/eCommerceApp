const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      //references product model
      references: {
        model: 'product',
        key: 'id',
        unique: false
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        //references tag model
        model: 'tag',
        key: 'id',
        unique: false
      },
    }
  },

  // configurations
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
