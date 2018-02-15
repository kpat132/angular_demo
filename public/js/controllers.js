angular.module(`myApp`)
.controller(`myController`, [`$scope`,`mainCharacter`,`CharacterVersionFactory`,`BookService`,function($scope, mainCharacter, CharacterVersionFactory, BookService){
  $scope.myFirstName = `krishna`;
  $scope.myModel = `Ready Player One`
  $scope.mainCharacter = mainCharacter;
  $scope.versionedCharacter = CharacterVersionFactory.getCharacter();

  $scope.books = BookService.getBooks();
  $scope.newBook = {
    title:``,
    author: ``
  };

  $scope.addBook = function(){
    let book = Object.assign({}, $scope.newBook);
    //OR
    // let otherBook = {
    //   title: $scope.newBook.title,
    //   author: $scope.newBook.author
    // };
    BookService.addBook(book);
    $scope.newBook.title = ``,
    $scope.newBook.author = ``
  }
}]);