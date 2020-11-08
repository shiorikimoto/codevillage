//10未満の自然数のうち, 3 もしくは 5 の倍数になっているものは 
//3, 5, 6, 9 の4つがあり, これらの合計は 23 になる.
//同じようにして, 1000 未満の 3 か 5 の倍数になっている数字の合計を求めよ.


let sum = 0;
for (let i = 3; i < 1000; i = i + 3) {
  sum = sum + i;
}

let sum2 = 0;
for (let i = 5; i < 1000; i = i + 5) {
  sum2 = sum2 + i;
}

let sum3 = 0;
for (let i = 15; i < 1000; i = i + 15) {
  sum3 = sum3 + i;
}


console.log(sum + sum2 - sum3)





//let sum = 0;
//for (let i = 3; i < 10; i = i + 3) {
//  sum = sum + i;
//}

//let sum2 = 0;
//for (let i = 5; i < 10; i = i + 5) {
//  sum2 = sum2 + i;
//}

//console.log(sum + sum2)

