banchileApp.controller('menuPublicoCrtl', function($scope) {
  $scope.activo = [];
  $scope.visible = [];
  $scope.mouseOver = function(position) {
    $scope.activo[position] = "activo-menuPublico";
    $scope.visible[position] = true;
  }
  $scope.mouseLeave = function(position) {
    $scope.activo[position] = "";
  }
  $scope.mouseClick = function(position) {
    $scope.activo[position] = "";
    $scope.visible[position] = false;
  }
});
