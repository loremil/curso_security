//solicitud aporte fondos mutuos-- Reinversión--jorge01
banchileApp.controller('solicFondoM', function($scope, $timeout, $mdSidenav, $log) {
  $scope.formData = {};
  $scope.sort = '+';
  $scope.solicfm = [{
    fondo: "Disponible",
    ncuenta: "$30.985,0979",
    moneda: "Pesos Chilenos",
    monto: "No tiene"
  }];

  $scope.toggleLeft = buildDelayedToggler('left');
  $scope.toggleRight = buildToggler('right');
  $scope.toggleRight2 = buildToggler('right2');
  $scope.toggleRight3 = buildToggler('right3');
  $scope.toggleRight4 = buildToggler('right4');

  $scope.mostrarReinversion = false;

  $scope.mostrarCartera = false;


  $scope.$watch('formData.destino', function() {
    console.log($scope.formData.destino);
    $scope.mostrarReinversion = false;
    $scope.mostrarCartera = false;
    $scope.$apply();
  },true);

  // $scope.isOpenRight = function() {
  //     return $mdSidenav('right').isOpen();
  //     return $mdSidenav('right2').isOpen();
  // };

  /**
   * Supplies a function that will continue to operate until the
   * time is up.
   */
  function debounce(func, wait, context) {
    var timer;

    return function debounced() {
      var context = $scope,
        args = Array.prototype.slice.call(arguments);
      $timeout.cancel(timer);
      timer = $timeout(function() {
        timer = undefined;
        func.apply(context, args);
      }, wait || 10);
    };
  }

  /**
   * Build handler to open/close a SideNav; when animation finishes
   * report completion in console
   */
  function buildDelayedToggler(navID) {
    return debounce(function() {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav(navID)
        .toggle()
        .then(function() {
          $log.debug("toggle " + navID + " is done");
        });
    }, 200);
  }

  function buildToggler(navID) {
    return function() {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav(navID)
        .toggle()
        .then(function() {
          $log.debug("toggle " + navID + " is done");
        });
    };
  }
})
