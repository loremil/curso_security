// controlador Agregar otro fomulario
banchileApp.controller('agregarOtro', ["$scope", function($scope) {
  $scope.mostrarBoton = false;
  $scope.items = [{
    alias: 'Proveedor de Metales',
    nombre: 'Juan Pérez',
    pais: '2',
    direccion: 'Huérfanos 670',

    nombreBanco: '3',
    direccionBanco: 'Huérfanos 670',
    paisBanco: '2',
    cuenta: '1',
    monedaBanco: '1',
    codigoSwiftBanco: '882349',
    codigoAbaBanco: 'Aba 89234-2424',
    codigoIbanBanco: '12313 IBAN',
    nombreSelect: '2',

    nombreBanco2: 'Banco de Perú',
    direccionBanco2: 'Avenida 670',
    paisBanco2: '1',
    cuenta2: '2',
    monedaBanco2: '2',
    codigoSwiftBanco2: '882349',
    codigoAbaBanco2: 'Aba 89234-2424',
    codigoIbanBanco2: '12313 IBAN',

  }];
  $scope.add = function() {
    $scope.items.push({});
  }
  $scope.remove = function(index) {
    $scope.items.splice(index, 1);
  }
  $scope.isActive = function() {
    if ($scope.pagarDesde == "1") {
      return true;
    } else {
      return false;
    }
  }

}]);
