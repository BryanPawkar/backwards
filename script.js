// Write your code here:

const array = [1, 2, 3, 4, 5, 6];
const reverseArray = (arr) =>{
  const newArray = [];
  for(let i =0; arr.length > i; i++ ){
    newArray.unshift(arr[i]);
  }
  return newArray;
};
console.log(reverseArray(array));



const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];


