angular.module('myApp')
.controller('myController', ['$scope','mainCharacter',`CharacterVersionFactory`,`BookService`,function($scope, mainCharacter, CharacterVersionFactory, BookService){
  $scope.myFirstName = 'krishna';
  $scope.myModel = 'Ready Player One'
  $scope.mainCharacter = mainCharacter;
  $scope.versionedCharacter = CharacterVersionFactory.getCharacter();
  $scope.books = BookService.getBooks();
}]);