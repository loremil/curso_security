banchileApp.controller('menuRouteCrtl-popup',
  ['$scope', '$location', function ($scope, $location) {
    $scope.currentNavItem = 'popup';
    $scope.template = $scope.template1;
    $scope.nombreSeccion = "popup"
    $scope.changeMenu = function (template, name, location) {
      $scope.template = template;
      $scope.nombreSeccion = name;
      $location.path(ion);
      e.currentNavItem = location;
    }
  }]);

banchileApp.config(function ($routeProvider) {
  $routeProvider

    //Caja Abono
    .when('/popup-cajaInternet', {
      templateUrl: 'detalle/detalle-abono.html',
    })
    
    //Invertir Comprobantes
    .when('/comprobante-meVentaPersonas', {
      templateUrl: 'invertir/personas/personas-moneda-comprobanteVenta.html',
    })
    .when('/comprobante-ffmmAportePersonas', {
      templateUrl: 'invertir/personas/personas-fondosmutuos-comprobanteAporte.html',
    })
    .when('/comprobante-ffmmRescatePersonas', {
      templateUrl: 'invertir/personas/personas-fondosmutuos-comprobanteRescate.html',
    })
    .otherwise({
      redirectTo: '/home-persona'
    });
});