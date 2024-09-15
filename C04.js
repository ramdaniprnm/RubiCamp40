function indexPrime(param1) {
  let count = 0;
  let num = 1;
  while (count < param1) {
    num++;
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
    }
  }
  return num;
}

console.log(indexPrime(4));
console.log(indexPrime(500));
console.log(indexPrime(37786));
