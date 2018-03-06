angular.module(`myApp`)
  .service(`BookService`, [function () {
    //this will fire immediately here
    //$http.get
    this.books = [
      {
        title: `Moby Dick`,
        author: `Herman Melville`
      },
      {
        title: `Enders Game`,
        author: `Orson Scott Card`
      },
      {
        title: `Rainbow Fish`,
        author: `Marcus Pfister`
      },
      {
        title: `Goodnight Moon`,
        author: 'Cindy Jurgens'
      }
    ];
    this.getBooks = function () {

      return this.books;
    }
    this.getBook = function () {
      return this.books[index];
    }
    this.addBook = function (book) {
      this.books.push(book);
    }
  }])