(function() {
  var app = angular.module('List', []);

  app.controller('catalogController', ['$http', function($http){
    var catalog = this;
    catalog.course = [];
    $http.get('/js/ajax.json').success(function(data){
        catalog.course = data;
    });
  }]);

})();
