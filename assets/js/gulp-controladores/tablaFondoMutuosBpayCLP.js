banchileApp.controller('tablaFondoMutuosBpayCLP', function($scope) {
  $scope.sort = '+';
  $scope.fondopay = [

    {
      porcent: "",
      product: "Cash serie A",
      mont: "$12.600.000"
    }

  ];
  $scope.cuenta = [{
      cuenta: "Cuenta 1"
    }, {
      cuenta: "Cuenta 2"
    }, {
      cuenta: "Cuenta 3"
    }

  ];
});
