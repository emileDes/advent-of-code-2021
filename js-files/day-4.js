const fs = require('fs');

const processNumString = (string, idx) => (
  string.split(idx === 0 ? ',' : ' ').filter((char) => char !== '')
);

const partitionLists = (lists) => {
  let currentIdx = 0;

  return lists.reduce((acc, currentVal) => {
    if (currentVal === '') {
      currentIdx++;
      acc.push([]);
    } else {
      acc[currentIdx].push(processNumString(currentVal, currentIdx));
    };

    return acc;
  }, [[]]);
};

fs.readFile('./bingo.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  };

  const splitInput = data.split('\n');
  const [numbersDrawn, ...bingoCards] = partitionLists(splitInput);
  
  console.log(numbersDrawn);
});
