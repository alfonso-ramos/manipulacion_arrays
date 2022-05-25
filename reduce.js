const numbers = [1,1,1]
const numbers2 = [2,4,8]

const res = 
numbers.reduce((sum,item) => sum+item, 0 );
console.log(res);
let sum = 0;
for (let i = 0; i < numbers2.length; i++) {
  const element = numbers2[i];
  sum = sum +element; 
}
console.log(sum);