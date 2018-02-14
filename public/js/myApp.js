//Creates the module 'myApp'
//1st name of the module
// creation uses a 2nd array argument to import dependencies
angular.module('myApp', []);

//finds the module made on line 4 'myApp'
// retrieval has only one argument
let myApp = angular.module('myApp');

myApp
  .config(function () {
    // config
  })
  .run(function () {
    // initialize
  });