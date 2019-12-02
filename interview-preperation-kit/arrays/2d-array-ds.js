const array2d = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

function hourglassSum(arr) {
  const hourGlassSums = [];
  for (let i = 0; i <= arr.length - 3; i++) {
    for (let j = 0; j <= arr[i].length - 3; j++) {
      hourGlassSums.push(
        (
          ((arr[i][j]) + (arr[i][j+1]) + (arr[i][j+2])) + 
          (arr[i+1][j+1]) +
          ((arr[i+2][j]) + (arr[i+2][j+1]) + (arr[i+2][j+2]))
        )
      )
    }
  }
  return Math.max(...hourGlassSums)
}

const result = hourglassSum(array2d);

console.log(result);