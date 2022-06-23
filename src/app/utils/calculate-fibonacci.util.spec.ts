import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import { calculateNthFibonacciNumber } from './calculate-fibonacci.util';

describe('Testing calculation of nth numbers the fibonacci sucession.', () => {
  beforeEach(() => {
  });

//   it('should ...', inject([FirebaseService], (service: FirebaseService) => {
//     expect(service).toBeTruthy();
//   }));

  it('If given negative values (-1), it should result 0', () => {
    const value = calculateNthFibonacciNumber(-1);
    expect(value).toEqual(0);
  });
  it('If given value 0, it should result 0', () => {
    const value = calculateNthFibonacciNumber(0);
    expect(value).toEqual(0);
  });
  it('If given value 1, it should result 1', () => {
    const value = calculateNthFibonacciNumber(1);
    expect(value).toEqual(1);
  });
  it('If given value 2, it should result 1', () => {
    const value = calculateNthFibonacciNumber(2);
    expect(value).toEqual(1);
  });
  it('If given value 3, it should result 2', () => {
    const value = calculateNthFibonacciNumber(3);
    expect(value).toEqual(2);
  });
  it('If given value 4, it should result 3', () => {
    const value = calculateNthFibonacciNumber(4);
    expect(value).toEqual(3);
  });
  it('If given value 5, it should result 5', () => {
    const value = calculateNthFibonacciNumber(5);
    expect(value).toEqual(5);
  });
  it('If given value 6, it should result 8', () => {
    const value = calculateNthFibonacciNumber(6);
    expect(value).toEqual(8);
  });
  it('If given value 7, it should result 13', () => {
    const value = calculateNthFibonacciNumber(7);
    expect(value).toEqual(13);
  });
  it('If given value 8, it should result 21', () => {
    const value = calculateNthFibonacciNumber(8);
    expect(value).toEqual(21);
  });
  it('If given value 9, it should result 34', () => {
    const value = calculateNthFibonacciNumber(9);
    expect(value).toEqual(34);
  });
  it('If given value 10, it should result 55', () => {
    const value = calculateNthFibonacciNumber(9);
    expect(value).toEqual(34);
  });
  it('If given value 50, it should result 12586269025', () => {
    const value = calculateNthFibonacciNumber(50);
    expect(value).toEqual(12586269025);
  });
});