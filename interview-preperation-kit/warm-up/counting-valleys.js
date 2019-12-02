function countingValleys(n, s) {
  if (n === 1) return 1;
  else if (n === 0) return 0;
  const [level, mountains, valleys] = s.split('').reduce((counts, character) => {
    if (counts[0] === 0 && character === 'U')  counts[1]++;
    else if (counts[0] === 0 && character === 'D') counts[2]++;
    if (character === 'U')  counts[0]++;
    else if (character === 'D')  counts[0]--;
    return counts;
  }, [0, 0, 0]);

  return valleys;
}

const nOne = 8;
const arrOne = 'UDDDUDUU';

const resultOne = countingValleys(nOne, arrOne)

console.log(resultOne);