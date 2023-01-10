/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 * @param n
 */
function largestPrimeFactor(n: number): number {
    let factor = 2;
    while (n > 1) {
        while (n % factor == 0) {
            n /= factor;
        }
        factor++;
    }
    return factor - 1;
}

console.log(largestPrimeFactor(600851475143));

/**
 * This solution defines a function largestPrimeFactor that takes a number n as an argument and returns the largest prime factor of n.
 * The function uses a while loop to iterate through the potential factors of n, starting with 2.
 * It maintains a variable factor that represents the current potential factor.
 * At each iteration, it divides n by factor as long as factor is a divisor of n.
 * When factor is no longer a divisor of n, the function increments factor and continues the loop.
 * When n becomes 1, the loop terminates and the function returns factor - 1 as the result.
 *
 * To test the function, we call it with the argument 600851475143 and print the result.
 * The output will be 6857, which is the correct answer to the problem.
 */
