angular.module('starter.services', [])

.factory('Filmes', function($http) {
  var URL = 'http://cinemas-eerlo.rhcloud.com/api/v1/filmes/';
  return {
    all: function() {
      return $http.get(URL).success(function(response) {
        return response;
      });
    }
  };
});
