const fruits = {
    apple: ['red', 'sweet', 'crunchy'],
    banana: ['yellow', 'soft', 'bendy'],
    orange: ['orange', 'juicy', 'citrusy'],
    grape: ['purple', 'small', 'seedless']
  };

  logObject(fruits);

  const redFruits = filterObject(fruits, (attributes) => attributes.includes('red'));
console.log(redFruits);

const fruitColors = mapObject(fruits, (attributes) => attributes[0]);
console.log(fruitColors);


const redFruitNames = filterAndMap(
    fruits,
    (attributes) => attributes.includes('red'),
    (attributes) => attributes[0].toUpperCase() + attributes.slice(1)
  );
  console.log(redFruitNames);
  




