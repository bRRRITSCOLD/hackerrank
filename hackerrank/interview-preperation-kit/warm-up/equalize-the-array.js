function equalizeArray(arr) {
  const counts = Object.values(
    arr.reduce((countObj, num) => {
      countObj[num] = !countObj[num] ? 1 : countObj[num] + 1;
      return countObj
    }, {})
  );
  return arr.length - Math.max(...counts)
}

const arrOne = [3, 3, 2, 1, 3];

const resultOne = equalizeArray(arrOne)

console.log(resultOne);