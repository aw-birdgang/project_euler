/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */
function smallestMultiple(n: number): number {
    let multiple = n;
    while (true) {
        let divisible = true;
        for (let i = 1; i <= n; i++) {
            if (multiple % i != 0) {
                divisible = false;
                break;
            }
        }
        if (divisible) {
            return multiple;
        }
        multiple++;
    }
}

console.log(smallestMultiple(20));

/**
 * (least common multiple)
 *
 */
