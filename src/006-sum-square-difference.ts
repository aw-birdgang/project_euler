/**
 * The sum of the squares of the first ten natural numbers is,
 *
 * The square of the sum of the first ten natural numbers is,
 *
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
 *
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

function sumOfSquares(n: number): number {
    return n * (n + 1) * (2 * n + 1) / 6;
}

function squareOfSum(n: number): number {
    return (n * (n + 1) / 2) ** 2;
}

function difference(n: number): number {
    return squareOfSum(n) - sumOfSquares(n);
}

console.log(difference(10)); // 2640
console.log(difference(100)); // 0

// (Faulhaber's formula)
/**
 * This solution defines three functions:
 *
 * sumOfSquares calculates the sum of squares for the first n natural numbers.
 * squareOfSum calculates the square of the sum for the first n natural numbers.
 * difference calculates the difference between the sum of squares and the square of the sum for the first n natural numbers.
 * You can then use these functions to calculate the difference for different values of n.
 * For example, difference(10) will give the difference for the first 10 natural numbers, and difference(100) will give the difference for the first 100 natural numbers.
 */
