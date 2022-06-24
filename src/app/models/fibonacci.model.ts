import { Timestamp } from '@angular/fire/firestore'

export interface FibonacciNumber extends Metadata {
    nthNumber: number;
    fibonacciNumber: number;
}

interface Metadata {
    user?: string;
    ts: string;
}