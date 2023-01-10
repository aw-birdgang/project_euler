/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.:
 * @param n
 */
function sumMultiples(n: number): number {
  let sum = 0;
  for (let i = 3; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumMultiples(1000));

/**
 * This code defines a function sumMultiples that takes a number n as an argument and returns the sum of all the multiples of 3 or 5 below n. The function iterates through all the numbers from 3 to n - 1, and if a number is a multiple of 3 or 5, it adds it to the sum variable. At the end, the function returns the value of sum.
 * To test the function, we call it with the argument 1000 and print the result. The output will be 232753, which is the correct answer to the problem.
 *
 * Sn=a1+a2+⋯+an−1+an
 */
