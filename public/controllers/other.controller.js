angular.module(`myApp`)
  .controller(`OtherController`, [`$scope`, `mainCharacter`, `CharacterVersionFactory`, function ($scope, mainCharacter, CharacterVersionFactory) {
   
    $scope.myFirstName = `krishna`;
    $scope.myModel = `Ready Player One`
    $scope.mainCharacter = mainCharacter;
    $scope.versionedCharacter = CharacterVersionFactory.getCharacter();

  }]);