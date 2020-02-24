const factory = require('./factory');

const readline = require('readline');

let reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question('What do you want to do? (Foo/Bar)\n', answer => {
  try {
    const product = factory.executorCreator.factory(answer);
    product.execute();
  } catch (err) {
    console.error(err.message);
  }
  reader.question('What do you want to draw? (Ball/Car)\n', answer => {
    try {
      const product = factory.drawerCreator.factory(answer);
      product.execute();
    } catch (err) {
      console.error(err.message);
    }
    reader.close();
  });
});
