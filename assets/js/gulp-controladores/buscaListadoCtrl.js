// Buscador por fecha en listados (tablas)
banchileApp.controller('BuscaListadoCtrl', function($scope, $location, $anchorScroll) {
  $scope.miTexto = false;
  $scope.expanded = false;
  $scope.expanded2 = false;
  $scope.animate = true;
  $scope.buscadorApertura = true;


  $scope.texto = function(event) {
    $scope.miTexto = !($scope.miTexto);
    $scope.buscadorApertura = !($scope.buscadorApertura);
    $scope.expanded = !$scope.expanded;
    $scope.expanded2 = !$scope.expanded2;
    event.stopPropagation();
    $scope.miFecha = false;
    if ($scope.expanded = true) {
      return true;
    } else {
      return false;
    }
  };

  $scope.expander = function() {
    $scope.expanded = !$scope.expanded;
    $scope.expanded2 = false;

  };

  $scope.miFecha = false;
  $scope.fecha = function(event) {
    $scope.miFecha = !($scope.miFecha);
    event.stopPropagation();
    $scope.miTexto = false;
  };

  $scope.miTexto = false;
  $scope.texto = function(event) {
    $scope.miTexto = !($scope.miTexto);
    event.stopPropagation();
    $scope.miFecha = false;
  };
  $scope.buscadorApertura = true;
  $scope.texto = function(event) {
    $scope.buscadorApertura = !($scope.buscadorApertura);
    event.stopPropagation();
    $scope.miFecha = false;
  };

  $scope.scrollTo = function(scrollLocation){
      $location.hash(scrollLocation);
      $anchorScroll.yOffset = 200;
      $anchorScroll();
  }

});
