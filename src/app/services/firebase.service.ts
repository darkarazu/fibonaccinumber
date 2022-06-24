import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { FibonacciNumber } from '../models/fibonacci.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  dbCollection = this.db.collection<FibonacciNumber>('results');

  constructor(private db: AngularFirestore) {}

  getAllResults(): Observable<FibonacciNumber[]> {
    return this.dbCollection.valueChanges();
  }

  saveResult(result: FibonacciNumber) {
    return this.dbCollection.add(result);
  }

  // ! For using Firebase RealTime Database. Future Versions
  // saveFibonacciNumber(number: FibonacciNumber): Observable<FibonacciNumber> {
  //   return this.httpClient.post<FibonacciNumber>('https://fibonaccidb-7cb7e-default-rtdb.europe-west1.firebasedatabase.app/fibonaccinumbers.json', number);
  // }

  // getAllFibonacciNumbers(): Observable<FibonacciNumber[]> {
  //   return this.httpClient.get<FibonacciNumber[]>('https://fibonaccidb-7cb7e-default-rtdb.europe-west1.firebasedatabase.app/fibonaccinumbers.json');
  // }

}
