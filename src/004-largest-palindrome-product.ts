/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 *
 */
function largestPalindrome(): number {
    let max = 0;
    for (let i = 100; i <= 999; i++) {
        for (let j = 100; j <= 999; j++) {
            const product = i * j;
            if (isPalindrome(product) && product > max) {
                max = product;
            }
        }
    }
    return max;
}

function isPalindrome(n: number): boolean {
    const s = n.toString();
    return s === s.split('').reverse().join('');
}

console.log(largestPalindrome());

/**
 * This solution defines two functions: largestPalindrome and isPalindrome.
 * The largestPalindrome function iterates through all the pairs of 3-digit numbers and checks if their product is a palindrome.
 * If it is, it updates the maximum palindrome found so far.
 * The isPalindrome function takes a number n as an argument and returns a boolean value indicating whether n is a palindrome.
 * It does this by converting n to a string, reversing the string, and comparing it to the original string.
 */
