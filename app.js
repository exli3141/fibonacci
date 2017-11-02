'use strict';
function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
  return new Error('引数が入っていません。');
}

const arg = process.argv[2]

for (let i = 0; i <= arg; i++) {
  console.log(fib(i));  
}
