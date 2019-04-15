banchileApp.controller('menuPublicoMobil', function($scope, $mdPanel) {
  $scope.active6 = false;
  $scope._mdPanel = $mdPanel;
  $scope.showMenuPublicoMobil = function(event) {
    // var position = $scope._mdPanel.newPanelPosition()
    //      .relativeTo('.menuLogin--despliegue')
    //      .addPanelPosition($scope._mdPanel.xPosition.ALIGN_START, // $scope._mdPanel.yPosition.BELOW);
    var position = $scope._mdPanel.newPanelPosition()
      .absolute()
      .left('-300px')
      .top();
    var animation = $scope._mdPanel.newPanelAnimation();
    animation.withAnimation({
      open: 'menuPublicoMobil--open',
      close: 'menuPublicoMobil--close '
    });

    var config = {
      attachTo: angular.element(document.body),
      templateUrl: 'menuPublicoMobil.tmpl.html',
      position: position,
      animation: animation,
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: false,
      zIndex: 200,
      controller: menuPublicoMobil
    };

    $scope._mdPanel.open(config);

  };

  function menuPublicoMobil($scope) {

    $scope.asesoriaPersonalizada = true;
    $scope.productosyServicios = true;
    $scope.reputacionyRespaldo = true;

    $scope.clickMenu = function(itemMenu) {

      if (itemMenu == 1) {
        $scope.asesoriaPersonalizada = !$scope.asesoriaPersonalizada;
        $scope.productosyServicios = true;
        $scope.reputacionyRespaldo = true;
      } else if (itemMenu == 2) {
        $scope.asesoriaPersonalizada = true;
        $scope.productosyServicios = !$scope.productosyServicios;
        $scope.reputacionyRespaldo = true;
      } else if (itemMenu == 3) {
        $scope.asesoriaPersonalizada = true;
        $scope.productosyServicios = true;
        $scope.reputacionyRespaldo = !$scope.reputacionyRespaldo;
      }
    };
  };
});
