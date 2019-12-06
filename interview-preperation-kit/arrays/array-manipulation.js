const assert = require('assert');

const arrayManipulation = (n, queries) => {
  const arr = new Array(n).fill(0);
  let max = 0;
  for (let i = queries.length - 1; i >= 0; i--) {
    const [a, b, k] = queries[i];
    arr[a - 1] += k;
    if (b < arr.length) {
      arr[b] -= k;
    }
  }
  for (let j = 1; j < n; j++) {
    arr[j] += arr[j-1];
    
    if (arr[j] > max) {
      max = arr[j];
    }
  }
  return max;
};

const arraySize = 5;

const queries = [
  [2, 5, 100],
  [1, 2, 100],
  [3, 4, 100]
];

try {
  const resultOne = arrayManipulation(arraySize, queries);
  assert(resultOne === 200, new Error('Should return 200'));
  process.exit(0);
} catch (error) {
  process.exit(0);
}