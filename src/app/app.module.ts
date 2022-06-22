import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FibonacciCalculatorComponent } from './fibonacci-calculator/fibonacci-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    FibonacciCalculatorComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatInputModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
