const creator = require('../drawerCreator');

class CarProduct {
  execute() {
    console.log('Drawing Car');
  }
}

creator.register("Car", CarProduct);

module.exports = CarProduct;

