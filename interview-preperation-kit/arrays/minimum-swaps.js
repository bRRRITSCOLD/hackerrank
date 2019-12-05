function minimumSwaps(arr) {
  const arrLength = arr.length;
  const [
    indexValue,
    indexValueVisited
  ] = [[], []];
  for (let i = 0; i < arrLength; i++) indexValue[i] = {
    value: arr[i],
    index: i
  };
  indexValue.sort((a, b) => a.value - b.value);
  let swaps = 0;
  for (let i = 0; i < arrLength; i++) {
      if (indexValue[i].index == i || indexValueVisited[i]) continue;
      let cycles = 0;
      let j = i;
      while (!indexValueVisited[j]) {
          indexValueVisited[j] = true;
          j = indexValue[j].index;
          cycles++;
      }
      if (cycles > 0)  swaps += (cycles > 1) ? cycles - 1 : cycles;
  }
  return swaps;
}

const arr = [4,3,2,1]

const result = minimumSwaps(arr);

console.log(JSON.stringify(result));