angular.module(`myApp`)
  .controller(`myController`, [`$scope`, `mainCharacter`, `CharacterVersionFactory`, `BookService`,`Movies`, function ($scope, mainCharacter, CharacterVersionFactory, BookService,Movies) {
    $scope.myFirstName = `krishna`;
    $scope.myModel = `Ready Player One`
    $scope.mainCharacter = mainCharacter;
    $scope.versionedCharacter = CharacterVersionFactory.getCharacter();

    

    $scope.books = BookService.getBooks();
    $scope.newBook = {
      title: ``,
      author: ``
    };

    $scope.addBook = function () {
      let book = Object.assign({}, $scope.newBook);
      //OR
      // let otherBook = {
      //   title: $scope.newBook.title,
      //   author: $scope.newBook.author
      // };
      BookService.addBook(book);

      //clear inputs from form
      $scope.newBook.title = ``,
        $scope.newBook.author = ``
    }

    //movies
    $scope.movies = Movies.getMovies;
  }]);