angular.module(`myApp`)
.controller(`BooksController`, [`$scope`,`BookService`,function($scope,BookService){


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
}])