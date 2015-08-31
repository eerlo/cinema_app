angular.module('starter.services', [])

.factory('Filmes', function($http) {
  var URL = 'http://cinemas-eerlo.rhcloud.com/api/v1/filmes/';
  return {
    all: function() {
      return $http({method: 'GET',
                    url: URL,
                    dataType: 'json'});
    }
  };
});
