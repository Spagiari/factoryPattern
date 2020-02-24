const creator = require('../executorCreator');

class BarProduct {
  execute() {
    console.log('Doing Bar');
  }
}

creator.register("Bar", BarProduct);

module.exports = BarProduct;
