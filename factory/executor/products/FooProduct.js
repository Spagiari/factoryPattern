const creator = require('../executorCreator');

class FooProduct {
  execute() {
    console.log('Doing FOO');
  }
}

creator.register("Foo", FooProduct);

module.exports = FooProduct;
