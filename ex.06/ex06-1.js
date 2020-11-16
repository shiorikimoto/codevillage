//以下の数式をそれぞれ関数の組み合わせで記述してください。
//必要な関数は適宜作成してください。
// n * 100 - 5
// (n + 3) * 8 + 3

const mul = x => x * 100;
const sub = x => x - 5;
const add = x => x + 3;
const mul2 = x => x * 8;

const n = 1;
console.log(sub(mul(n)));//95
console.log(add(mul2(add(n))));//35
