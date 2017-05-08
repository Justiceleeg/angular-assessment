angular.module('assessment')
.controller('productDetailsCtrl', function($scope, shopService,$stateParams){

  var id = $stateParams.id
  $scope.getProductById = function(id) {
    shopService.getProductById(id).then( function(response){
      $scope.productInfo = response.data
    })
  }

  $scope.getProductById(id)

})
