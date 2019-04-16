// return unique values from two arrays

const diffArray = (arr1, arr2) => {
  // check the first array for uniqueness
  const unic1 = arr1.filter(item => !arr2.includes(item));
  // check the second array for uniqueness
  const unic2 = arr2.filter(item => !arr1.includes(item));
  // concat arrays
  const merged = [...unic1, ...unic2];
  
  return merged
}

console.log(diffArray([1, 2, 3, 5, 99, 75], [1, 2, 3, 'diff', 4, 5]))
