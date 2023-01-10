/**
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms.
 * By starting with 1 and 2, the first 10 terms will be:
 *
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms. :
 */

function sumEvenFibonacci(limit: number): number {
    let sum = 0;
    let a = 1;
    let b = 2;
    while (b <= limit) {
        if (b % 2 == 0) {
            sum += b;
        }
        let c = a + b;
        a = b;
        b = c;
    }
    return sum;
}

console.log(sumEvenFibonacci(4000000));

/**
 * This code defines a function sumEvenFibonacci that takes a number limit as an argument and returns the sum of the even-valued terms in the Fibonacci sequence whose values do not exceed limit.
 * The function uses a while loop to iterate through the terms of the sequence, starting with the second term (2).
 * It maintains two variables a and b, which represent the current and the next terms of the sequence, respectively.
 * At each iteration, it checks if b is even, and if it is, it adds it to the sum variable.
 * Then it updates a and b to the next two terms of the sequence, and continues the loop.
 * To test the function, we call it with the argument 4000000 and print the result.
 * The output will be 4613732, which is the correct answer to the problem.
 *
 * F0=0,F1=1,Fn=Fn−1+Fn−2(n∈{2,3,4,…})
 */
