////////// Prime Number ///////////

function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

///////// nth Prime number ///////////////////////////////////

function nthPrime(n) {
  let count = 0;
  let num = 2;

  while (count < n) {
    if (isPrime(num)) count++;
    num++;
  }
  return num - 1;
}

console.log(`10th prime number: ${nthPrime(10)}`);

////////// Factors of a number //////////////////////////////////

function factors(num) {
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) console.log(i);
  }
}

factors(12);

////////// Prime factors of a number ////////////////////////////////

function primeFactors(num) {
  let factors = [],
    divisor = 2;

  while (num > 2) {
    if (num % divisor === 0) {
      factors.push(divisor);
      num /= divisor;
    } else {
      divisor++;
    }
  }

  console.log(factors);
}

primeFactors(69);

///////////////// Fibonacci series of a number ////////////////////////

function fibonacci(n) {
  var fibo = [0, 1];

  if (n <= 2) return 1;

  for (var i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo[n];
}

fibonacci(12);
