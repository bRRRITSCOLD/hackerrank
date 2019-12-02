const array = [1,2,3,4,5];

function rotLeft(a, d) {
  for (let i = 0; i < a.length; i++) {
    const [spliced] = a.splice(0, 1);
    a.push(spliced);
  }
  return a
}

const result = rotLeft(array, 4);

console.log(result);