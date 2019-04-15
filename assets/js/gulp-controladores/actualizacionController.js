//actualizacion de datos
banchileApp.controller('ActualizacionController', function($scope) {
  $scope.show = [];
  $scope.toggleClick = function(view) {
     $scope.show[view] = !$scope.show[view] ;
  }
  $scope.isActive = function() {
    if ($scope.pagarDesde == "1") {
      return true;
    } else {
      return false;
    }
  }
  $scope.isActive = function() {
    if ($scope.invertirPactos) {
      return true;
    } else {
      return false;
    }
  }
  $scope.demo = {
    showTooltip: false,
  };
});
