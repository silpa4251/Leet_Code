var fibGenerator = function* () {
  let n1 = 0;
  let n2 = 1;
  while (true) {
    yield n1;
    let n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
};
const gen = fibGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
