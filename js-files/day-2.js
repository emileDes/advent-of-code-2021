const fs = require('fs');

const getDirectionTotal = (allInstructions, direction) => (
  allInstructions
    .filter((instruction) => instruction.includes(direction))
    .map((instruction) => parseInt(instruction.replace(direction, '')))
    .reduce((prevVal, currentVal) => prevVal + currentVal, 0)
);

fs.readFile('./directions.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('err:', err);
  };

  const allDirections = data.split('\n').sort();

  const up = getDirectionTotal(allDirections, 'up');
  const down = getDirectionTotal(allDirections, 'down');
  const forward = getDirectionTotal(allDirections, 'forward');

  const depth = 0 + down - up;
  const horizontalPosition = forward;

  // { depth: 1032, horizontalPosition: 2052, multiplied: 2117664 }
});

const getValue = (direction) => parseInt(direction.match(/\d/g))

fs.readFile('./directions.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('err:', err);
  };

  let depth = 0;
  let horizontalPosition = 0;
  let aim = 0;

  data.split('\n').forEach((direction) => {
    const val = getValue(direction);

    if (direction.includes('up')) {
      // depth -= val;
      aim -= val;
    };

    if (direction.includes('down')) {
      // depth += val;
      aim += val;
    };

    if (direction.includes('forward')) {
      horizontalPosition += val;
      const depthVal = aim * val;

      depth += depthVal;
    }
  });
  // { depth: 1010437, horizontalPosition: 2052, tot: 2073416724 }
});
