//Creates the module 'myApp'
//1st name of the module
// creation uses a 2nd array argument to import dependencies
angular.module('myApp', [`ngRoute`]);

//finds the module made on line 4 'myApp'
// retrieval has only one argument
let myApp = angular.module('myApp');

angular.module('myApp')
  .config(function (MoviesProvider, $routeProvider) {
    // config
    MoviesProvider.setEndpoint(`http://localhost:8080/movies`)

    $routeProvider
    .when(`/`, {
      controller: `HomeController`,
      templateUrl: `/views/home.html`
    })
    .when(`/books`,{
      controller: `BooksController`,
      templateUrl: `/views/books.html`
    })
    .when(`/movies`,{
      controller: `MoviesController`,
      templateUrl: `/views/movies.html`
    })
    .when(`/other`, {
      controller: `OtherController`,
      templateUrl: `/views/other.html`
    })
  })
  .run(['APP_VERSION', '$rootScope', function (APP_VERSION, $rootScope) {
   $rootScope.version = APP_VERSION;
    

  }]);

 