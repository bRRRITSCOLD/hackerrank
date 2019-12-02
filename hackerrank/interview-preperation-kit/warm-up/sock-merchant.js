function sockMerchant(n, ar) {
  let pairs = 0;
  ar.sort();
  for (let i = 0; i < n - 1; i++) {
    if (ar[i] === ar[i + 1]) {
      pairs++;
      i++;
    }
  }
  return pairs;
}

const nOne = 9;
const arrOne = [10, 20, 20, 10, 10, 30, 50, 10, 20];

const resultOne = sockMerchant(nOne, arrOne)

console.log(resultOne);