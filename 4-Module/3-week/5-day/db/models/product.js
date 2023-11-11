'use strict';
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

	  // custom
	  // instance method
	getDiscountPrice(discountPercentage) {
		const discountAmount = (this.price * discountPercentage)
		return this.price - discountAmount
	}
  }
  Product.init({
	  name: {
		  type: DataTypes.STRING,
		  allowNull: false, // null
		  validate: {
			  notEmpty: true // ''
		  }
	  },
	  price: {
		  type: DataTypes.DECIMAL,
		  allowNull: false,
		  validate: {
			  notEmpty: true,
			  isDecimal: true
		  }
	  },
     stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
