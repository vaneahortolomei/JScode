//linear search from 0 to 100

const array = [1,2,3,4,5,6,7,8,9,10];
let count = 0;

function findItem(array, item){
  for(let i = 0; i < array.length; i++){
    count += 1;
    if(array[i] === item){
      return `Index ${i}`
    }
  }
  return null;
}
console.log(findItem(array, 7));

console.log(count); // n количество итераций
