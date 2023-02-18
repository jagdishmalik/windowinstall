

const arrown = (a, b) => {
  return a + b;
};

let x = arrown(23, 89);
console.log(x);

let result;
result = '4' - '2'; 

console.log(result); // 2

result = '4' - 2;

console.log(result); // 2

result = '4' * 2;

console.log(result); // 8

result = '4' / 2;

console.log(result); // 2
result = 'hello' - 'world';

console.log(result); // NaN

result = '4' - 'hello';

console.log(result); // NaN

result = Number(null);

console.log(result);  // 0

 result = Number(' ')

console.log(result);  // 0




result = parseInt('20.01');

console.log(result); // 20

result = parseFloat('20.01');

console.log(result); // 20.01

result = +'20.01';

console.log(result); // 20.01

result = Math.floor('20.01');

console.log(result); // 20


