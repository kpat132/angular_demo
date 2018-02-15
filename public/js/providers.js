angular.module('myApp')
  .provider('Movies', function () {
    this.endpoint = ``;

    this.setEndpoint = function (endpoint) {
      this.endpoint = endpoint;
    }
    this.$get = ['$http',function ($http) {
      let endpoint = this.endpoint;
      let movies;

      $http.get(endpoint)
        .then(function (data) {
          movies = data.data;
        });
      return {
        getMovies: function () {
          return movies;
        }
      }
    }]
  })