const fs = require('fs');

fs.readFile('./binary.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('err', err);
  };

  const binarySequences = data.split('\n');

  const gammaRateValuesByIndex = {};

  binarySequences.map((sequence) => {
    sequence.split('')
      .map((val, idx) => {
        if (!gammaRateValuesByIndex[idx]) {
          gammaRateValuesByIndex[idx] = 0;
        };

        if (Number(val)) {
          gammaRateValuesByIndex[idx]++;
        } else {
          gammaRateValuesByIndex[idx]--;
        }
      }
    );
  });
  
  const gammaRateSequence = Object
    .values(gammaRateValuesByIndex)
    .map((val) => val > 0 ? 1 : 0);

  const epsilonRateSequence = gammaRateSequence.map((valIsTruthy) => valIsTruthy ? 0 : 1 );

  const totalPowerConsumption = parseInt(gammaRateSequence.join(''), 2) * parseInt(epsilonRateSequence.join(''), 2);
    
  // { totalPowerConsumption: 852500 }
  console.log({ totalPowerConsumption });

  // Part 2:
  const getOxygenGeneratorRating = (list, idx) => {
    const onesList = list.filter((sequence) => sequence[idx] === "1");
    const zerosList = list.filter((sequence) => sequence[idx] === "0");
    let listToKeep;

    if (onesList.length >= zerosList.length) {
      listToKeep = onesList;
    } else {
      listToKeep = zerosList;
    }

    if (listToKeep.length === 1) {
      return listToKeep;
    } else {
      return getOxygenGeneratorRating(listToKeep, idx + 1);
    }
  };

  const result = getOxygenGeneratorRating(inputList, 0);
  console.log(result);
});
