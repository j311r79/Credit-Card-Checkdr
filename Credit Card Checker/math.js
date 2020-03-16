function sumAll() {
  var sum = [];
  for(let i = 0; i < sumVar.length; i++) {
    sum.push((sumVar[i]*2)-10);
  }
  console.log(sum);
}
let sumVar = [1, 123, 500, 115, 44, 88];
sumAll(sumVar);
