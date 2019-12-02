function findPaths(c, paths) {
  if (c.length > 1) {
       let path1 = paths.slice();
       let path2 = paths.slice();

       path1 = (c[1] !== 1) ? [ ...path1, 1 ] : 0;
       
       path2 = (c[2] !== 1) ? [ ...path2, 2] : 0;
       if (path1 === 0 && path2 === 0) {
            paths = 0;
       } else if (path1 !== 0 && path2 === 0) {
            paths = findPaths(c.slice(1), path1);
       } else if (path1 === 0 && path2 !== 0) {
            paths = findPaths(c.slice(2), path2); 
       } else if (path1 !== 0 && path2 !== 0) {
            path1 = findPaths(c.slice(1), path1);
            path2 = findPaths(c.slice(2), path2);
            paths = (path1.length < path2.length) ? path1 : path2;
       } 
  }
   
  return paths;   
}

function jumpingOnClouds(c) {
  const min = 2;
  const max = 100;
  let jumps = 0;
  if (c.length >= min && c.length <= max) {
       jumps = findPaths(c, []);
  }
  return ((typeof jumps === "number") ? jumps : jumps.length);
}

const arrOne = [0, 1, 0, 0, 0];

const resultOne = jumpingOnClouds(arrOne)

console.log(resultOne);