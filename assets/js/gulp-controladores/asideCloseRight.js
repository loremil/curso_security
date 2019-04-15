banchileApp.controller('asideCloseRight', function($scope, $timeout, $mdSidenav, $log) {
  $scope.showDiv = false;
  $scope.mostrarReinversion = false;
  $scope.close = function() {

    // Component lookup should always be available since we are not using `ng-if`
    // reinversion- jorge01
    $mdSidenav('right').close()
      .then(function() {
        $log.debug("close RIGHT is done");
        $scope.showDiv = true;
        angular.element(document.getElementById('solicFondoMCtrl')).scope().mostrarReinversion = true;
        angular.element(document.getElementById('solicFondoMCtrl')).scope().mostrarCartera = false;

      });
    $mdSidenav('right2').close()
      .then(function() {
        $log.debug("close RIGHT is done");
        $scope.showDiv = true;

        angular.element(document.getElementById('solicFondoMCtrl')).scope().mostrarCartera = true;
        angular.element(document.getElementById('solicFondoMCtrl')).scope().mostrarReinversion = false;
      });
    $mdSidenav('right3').close()
      .then(function() {
        $log.debug("close RIGHT is done");
        $scope.showDiv = true;

        angular.element(document.getElementById('solicFondoMCtrl')).scope().mostrarCartera = true;
        angular.element(document.getElementById('solicFondoMCtrl')).scope().mostrarReinversion = false;
      });
    $mdSidenav('right4').close()
      .then(function() {
        $log.debug("close RIGHT is done");
        $scope.showDiv = true;

        angular.element(document.getElementById('solicFondoMCtrl')).scope().mostrarCartera = true;
        angular.element(document.getElementById('solicFondoMCtrl')).scope().mostrarReinversion = false;
      });
  };
  $scope.links= [{
      "link": '#/buscador-sitio',
    }];
});
