# Myngapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
------------------------------------------------------------------------------
Angular Object Model
1. @angular/core
   1. Main Angular package that contains all standard objects
      1. NgModule, Component, Injectable, Pipe, Directive, etc.
2. @angular/compiler
   1. Compiler and build services, uses Ahead-of-Time (AoT) compiler
3. @angular/common
   1. CommonModule, used for Module loading 
   2. @angular/common/http
      1. HttpClientModule, the platform for Http Calls
4. @angular/platform-browser
   1. Provides BrowserModule to load the angular application in the browser
      1. We can have 'Only-One' browser module per application
5. @angular/platform-browser-dynamic
   1. Provides 'platformBrowserDynamic()' method to bootsprap (load) and initialize current application in browser
6. @angular/forms
   1. FormsModule for Two-Way databinding
   2. ReactiveFormsModule, for the Data/Model driven form
   3. Provides Validtors
7. @angular/router
   1. Provides platform for Routing using RouterModule 
Angular Dependencies
 1. core-js
    1. The Polyfills library to execute angular objects in browser after transpilation
 2. rxjs
    1. reactive extensions for JavaScript
       1. Provides the State management for Http Responses received in angular application
 3. zone.js
    1. For In browser StackTrace 
------------------------------------------------------------------------------
Decorators
1. @NgModule
   1. Class will be made ad Angular module to act as a container for
      1. Components
      2. Directives
      3. Pipes
      4. Services
   2. Properties
      1. imports, of the type array, this defines all standard angular and other modules to be imported and loaded in current application
      2. exports, of the type array, used to export contents of current modlue to other Angular modules
      3. declarations, of the type array, used to declare all components, directives and pipes of current application so that their instances will be generated
      4. providers, of the type array, used to register Angular services in DI Container
      5. bootstrap, of the type array, used to define components to be loaded and rendered in browser when app is loaded. These components must be declared in declarations.
2. @Component
   1. Applied on class to make it as components
   2. Properties
      1. selector, a custom HTML-TAG, that will be used to refer and load component
      2. template, inline HTML to the component
      3. templateUrl, external HTML file
      4. style/styleUrls, inline and external style respectively
3. @Directive
   1. class will be custom directive
4. @Injectable
   1. class will be used as service for DI
5. @Pipe
   1. class will be custom pipe
6. @Input
   1. Applied on public property of Component or Directive to aceepts data from its parent
7. @Output
   1. Applied on EventEmitted to emit an Event from Child component to parent
8. @HostListener
   1. Applied on public method to define the method execution for specific event
9. @ViewChild, @ViewChildren 


------------------------------------------------------------------------------
Angular Directives
1. Component Directives
2. Structural Directive
   1. *ngFor, *ngIf, *ngSwitch, *ngSwitchCase
3. Attribute Directives
   1. ngModel, invalid, valid
4. Note:
   1. Directive can accept inputs from their containers (aka parents) using @Input decorated public properties  
      1. @Input Decorated properties are used for property binding.
5. The Component Directive can use EventEmitter decorated with @Ouput to emit data to its parent
   1. The EventEmitter decorated with @Output can be used for EventBinding
      1. The Parent Component must subscribe to it.
      2. The Parent component will receive the data emitted from child using $event object.
6. Creation of Custom Directive
   1. Think of logic
      1. Reqauirement based coding of the directive
   2. Plan for @Input decorated properties
      1. They are used as Property Binding as well as apply effects 
   3. Plan for Methods those will be affected based on Events
      1. Methods applied with @HostListener()
