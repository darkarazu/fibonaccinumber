import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { fadeIn, fadeOut } from '../animations/fade.animation';
import { FibonacciNumber } from '../models/fibonacci.model';
import { FirebaseService } from '../services/firebase.service';
import { SessionService } from '../services/session.service';
import { calculateNthFibonacciNumber } from '../utils/calculate-fibonacci.util';

@Component({
  selector: 'app-fibonacci-calculator',
  templateUrl: './fibonacci-calculator.component.html',
  styleUrls: ['./fibonacci-calculator.component.scss'],
  animations: [fadeIn, fadeOut]
})
export class FibonacciCalculatorComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  nthNumber = 0;

  paginationSize = 5;

  lastAddedResult: FibonacciNumber | undefined;
  results: FibonacciNumber[] = []
  dataSource: MatTableDataSource<FibonacciNumber> = new MatTableDataSource();
  displayedColumns = ['user', 'nth', 'result', 'timestamp'];

  username = '';

  constructor(private _firebaseService: FirebaseService, private _snackBar: MatSnackBar, private _sessionService: SessionService) {
    this.setDatasource(1);
  }

  ngOnInit() {
    this.initSubscriptions();
  }

  private initSubscriptions() {
    this._firebaseService.getAllResults().subscribe(results => {
      this.resultsChangeHandler(results);
    });
    this._sessionService.dealer$.subscribe(username => {
      this.username = username;
    });
  }

  setDatasource(page: number) {
    this.dataSource = new MatTableDataSource<FibonacciNumber>(this.results);
    if ( this.paginator ) {
      this.dataSource.paginator = this.paginator!;
      this.paginator.pageIndex = page;
      this.paginator!.page.next({
        pageIndex: page,
        pageSize: this.paginator!.pageSize,
        length: this.paginator!.length
      });
    }
  }

  resultsChangeHandler(results: FibonacciNumber[]) {
    this.results = results.sort( this.sortResults );
    this.gotoElementPage();
  }

  private gotoElementPage() {
    let page = 0;
    if (this.lastAddedResult) {
      const index = this.results.findIndex(findIndex => findIndex.nthNumber === this.lastAddedResult?.nthNumber);
      if (index >= 0) {
        page = Math.ceil((index + 1) / this.paginationSize);
      }
    }
    this.setDatasource(page  - 1);
  }

  calculateNumber() {
    const index = this.results.findIndex( findex => findex.nthNumber === this.nthNumber);
    const alreadyCalculated = index >= 0;
    if ( !alreadyCalculated ) {
      this.lastAddedResult = {
        nthNumber: this.nthNumber,
        fibonacciNumber: calculateNthFibonacciNumber(this.nthNumber),
        user: this.username,
        ts: new Date(Date.now()).toString()
      }
      this.saveNumberRequest();
    } else {
      this.lastAddedResult = {...this.results[index]};
      this.gotoElementPage();
      this.showAlreadyCalculatedSnackbar();
    }
  }

  private saveNumberRequest() {
    this._firebaseService.saveResult(this.lastAddedResult!).then(res => {
      console.log('%c⧭', 'color: #ff0000', res);
    });
  }

  showAlreadyCalculatedSnackbar() {
    this._snackBar.open('This number is already calculated!, check the table.', 'Close', { duration: 3000 });
  }

  paginationChanged(event: PageEvent) {
    this.paginationSize = event.pageSize;
  }

  sortResults(a: FibonacciNumber, b: FibonacciNumber) {
    if ( a.nthNumber < b.nthNumber) {
      return 0;
    } else {
      return 1;
    }
  }
}
