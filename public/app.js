angular.module('daanishSucks', [])

.run(function() {
   console.log("Does Daanish still suck?")
})

.controller('mainCtrl', function($scope, mainService) {
   $scope.daanish = {
      test: "Test"
   }
   mainService.getDaanish().then(function(response) {
      console.log(response)
      $scope.daanish = response.data
   })

})

.service('mainService', function($http) {
   this.getDaanish = function() {
      return $http.get('/daanish')
   }
})

