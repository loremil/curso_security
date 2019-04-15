// FAB ICON (GONZALO)
banchileApp.controller('fabCtrl', function($scope) {
  $scope.expandButton = false;
  $scope.aperturaFab = function() {
    $scope.expandButton = !$scope.expandButton;
  };

})
