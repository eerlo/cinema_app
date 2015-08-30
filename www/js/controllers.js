aa = 1;
angular.module('starter.controllers', [])
.controller('FilmesCtrl', function($scope, Filmes) {
 
  Filmes.all().success(function(data) {
    $scope.filmes =  data;
  });

});
