# Fibonacci Calculator

This is a simple web app for calculation the Nth number of the Fibonacci Sequence. It can be used in real time, reflecting the requests made by other users for an ease of access to results.

## Demo

A demo can be found in my [Github Pages](https://darkarazu.github.io)

## Technology Stack

| Stack | Link |
| -----------|------|
| Frontend | [Angular.io](https://angular.io) |
| Backend | [Google Firebase](https://firebase.google.com) |
| Testing | [Jasmine](https://jasmine.github.io/) |
| Testing UI | [Karma](https://karma-runner.github.io/) |

Frontend wise, i decided to go with [Angular](https://angular.io) since it is a very robust and easy to start up Framework. It provides everything you need for Frontend development and more. Pros are its learning curve, the architechtural standardization it comes with and the large ammount tools it provides for implementing functionality, making it excelent for big projects. This is also a con since it can be overwhelming for small projects and probably wont be using the 100% of its potential.

In the backend i chose [Google Firebase](https://firebase.google.com) mostly because it saves time when it comes to getting the persistence layer of an application up and running. It comes with a wide variety of useful tools and most of them have a free model subscription for testing and learning purposes. For this matter i think it was the best option and decided to use **Firestore** since it offers a very powerfull API for accessing the data and even subscribing to the changes made to it.

Did a bit of testing using the testing suite provided by [Angular](https://angular.io). [Jasmine](https://jasmine.github.io/) for the actual testing and [Karma](https://karma-runner.github.io/) as the visualizer.

---

# Testing Locally

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
