const fs = require('fs');

fs.readFile('./depths.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  };

  const arrayNums = data.split('\n').map((string) => parseInt(string));
  let numIncreases = 0;

  arrayNums.forEach((num, idx, arr) => {
    const prevSet = [arr[idx - 2], arr[idx - 1], num];
    const currentSet = [arr[idx - 1], num, arr[idx + 1]];

    if (prevSet.every((val) => val !== undefined) && currentSet.every((val) => val !== undefined)) {
      const prevTotal = prevSet.reduce((acc, curVal) => acc + curVal);
      const currentTotal = currentSet.reduce((acc, curVal) => acc + curVal);

      if (currentTotal > prevTotal) {
        numIncreases++;
      }
    };
  });

  // 1. depthIncreases: 1688
  // 2. numIncreases: 1728
});
