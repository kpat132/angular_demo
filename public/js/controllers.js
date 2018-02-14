angular.module('myApp')
.controller('myController', ['$scope','mainCharacter',function($scope, mainCharacter){
  $scope.myFirstName = 'krishna';
  $scope.myModel = 'Ready Player One'
  $scope.mainCharacter = mainCharacter;
}]);