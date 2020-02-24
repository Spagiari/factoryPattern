class CreatorBase {
  constructor() {
    this.products = {};
  }

  register(productName, Class) {
    this.products[productName] = Class;
  }

  factory(productName) {
    const product = this.products[productName];
    if (!product) throw new Error('Invalid product name.');
    return new product();
  }
}

module.exports = CreatorBase;
