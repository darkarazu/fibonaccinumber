export function calculateNthFibonacciNumber(nthNumber: number): number {
    if ( nthNumber === 0 ) {
        return 0
    } else if ( nthNumber === 1 ) {
        return 1;
    }
    if ( nthNumber > 1 ) {
        let actual = 0, n1 = 0, n2 = 1;

        for (let index = 0; index < nthNumber; index++) {
            actual = n1 + n2;
            n2 = n1;
            n1 = actual;
        }
        return actual;
        // return calculateNthFibonacciNumber(nthNumber - 1) + calculateNthFibonacciNumber(nthNumber - 2);
    }
    return 0;
}