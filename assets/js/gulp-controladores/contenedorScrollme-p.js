
banchileApp.controller('contenedorScrollme-p', function ($scope, screenSize, $timeout) {

  $scope.isMobile = screenSize.on('xs, sm', function (isMatch) {
    $scope.isMobile = isMatch;
  });
  $scope.productoScroll = [{
    "nombre": "FONDOS MUTUOS",
    "monto": "40.000.000",
    "porcentaje": "40%",
    "boton": "APORTAR",
    "barra": $scope.progressval,
    link: '#fondosmutuos-aporte'
  },
  {
    "nombre": "ACCIONES",
    "monto": "30.000.000",
    "porcentaje": "30%",
    "boton": "COMPRAR",
    "barra": $scope.progressval,
     link: '#personas-acciones-compra'
  },
  {
    "nombre": "CARTERA ACTIVA",
    "monto": "20.000.000",
    "porcentaje": "20%",
    "boton": "INGRESAR",
    "barra": $scope.progressval
  },
  {
    "nombre": "FONDOS DE INVERSIÓN",
    "monto": "5.000.000",
    "porcentaje": "5%",
    "boton": "APORTAR",
    "barra": $scope.progressval
  },
  {
    "nombre": "CAJA INTERNET",
    "monto": "5.000.000",
    "porcentaje": "5%",
    "boton": "APORTAR",
    "barra": $scope.progressval
  },
  ];

  $timeout(function () {
    $scope.$broadcast("rebuild:me");
  }, 1000);

});
