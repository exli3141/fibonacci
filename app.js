'use strict';
const memo = new Map();

memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  } else {
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    if (value === Infinity) {
      return new Error('引数が大きすぎます。');
    }
    return value;
  }
  return new Error('引数が入っていません。');
}

const arg = process.argv[2]

for (let i = 0; i <= arg; i++) {
  console.log(fib(i));  
}
