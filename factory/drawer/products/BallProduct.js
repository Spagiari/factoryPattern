const creator = require('../drawerCreator');

class BallProduct {
  execute() {
    console.log('Drawing Ball');
  }
}

creator.register("Ball", BallProduct);

module.exports = BallProduct;

