angular.module(`myApp`)
.service (`BookService`, [function() {
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
  this.getBooks = function(){
    return this.books;
  }
  this.getBook = function(){
    return this.books[index];
  }
}])