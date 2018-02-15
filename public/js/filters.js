angular.module(`myApp`)
.filter('beforeYearFilter', function(){
  return function(input, year){
    let output;

    if(!input){return [];}
    output = input.filter(function(movie){
      return movie.year < year;
    });

    return output;
  }
})