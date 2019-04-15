banchileApp.controller('BuscaNEWListadoCtrl', function($scope) {

  $scope.miTextoNEW = false;
  $scope.textoNEW = function(event) {
    $scope.miTextoNEW = !($scope.miTextoNEW);
    event.stopPropagation();

  };

  $scope.miFecha = false;
  $scope.fecha = function(event) {
    $scope.miFecha = !($scope.miFecha);
    event.stopPropagation();
    $scope.miTextoNEW = false;
  };


});
