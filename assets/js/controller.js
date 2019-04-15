// Var app es quien inicializa la aplicacién de angular
var banchileApp = angular.module('banchileApp', ['ngMaterial', 'ngMessages', 'ngRoute', 'ngAnimate', 'wt.responsive', 'angular-parallax', 'ksSwiper', 'ngScrollbar', 'matchMedia', 'dragularModule', 'hl.sticky', 'angular-svg-round-progressbar', 'timer', 'angular-scroll-animate']);

banchileApp.controller("active--bloque01", function($scope, $timeout) {
  $scope.changeIndex = function(index) {
    $scope.selected = index;
  }
  setTimeout(function(){
    $scope.$broadcast('reCalcViewDimensions');
  }, 500); 
  $scope.slider = {
   value: 5,
   options: {
     showTicksValues: true,
     stepsArray: [
       {value: 1, legend: '< 20%'},
       {value: 2, legend: '0 > al 20% y < 60%'},
       {value: 3, legend: ' > = a 60%'},
     ]
   }
 };
 //slider horizonte
 $scope.slider2 = {
  value: 1,
  options: {
    showTicksValues: true,
    stepsArray: [
      {value: 1, legend: '< 1 mes'},
      {value: 2, legend: '< 1 año'},
      {value: 3, legend: '1-3 años'},
      {value: 4, legend: '3-5 años'},
      {value: 5, legend: '> 5 años'},
    ]
  }
 };
 //slider3 liquidez
 $scope.slider3 = {
  value: 5,
  options: {
    showTicksValues: true,
    stepsArray: [
      {value: 1, legend: '0'},
      {value: 2, legend: '< 30%'},
      {value: 3, legend: ' > = 30%'},
      {value: 4, legend: ' No sé'},
    ]
  }
 };
 //slider4 y 5 Riesgo
 $scope.slider4 = {
  value: 1,
  options: {
    showTicksValues: true,
    stepsArray: [
      {value: 1, legend: '> 0%'},
      {value: 2, legend: ' > 5%'},
      {value: 3, legend: ' > 10%'},
      {value: 4, legend: ' > 20%'},
      {value: 5, legend: ' > 35%'},
    ]
  }
 };
 //slider3 liquidez
 $scope.slider5 = {
  value: 1,
  options: {
    showTicksValues: true,
    stepsArray: [
      {value: 1, legend: '9% a 11%'},
      {value: 2, legend: '7% a 13%'},
      {value: 3, legend: '5% a 15%'},
      {value: 4, legend: '0% a 20%'},
      {value: 5, legend: '10% a 30%'},
    ]
  }
 };
});

//actualizacion de datos
banchileApp.controller('ActualizacionController', function($scope) {
  $scope.show = [];
  $scope.toggleClick = function(view) {
     $scope.show[view] = !$scope.show[view] ;
  }
  $scope.isActive = function() {
    if ($scope.pagarDesde == "1") {
      return true;
    } else {
      return false;
    }
  }
  $scope.isActive = function() {
    if ($scope.invertirPactos) {
      return true;
    } else {
      return false;
    }
  }
  $scope.demo = {
    showTooltip: false,
  };
});

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

// var $scope, $location;
// var app = angular.module('app', []);
//
//
// app.service('anchorSmoothScroll', function(){
//
//     this.scrollTo = function(eID) {
//
//         var startY = currentYPosition();
//         var stopY = elmYPosition(eID);
//         var distance = stopY > startY ? stopY - startY : startY - stopY;
//         if (distance < 100) {
//             scrollTo(0, stopY); return;
//         }
//         var speed = Math.round(distance / 100);
//         if (speed >= 20) speed = 20;
//         var step = Math.round(distance / 25);
//         var leapY = stopY > startY ? startY + step : startY - step;
//         var timer = 0;
//         if (stopY > startY) {
//             for ( var i=startY; i<stopY; i+=step ) {
//                 setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
//                 leapY += step; if (leapY > stopY) leapY = stopY; timer++;
//             } return;
//         }
//         for ( var i=startY; i>stopY; i-=step ) {
//             setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
//             leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
//         }
//
//         function currentYPosition() {
//             // Firefox, Chrome, Opera, Safari
//             if (self.pageYOffset) return self.pageYOffset;
//             // Internet Explorer 6 - standards mode
//             if (document.documentElement && document.documentElement.scrollTop)
//                 return document.documentElement.scrollTop;
//             // Internet Explorer 6, 7 and 8
//             if (document.body.scrollTop) return document.body.scrollTop;
//             return 0;
//         }
//
//         function elmYPosition(eID) {
//             var elm = document.getElementById(eID);
//             var y = elm.offsetTop;
//             var node = elm;
//             while (node.offsetParent && node.offsetParent != document.body) {
//                 node = node.offsetParent;
//                 y += node.offsetTop;
//             } return y;
//         }
//     };
// });
//
// app.controller('anclaMapa', function($scope, $location, anchorSmoothScroll) {
//
//     $scope.gotoElement = function (eID){
//       // set the location.hash to the id of
//       // the element you wish to scroll to.
//       $location.hash('lugarMapa');
//       // call $anchorScroll()
//       anchorSmoothScroll.scrollTo('eID');
//     };
//   });


banchileApp.controller("anclaMapa", function ($scope, $location, $anchorScroll){
    $scope.scrollTo = function(scrollLocation){
        $location.hash(scrollLocation);
        $anchorScroll.yOffset = 200;
        $anchorScroll();
    }
});

/* Inicio scroll animación */
banchileApp.controller('animateCtrl', function($scope) {
  $scope.a_fadein = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadein');
  };
  $scope.a_fadeup1 = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadeup1');
  };
  $scope.a_fadeup2 = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadeup2');
  };
  $scope.a_fadeup3 = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadeup3');
  };
  $scope.a_fadeup4 = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadeup4');
  };
  $scope.a_fadeleft1 = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadeleft1');
  };
  $scope.a_fadeleft2 = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadeleft2');
  };
  $scope.a_fadeleft3 = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadeleft3');
  };
});
/* Fin scroll animación */

//Aside Close
banchileApp.controller('asideCloseLeft', function($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function() {
    // Component lookup should always be available since we are not using `ng-if`
    $mdSidenav('left').close()
      .then(function() {
        $log.debug("close LEFT is done");
      });
  };
})

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

banchileApp.controller('barraGraficoAsesoria', function($scope) {

  Highcharts.chart('barraGraficoAsesoria', {
    chart: {
      type: 'bar',
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      height: 50,
      spacingBottom: 0,
      spacingTop: 0,
      spacingLeft: 0,
      spacingRight: 0,
    },


    title: {
      text: ''
    },



    subTitle: {
      text: ''
    },


    tooltip: {
      enabled: false,
      followPointer: false,
      followTouchMove: false,
    },


    exporting: {
      enabled: false
    },



    yAxis: {
      gridLineWidth: 0,
      minorGridLineWidth: 0,
      min: 0,
      max: 100,
      useHTML: true,
      showInLegend: false,




    },

    xAxis: {
      floor: 0,
      ceiling: 100,
      categories: [''],
      gridLineWidth: 0,
      minorGridLineWidth: 0,
      useHTML: true,
      width: 2,
      showInLegend: false,



    },


    legend: {
      reversed: false
    },

    plotOptions: {
      series: {
        stacking: 'normal',
        showInLegend: false,
        animation: {
          duration: 2000
        }


      }



    },


    series: [

      {
        data: [100],
        color: '#E6E9EE',
        showInLegend: false,
        animation: false,
        borderWidth: 0,

        states: {
          hover: {
            enabled: false
          }
        }


      },


      {
        data: [20],
        animation: {
          duration: 1000
        },
        color: '#EAA000',
        showInLegend: false,
        borderWidth: 0,
        states: {
          hover: {
            enabled: false
          }
        }
      },


      {

        data: [30],
        animation: {
          duration: 500
        },
        color: '#69B4C5',
        showInLegend: false,
        borderWidth: 0,
        states: {
          hover: {
            enabled: false
          }
        }
      },

    ]
  });
});

banchileApp.controller('BasicDemoCtrl', function DemoCtrl($mdDialog) {
  this.settings = {
    printLayout: true,
    showRuler: true,
    showSpellingSuggestions: true,
    presentationMode: 'edit'
  };
  this.sampleAction = function(name, ev) {
    $mdDialog.show($mdDialog.alert()
      .title(name)
      .textContent('You triggered the "' + name + '" action')
      .ok('Great')
      .targetEvent(ev)
    );
  };

});

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

banchileApp.controller('BuscaNEWListadoCtrl', function($scope) {

  $scope.miTextoNEW = false;
  $scope.textoNEW = function(event) {
    $scope.miTextoNEW = !($scope.miTextoNEW);
    event.stopPropagation();

  };

  $scope.miFecha = false;
  $scope.fecha = function(event) {
    $scope.miFecha = !($scope.miFecha);
    event.stopPropagation();
    $scope.miTextoNEW = false;
  };


});

banchileApp.controller('busquedaArray', function($scope, $timeout) {
  $scope.resultados = [{

      "titulo": 'Fondos Mutuos',
      "link": '#/fondos-mutuos',
      "detalle": "AntarChile S.A. Moneda fue constituida en 1984 como una sociedad holding del Grupo de Empresas Angelini, que controla el 74,36%, holding del Grupo de Empresas Angelini, que controla el 74,36%.de las acciones de esta compañía. • A marzo de 2016, AntarChile S.A. administraba activos valorados en. US$ 20.982 millones. • Su principal inversión es la propiedad del 60,82% de Empresas Copec ...",
    }, {
      "titulo": 'Caja Abono',
      "link": '#/caja-abono',
      "detalle": "AntarChile S.A. Moneda fue constituida en 1984 como una sociedad holding del Grupo de Empresas Angelini, que controla el 74,36%, holding del Grupo de Empresas Angelini, que controla el 74,36%.de las acciones de esta compañía. • A marzo de 2016, AntarChile S.A. administraba activos valorados en. US$ 20.982 millones. • Su principal inversión es la propiedad del 60,82% de Empresas Copec ...",
    }, {
      "titulo": 'Moneda extranjera',
      "link": '#/pmoneda',
      "detalle": "AntarChile S.A. Moneda fue constituida en 1984 como una sociedad holding del Grupo de Empresas Angelini, que controla el 74,36%, holding del Grupo de Empresas Angelini, que controla el 74,36%.de las acciones de esta compañía. • A marzo de 2016, AntarChile S.A. administraba activos valorados en. US$ 20.982 millones. • Su principal inversión es la propiedad del 60,82% de Empresas Copec ...",
    }, {
      "titulo": 'Caja Abono',
      "link": '#/caja-abono',
      "detalle": "AntarChile S.A. Moneda fue constituida en 1984 como una sociedad holding del Grupo de Empresas Angelini, que controla el 74,36%, holding del Grupo de Empresas Angelini, que controla el 74,36%.de las acciones de esta compañía. • A marzo de 2016, AntarChile S.A. administraba activos valorados en. US$ 20.982 millones. • Su principal inversión es la propiedad del 60,82% de Empresas Copec ...",
    }, {
      "titulo": 'Moneda extranjera',
      "link": '#/pmoneda',
      "detalle": "AntarChile S.A. Moneda fue constituida en 1984 como una sociedad holding del Grupo de Empresas Angelini, que controla el 74,36%, holding del Grupo de Empresas Angelini, que controla el 74,36%.de las acciones de esta compañía. • A marzo de 2016, AntarChile S.A. administraba activos valorados en. US$ 20.982 millones. • Su principal inversión es la propiedad del 60,82% de Empresas Copec ...",
    }, {
      "titulo": 'Fondos Mutuos',
      "link": '#/fondos-mutuos',
      "detalle": "AntarChile S.A. Moneda fue constituida en 1984 como una sociedad holding del Grupo de Empresas Angelini, que controla el 74,36%, holding del Grupo de Empresas Angelini, que controla el 74,36%.de las acciones de esta compañía. • A marzo de 2016, AntarChile S.A. administraba activos valorados en. US$ 20.982 millones. • Su principal inversión es la propiedad del 60,82% de Empresas Copec ...",
    }, {
      "titulo": 'Patrimonio',
      "link": '#/patrimonio',
      "detalle": "AntarChile S.A. Moneda fue constituida en 1984 como una sociedad holding del Grupo de Empresas Angelini, que controla el 74,36%, holding del Grupo de Empresas Angelini, que controla el 74,36%.de las acciones de esta compañía. • A marzo de 2016, AntarChile S.A. administraba activos valorados en. US$ 20.982 millones. • Su principal inversión es la propiedad del 60,82% de Empresas Copec ...",
    }, {
      "titulo": 'Patrimonio',
      "link": '#/patrimonio',
      "detalle": "AntarChile S.A. Moneda fue constituida en 1984 como una sociedad holding del Grupo de Empresas Angelini, que controla el 74,36%, holding del Grupo de Empresas Angelini, que controla el 74,36%.de las acciones de esta compañía. • A marzo de 2016, AntarChile S.A. administraba activos valorados en. US$ 20.982 millones. • Su principal inversión es la propiedad del 60,82% de Empresas Copec ...",
    }, {
      "titulo": 'Patrimonio',
      "link": '#/patrimonio',
      "detalle": "AntarChile S.A. Moneda fue constituida en 1984 como una sociedad holding del Grupo de Empresas Angelini, que controla el 74,36%, holding del Grupo de Empresas Angelini, que controla el 74,36%.de las acciones de esta compañía. • A marzo de 2016, AntarChile S.A. administraba activos valorados en. US$ 20.982 millones. • Su principal inversión es la propiedad del 60,82% de Empresas Copec ...",
    }, {
      "titulo": 'Patrimonio',
      "link": '#/patrimonio',
      "detalle": "AntarChile S.A. Moneda fue constituida en 1984 como una sociedad holding del Grupo de Empresas Angelini, que controla el 74,36%, holding del Grupo de Empresas Angelini, que controla el 74,36%.de las acciones de esta compañía. • A marzo de 2016, AntarChile S.A. administraba activos valorados en. US$ 20.982 millones. • Su principal inversión es la propiedad del 60,82% de Empresas Copec ...",
    }

  ];
});

//listado movimientos Abono a caja Internet
banchileApp.controller('CartolaAbonoCaja', function($scope) {

  $scope.sort = '+producto';
  $scope.cartola = [

    {
      fecha: "01/01/2016",
      producto: "Fondos Mutuos",
      transaccion: "Aporte",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "$10.000.460.000",
      precio: "$6.000.460,0000",
      monto: "$10.000.460.000"
    }

  ];
});

//listado movimientos Compra deAcciones
banchileApp.controller('CartolaCompracciones', function($scope) {

  $scope.sort = '+producto';
  $scope.cartola = [

    {
      fecha: "01/01/2016",
      producto: "Fondos Mutuos",
      transaccion: "Aporte",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "$10.000.460.000",
      precio: "$6.000.460,0000",
      monto: "$10.000.460.000"
    }

  ];
});
//listado movimientos Compra de Acciones

banchileApp.controller('CartolaMonedaextranj', function($scope) {

  $scope.sort = '+producto';
  $scope.cartola = [

    {
      fecha: "01/01/2016",
      producto: "Fondos Mutuos",
      transaccion: "Aporte",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "$10.000.460.000",
      precio: "$6.000.460,0000",
      monto: "$10.000.460.000"
    }

  ];
});

banchileApp.controller('CartolaRetiroCaja', function($scope) {

  $scope.sort = '+producto';
  $scope.cartola = [

    {
      fecha: "01/01/2016",
      producto: "Fondos Mutuos",
      transaccion: "Aporte",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "$10.000.460.000",
      precio: "$6.000.460,0000",
      monto: "$10.000.460.000"
    }

  ];
});

banchileApp.controller('CartolaVentaacciones', function($scope) {

  $scope.sort = '+producto';
  $scope.cartola = [

    {
      fecha: "01/01/2016",
      producto: "Fondos Mutuos",
      transaccion: "Aporte",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "$10.000.460.000",
      precio: "$6.000.460,0000",
      monto: "$10.000.460.000"
    }

  ];
});

//listado movimientos Venta de Modeda Extranjera
banchileApp.controller('CartolaVentaMonedaextranj', function($scope) {

  $scope.sort = '+producto';
  $scope.cartola = [

    {
      fecha: "01/01/2016",
      producto: "Fondos Mutuos",
      transaccion: "Aporte",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "$10.000.460.000",
      precio: "$6.000.460,0000",
      monto: "$10.000.460.000"
    }

  ];
});

banchileApp.constant('ConfigHighcharts', {

  color: {
    'colorCentroGradient': '#CDFFF9',
    'colorExteriorGradient': '#37F6DB',
    'colorLineaGradient1': '#CDFFF9',
    'colorLineaGradient2': '#CDFFF9',
    'colorNegro': '#000000'
  }

});

banchileApp.controller('contenedorScrollme-e', function($scope, screenSize, $timeout) {

  $scope.isMobile = screenSize.on('xs, sm', function(isMatch) {
    $scope.isMobile = isMatch;
  });
  $scope.productoScroll = [{
      "nombre": "FONDOS MUTUOS",
      "monto": "40.000.000",
      "porcentaje": "40%",
      "boton": "APORTAR",
      "barra": $scope.progressval,
      link: '#fondosmutuos-aporte-clp'
    },
    {
      "nombre": "ACCIONES",
      "monto": "30.000.000",
      "porcentaje": "30%",
      "boton": "COMPRAR",
      "barra": $scope.progressval,
      link: '#empresas-acciones-compra'
    },
    {
      "nombre": "CAJA INTERNET",
      "monto": "30.000.000",
      "porcentaje": "30%",
      "boton": "ABONAR",
      "barra": $scope.progressval,
      link: '#caja-abono'
    },

  ];

  $timeout(function() {
    $scope.$broadcast("rebuild:me");
  }, 1000);

});


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

banchileApp.controller('contenedorScrollme2', function($scope, screenSize, $timeout) {

  $scope.isMobile = screenSize.on('xs, sm', function(isMatch) {
    $scope.isMobile = isMatch;
  });

  $scope.productoScroll = [{
      "nombre": "Ahorro Serie E",
      "familia": "Money Market",
      "porcentaje": "22,55%",
      "barra": $scope.progressval
    },
    {
      "nombre": "Depósito Serie E",
      "familia": "Deuda",
      "porcentaje": "22,55%",
      "barra": $scope.progressval
    },
    {
      "nombre": "Deuda Estatal UF 3-5 años..",
      "familia": "Deuda",
      "porcentaje": "4,95%",
      "barra": $scope.progressval
    },
  ];

  $scope.productoScroll2 = [{
      "nombre": "Horizonte Serie E",
      "familia": "Deuda",
      "porcentaje": "24,22%",
      "barra": $scope.progressval

    },
    {
      "nombre": "Retorno LP UF Serie E",
      "familia": "Balanceado",
      "porcentaje": "7,27%",
      "barra": $scope.progressval
    },
    {
      "nombre": "Utilidades Serie E",
      "familia": "Accionario",
      "porcentaje": "10,94%",
      "barra": $scope.progressval
    },
  ];

  $timeout(function() {
    $scope.$broadcast("rebuild:me");
  }, 1000);

});

/*  inicio controllerDialogoModales */
banchileApp.controller('dialogCtrl', function ($scope, $mdDialog, $timeout) {
  $scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.contratosNoFirmados =[
    {
      name: 'Registro de Cliente',
      fechaGeneracion: '05/01/2017',
      icono: 'border_color'
    },  {
      name: 'Facturación Electrónica',
      fechaGeneracion: '05/01/2017',
      icono: 'border_color',
      error: true
    },{
      name: 'Declaración de Origen de Fondos',
      fechaGeneracion: '05/01/2017',
      icono: 'border_color'
    },{
      name: 'Contrato Servicio Internet',
      fechaGeneracion: '05/01/2017',
      icono: 'border_color'
    }
  ]

  $scope.contratosFirmados =[
    {
      name: 'Registro de Cliente',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Deber Tributario Extranjero',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app',
      error: true
    },{
      name: 'Contrato General de Fondos',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Perfil de Inversionista',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Contrato de Custodia',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Declaración PEP',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },
  ]
  $scope.documentosFFMM =[
    {
      name: 'Folleto Informativo',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Reglamento Interno',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app',
      error: true
    },{
      name: 'Contrato General de Fondos',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Cartera de Inversión - Nacional',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Cartera de Inversión - Extranjera ',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Cartera de Inversión - Futuros ',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Cartera de Inversión - Opciones',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Estados Financieros Anuales - 2012 ',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Estados Financieros Anuales - 2013 ',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Estados Financieros Anuales - 2014',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Estados Financieros Anuales - 2015',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },
  ]
  $scope.contratosCertificados =[
    {
      name: 'Certificado de dividendos de Acciones',
      periodo: 'Abril 2015',
      publicacion: '03/12/2016',
      icono: 'get_app'
    },  {
      name: 'Facturas 1891',
      periodo: 'Abril 2015',
      publicacion: '03/12/2016',
      icono: 'get_app',
      error: true
    },{
      name: 'Certificado de depósitos Convenidos',
      periodo: 'Abril 2015',
      publicacion: '03/12/2016',
      icono: 'get_app'
    },{
      name: 'Fondos Mutuos No Acogidos 57 Bis',
      periodo: 'Abril 2015',
      publicacion: '03/12/2016',
      icono: 'get_app'
    }
  ]
  $scope.contratosFacturas =[
    {
      name: 'Factura Exenta Electrónica',
      periodo: 'Abril 2015',
      publicacion: '03/12/2016',
      icono: 'get_app'
    },  {
      name: 'Factura Exenta Electrónica',
      periodo: 'Abril 2015',
      publicacion: '03/12/2016',
      icono: 'get_app',
      error: true
    },{
      name: 'Factura Exenta Electrónica',
      periodo: 'Abril 2015',
      publicacion: '03/12/2016',
      icono: 'get_app'
    },{
      name: 'Factura Exenta Electrónica',
      periodo: 'Abril 2015',
      publicacion: '03/12/2016',
      icono: 'get_app'
    }
  ]
  $scope.contratosComprobantes =[
    {
      name: 'Comprobante',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },  {
      name: 'Comprobante',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app',
      error: true
    },
  ]
  $scope.informes =[
    {
      name: 'Informe Apertura Bursátil',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },
  ]


  $scope.showAdvanced = function (ev, contrato) {
    contrato.downloading = true;

    $timeout(function(){
      contrato.downloading = false;
      if(contrato.error){
        contrato.icono = 'close';
        contrato.classIcon = 'icon--error';
        contrato.classBorder = 'border--error';
        $timeout(function(){
          contrato.icono = 'border_color';
          contrato.classIcon = '';
          contrato.classBorder = '';
        },2000);
      }else{
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'modales/documentos--contrato.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      });
        contrato.icono = 'done';
        contrato.classIcon = 'icon--exito';
        contrato.classBorder = 'border--exito';
      }
    },3000);
  };

  $scope.showPrerenderedDialog = function (ev) {
    $mdDialog.show({
      contentElement: '#myDialog',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    });
  };

  function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
      $mdDialog.hide();
    };

    $scope.cancel = function () {
      $mdDialog.cancel();
    };

    $scope.answer = function (answer) {
      $mdDialog.hide(answer);
    };
  }
});
/*  fin controllerDialogoModales */

//Editar Beneficiario
banchileApp.controller('EditarBeneficiarioCtrl', function($scope) {

  $scope.beneficiario = {
    alias: 'Proveedor de Metales',
    nombre: 'Juan Pérez',
    pais: '2',
    direccion: 'Huérfanos 670',

    nombreBanco: 'Banco de Chile',
    direccionBanco: 'Huérfanos 670',
    paisBanco: '2',
    cuenta: '1',
    monedaBanco: '1',
    codigoSwiftBanco: '882349',
    codigoAbaBanco: 'Aba 89234-2424',
    codigoIbanBanco: '12313 IBAN',

    nombreBanco2: 'Banco de Perú',
    direccionBanco2: 'Avenida 670',
    paisBanco2: '1',
    cuenta2: '2',
    monedaBanco2: '2',
    codigoSwiftBanco2: '882349',
    codigoAbaBanco2: 'Aba 89234-2424',
    codigoIbanBanco2: '12313 IBAN',

    nombreBancoIntermediario: 'Banco de Chile',
    direccionBancoIntermediario: 'Huérfanos 670',
    paisBancoIntermediario: '2',
    cuentaIntermediario: '3',
    codigoSwiftBancoIntermediario: '882349',
    codigoAbaBancoIntermediario: 'Aba 89234-2424',
    codigoIbanBancoIntermediario: '12313 IBAN',

    nombreBancoIntermediario2: 'Banco de Perú',
    direccionBancoIntermediario2: 'Avenida 670',
    paisBancoIntermediario2: '1',
    cuentaIntermediario2: '4',
    codigoSwiftBancoIntermediario2: '882349',
    codigoAbaBancoIntermediario2: 'Aba 89234-2424',
    codigoIbanBancoIntermediario2: '12313 IBAN',
  };
});

// Editar Empresa
banchileApp.controller('EditarEmpresaCtrl', function($scope) {

  $scope.empresa = {
    nombre: 'Agrícola Campo Lindo Ltda.',
    rut: '17.777.333-3',
    cuenta: '31233',
  };
});

banchileApp.controller('EditarUsuarioCtrl', function($scope, $filter) {

  var active = false;
  $scope.usuario = {
    agente: 'Internet',
    apellidoMaterno: 'Parada',
    apellidoPaterno: 'Muñoz',
    beneficiotributario: 'No',
    cantidad: '544',
    cantidad2: '100',
    cartera: 'Agresiva',
    comision: '$46.000',
    comisionUSD: 'US$1',
    comisionIva: '$20.000',
    cuentaCartera: '1',
    cuentadelFondo: '2',
    destino: 'Cuenta Corriente',
    destino2: 'Retiro Casa Matriz',
    destino3: 'Transferencia a Tercero',
    direccion: 'Huérfanos 670 piso 3, Santiago',
    email: 'javier@gmail.com',
    estado: 'Asignado',
    estado2: 'Aprobado',
    fecha: '25/04/2017',
    fechaCobro: '25/04/2017',
    fechaSolicitud: '25/04/2017',
    fechaCurse: '25/04/2017',
    fechaSolicitud: '24/04/2017',
    fechaSolicitud2: '24/04/2017 11:15:00',
    fondo: 'Retorno Accionario Largo Plazo',
    instruye: 'Carlos Quezada',
    mercado: 'Nacional',
    moneda: 'USD/CLP',
    nombre: 'Gonzalo Ahumada G.',
    nombres: 'Javier Ignacio',
    noperacion: '535547',
    numerocuotas: '12,0022',
    origen: 'Caja Internet',
    origen2: 'Botón de pago',
    plan: 'No',
    precio: '$35.976',
    precio2: '$644,00',
    precio3: 'US$1,17',
    remuneracion: 'No',
    respaldo: 'factura',
    rut: '17.777.333-3',
    serie: 'CCU',
    numero: '0991234567',
    monto: '313,0022',
    montoUSD: 'US$1.000',
    numberopcional: '0284567654',
  };

  var self = this;
  self.contacts1 = [{
    'id': 1,
    'fullName': 'Administrador',
    'lastName': 'Administrador: Encargado de la configuración del uso del Canal.',
    isDisabled: true
  }, {
    'id': 2,
    'fullName': 'Digitador',
    'lastName': 'Digitador: Su función es dar V.B. a las operaciones ingresadas por el Digitador.',
    isDisabled: false
  }, {
    'id': 3,
    'fullName': 'Visador',
    'lastName': 'Visador: Su función es autorizar pagos a tercero. Autoriza la transferencia de pago a proveedores.',
    isDisabled: false
  }, {
    'id': 4,
    'fullName': 'Autorizador',
    'lastName': 'Autorizador: Su función es registar las distintas operaciones en Canal.',
    isDisabled: false
  }];
  self.selectedId1 = 4;
  self.selectedUser1 = function() {
    return $filter('filter')(self.contacts1, {
      id: self.selectedId1
    })[0].lastName;
  };

  $scope.setButton = function() {
    if ($scope.active == true) {
      $scope.active = false;
    } else {
      $scope.active = true;
    }
  }

  $scope.getState = function() {
    if ($scope.active) {
      return true;
    } else {
      return false;
    }
  }
  $scope.data = {
    'cb1': 'Activo',
    isDisabled: true
  };

});

// menu expandible
banchileApp.controller('expandCollapseCtrl', function($scope) {
  $scope.active = true;
  $scope.active1 = true;
  $scope.active2 = true;
  $scope.active3 = true;
  $scope.active4 = true;
  $scope.active7 = false;
  $scope.active8 = true;
  $scope.menuMovil = true;
  $scope.mouseClickN = function(position) {
    $scope.activo[position] = "";
    $scope.visible[position] = true;
  }

});
// fin menu expandible

// FAB ICON (GONZALO)
banchileApp.controller('fabCtrl', function($scope) {
  $scope.expandButton = false;
  $scope.aperturaFab = function() {
    $scope.expandButton = !$scope.expandButton;
  };

})

banchileApp.controller('FavoritosCtrl', function($scope, $http, $element, dragularService, $filter, $mdDialog, $mdMedia) {

  $scope.palabraClave = "";

  $scope.init = function() {

    $scope.consultaTipoIndicador();

    $scope.consultaIndicador();

  };

  $scope.tipoInd = new Array();

  $scope.tipoIndM = new Array();

  $scope.tipoIndSel = new Object();

  $scope.tipoIndMSel = new Object();

  $scope.consultaTipoIndicador = function() {

    var parameters = {
      req: "{}"
    };

    var config = {
      params: parameters
    };

    $http.get("./assets/json/tipoIndicador.json", config)
      .success(function(data, status, headers, config) {

        $scope.tipoInd.length = 0;

        var tipoInd = new Object();

        tipoInd.item = -1;
        tipoInd.nombre = "Todas";
        tipoInd.tipo = "";
        tipoInd.hide = true;

        $scope.tipoIndM.push(tipoInd);


        if (data.estadoOperacion.codigoOperacion == "000") {

          for (var i = 0; i < data.tipo.length; i++) {

            var tipoInd = new Object();

            tipoInd.item = data.tipo[i].idTipo;
            tipoInd.nombre = data.tipo[i].descripcion;
            tipoInd.tipo = data.tipo[i].codTipo;
            tipoInd.hide = false;

            $scope.tipoIndM.push(tipoInd);
            $scope.tipoInd.push(tipoInd);

          }

        } else {
          console.log("Error al ejecutar servicio Tipo de Indicador");
        }

        $scope.tipoIndSel = $scope.tipoInd[0];
        $scope.tipoIndMSel = $scope.tipoIndM[0];

      })
      .error(function(data, status, header, config) {
        console.log("Error al ejecutar servicio Tipo de Indicador");
      });

  };

  $scope.indicadores = new Array();

  $scope.consultaIndicador = function() {

    var parameters = {
      req: "{}"
    };

    var config = {
      params: parameters
    };

    $http.get("./assets/json/indicadores.json", config)
      .success(function(data, status, headers, config) {

        $scope.indicadores.length = 0;

        if (data.estadoOperacion.codigoOperacion == "000") {

          for (var i = 0; i < data.nemo.length; i++) {

            var ind = new Object();

            ind.item = i;
            ind.tipo = data.nemo[i].codTipo;
            ind.tipoNombre = ($filter('filter')($scope.tipoInd, {
              tipo: data.nemo[i].codTipo
            })[0]).nombre;
            ind.nombre = data.nemo[i].nemotecnico;
            ind.hide = false;
            ind.idNemotecnico = data.nemo[i].idNemotecnico;

            $scope.indicadores.push(ind);

          }

        } else {
          console.log("Error al ejecutar servicio Consulta Indicador");
        }

      })
      .error(function(data, status, header, config) {
        console.log("Error al ejecutar servicio Consulta Indicador");
      });

  };

  $scope.indDest = new Array();

  for (var i = 0; i < 5; i++) {

    var itemIndDest = new Object();

    itemIndDest.nombre = "Disponible";
    itemIndDest.tipo = "";
    itemIndDest.tipoNombre = "";
    itemIndDest.item = i;
    itemIndDest.hide = true;

    $scope.indDest.push(itemIndDest);
  }


  $scope.menu = new Array();

  for (var i = 0; i < 3; i++) {

    var menuItem = new Object();

    if (i == 0) {

      menuItem.nombre = "Consultar";
      menuItem.subMenu = new Array();

      for (var j = 0; j < 3; j++) {

        var sunbMenuItem = new Object();

        if (j == 0) {
          sunbMenuItem.nombre = "Resumen";
          sunbMenuItem.item = j;
          sunbMenuItem.icono = "banicon-resumen indicadoresFavoritos--iconoLista";
          sunbMenuItem.flagCheck = false;
        } else if (j == 1) {
          sunbMenuItem.nombre = "Patrimonio";
          sunbMenuItem.item = j;
          sunbMenuItem.icono = "banicon-patrimonio indicadoresFavoritos--iconoLista";
          sunbMenuItem.flagCheck = false;
        } else if (j == 2) {
          sunbMenuItem.nombre = "Movimiento";
          sunbMenuItem.item = j;
          sunbMenuItem.icono = "banicon-movimientos indicadoresFavoritos--iconoLista";
          sunbMenuItem.flagCheck = false;
        }


        menuItem.subMenu.push(sunbMenuItem);
      }

      $scope.menu.push(menuItem);

    } else if (i == 1) {

      menuItem.nombre = "Invertir";
      menuItem.subMenu = new Array();

      var sunbMenuItem = new Object();
      sunbMenuItem.nombre = "Banchile Pay";
      sunbMenuItem.icono = "banicon-banchile_pay indicadoresFavoritos--iconoLista";
      sunbMenuItem.item = 1;
      sunbMenuItem.flagCheck = false;

      menuItem.subMenu.push(sunbMenuItem);

      $scope.menu.push(menuItem);

    } else if (i == 2) {

      menuItem.nombre = "Definir";
      menuItem.subMenu = new Array();

      for (var j = 0; j < 4; j++) {

        var sunbMenuItem = new Object();

        if (j == 0) {
          sunbMenuItem.nombre = "Empresas";
          sunbMenuItem.item = j;
          sunbMenuItem.icono = "banicon-empresa indicadoresFavoritos--iconoLista";
          sunbMenuItem.flagCheck = false;
        } else if (j == 1) {
          sunbMenuItem.nombre = "Usuarios";
          sunbMenuItem.item = j;
          sunbMenuItem.icono = "banicon-avatar indicadoresFavoritos--iconoLista";
          sunbMenuItem.flagCheck = false;
        } else if (j == 2) {
          sunbMenuItem.nombre = "Beneficiarios";
          sunbMenuItem.item = j;
          sunbMenuItem.icono = "banicon-beneficiarios indicadoresFavoritos--iconoLista";
          sunbMenuItem.flagCheck = false;
        } else if (j == 3) {
          sunbMenuItem.nombre = "Favoritos";
          sunbMenuItem.item = j;
          sunbMenuItem.icono = "banicon-marcador_favoritos indicadoresFavoritos--iconoLista";
          sunbMenuItem.flagCheck = false;
        }


        menuItem.subMenu.push(sunbMenuItem);
      }

      $scope.menu.push(menuItem);

    }

  }

  var containerLeft = document.querySelector('#origenDrag');
  var containerRight = document.querySelector('#destinoDrag');

  function accepts(el, target, source) {
    if (source === containerLeft || source === target) {
      return true;
    }
  }
  //dragularService([containerLeft], {
  //  copy: true,
  //move only from left to right
  //accepts: accepts
  //});

  dragularService([containerRight], {
    removeOnSpill: false,
    boundingBox: containerRight,
    //move only from left to right
    //accepts: accepts
    moves: function(el, container, handle) {

      console.log(el);
      console.log(container);
      console.log(handle);
      console.log(el.id + "-" + el.id.substr(7));

      var flag = true;

      if (el.id.substr(7) == "true")
        flag = false;

      console.log(flag);

      return flag;
    },
    scope: $scope
  });

  $scope.eliminarIndicador = function(event, itemInd) {

    var idDivSel = event.target.parentNode.parentNode.parentNode.parentNode.id;
    var itemSel = idDivSel.substr(5, 1);

    var containerRight = document.querySelector('#destinoDrag');

    var indexArray = new Array();

    angular.forEach(containerRight.childNodes, function(value, key) {

      if (value.tagName == "DIV") {
        console.log(key + ': ' + value.tagName + ': ' + value.id);

        indexItem = new Object();
        indexItem.item = Number(value.id.substr(5, 1));
        indexItem.hide = ("true" == value.id.substr(7));

        indexArray.push(indexItem);

      }

    });

    console.log("Lista 1:");
    console.log(JSON.stringify(indexArray));

    for (var i = 0; i < indexArray.length; i++) {

      if (indexArray[i].item == itemSel) {
        indexArray[i].hide = true;
      }
    }

    console.log("Lista 2:");
    console.log(JSON.stringify(indexArray));

    var indDestSel = new Array();
    var indDestDisp = new Array();

    for (var i = 0; i < indexArray.length; i++) {

      if (indexArray[i].hide == false)
        indDestSel.push(indexArray[i]);
      else
        indDestDisp.push(indexArray[i]);
    }

    indexArray.length = 0;

    Array.prototype.push.apply(indexArray, indDestSel);
    Array.prototype.push.apply(indexArray, indDestDisp);

    console.log(indexArray);

    var arrayAux = $scope.indDest.slice(0);

    console.log(arrayAux);

    $scope.indDest.length = 0;

    for (var i = 0; i < indexArray.length; i++) {

      var itemFilter = $filter('filter')(arrayAux, {
        item: indexArray[i].item
      })[0];

      var itemIndDest = new Object();

      itemIndDest.item = i;
      itemIndDest.hide = indexArray[i].hide;

      if (indexArray[i].hide == true) {
        itemIndDest.nombre = "Disponible";
        itemIndDest.categoria = "";
      } else {
        itemIndDest.nombre = itemFilter.nombre;
        itemIndDest.categoria = itemFilter.categoria;
      }

      $scope.indDest.push(itemIndDest);
    }

    console.log($scope.indDest);

  };

  $scope.agregarIndicador = function(ev, itemInd) {

    var flagAgregar = false;

    for (var i = 0; i < 5; i++) {

      if ($scope.indDest[i].hide == true) {
        flagAgregar = true;
        break;
      }

    }

    if (!flagAgregar) {

      $scope.msgContent = "Solo puede seleccionar 5 Indicadores";
      $scope.showNoAutorizado(ev, "idForm");

      return;
    }

    itemInd.hide = true;

    for (var i = 0; i < 5; i++) {

      if ($scope.indDest[i].hide == true) {
        $scope.indDest[i].tipo = itemInd.tipo;
        $scope.indDest[i].tipoNombre = itemInd.tipoNombre;
        $scope.indDest[i].nombre = itemInd.nombre;
        $scope.indDest[i].hide = false;
        break;
      }

    }

  };

  $scope.$on('dragulardragend', function(e, el) {

    var containerRight = document.querySelector('#destinoDrag');

    var indexArray = new Array();

    angular.forEach(containerRight.childNodes, function(value, key) {

      if (value.tagName == "DIV") {
        console.log(key + ': ' + value.tagName + ': ' + value.id);

        indexItem = new Object();
        indexItem.item = Number(value.id.substr(5, 1));
        indexItem.hide = ("true" == value.id.substr(7));

        indexArray.push(indexItem);

      }

    });

    var indDestSel = new Array();
    var indDestDisp = new Array();

    for (var i = 0; i < indexArray.length; i++) {

      if (indexArray[i].hide == false)
        indDestSel.push(indexArray[i]);
      else
        indDestDisp.push(indexArray[i]);
    }

    indexArray.length = 0;

    Array.prototype.push.apply(indexArray, indDestSel);
    Array.prototype.push.apply(indexArray, indDestDisp);

    console.log(indexArray);

    var arrayAux = $scope.indDest.slice(0);

    console.log(arrayAux);

    $scope.indDest.length = 0;

    for (var i = 0; i < indexArray.length; i++) {

      var itemFilter = $filter('filter')(arrayAux, {
        item: indexArray[i].item
      })[0];

      var itemIndDest = new Object();

      itemIndDest.item = i;
      itemIndDest.hide = indexArray[i].hide;

      if (indexArray[i].hide == true) {
        itemIndDest.nombre = "Disponible";
        itemIndDest.tipo = "";
        itemIndDest.tipoNombre = "";
      } else {
        itemIndDest.nombre = itemFilter.nombre;
        itemIndDest.tipo = itemFilter.tipo;
        itemIndDest.tipoNombre = itemFilter.tipoNombre;
      }

      $scope.indDest.push(itemIndDest);
    }

    console.log($scope.indDest);

    $scope.$apply();

  });

  $scope.favList = new Array();

  $scope.agregarFavorito = function(ev, itemInd) {

    console.log("Val:" + itemInd.nombre);
    console.log("Check:" + itemInd.flagCheck);

    if (!itemInd.flagCheck) {

      if ($scope.favList.length < 5) {

        itemInd.flagCheck = true;

        var itemFav = new Object();

        itemFav.nombre = itemInd.nombre;
        itemFav.item = itemInd.item;
        itemFav.icono = itemInd.icono;

        $scope.favList.push(itemFav);

      } else {
        itemInd.flagCheck = false;
        $scope.msgContent = "Solo puede seleccionar 5 Favoritos";
        $scope.showNoAutorizado(ev, "idForm");
      }

    } else {

      itemInd.flagCheck = false;

      var lenList = $scope.favList.length;

      for (var i = 0; i < lenList; i++) {
        if ($scope.favList[i].nombre == itemInd.nombre) {
          $scope.favList.splice(i, 1);
          break;
        }
      }

    }


  };


  $scope.msgContent = "";

  $scope.showNoAutorizado = function(ev, idForm) {

    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

    $mdDialog.show({
      templateUrl: 'noAutorizado.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen,
      locals: {
        msg: $scope.msgContent
      },
      controller: ['$scope', '$mdDialog', 'msg', NoAutorizadoCtrl]
    })

    $scope.$watch(function() {

      return $mdMedia('xs') || $mdMedia('sm');

    }, function(wantsFullScreen) {

      $scope.customFullscreen = (wantsFullScreen === true);

    });

    function NoAutorizadoCtrl($scope, $mdDialog, msg) {

      $scope.msg = msg;

      $scope.closeDialog = function() {
        $mdDialog.hide();
      };

      $scope.aceptar = function() {
        $mdDialog.hide();
      };

    };

  };

  $scope.showBuscarInd = function(ev) {

    //var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    var useFullScreen = true;

    $mdDialog.show({
      templateUrl: 'buscarInd.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      escapeToClose: false,
      clickOutsideToClose: false,
      fullscreen: useFullScreen,
      locals: {
        tipoIndM: $scope.tipoIndM,
        tipoInd: $scope.tipoInd,
        indicadores: $scope.indicadores,
        tipoIndMSel: $scope.tipoIndMSel,
        palabraClave: $scope.palabraClave,
      },
      controller: ['$scope', '$mdDialog', 'tipoIndM', 'tipoInd', 'indicadores', 'tipoIndMSel', 'palabraClave', BuscarIndicadorCtrl],
      scope: $scope,
      preserveScope: true
    })


    $scope.$watch(function() {

      if (!($mdMedia('xs') || $mdMedia('sm')))
        $mdDialog.hide();

      return $mdMedia('xs') || $mdMedia('sm');

    }, function(wantsFullScreen) {

      $scope.customFullscreen = (wantsFullScreen === true);

    });

    function BuscarIndicadorCtrl($scope, $mdDialog, tipoIndM, tipoInd, indicadores, tipoIndMSel, palabraClave) {

      $scope.tipoIndM = tipoIndM;
      $scope.tipoInd = tipoInd;
      $scope.indicadores = indicadores;
      $scope.tipoIndMSel = tipoIndMSel;
      $scope.palabraClave = palabraClave;

      $scope.closeDialog = function() {
        $mdDialog.hide();
      };

      $scope.aceptar = function() {
        $mdDialog.hide();
      };

    };

  };

  $scope.changeTipo = function(ev) {

    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));

    if (useFullScreen) {
      $scope.showBuscarInd(ev);
    }

  }

  $scope.changePalabraClave = function(ev) {

    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));

    if (useFullScreen && $scope.palabraClave) {
      $scope.showBuscarInd(ev);
    }

  }

});

banchileApp.controller('formularioCtrl', function($scope) {
  var active = false;
  $scope.user = {
    monto: '460.000',
    monto2: '20.000',
    alaCartera: 'Cartera Controlada E',
    total: '480.080',
    total2: '620.000',
    total3: '320.000',
    usar: '462.020',
    alias: 'Pago a proveedor 1',
    pesos: '403.323',
    pesos2: '10.000.000',
    dolar2: '14.773,00',
    total0: '0',
    usd: 'USD',
  };
  $scope.setButton = function() {
    if (active == true) {
      active = false;
    } else {
      active = true;
    }
  }
  $scope.getState = function() {
    if (active) {
      return true;
    } else {
      return false;
    }
  }
  $scope.isActive = function() {
    if ($scope.pagarDesde == "2") {
      return true;
    } else {
      return false;
    }
  }

});

//formularios Banchile Pay - pasos 1-2-3
banchileApp.controller('formularioCtrlDuplicado', function($scope) {
  $scope.user = {
    monto: '$460.000',
    cartera: '$20.223.332',
    comision: '$0,25',
    alaCartera: 'Cartera Controlada E',
    monto2: '$2.000',
    total: '$480.080',
    total2: '$620.000',
    total3: '$320.000',
    usar: '$480.080',
    alias: 'Pago a proveedor 1',
    clave: '******',
    pesos: 'CLP  $403.323.206',
    pesos2: 'CLP  $10.000.000',
    dolar2: 'USD  $14.773,00',
    total0: '0',
    usd: 'USD',
  };
});
// FIN - Banchile Pay

banchileApp.controller('graficoGeneralWidgetPatrimonio-e', function($scope) {
  Highcharts.chart('graficoGeneralWidgetPatrimonio', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      type: 'pie',
      height: 220,
      width: 220,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      stroke: 'rgba(255, 255, 255, 0.1)',
      marginBottom: 1,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      paddingBottom: 1,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
    },
    title: {
      text: ''
    },

    subTitle: {
      text: ''
    },


    tooltip: {
      enabled: true,
      followPointer: true,
      followTouchMove: true,
      useHTML: true,
      headerFormat: '<div class="tooltip--headerFormat">{point.key}</div>',
      pointFormat: '<b class="tooltip--headerFormat">{point.y}</b>',
      valueSuffix: ' %',
      shared: true,
      backgroundColor: 'rgba(255,255,255,0.8)',
      style: {
        opacity: 1
      },
      borderRadius: 7,
    },

    title: {
      enabled: false
    },

    exporting: {
      enabled: false
    },

    plotOptions: {
      pie: {
        shadow: false,
        allowPointSelect: false,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,


        },
        center: ['50%', '50%'],

      },

      series: {

        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        },

        states: {
          hover: {
            enabled: false
          }
        }
      }
    },

    credits: {
      enabled: false
    },

    series: [{
      type: 'pie',

      size: '95%',
      innerSize: '94%',


      data: [


        {
          name: 'Fondos Mutuos',
          color: '#5BABBF',
          y: 60,
          borderWidth: 0,
        },

        {
          name: 'Acciones',
          color: '#336A9B',
          y: 20,
          borderWidth: 0,

        },

        {
          name: 'Caja',
          color: '#EAA000',
          y: 30,
          borderWidth: 0,

        }

      ]
    }]

  });
  //EVENTOS SWIPER
  $scope.swiper = {};
  $scope.onReadySwiper = function(swiper) {
    $timeout(function() {
      $scope.visibilidadGrafico = true;
    }, 100);
    $scope.swiper = swiper;
    var tipoDispositivo = '';
  };
});

banchileApp.controller('graficoGeneralWidgetPatrimonio-p', function($scope) {
  Highcharts.chart('graficoGeneralWidgetPatrimonio', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      type: 'pie',
      height: 220,
      width: 220,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      stroke: 'rgba(255, 255, 255, 0.1)',
      marginBottom: 1,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      paddingBottom: 1,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
    },
    title: {
      text: ''
    },

    subTitle: {
      text: ''
    },


    tooltip: {
      enabled: true,
      followPointer: true,
      followTouchMove: true,
      useHTML: true,
      headerFormat: '<div class="tooltip--headerFormat">{point.key}</div>',
      pointFormat: '<b class="tooltip--headerFormat">{point.y}</b>',
      valueSuffix: ' %',
      shared: true,
      backgroundColor: 'rgba(255,255,255,0.8)',
      style: {
        opacity: 1
      },
      borderRadius: 7,
    },

    title: {
      enabled: false
    },

    exporting: {
      enabled: false
    },

    plotOptions: {
      pie: {
        shadow: false,
        allowPointSelect: false,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,


        },
        center: ['50%', '50%'],

      },

      series: {

        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        },

        states: {
          hover: {
            enabled: false
          }
        }
      }
    },

    credits: {
      enabled: false
    },

    series: [{
      type: 'pie',

      size: '95%',
      innerSize: '94%',


      data: [


        {
          name: 'Fondos Mutuos',
          color: '#5BABBF',
          y: 60,
          borderWidth: 0,
        },

        {
          name: 'Acciones',
          color: '#336A9B',
          y: 20,
          borderWidth: 0,

        },


        {
          name: 'Pactos',
          color: '#EAA000',
          y: 10,
          borderWidth: 0,

        },


        {
          name: 'Simultáneas',
          color: '#babaa4',
          y: 9,
          borderWidth: 0,

        },


        {
          name: 'Otros',
          color: '#4A4A4A',
          y: 1,
          borderWidth: 0,

        },

      ]
    }]

  });
  //EVENTOS SWIPER
  $scope.swiper = {};
  $scope.onReadySwiper = function(swiper) {
    $timeout(function() {
      $scope.visibilidadGrafico = true;
    }, 100);
    $scope.swiper = swiper;
    var tipoDispositivo = '';
  };
});

banchileApp.controller('graficoPatrimonio-e', function($scope, $timeout, $window) {
  var w = angular.element($window);

  $scope.createGraphic = function(slides) {

    $scope.parametrosPatrimonio = {

      slidesPerView: slides,
      autoResize: true,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      paginationClickable: true,
      scrollContainer: true,
      freeMode: false,
      breakpoints: {
        727: {
          slidesPerView: 1,
          spaceBetween: 1,

        },

        991: {
          slidesPerView: 3,
          spaceBetween: 1,

        },

        1199: {
          slidesPerView: 4,
          spaceBetween: 0,

        },


      },
    };
    //EVENTOS SWIPER
    $scope.swiper = {};
    $scope.onReadySwiper = function(swiper) {
      $timeout(function() {
        $scope.visibilidadGrafico = true;
      }, 100);
      $scope.swiper = swiper;
      var tipoDispositivo = '';
    };
    //DATA GRAFICOS & SWIPER
    $scope.slider = {};
    $scope.productos = {};

    var nombreProductos = [
      "Fondos Mutuos",
      "Acciones",
      "Caja Internet",

    ];

    var montosProductos = [
      "40.000.000",
      "30.000.000",
      "30.000.000",

    ];

    var porcentajeProductos = [
      "40%",
      "30%",
      "30%",

    ];

    var fechaProductos = [
      "08/11/2017",
      "08/11/2017",
      "08/11/2017",

    ];

    var data = [];

    for (var i = 0; i < 3; i++) {
      var opcionesGrafico = {

        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          type: 'pie',
          height: 220,
          width: 220,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          stroke: 'rgba(255, 255, 255, 0.1)',
          marginBottom: 1,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          paddingBottom: 1,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,


        },


        title: {
          text: ''
        },

        subTitle: {
          text: ''
        },

        tooltip: {
          enabled: true,
          followPointer: true,
          followTouchMove: true,
          useHTML: true,
          headerFormat: '<div class="tooltip--headerFormat">{point.key}</div>',
          pointFormat: '<b class="tooltip--headerFormat">{point.y}</b>',
          valueSuffix: ' %',
          shared: true,
          backgroundColor: 'rgba(255,255,255,0.8)',
          style: {
            opacity: 1
          },
          borderRadius: 7,
        },

        title: {
          enabled: false
        },

        exporting: {
          enabled: false
        },

        plotOptions: {
          pie: {
            shadow: false,
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },


          },

          series: {

            line: {
              animation: false
            },

            states: {
              hover: {
                enabled: false
              }
            }
          }
        },

        credits: {
          enabled: false
        },


        series: [{
          type: 'pie',
          name: 'Porcentaje',
          size: '95%',
          innerSize: '94%',
          data: [{

              name: 'Fondos Mutuos',
              color: '#5BABBF',
              y: 50,

            },

            {
              name: '',
              color: '#E6E9EE',
              y: 20,

            }

          ]
        }]

      };


      opcionesGrafico.chart.title = Math.floor((Math.random() * 100) + 1) + '%';

      var producto = {
        idProducto: i, //REEMPLAZAR POR UN ID VALIDO
        nombre: nombreProductos[i],
        monto: montosProductos[i],
        porcentaje: porcentajeProductos[i],
        fecha: fechaProductos[i],
        opcionesGrafico: opcionesGrafico,

      };

      data.push(producto);
    }
    $scope.productos = data;

  };

});

banchileApp.controller('graficoPatrimonio-p', function($scope, $timeout, $window) {
  var w = angular.element($window);

  $scope.createGraphic = function(slides) {

    $scope.parametrosPatrimonio = {

      slidesPerView: slides,
      autoResize: true,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      paginationClickable: true,
      scrollContainer: true,
      freeMode: false,
      breakpoints: {
        727: {
          slidesPerView: 1,
          spaceBetween: 1,

        },

        991: {
          slidesPerView: 3,
          spaceBetween: 1,

        },

        1199: {
          slidesPerView: 4,
          spaceBetween: 0,

        },


      },
    };
    //EVENTOS SWIPER
    $scope.swiper = {};
    $scope.onReadySwiper = function(swiper) {
      $timeout(function() {
        $scope.visibilidadGrafico = true;
      }, 100);
      $scope.swiper = swiper;
      var tipoDispositivo = '';
    };
    //DATA GRAFICOS & SWIPER
    $scope.slider = {};
    $scope.productos = {};

    var nombreProductos = [
      "Fondos Mutuos",
      "Acciones",
      "Pactos",
      "Simultáneas",
      "Pershing"
    ];

    var montosProductos = [
      "3.123.678",
      "2.888.980",
      "7.990.009",
      "6.008.334",
      "4.001.113",
    ];

    var porcentajeProductos = [
      "40%",
      "55%",
      "35%",
      "67%",
      "34%",
    ];

    var fechaProductos = [
      "08/11/2016",
      "08/11/2016",
      "08/11/2016",
      "08/11/2016",
      "08/11/2016",
    ];

    var data = [];

    for (var i = 0; i < 5; i++) {
      var opcionesGrafico = {

        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          type: 'pie',
          height: 220,
          width: 220,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          stroke: 'rgba(255, 255, 255, 0.1)',
          marginBottom: 1,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          paddingBottom: 1,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,


        },


        title: {
          text: ''
        },

        subTitle: {
          text: ''
        },

        tooltip: {
          enabled: true,
          followPointer: true,
          followTouchMove: true,
          useHTML: true,
          headerFormat: '<div class="tooltip--headerFormat">{point.key}</div>',
          pointFormat: '<b class="tooltip--headerFormat">{point.y}</b>',
          valueSuffix: ' %',
          shared: true,
          backgroundColor: 'rgba(255,255,255,0.8)',
          style: {
            opacity: 1
          },
          borderRadius: 7,
        },

        title: {
          enabled: false
        },

        exporting: {
          enabled: false
        },

        plotOptions: {
          pie: {
            shadow: false,
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },


          },

          series: {

            line: {
              animation: false
            },

            states: {
              hover: {
                enabled: false
              }
            }
          }
        },

        credits: {
          enabled: false
        },


        series: [{
          type: 'pie',
          name: 'Porcentaje',
          size: '95%',
          innerSize: '94%',
          data: [{

              name: 'Fondos Mutuos',
              color: '#5BABBF',
              y: 50,

            },

            {
              name: '',
              color: '#E6E9EE',
              y: 20,

            }

          ]
        }]

      };


      opcionesGrafico.chart.title = Math.floor((Math.random() * 100) + 1) + '%';

      var producto = {
        idProducto: i, //REEMPLAZAR POR UN ID VALIDO
        nombre: nombreProductos[i],
        monto: montosProductos[i],
        porcentaje: porcentajeProductos[i],
        fecha: fechaProductos[i],
        opcionesGrafico: opcionesGrafico,

      };

      data.push(producto);
    }
    $scope.productos = data;

  };

});

banchileApp.controller('graficoWidgetPatrimonio-e', function($scope, $timeout, $window) {

  var w = angular.element($window);

  $scope.parametrosWidgetPatrimonio = {

    breakpoints: {
      727: {
        slidesPerView: 1,
        spaceBetween: 1,

      },

      991: {
        slidesPerView: 2,
        spaceBetween: 1,

      },

      1199: {
        slidesPerView: 1,
        spaceBetween: 0,

      },
    },
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    scrollContainer: true,
    freeMode: false,



  };

  //EVENTOS SWIPER
  $scope.swiper = {};
  $scope.onReadySwiper = function(swiper) {

    $timeout(function() {
      $scope.visibilidadGrafico = true;
    }, 100);

    $scope.swiper = swiper;
    var tipoDispositivo = '';
  };



  //DATA GRAFICOS & SWIPER
  $scope.slider = {};
  $scope.productos = {};


  var nombreProductos = [
    "Fondos Mutuos",
    "Acciones",
    "Caja Internet"
  ];

  var montosProductos = [
    "40.000.000",
    "30.000.000",
    "30.000.000",

  ];

  var porcentajeProductos = [
    "40%",
    "30%",
    "30%",
  ];

  var fechaProductos = [
    "08/11/2017",
    "08/11/2017",
    "08/11/2017",
  ];

  var data = [];

  for (var i = 0; i < 3; i++) {

    var opcionesGrafico = {

      chart: {
        spacingBottom: 0,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height: 220,
        width: 260,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        stroke: 'rgba(255, 255, 255, 0.1)',

      },


      title: {
        text: ''
      },

      subTitle: {
        text: ''
      },


      tooltip: {
        enabled: true,
        followPointer: true,
        followTouchMove: true,
        useHTML: true,
        headerFormat: '<div class="tooltip--headerFormat">{point.key}</div>',
        pointFormat: '<b class="tooltip--headerFormat">{point.y}</b>',
        valueSuffix: ' %',
        shared: true,
        backgroundColor: 'rgba(255,255,255,0.8)',
        style: {
          opacity: 1
        },
        borderRadius: 7,
      },

      title: {
        enabled: false
      },

      exporting: {
        enabled: false
      },

      plotOptions: {
        pie: {
          shadow: false,
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          center: ['50%', '50%'],

        },

        series: {

          line: {
            animation: false
          },

          states: {
            hover: {
              enabled: false
            }
          }
        }
      },

      credits: {
        enabled: false
      },

      series: [{
        type: 'pie',
        name: 'Porcentaje',
        size: '95%',
        innerSize: '94%',
        data: [{
            name: 'Fondos Mutuos',
            color: '#5BABBF',
            y: 50,

          },

          {
            name: '',
            color: '#E6E9EE',
            y: 20,

          }

        ]
      }]

    };
    opcionesGrafico.chart.title = Math.floor((Math.random() * 100) + 1) + '%';

    var producto = {
      idProducto: i, //REEMPLAZAR POR UN ID VALIDO
      nombre: nombreProductos[i],
      monto: montosProductos[i],
      porcentaje: porcentajeProductos[i],
      fecha: fechaProductos[i],
      opcionesGrafico: opcionesGrafico,

    };

    data.push(producto);
  }
  $scope.productos = data;

});

banchileApp.controller('graficoWidgetPatrimonio-p', function ($scope, $timeout, $window) {

  var w = angular.element($window);

  $scope.parametrosWidgetPatrimonio = {

    breakpoints: {
      727: {
        slidesPerView: 1,
        spaceBetween: 1,

      },

      991: {
        slidesPerView: 2,
        spaceBetween: 1,

      },

      1199: {
        slidesPerView: 1,
        spaceBetween: 0,

      },
    },
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    scrollContainer: true,
    freeMode: false,


  };

  //EVENTOS SWIPER
  $scope.swiper = {};
  $scope.onReadySwiper = function (swiper) {

    $timeout(function () {
      $scope.visibilidadGrafico = true;
    }, 100);

    $scope.swiper = swiper;
    var tipoDispositivo = '';
  };



  //DATA GRAFICOS & SWIPER
  $scope.slider = {};
  $scope.productos = {};


  var nombreProductos = [
    "Fondos Mutuos",
    "Acciones",
    "Cartera Activa",
    "Fondos de Inversión",
    "Caja Internet"
  ];

  var montosProductos = [
    "40.000.000",
    "30.000.000",
    "20.000.000",
    "5.000.000",
    "5.000.000",
  ];

  var porcentajeProductos = [
    "40%",
    "30%",
    "20%",
    "5%",
    "5%",
  ];

  var fechaProductos = [
    "08/11/2017",
    "08/11/2017",
    "08/11/2017",
    "08/11/2017",
    "08/11/2017",
  ];

  var data = [];

  for (var i = 0; i < 5; i++) {

    var opcionesGrafico = {

      chart: {
        spacingBottom: 0,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height: 220,
        width: 260,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        stroke: 'rgba(255, 255, 255, 0.1)',

      },


      title: {
        text: ''
      },

      subTitle: {
        text: ''
      },


      tooltip: {
        enabled: true,
        followPointer: true,
        followTouchMove: true,
        useHTML: true,
        headerFormat: '<div class="tooltip--headerFormat">{point.key}</div>',
        pointFormat: '<b class="tooltip--headerFormat">{point.y}</b>',
        valueSuffix: ' %',
        shared: true,
        backgroundColor: 'rgba(255,255,255,0.8)',
        style: {
          opacity: 1
        },
        borderRadius: 7,
      },

      title: {
        enabled: false
      },

      exporting: {
        enabled: false
      },

      plotOptions: {
        pie: {
          shadow: false,
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          center: ['50%', '50%'],

        },

        series: {

          line: {
            animation: false
          },

          states: {
            hover: {
              enabled: false
            }
          }
        }
      },

      credits: {
        enabled: false
      },

      series: [{
        type: 'pie',
        name: 'Porcentaje',
        size: '95%',
        innerSize: '94%',
        data: [{
          name: 'Fondos Mutuos',
          color: '#5BABBF',
          y: 50,

        },

        {
          name: '',
          color: '#E6E9EE',
          y: 20,

        }

        ]
      }]

    };
    opcionesGrafico.chart.title = Math.floor((Math.random() * 100) + 1) + '%';

    var producto = {
      idProducto: i, //REEMPLAZAR POR UN ID VALIDO
      nombre: nombreProductos[i],
      monto: montosProductos[i],
      porcentaje: porcentajeProductos[i],
      fecha: fechaProductos[i],
      opcionesGrafico: opcionesGrafico,

    };

    data.push(producto);
  }
  $scope.productos = data;

});

// <!-- grafico highchart -->
banchileApp.controller('graficosLineal-01', function($scope) {
  Highcharts.chart('grafico-01', {
    chart: {
      zoomType: 'x',
      height: 252
    },
    title: {
      text: 'USD to EUR exchange rate over time'
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
      ]
    },
    yAxis: {
      title: {
        text: null
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 2
          },
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },

    series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
  });
  $scope.showAdvanced = function (ev, contrato) {
    contrato.downloading = true;

    $timeout(function(){
      contrato.downloading = false;
      if(contrato.error){
        contrato.icono = 'close';
        contrato.classIcon = 'icon--error';
        contrato.classBorder = 'border--error';
        $timeout(function(){
          contrato.icono = 'border_color';
          contrato.classIcon = '';
          contrato.classBorder = '';
        },2000);
      }else{
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'modales/documentos--contrato.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      });
        contrato.icono = 'done';
        contrato.classIcon = 'icon--exito';
        contrato.classBorder = 'border--exito';
      }
    },3000);
  };
});
banchileApp.controller('graficosLineal-02', function($scope) {
  Highcharts.chart('grafico-02', {
    chart: {
      zoomType: 'x',
      height: 252
    },
    title: {
      text: 'USD to EUR exchange rate over time'
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
      ]
    },
    yAxis: {
      title: {
        text: null
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 2
          },
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },

    series: [{
      data: [29.9, 71.5, 106.4, 129.2, 44.0, 76.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
  });
});
banchileApp.controller('graficosLineal-03', function($scope) {
  Highcharts.chart('grafico-03', {
    chart: {
      zoomType: 'x',
      height: 252
    },
    title: {
      text: 'USD to EUR exchange rate over time'
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
      ]
    },
    yAxis: {
      title: {
        text: null
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 2
          },
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },

    series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 95.4, 85.1, 95.6, 54.4]
    }]
  });
});
banchileApp.controller('graficosLineal-04', function($scope) {
  Highcharts.chart('grafico-04', {
    chart: {
      zoomType: 'x',
      height: 252
    },
    title: {
      text: 'USD to EUR exchange rate over time'
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
      ]
    },
    yAxis: {
      title: {
        text: null
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 2
          },
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },

    series: [{
      data: [80.9, 71.5, 106.4, 129.2, 100.0, 176.0, 135.6, 148.5, 100.4, 194.1, 95.6, 54.4]
    }]
  });
});
banchileApp.controller('graficosLineal-05', function($scope) {
  Highcharts.chart('grafico-05', {
    chart: {
      zoomType: 'x',
      height: 252
    },
    title: {
      text: 'USD to EUR exchange rate over time'
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
      ]
    },
    yAxis: {
      title: {
        text: null
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 2
          },
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },

    series: [{
      data: [100.9, 71.5, 106.4, 180.2, 44.0, 76.0, 135.6, 148.5, 216.4, 80.1, 95.6, 54.4]
    }]
  });
});
banchileApp.controller('graficosLineal-06', function($scope) {
  Highcharts.chart('grafico-06', {
    chart: {
      zoomType: 'x',
      height: 252
    },
    title: {
      text: 'USD to EUR exchange rate over time'
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
      ]
    },
    yAxis: {
      title: {
        text: null
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 2
          },
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },

    series: [{
      data: [100.9, 71.5, 106.4, 180.2, 44.0, 76.0, 135.6, 148.5, 216.4, 80.1, 95.6, 54.4]
    }]
  });
});
banchileApp.controller('graficosLineal-07', function($scope) {
  Highcharts.chart('grafico-07', {
    chart: {
      zoomType: 'x',
      height: 252
    },
    title: {
      text: 'USD to EUR exchange rate over time'
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
      ]
    },
    yAxis: {
      title: {
        text: null
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 2
          },
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },

    series: [{
      data: [100.9, 71.5, 106.4, 180.2, 44.0, 76.0, 135.6, 148.5, 216.4, 80.1, 95.6, 54.4]
    }]
  });
});
// graficos tablas
banchileApp.controller('graficosLineal-001', function($scope) {
  Highcharts.chart('grafico-001', {
    chart: {
      zoomType: 'x',
      height: 252
    },
    title: {
      text: 'USD to EUR exchange rate over time'
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: ['Ener', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
      ]
    },
    yAxis: {
      title: {
        text: null
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 2
          },
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },

    series: [{
      data: [100.9, 71.5, 106.4, 180.2, 44.0, 76.0, 135.6, 148.5, 216.4, 80.1, 95.6, 54.4]
    }]
  });
});
banchileApp.controller('graficosLineal-002', function($scope) {
  Highcharts.chart('grafico-002', {
    chart: {
      zoomType: 'x',
      height: 252
    },
    title: {
      text: 'USD to EUR exchange rate over time'
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: ['Ener', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
      ]
    },
    yAxis: {
      title: {
        text: null
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 2
          },
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },

    series: [{
      data: [100.9, 71.5, 106.4, 180.2, 44.0, 76.0, 135.6, 148.5, 216.4, 80.1, 95.6, 54.4]
    }]
  });
});
banchileApp.controller('graficosLineal-003', function($scope) {
  Highcharts.chart('grafico-003', {
    chart: {
      zoomType: 'x',
      height: 252
    },
    title: {
      text: 'USD to EUR exchange rate over time'
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: ['Ener', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
      ]
    },
    yAxis: {
      title: {
        text: null
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 2
          },
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },

    series: [{
      data: [100.9, 71.5, 190.4, 180.2, 44.0, 76.0, 135.6, 148.5, 216.4, 80.1, 95.6, 54.4]
    }]
  });
});
banchileApp.controller('graficosLineal-004', function($scope) {
  Highcharts.chart('grafico-004', {
    chart: {
      zoomType: 'x',
      height: 252,
      width: 1000
    },
    title: {
      text: 'USD to EUR exchange rate over time'
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
      ]
    },
    yAxis: {
      title: {
        text: null
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 2
          },
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },

    series: [{
      data: [65.9, 71.5, 106.4, 180.2, 144.0, 76.0, 135.6, 148.5, 216.4, 80.1, 95.6, 54.4]
    }]
  });
});
// <!-- grafico highchart -->

//CONTROLADOR SWIPER & GRAFICO EN WIDGET PATRIMONIO
banchileApp.directive('hcChart', function() {
  Highcharts.setOptions({
    lang: {
      months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      contextButtonTitle: "Menu",
      downloadJPEG: "Descargar imagen JPEG",
      downloadPDF: "Descargar documento PDF",
      downloadPNG: "Descargar imagen PNG ",
      downloadSVG: "Descargar imagen SVG",
      drillUpText: "Volver a {series.name}",
      loading: "Cargando...",
      noData: "No exites datos",
      printChart: "Imprimir Gráfico",
      resetZoom: "Restablecer zoom",
      resetZoomTitle: "Restablecer zoom nivel 1:1"
    },
    credits: {
      enabled: false
    }
  });

  return {
    restrict: 'E',
    template: '<div></div>',
    scope: {
      options: '=options'
    },
    link: function(scope, element) {

      scope.$watch('options', function() {
        var options = scope.options;
        Highcharts.chart(element[0], options);

      });
    }
  };

})

banchileApp.controller('InstruccionesCtrl', function($scope) {
  $scope.sort = '+servicio';
  $scope.mercado = [{
        titulo: "Nombre titular",
        precio: "$1.818.571,005",
        variacion: "-1,09",
        activo: "Renta fija",
        categoria: "Estados unidos",
        valor: "$2.000.000"
      },
      {
        titulo: "Nombre titular",
        precio: "$5.658.830,779",
        variacion: "-1,09",
        activo: "Renta fija",
        categoria: "Estados unidos",
        valor: "$2.000.000"
      },
      {
        titulo: "Nombre titular",
        precio: "$172.505,621",
        variacion: "-1,09",
        activo: "Renta fija",
        categoria: "Estados unidos",
        valor: "$2.000.000"
      },
      {
        titulo: "Nombre titular",
        precio: "$93.374,097",
        variacion: "-1,09",
        activo: "Renta fija",
        categoria: "Estados unidos",
        valor: "$2.000.000"
      },
      {
        titulo: "Nombre titular",
        precio: "$16,864,005",
        variacion: "-1,09",
        activo: "Renta fija",
        categoria: "Estados unidos",
        valor: "$2.000.000"
      },
      {
        titulo: "Nombre titular",
        precio: "$805.976,664",
        variacion: "-1,09",
        activo: "Materias primas",
        categoria: "Estados unidos",
        valor: "$2.000.000"
      },
      {
        titulo: "Nombre titular",
        precio: "$2.000.000",
        variacion: "-1,09",
        activo: "Materias primas",
        categoria: "Estados unidos",
        valor: "$2.000.000"
      },
      {
        titulo: "Nombre titular",
        precio: "$162.954,459",
        variacion: "-1,09",
        activo: "Materias primas",
        categoria: "Estados unidos",
        valor: "$2.000.000"
      },
    ],
    $scope.instruccion = [

      {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }, {
        fecha: "01/01/2016 12:45:54",
        producto: "Banchilepay",
        transaccion: "transferencia",
        instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
        orden: "756040",
        monto: "$650.000"
      }
    ];
});

//TOGGLE
banchileApp.controller('instruccionesVentanaCtrl', function($scope) {
  $scope.btnAutorizacion = true;
  $scope.cancelar = function(event) {
    $scope.autorizar = false;
    $scope.rechazar = false;
    $scope.autorizadores = false;
    event.stopPropagation();
  };

  $scope.autorizadores = false;
  $scope.verAutorizadores = function(event) {
    $scope.autorizadores = !($scope.autorizadores); //el ng-show que despliega el event
    $scope.rechazar = false;
    $scope.autorizar = false;
    event.stopPropagation();
  };

  $scope.autorizar = false;
  $scope.verForAutorizar = function(event) {
    $scope.btnAutorizacion = true;
    $scope.btnConfirmacion = true;
    $scope.autorizar = !($scope.autorizar);
    $scope.rechazar = false;
    $scope.autorizadores = false;
    event.stopPropagation();
  };
  $scope.rechazar = false;
  $scope.verForRechazar = function(event) {
    $scope.btnAutorizacion = true;
    $scope.btnConfirmacion = true;
    $scope.rechazar = !($scope.rechazar);
    $scope.autorizadores = false;
    $scope.autorizar = false;
    event.stopPropagation();
  };
  $scope.autorizadores = false;
  $scope.verMejoresofertas = function(event) {
    $scope.mejoresofertas = !($scope.mejoresofertas);
    event.stopPropagation();
  };


});

banchileApp.controller('kSwiperCtrl', function($scope) {
  $scope.swiper = {};
  $scope.next = function() {
    $scope.swiper.slideNext();
  };
  $scope.onReadySwiper = function(swiper) {
    console.log('onReadySwiper');
    swiper.on('slideChangeStart', function() {
      console.log('slideChangeStart');
    });
  };
});

banchileApp.filter('keyboardShortcut', function($window) {
  return function(str) {
    if (!str) return;
    var keys = str.split('-');
    var isOSX = /Mac OS X/.test($window.navigator.userAgent);
    var seperator = (!isOSX || keys.length > 2) ? '+' : '';
    var abbreviations = {
      M: isOSX ? '⌘' : 'Ctrl',
      A: isOSX ? 'Option' : 'Alt',
      S: 'Shift'
    };
    return keys.map(function(key, index) {
      var last = index == keys.length - 1;
      return last ? key : abbreviations[key];
    }).join(seperator);
  };
})

banchileApp.controller('lateralMenu', function($scope, $timeout, $mdSidenav) {
  $scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }
});

banchileApp.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function() {
    // Component lookup should always be available since we are not using `ng-if`
    $mdSidenav('left').close()
      .then(function() {
        $log.debug("close LEFT is done");
      });

  };
})

// inicio mapa
banchileApp.controller('mapaIndicador', function($scope) {

  $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=world-population-density.json&callback=?', function(data) {
    Highcharts.mapChart('container', {
      title: {
        text: 'Zoom in on country by double click'
      },
      mapNavigation: {
        enabled: true,
        enableDoubleClickZoomTo: true
      },
      colorAxis: {
        min: 1,
        max: 1000,
        type: 'logarithmic'
      },
      series: [{
        data: data,
        mapData: Highcharts.maps['custom/world'],
        joinBy: ['iso-a2', 'code'],
        name: 'Population density',
        states: {
          hover: {
            color: '#a4edba'
          }
        },
        tooltip: {
          valueSuffix: '/km²'
        }
      }]
    });
  });
});
// fin mapa

banchileApp.controller('MarcoController', function($scope) {
  $scope.demo = {
    showTooltip: false,
  };
});

/*  inicio controllerMenuContextual */
banchileApp.controller('menuContextual', function DemoCtrl($mdDialog) {
  var originatorEv;
  this.openMenu = function($mdOpenMenu, ev) {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };
  this.notificationsEnabled = true;
  this.toggleNotifications = function() {
    this.notificationsEnabled = !this.notificationsEnabled;
  };
  this.redial = function() {
    $mdDialog.show(
      $mdDialog.alert()
        .targetEvent(originatorEv)
        .clickOutsideToClose(true)
        .parent('body')
        .title('Suddenly, a redial')
        .textContent('You just called a friend; who told you the most amazing story. Have a cookie!')
        .ok('That was easy')
    );
    originatorEv = null;
  };
  this.checkVoicemail = function() {
    // This never happens.
  };
});
/*  inicio controllerTimeline */

// controlador menu-personas-jorge-12-10
// banchileApp.controller('menuFooter', function($scope) {
//   $scope.activo = [];
//   $scope.visible = [];
//   $scope.mouseOver = function(position) {
//     $scope.activo[position] = "activo-menuPrivado";
//     $scope.visible[position] = true;
//   };
//
//   $scope.mouseLeave = function(position) {
//     $scope.activo[position] = "";
//     $scope.visible[position] = false;
//   };
//   $scope.mouseClick = function(position) {
//     $scope.activo[position] = "";
//     $scope.visible[position] = false;
//   };
//   $scope.mouseClickN = function(position) {
//     $scope.activo[position] = "";
//     $scope.visible[position] = true;
//   };
//   $scope.nextPage = function() {
//     var elements = angular.element(document.querySelector('#menuPrivadoCategoria'));
//     console.log(elements.prop('offsetTop'));
//     elements.top = elements.prop('offsetTop') + 30;
//   };
//
//
//   $scope.currentOpen = {
//     menuId: null
//   };
//
//   $scope.menuFooter = [
//     {
//       id: 1,
//       name: 'Servicio al Cliente',
//       menu: [
//         {name: 'Contactanos',
//           url: '#contactanos',},
//         {name: 'Sucursaless',
//           url: '#contactanos',},
//         {name: 'Resumen de inversiones',
//           url: '#contactanos',},
//         {name: 'Resumen de inversiones',
//           url: '#contactanos',},
//         {name: 'Resumen de inversiones',
//           url: '#contactanos',},
//       ]
//     },
//
//     {
//       name: 'Contactanos',
//       url: '#contactanos',
//     },
//     {
//       name: 'Sucursales',
//       url: '#sucursales',
//     },
//
//     {
//       name: 'Preguntas Frecuentes',
//       url: '#preguntas-frecuentes',
//     },
//     {
//       name: 'Información Legal',
//       url: '#',
//     },
//   ]
// },
//
//     {
//       id: 2,
//       name: 'Invertir',
//       image: 'navMenu--imagen imagen--invertir',
//       desc: 'Acá podrás encontrar variadas opciones de inversión que tenemos pensadas especialmente para ti.',
//       menu: [
//         {
//           name: 'Fondos Mutuos',
//           url: '#fondos-mutuos',
//           subMenu: [
//             {
//                 name: 'Aporte >',
//                 url: '#fondosmutuos-aporte-clp'
//             },
//             {
//               name: 'Rescate >',
//               url: '#fondosmutuos-rescate'
//             }
//           ]
//         }, {
//           name: 'Cartera Activa',
//           url: '#cartera-activa',
//           subMenu: [
//             {
//                 name: 'Ingreso >',
//                 url: '#cartera-activa-ingreso'
//             },
//             {
//               name: 'Egreso >',
//               url: '#cartera-activa-egreso'
//             }
//           ]
//         }, {
//           name: 'Acciones',
//           url: '#personas-acciones',
//           subMenu: [
//             {
//                 name: 'Compra >',
//                 url: '#personas-acciones-compra'
//             },
//             {
//               name: 'Venta >',
//               url: '#personas-acciones-venta'
//             }
//           ]
//         },
//         {
//           name: 'Moneda Extranjera',
//           url: '#pmoneda',
//           subMenu: [
//             {
//                 name: 'Compra >',
//                 url: '#pmoneda-compra'
//             },
//             {
//               name: 'Venta >',
//               url: '#pmoneda-venta'
//             }
//           ]
//         },
//
//         // {
//         //   name: 'APV',
//         //   url: '#apv',
//         //   subMenu: []
//         // },
//         {
//           name: 'Caja Internet',
//           url: '',
//           subMenu: [
//             {
//                 name: 'Abonar >',
//                 url: '#caja-abono'
//             },
//             {
//               name: 'Retirar >',
//               url: '#caja-retiro'
//             }
//           ]
//         },
//       ]
//     },
//
//
//     {
//       id: 3,
//       name: 'Asesoría',
//       image: 'navMenu--imagen imagen--asesoria',
//       desc: 'Te ofrecemos alternativas de inversión que se adecúen a tus necesidades.',
//       menu: [{
//           name: 'Perfil de inversionista',
//           url: 'login-personas.html#/encuesta-inversionista',
//           subMenu: [
//
//         ]
//         },
//
//         {
//           name: 'BGA',
//           url: '#bga',
//           subMenu: [
//
//         ]
//         },
//         {
//           name: 'Apps',
//           url: 'https://itunes.apple.com/cl/app/mi-inversion/id1147193402?mt=8',
//           target: '_blank',
//         }, {
//           name: 'Informes de estudios',
//           url: '#informes-persona',
//           subMenu: []
//         },
//       ]
//     },
//
//
//
//     {
//       id: 4,
//       name: 'Servicios',
//       image: 'navMenu--imagen imagen--servicios',
//       desc: 'Queremos que te sientas acompañado en todo momento, que puedas resolver tus dudas y que pueda encontrarnos siempre.',
//       menu: [{
//           name: 'Transferencias a Terceros',
//           url: '#transferencias-privado-persona',
//
//       ]
//     },
//     {
//       id: 5,
//       name: 'Definir',
//       image: 'navMenu--imagen imagen--definir',
//       desc: 'Queremos que te sientas cómodo y que tengas toda tu información disponible y actualizada.',
//       menu: [
//         {
//           name: 'Información Cliente',
//           url: '',
//           subMenu: [
//           {
//             name: 'Mis Datos >',
//             url: '#mis-datos-resumen'
//           },
//           {
//             name: 'Perfil de Inversionista >',
//             url: 'login-personas.html#/encuesta-inversionista'
//           },
//           {
//             name: 'Actualización de Datos >',
//             url: '#actualizacion-de-datos'
//           },
//
//
//
//
//         ]
//         }, {
//           name: 'Beneficiarios',
//           url: '#beneficiario-personas',
//           subMenu: [{
//               name: 'Agregar beneficiario >',
//               url: '#agregar-beneficiario-persona'
//             }
//
//           ]
//         },
//         {
//           name: 'Alertas y avisos',
//           url: '',
//           subMenu: []
//         },
//
//
//       ]
//     }
//
//
//   ];
//
//
//
//
//   function previousPage() {
//     var i, tab, elements = getElements();
//     for (i = 0; i < elements.tabs.length; i++) {
//       tab = elements.tabs[i];
//       if (tab.offsetLeft + tab.offsetWidth >= ctrl.offsetLeft) break;
//     }
//     ctrl.offsetLeft = fixOffset(tab.offsetLeft + tab.offsetWidth - elements.canvas.clientWidth);
//   }
// });
//Fin  controlador menu-personas-jorge-oct

banchileApp.controller('menuFooterCtrl', function($scope) {

  $scope.menuFooter = [

    {
      name: 'Servicio al Cliente',
      menu: [
        {
          name: 'Contactanos',
          url: '#contactanos',
        },
        {
          name: 'Sucursales',
          url: '#sucursales',
        },

        {
          name: 'Preguntas Frecuentes',
          url: '#preguntas-frecuentes',
        },
        {
          name: 'Información Legal',
          url: '#',
        },
      ]
    },
    {
      name: 'Responsabilidad',
      menu: [
        {
          name: 'Invierto bien',
          url: 'http://www.inviertobien.com',
          target: '_blank'
        },
        {
          name: 'Trabaja con nosotros',
          url: '#',
        },

        {
          name: 'Comunidad',
          url: '#',
        },
      ]
    },
    {
      name: 'Herramientas',
      menu: [
        {
          name: 'Informes de estudio',
          url: '#',
        },
        {
          name: 'Indicadores',
          url: '#',
        },

        {
          name: 'BGA',
          url: '#',
        },
        {
          name: 'Simuladores',
          url: '#',
        },
      ]
    }
  ];
});

///// CONTROLADORES DEL MENU DE NAVEGACION PRIVADO Y PUBLICO, HOME, RESUMEN THIAGO SOARES //////
banchileApp.controller('menuLoginCtrl', function($scope, $mdPanel) {
  $scope.active6 = false;
  $scope._mdPanel = $mdPanel;
  $scope.showMenuLogin = function(event) {
    // var position = $scope._mdPanel.newPanelPosition()
    //      .relativeTo('.menuLogin--despliegue')
    //      .addPanelPosition($scope._mdPanel.xPosition.ALIGN_START, // $scope._mdPanel.yPosition.BELOW);
    var position = $scope._mdPanel.newPanelPosition()
      .absolute()
      .right('-300px')
      .top();
    var animation = $scope._mdPanel.newPanelAnimation();
    animation.withAnimation({
      open: 'login--open',
      close: 'login--close '
    });
    var config = {
      attachTo: angular.element(document.body),
      templateUrl: 'menuLogin.tmpl.html',
      position: position,
      animation: animation,
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: false,
      zIndex: 200,
      controller: MenuLoginPopUpCtrl
    };
    $scope._mdPanel.open(config);
  };

  function MenuLoginPopUpCtrl($scope) {
    $scope.active1 = true;
    $scope.active2 = true;
    $scope.active3 = true;
    $scope.clickMenu = function(itemMenu) {
      if (itemMenu == 1) {
        $scope.active1 = !$scope.active1;
        $scope.active2 = true;
        $scope.active3 = true;
      } else if (itemMenu == 2) {
        $scope.active1 = true;
        $scope.active2 = !$scope.active2;
        $scope.active3 = true;
      } else if (itemMenu == 3) {
        $scope.active1 = true;
        $scope.active2 = true;
        $scope.active3 = !$scope.active3;
      }
    };
  };
});

// controlador menu-empresas-jorge-12-10
banchileApp.controller('menuPrivadoCrtl-e', function($scope) {
  $scope.activo = [];
  $scope.visible = [];
  $scope.mouseOver = function(position) {
    $scope.activo[position] = "activo-menuPrivado";
    $scope.visible[position] = true;
  };

  $scope.mouseLeave = function(position) {
    $scope.activo[position] = "";
    $scope.visible[position] = false;
  };
  $scope.mouseClick = function(position) {
    $scope.activo[position] = "";
    $scope.visible[position] = false;
  };
  $scope.nextPage = function() {
    var elements = angular.element(document.querySelector('#menuPrivadoCategoria'));
    console.log(elements.prop('offsetTop'));
    elements.top = elements.prop('offsetTop') + 30;
  };
  // controlador menu-empresas-jorge-15-11
  $scope.currentOpen = {
    menuId: null
  };

  $scope.prueba1 = function() {
    console.log('LLEGA');
    $scope.indicadores = false;
    $scope.notificaciones = false;
  };
  $scope.menuEmpresa = [{
      id: 1,
      name: 'Consultar',
      image: 'navMenu--imagen imagen--consultar',
      desc: 'Acá podrás encontrar toda la información sobre tus patrimonios, movimientos, documentos y autorizaciones pendientes.',
      menu: [{
          name: 'Resumen de inversiones',
          url: '#resumen',
          subMenu: []
        }, {
          name: 'Patrimonio',
          url: '#patrimonio',
          subMenu: []
        }, {
          name: 'Movimientos',
          url: '#movimientos',
          subMenu: []
        }, {
          name: 'Documentos',
          url: '#documentos',
          subMenu: []
        },
        {
          name: 'Autorizaciones',
          url: '#autorizaciones',
          subMenu: []
        },
        {
          name: 'Instrucciones',
          url: '#transacciones-porInstruir-empresas',
          subMenu: []
        }
      ]
    },
    {
      id: 2,
      name: 'Invertir',
      image: 'navMenu--imagen imagen--invertir',
      desc: 'Acá podrás encontrar variadas opciones de inversión que tenemos pensadas especialmente para tí.',
      menu: [{
          name: 'Fondos mutuos',
          url: '#fondos-mutuos',
          subMenu: [
            // {
            //     name: 'Aporte >',
            //     url: '#fondosmutuos-aporte-clp'
            // },
            // {
            //   name: 'Rescate >',
            //   url: '#fondosmutuos-rescate'
            // }
          ]
        },
        {
          name: 'Acciones',
          url: '#acciones',
          subMenu: [
            // {
            //     name: 'Compra >',
            //     url: '#empresas-acciones-compra'
            // },
            // {
            //   name: 'Venta >',
            //   url: '#empresas-acciones-venta'
            // }
          ]
        },
        {
          name: 'Moneda Extranjera',
          url: '#moneda',
          subMenu: [
            // {
            //     name: 'Compra >',
            //     url: '#moneda-compra'
            // },
            // {
            //   name: 'Venta >',
            //   url: '#moneda-venta'
            // }
          ]
        },
        // {
        //   name: 'Caja Internet',
        //   url: '',
        //   subMenu: [
        //     {
        //         name: 'Abonar >',
        //         url: '#caja-abono'
        //     },
        //     {
        //       name: 'Retirar >',
        //       url: '#caja-retiro'
        //     }
        //   ]
        // },
        {
          name: 'Abonar a Caja Internet',
          url: '#caja-abono',
          subMenu: [
          ]
        },
        {
          name: 'Retirar a Caja Internet',
          url: '#caja-retiro',
          subMenu: [
          ]
        },
      ]
    },
    {
      id: 3,
      name: 'Asesoría',
      image: 'navMenu--imagen imagen--asesoria',
      desc: 'Te ofrecemos alternativas de inversión que se adecúen a tus necesidades.',
      menu: [
        // {
        //   name: 'Perfil de inversionista',
        //   url: 'login-personas.html#/encuesta-inversionista',
        // },
        // {
        //   name: 'Recomendacíon',
        //   url: '',
        // },
        // {
        //   name: 'BGA',
        //   url: '#bga',
        //   subMenu: [
        // ]
        // },
        // {
        //   name: 'Apps',
        //   url: 'https://itunes.apple.com/cl/app/mi-inversion/id1147193402?mt=8',
        // },
        {
          name: 'Informes de estudios',
          url: '#informes-empresas',
          subMenu: []
        },
      ]
    },
    {
      id: 4,
      name: 'Servicios',
      image: 'navMenu--imagen imagen--servicios',
      desc: 'Queremos que te sientas acompañado en todo momento, que puedas resolver tus dudas y que pueda encontrarnos siempre.',
      menu: [
        {
            name: 'Transferencia a Terceros',
            url: '#transferencias-privado-empresa',
          //   subMenu: [{
          //     name: 'Ver mi cartera >',
          //     url: ''
          //   }, {
          //     name: 'Avisos de mercado >',
          //     url: ''
          //   }
          // ]
          },

        {
          name: 'Banchile Pay',
          url: '#banchilepay',

        },

        // {
        //   name: 'Indicadores',
        //   url: '#indicadores',
        //
        // },
        //   {
        //   name: 'Preguntas frecuentes',
        //   url: '#preguntas-frecuentes',
        //
        // },
      ]
    },
    {
      id: 5,
      name: 'Definir',
      image: 'navMenu--imagen imagen--definir',
      desc: 'Queremos que te sientas cómodo y que tengas toda tu información disponible y actualizada.',
      menu: [
        {
          name: 'Información Cliente',
          url: 'login-personas.html#/actualizacion-datos',
          subMenu: [
            // {
            //   name: 'Resumen de Datos >',
            //   url: '#mis-datos-resumen'
            // },
            // {
            //   name: 'Encuesta de Inversionista >',
            //   url: 'login-personas.html#/encuesta-inversionista'
            // },
            // {
            //   name: 'Actualización de Datos >',
            //   url: '#actualizacion-de-datos'
            // },
        ]
        },
        {
          name: 'Beneficiarios',
          url: '#beneficiario',
          subMenu: [
            // {
            //   name: 'Agregar beneficiario >',
            //   url: '#agregar-beneficiario'
            // },
            // {
            //   name: '',
            // },

          ]
        },

        {
          name: 'Usuario',
          url: '#usuario',
          subMenu: [
            // {
            //   name: 'Agregar usuario >',
            //   url: '#agregar-usuario'
            // },
            // {
            //   name: '',
            // },

          ]
        },

        {
          name: 'Empresa',
          url: '#empresa',
          subMenu: [
          //   {
          //   name: 'Agregar empresa >',
          //   url: '#agregar-empresa'
          // }
        ]
        },


        // {
        //   name: 'Mi sitio',
        //   url: '#mis-datos-resumen',
        //   subMenu: [
        //     {
        //       name: 'Favoritos >',
        //       url: '#favoritos'
        //     },
        //   ]
        // },
        // {
        //   name: 'Alertas y avisos',
        //   url: '',
        //   subMenu: []
        // },
      ]
    },
  ];

  function previousPage() {
    var i, tab, elements = getElements();
    for (i = 0; i < elements.tabs.length; i++) {
      tab = elements.tabs[i];
      if (tab.offsetLeft + tab.offsetWidth >= ctrl.offsetLeft) break;
    }
    ctrl.offsetLeft = fixOffset(tab.offsetLeft + tab.offsetWidth - elements.canvas.clientWidth);
  }
});
//Fin  controlador menu-empresas-jorge

// controlador menu-personas-jorge-12-10
banchileApp.controller('menuPrivadoCrtl-p', function($scope) {
  $scope.activo = [];
  $scope.visible = [];
  $scope.mouseOver = function(position) {
    $scope.activo[position] = "activo-menuPrivado";
    $scope.visible[position] = true;
  };

  $scope.mouseLeave = function(position) {
    $scope.activo[position] = "";
    $scope.visible[position] = false;
  };
  $scope.mouseClick = function(position) {
    $scope.activo[position] = "";
    $scope.visible[position] = false;
  };
  $scope.mouseClickN = function(position) {
    $scope.activo[position] = "";
    $scope.visible[position] = true;
  };
  $scope.nextPage = function() {
    var elements = angular.element(document.querySelector('#menuPrivadoCategoria'));
    console.log(elements.prop('offsetTop'));
    elements.top = elements.prop('offsetTop') + 30;
  };


  $scope.currentOpen = {
    menuId: null
  };

  $scope.prueba1 = function() {
    console.log('LLEGA');
    $scope.indicadores = false;
    $scope.notificaciones = false;
  };

  $scope.menuEmpresa = [
    {
      id: 1,
      name: 'Consultar',
      image: 'navMenu--imagen imagen--consultar',
      desc: 'Acá podrás encontrar toda la información sobre tus patrimonios, movimientos, documentos y autorizaciones pendientes.',
      menu: [{
        name: 'Resumen de inversiones',
        url: '#resumen',
        subMenu: []
      }, {
        name: 'Patrimonio',
        url: '#patrimonio',
        subMenu: []
      }, {
        name: 'Movimientos',
        url: '#movimientos',
        subMenu: []
      }, {
        name: 'Documentos',
        url: '#documentos',
        subMenu: []
      }, {
        name: 'Autorizaciones',
        url: '#autorizaciones',
        subMenu: []
      },
      {
        name: 'Instrucciones',
        url: '#transacciones-porInstruir-persona',
        subMenu: []
      }
    ]
    },

    {
      id: 2,
      name: 'Invertir',
      image: 'navMenu--imagen imagen--invertir',
      desc: 'Acá podrás encontrar variadas opciones de inversión que tenemos pensadas especialmente para ti.',
      menu: [
        {
          name: 'Fondos Mutuos',
          url: '#fondos-mutuos',
          subMenu: [
            // {
            //     name: 'Aporte >',
            //     url: '#fondosmutuos-aporte-clp'
            // },
            // {
            //   name: 'Rescate >',
            //   url: '#fondosmutuos-rescate'
            // }
          ]
        }, {
          name: 'Cartera Activa',
          url: '#cartera-activa',
          subMenu: [
            // {
            //     name: 'Ingreso >',
            //     url: '#cartera-activa-ingreso'
            // },
            // {
            //   name: 'Egreso >',
            //   url: '#cartera-activa-egreso'
            // }
          ]
        }, {
          name: 'Acciones',
          url: '#personas-acciones',
          subMenu: [
            // {
            //     name: 'Compra >',
            //     url: '#personas-acciones-compra'
            // },
            // {
            //   name: 'Venta >',
            //   url: '#personas-acciones-venta'
            // }
          ]
        },
        {
          name: 'Moneda Extranjera',
          url: '#pmoneda',
          subMenu: [
            // {
            //     name: 'Compra >',
            //     url: '#pmoneda-compra'
            // },
            // {
            //   name: 'Venta >',
            //   url: '#pmoneda-venta'
            // }
          ]
        },

        // {
        //   name: 'APV',
        //   url: '#apv',
        //   subMenu: []
        // },
        // {
        //   name: 'Caja Internet',
        //   url: '',
        //   subMenu: [
        //     {
        //         name: 'Abonar >',
        //         url: '#caja-abono'
        //     },
        //     {
        //       name: 'Retirar >',
        //       url: '#caja-retiro'
        //     }
        //   ]
        // },
        {
          name: 'Abonar a Caja Internet',
          url: '#caja-abono',
          subMenu: [
          ]
        },
        {
          name: 'Retirar a Caja Internet',
          url: '#caja-retiro',
          subMenu: [
          ]
        },
      ]
    },


    {
      id: 3,
      name: 'Asesoría',
      image: 'navMenu--imagen imagen--asesoria',
      desc: 'Te ofrecemos alternativas de inversión que se adecúen a tus necesidades.',
      menu: [
        // {
        //   name: 'Perfil de inversionista',
        //   url: 'login-personas.html#/encuesta-inversionista',
        //   subMenu: [
        // ]
        // },
        // {
        //   name: 'Recomendación',
        //   url: '',
        // },
        // {
        //   name: 'BGA',
        //   url: '#bga',
        //   subMenu: [
        // ]
        // },
        // {
        //   name: 'Apps',
        //   url: 'https://itunes.apple.com/cl/app/mi-inversion/id1147193402?mt=8',
        //   target: '_blank',
        // },
        {
          name: 'Informes de estudios',
          url: '#informes-persona',
          subMenu: []
        },
      ]
    },



    {
      id: 4,
      name: 'Servicios',
      image: 'navMenu--imagen imagen--servicios',
      desc: 'Queremos que te sientas acompañado en todo momento, que puedas resolver tus dudas y que pueda encontrarnos siempre.',
      menu: [{
          name: 'Transferencias',
          url: '#transferencias-privado-persona',
        //   subMenu: [{
        //     name: 'Ver mi cartera >',
        //     url: ''
        //   }, {
        //     name: 'Avisos de mercado >',
        //     url: ''
        //   }
        // ]
        },
        // {
        //   name: 'Preguntas frecuentes',
        //   url: '#preguntas-frecuentes',
        //
        // },
        // {
        //   name: 'Sucursales',
        //   url: '#sucursales',
        //
        // },
        // {
        //   name: 'Contacto',
        //   url: '#contactanos',
        //
        // },
      ]
    },
    {
      id: 5,
      name: 'Definir',
      image: 'navMenu--imagen imagen--definir',
      desc: 'Queremos que te sientas cómodo y que tengas toda tu información disponible y actualizada.',
      menu: [
        {
          name: 'Información Cliente',
          url: 'login-personas.html#/actualizacion-datos',
          subMenu: [
          // {
          //   name: 'Resumen de Datos >',
          //   url: '#mis-datos-resumen'
          // },
          // {
          //   name: 'Encuesta de Inversionista >',
          //   url: 'login-personas.html#/encuesta-inversionista'
          // },
          // {
          //   name: 'Actualización de Datos >',
          //   url: '#actualizacion-de-datos'
          // },
        ]
        }, {
          name: 'Beneficiarios',
          url: '#beneficiario-personas',
          subMenu: [
            // {
            //   name: 'Agregar beneficiario >',
            //   url: '#agregar-beneficiario-persona'
            // }
          ]
        },
        // {
        //   name: 'Alertas y avisos',
        //   url: '',
        //   subMenu: []
        // },
        // {
        //   name: 'Mi sitio',
        //   url: '#mis-datos-resumen',
        //   subMenu: [
        //     {
        //       name: 'Favoritos >',
        //       url: '#favoritos'
        //     },
        //   ]
        // },



      ]
    }


  ];


  // $scope.toggle = function() {
  //      $scope.show = !$scope.show;
  //  };



  function previousPage() {
    var i, tab, elements = getElements();
    for (i = 0; i < elements.tabs.length; i++) {
      tab = elements.tabs[i];
      if (tab.offsetLeft + tab.offsetWidth >= ctrl.offsetLeft) break;
    }
    ctrl.offsetLeft = fixOffset(tab.offsetLeft + tab.offsetWidth - elements.canvas.clientWidth);
  }
});
//Fin  controlador menu-personas-jorge-oct

banchileApp.controller('menuPrivadoMovil', function($scope) {
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: true,
    centeredSlides: false,
    grabCursor: false,
    freeMode: true,
    slidesPerView: 4,
  });
  $scope.activo = [];
  $scope.visible = [];
  $scope.mouseOver = function(position) {
    $scope.activo[position] = "activo-menuPrivado";
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

// controlador menu-personas-jorge-12-10
banchileApp.controller('menuPublicoCrtl-e', function($scope) {
  $scope.activo = [];
  $scope.visible = [];
  $scope.mouseOver = function(position) {
    $scope.activo[position] = "activo-menuPrivado";
    $scope.visible[position] = true;
  };

  $scope.mouseLeave = function(position) {
    $scope.activo[position] = "";
    $scope.visible[position] = false;
  };
  $scope.mouseClick = function(position) {
    $scope.activo[position] = "";
    $scope.visible[position] = false;
  };
  $scope.mouseClickN = function(position) {
    $scope.activo[position] = "";
    $scope.visible[position] = true;
  };
  $scope.nextPage = function() {
    var elements = angular.element(document.querySelector('#menuPrivadoCategoria'));
    console.log(elements.prop('offsetTop'));
    elements.top = elements.prop('offsetTop') + 30;
  };

  $scope.menuEmpresa = [{
    name: 'Asesoría personalizada',
    subname: 'Asesoría',
    image: 'navMenu--imagen imagen--asesoria',
    desc: 'Te ofrecemos alternativas de inversión que se adecúen a tus necesidades.',
    menu: [
      {
        name: 'Departamento de estudios',
        url: '#depto-estudios',
        subMenu: []
      },
      {
        name: 'BGA',
        url: '#bga',
        subMenu: []
      },
      {
        name: 'Apps',
        url: 'https://itunes.apple.com/cl/app/mi-inversion/id1147193402?mt=8',
        target: '_blank',
      },
      {
        name: 'Invierto Bien',
        url: 'http://www.inviertobien.com/',
        target: '_blank',
        subMenu: []
      },

      {
        name: 'Noticias',
        url: '#noticias',
      },
    ]
  },
  {
    name: 'Productos y servicios',
    subname: 'Invertir',
    image: 'navMenu--imagen imagen--productos_p',
    desc: 'Acá podrás encontras variadas opciones de inversión que tenemos pensadas especialmente para ti.',
    menu: [{
        name: 'Fondos Mutuos',
        url: '#fondos-mutuos-publico-empresa',
        subMenu: []
      },

      {
      name: 'Cartera Activa',
       url: '#cartera-activa-publico-empresa',
       subMenu: []
     },
       {
        name: 'Acciones',
        url: '#acciones-home-publico-empresa',
        subMenu: []
      },
      {
        name: 'Moneda Extranjera',
        url: '#moneda-publico-empresa',
        subMenu: []
      },
      {
        name: 'Fondos de Inversión',
        url: '#fondos-inversion-publico-empresa',
        subMenu: []
      },
      {
        name: 'Mercado Valores Extranjeros',
        url: '#mercado-extranjero-publico-empresa',
        subMenu: []
      },
      {
        name: 'Productos Derivados',
        url: '#productos-derivados-publico-empresa',
        subMenu: []
      },
      {
        name: 'Renta Fija',
        url: '#renta-fija-publico-empresa',
        subMenu: []
      },
      {
        name: 'Banchile Pay',
        url: '#banchilepay-publico-empresa',
        subMenu: []
      },
      {
        name: 'Transferencia a Terceros ',
        url: '#transferencias-publico-empresa',
        subMenu: []
      },



    ]
  },
  {
    name: 'Reputación y respaldo',
    subname: 'Nosotros',
    image: 'navMenu--imagen imagen--reputacion_p',
    desc: 'Te acompañamos permanentemente, con un servicio personalizado y con la trayectoria , seriedad y confianza que nos otorga el Banco de Chile.',
    menu: [{
        name: 'Trayectoria de excelencia',
        url: '#trayectoria-excelencia',
        subMenu: []
      }, {
        name: 'Premios y reconocimientos',
        url: '#premios-reconocimientos',
        subMenu: []
      }, {
        name: 'Información legal',
        url: '#informacion-legal',
        subMenu: []
      },
      {
        name: 'Sucursales',
        url: '#sucursales',
        subMenu: []
      },
        {
        name: 'Preguntas frecuentes',
        url: '#preguntas-frecuentes',

      },
      // {
      //   name: 'AGF',
      //   url: '',
      //   subMenu: []
      // },
      // {
      //   name: 'Corredores de bolsa',
      //   url: '',
      //   subMenu: []
      // },
      {
        name: 'Contáctanos',
        url: '#contactanos',
        subMenu: []
      },
    ]
  },



  ];

  $scope.togglePanel = function (index) {

    for(i = 0; i < $scope.menuEmpresa.length; i++) {

      console.log($scope.menuEmpresa)

      if(index == i) {
        $scope.menuEmpresa[i].activo = !$scope.menuEmpresa[i].activo;
      } else {
        $scope.menuEmpresa[i].activo = false;
      }

    }

    setTimeout(function () {
      $scope.$apply();
    }, 10);

  };


  function previousPage() {
    var i, tab, elements = getElements();
    for (i = 0; i < elements.tabs.length; i++) {
      tab = elements.tabs[i];
      if (tab.offsetLeft + tab.offsetWidth >= ctrl.offsetLeft) break;
    }
    ctrl.offsetLeft = fixOffset(tab.offsetLeft + tab.offsetWidth - elements.canvas.clientWidth);
  }
});
//Fin  controlador menu-personas-jorge-oct

// controlador menu-personas-jorge-12-10
banchileApp.controller('menuPublicoCrtl-p', function($scope) {
  $scope.activo = [];
  $scope.visible = [];
  $scope.mouseOver = function(position) {
    $scope.activo[position] = "activo-menuPrivado";
    $scope.visible[position] = true;
  };

  $scope.mouseLeave = function(position) {
    $scope.activo[position] = "";
    $scope.visible[position] = false;
  };
  $scope.mouseClick = function(position) {
    $scope.activo[position] = "";
    $scope.visible[position] = false;
  };
  $scope.mouseClickN = function(position) {
    $scope.activo[position] = "";
    $scope.visible[position] = true;
  };
  $scope.nextPage = function() {
    var elements = angular.element(document.querySelector('#menuPrivadoCategoria'));
    console.log(elements.prop('offsetTop'));
    elements.top = elements.prop('offsetTop') + 30;
  };

  $scope.menuEmpresa = [{
    activo: false,
    name: 'Asesoría personalizada',
    subname: 'Asesoría',
    image: 'navMenu--imagen imagen--asesoria',
    desc: 'Te ofrecemos alternativas de inversión que se adecúen a tus necesidades.',
    menu: [
      {
        name: 'Departamento de estudios',
        url: '#depto-estudios',
        subMenu: []
      },
      {
        name: 'BGA',
        url: '#bga',
        subMenu: []
      },
      {
        name: 'Invierto Bien',
        url: 'http://www.inviertobien.com/',
        target: '_blank',
        subMenu: []
      },
      {
        name: 'Noticias',
        url: '#noticias',
      },
    ]
  },
  {
    activo: false,
    name: 'Productos y servicios',
    subname: 'Invertir',
    image: 'navMenu--imagen imagen--productos_p',
    desc: 'Acá podrás encontrar variadas opciones de inversión que tenemos pensadas especialmente para ti.',
    menu: [{
        name: 'Fondos Mutuos',
        url: '#fondos-mutuos-publico-persona',
        subMenu: []
      }, {
        name: 'Cartera Activa',
        url: '#cartera-activa-publico-persona',
        subMenu: []
      }, {
        name: 'Acciones',
        url: '#acciones-home-publico-persona',
        subMenu: []
      },
      {
        name: 'Moneda Extranjera',
        url: '#moneda-publico-persona',
        subMenu: []
      },
      {
        name: 'Ahorro Previsional Voluntario',
        url: '#apv-publico-persona',
        subMenu: []
      },
      {
        name: 'Fondos de Inversión',
        url: '#fondos-inversion-publico',
        subMenu: []
      },
      {
        name: 'Mercado Valores Extranjeros',
        url: '#mercado-extranjero-publico',
        subMenu: []
      },
      {
        name: 'Productos Derivados',
        url: '#productos-derivados-publico',
        subMenu: []
      },
      {
        name: 'Renta Fija',
        url: '#renta-fija-publico',
        subMenu: []
      },
      {
        name: 'Transferencia a Terceros',
        url: '#transferencias-publico-persona',
        subMenu: []
      },
    ]
  },
  {
      activo: false,
    name: 'Reputación y respaldo',
    subname: 'Nosotros',
    image: 'navMenu--imagen imagen--reputacion_p',
    desc: 'Te acompañamos permanentemente, con un servicio personalizado y con la trayectoria , seriedad y confianza que nos otorga el Banco de Chile.',
    menu: [{
        name: 'Trayectoria de excelencia',
        url: '#trayectoria-excelencia',
        subMenu: []
      }, {
        name: 'Premios y reconocimientos',
        url: '#premios-reconocimientos',
        subMenu: []
      }, {
        name: 'Información legal',
        url: '#informacion-legal',
        subMenu: []
      },
      {
        name: 'Sucursales',
        url: '#sucursales',
        subMenu: []
      },
      {
        name: 'Preguntas frecuentes',
        url: '#preguntas-frecuentes',

      },
      // {
      //   name: 'AGF',
      //   url: '',
      //   subMenu: []
      // },
      // {
      //   name: 'Corredores de bolsa',
      //   url: '',
      //   subMenu: []
      // },
      {
        name: 'Contáctanos',
        url: '#contactanos',
        subMenu: []
      },
    ]
  },

  ];

  for(var auxMenu in $scope.menuEmpresa ){
    // console.log($scope.menuEmpresa[auxMenu]);
    for(var auxMenu2 in $scope.menuEmpresa[auxMenu]){
      // console.log($scope.menuEmpresa[auxMenu][auxMenu2]);
      for(var auxMenu3 in $scope.menuEmpresa[auxMenu][auxMenu2]){
        $scope.menuEmpresa[auxMenu][auxMenu2][auxMenu3].style = 'height: 180px !important; color: red; outline: solid 1px lightgreen';
        // console.log($scope.menuEmpresa[auxMenu][auxMenu2][auxMenu3]);
      }

    }

  }

  $scope.buscador = [{
    activo: false,
    name: 'resultadosMovil',
  }, ];

  $scope.togglePanel = function(index) {

    for(i = 0; i < $scope.menuEmpresa.length; i++) {


      if(index == i) {
        $scope.menuEmpresa[i].activo = !$scope.menuEmpresa[i].activo;
      } else {
        $scope.menuEmpresa[i].activo = false;
      }

    }

    setTimeout(function () {
      $scope.$apply();
    }, 10);

  };

  // $scope.togglePanelb = function(index) {
  //
  //   for (i = 0; i < $scope.buscador.length; i++) {
  //
  //     console.log($scope.buscador)
  //
  //     if (index == i) {
  //       $scope.buscador[i].activo = !$scope.buscador[i].activo;
  //     } else {
  //       $scope.buscador[i].activo = false;
  //     }
  //
  //   }
  //
  //   setTimeout(function() {
  //     $scope.$apply();
  //   }, 10);
  //
  // };


  function previousPage() {
    var i, tab, elements = getElements();
    for (i = 0; i < elements.tabs.length; i++) {
      tab = elements.tabs[i];
      if (tab.offsetLeft + tab.offsetWidth >= ctrl.offsetLeft) break;
    }
    ctrl.offsetLeft = fixOffset(tab.offsetLeft + tab.offsetWidth - elements.canvas.clientWidth);
  }
});
//Fin  controlador menu-personas-jorge-oct

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

// CONTROLADORES DE MODALES
banchileApp.controller('modalesCrtl', function($scope, $mdDialog, $mdMedia) {
  $scope.status = '  ';
  $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
  $scope.showRechazado = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/error.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showAdvertencia = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/advertencia.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showAutorizado = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/exito.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showmisDatos = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/misDatos.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  $scope.showmisDatosTotales = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/misDatosTotales.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  $scope.showRescateFFMM = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/ffmmRescate.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  $scope.showAporteFFMM = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/ffmmAporte.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showAceptar = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/aceptarAutorizacionPersona.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  $scope.showTransferencias = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/transferenciasExito.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  $scope.showIngresoCA = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/caIngreso.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showEgresoCA = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/caEgreso.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  $scope.showCompraME = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/meComprar.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showCompraMEInstruccion = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/meComprarMonedaEx.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showCompraMEInstruccionP = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/meComprarMonedaExP.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  $scope.showCompraPersonasME = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/meComprarInstruccion-personas.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  $scope.showCompraMEIN = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/meComprarInstruccion.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  $scope.showCompraPersonasMEIN = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/meComprarInstruccion-personas.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  $scope.showVentaPersonasME = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/meVenderInstruccion-personas.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  $scope.showVentaA = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/accionesVender.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showCompraA = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/accionesComprar.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showCompraMonedaEx = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/accionesComprarMonedaEx.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showAbonarCI = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/ciAbonar.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showRetirarCI = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/ciRetirar.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showInversionRealizada = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/InversionRealizada.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showDatosRegistrados = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/DatosRegistrados.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  };
  $scope.showcontactoExito = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/contactoExito.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  };
  $scope.showDatosActualizados = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/DatosActualizados.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  };
  $scope.showFirmaContrato = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/FirmaContrato.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  };
  $scope.showDatosCompletar = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/DatosCompletar.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
    $scope.doTheBack = function() {
      window.history.back();
    };
  };
  $scope.showTransferenciacompleta = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/Transferenciacompleta.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
    $scope.doTheBack = function() {
      window.history.back();
    };
  };
  $scope.showAutorizarBeneficiario = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/AutorizarBeneficiario.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
    $scope.doTheBack = function() {
      window.history.back();
    };
  };
  /*modal fijar precio banchilepay*/
  $scope.showBanchileFijarPrecio = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/banchileFijarPrecio.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
    $scope.doTheBack = function() {
      window.history.back();
    };
  };
  /*fin modal fijar precio banchilepay*/
  $scope.showFondosDisponiblesAporte = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/FondosDisponiblesAporte.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showFondosDisponiblesRescate = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/FondosDisponiblesRescate.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showTodasCarteras = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/TodasCarteras.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.hideCartera = function() {
      $mdDialog.hide();
    }

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showBotonPago = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/BotonPago.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.hideCaja = function() {
      $mdDialog.hide();
    }

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showPrecioDolar = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/meFijar.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showErrorLog = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/errorLogIn.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showErrorLogPersonas = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/errorLogIn-personas.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showAgregarUsuario = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/AgregarUsuario.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showAgregarEmpresa = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/AgregarEmpresa.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
});
function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}

banchileApp.controller('notificacionesSelectCtrl', function($scope, $mdPanel) {
  $scope.ver1 = true;
  $scope.mostrar1 = function() {
    $scope.ver1 = true;
    $scope.ver2 = false;
    $scope.ver3 = false
  }
  $scope.mostrar2 = function() {
    $scope.ver1 = false;
    $scope.ver2 = true;
    $scope.ver3 = false
  }
  $scope.mostrar3 = function() {
    $scope.ver1 = false;
    $scope.ver2 = false;
    $scope.ver3 = true
  }
  $scope.activeSelect = 'notificacion1';
});

banchileApp.controller('origendeFondos', function($scope) {
  $scope.show = false;
  $scope.text = "";
  $scope.test = function() {
    $scope.show = true;

  };
});

banchileApp.controller('progress', function($scope, $interval) {
  $scope.progressval = 0;
  $scope.stopinterval = null;

  $scope.updateProgressbar = function() {
    startprogress();
  }

  function startprogress() {
    $scope.progressval = 0;

    if ($scope.stopinterval) {
      $interval.cancel($scope.stopinterval);
    }

    $scope.stopinterval = $interval(function() {
      $scope.progressval = $scope.progressval + 5;
      if ($scope.progressval >= 40) {
        $interval.cancel($scope.stopinterval);
        return;
      }
    }, 100);
  }
  startprogress();
});

banchileApp.controller('progressCircularCargando', ['$interval',
  function($interval) {
    var self = this;

    self.activated = true;
    self.determinateValue = 30;

    // Iterate every 100ms, non-stop and increment
    // the Determinate loader.
    $interval(function() {

      self.determinateValue += 1;
      if (self.determinateValue > 100) {
        self.determinateValue = 30;
      }

    }, 100);
  }
]);

banchileApp.controller('reinversionSelect', function($scope) {
  $scope.demo = {
    showTooltip: false,
  };
});

banchileApp.controller('resumenPersonasSlider', function($scope) {
  var swiper = new Swiper('#sliderHome', {
    pagination: '#swiper-pagination-banner',
    paginationClickable: true,
    spaceBetween: 30,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
  });
});
///// FIN CONTROLADORES DEL MENU DE NAVEGACION PRIVADO Y PUBLICO Y HOME THIAGO SOARES //////

banchileApp.controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function() {
    // Component lookup should always be available since we are not using `ng-if`
    $mdSidenav('rights').close()
      .then(function() {
        $log.debug("close RIGHTs is done");
      });
  };
});

banchileApp.controller('SelectCtrl', function($scope) {
  $scope.select = {
    empresa: '1',
    cuenta: '2'
  };
});

banchileApp.controller('sliderAcciones', function($scope) {
  var swiper = new Swiper('#sliderHome', {
    pagination: '#pagination',
    paginationClickable: true,
    slidesPerView: 'auto',
    autoplay: false,
    autoplayDisableOnInteraction: true,
    spaceBetween: 30,
  });
});

// Slider Acciones recomendadas
banchileApp.controller('sliderAccionesRecomendadas', function($scope, $timeout, $window) {
  var w = angular.element($window);
  $scope.parametrosPatrimonio = {
    slidesPerView: 3,
    spaceBetween: 1,
    paginationClickable: true,
    effect: 'slide',
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 1,

      },
      992: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
      1040: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
      1140: {
        slidesPerView: 3,
        spaceBetween: 1,
      },
    }
  };
});
// Fin Slider Acciones recomendadas

// Slider banners
banchileApp.controller('sliderBanners', function($scope, $timeout, $window) {
  var w = angular.element($window);
  $scope.parametrosPatrimonio = {
    slidesPerView: 3,
    spaceBetween: 1,
    paginationClickable: true,
    effect: 'slide',
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 1,

      },
      991: {
        slidesPerView: 1,
        spaceBetween: 1,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
    }
  };
});
// Fin Slider banners

// Slider cajas
banchileApp.controller('sliderCajas', function($scope, $timeout, $window) {
  var w = angular.element($window);
  $scope.parametrosPatrimonio = {
    slidesPerView: 2,
    spaceBetween: 1,
    paginationClickable: true,
    effect: 'slide',
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    autoplay: 2500,
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 1,

      },
      991: {
        slidesPerView: 1,
        spaceBetween: 1,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
    }
  };
});
// Fin Slider cajas

banchileApp.controller('sliderHome', function($scope) {
  var swiper = new Swiper('#sliderHome', {
    pagination: '#pagination',
    paginationClickable: true,
    slidesPerView: 'auto',
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    spaceBetween: 30,
  });
});

// Slider Indicadores Display
banchileApp.controller('sliderIndicadoresDisplay', function($scope, $timeout, $window) {
    var w = angular.element($window);
    $scope.parametrosIndicadores = {
      slidesPerView: 1,
      spaceBetween: 1,
      paginationClickable: true,
      effect: 'coverflow',
      autoplay: 6600,
      speed: 1000,
      pagination: false,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      loop: true,
    };
    $scope.parametrosNotificacion = {
      slidesPerView: 1,
      spaceBetween: 1,
      paginationClickable: true,
      effect: 'fade',
      autoplay: 6600,
      speed: 1000,
      pagination: false,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      loop: true,
    };
  });
banchileApp.controller('sliderIndicadoresHome', function($scope) {
  var swiper = new Swiper('.swiper-container', {
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: true,
    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBetween: 30,
    // grabCursor: true,
    //  breakpoints: {
    //    767: {
    //          slidesPerView: 2,
    //          spaceBetween: 1,

    //  },




    //   }
  });
});

banchileApp.directive('hcChartCinta', function () {
      Highcharts.setOptions({
          lang: {
              months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
              shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
              weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
              contextButtonTitle: "Menu",
              downloadJPEG: "Descargar imagen JPEG",
              downloadPDF: "Descargar documento PDF",
              downloadPNG: "Descargar imagen PNG ",
              downloadSVG: "Descargar imagen SVG",
              drillUpText: "Volver a {series.name}",
              loading: "Cargando...",
              noData: "No exiten datos",
              printChart: "Imprimir Gráfico",
              resetZoom: "Restablecer zoom",
              resetZoomTitle: "Restablecer zoom nivel 1:1"
          }
          ,
          credits: {enabled: false}
          ,
          exporting: {enabled: false}
      });

      return {
          restrict: 'E',
          template: '<div></div>',
          scope: {
              grafico: '=idgraf'
          },
          link: function (scope, element) {
            scope.$watch('grafico', function () {
                  var datosG = [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4];
                  if(scope.grafico==1){
                    datosG = [100.9, 54.5, 24.4, 66.2, 78.0, 122.0, 52.6, 211.5, 216.4, 32.1, 53.6, 18.4];
                  }
                  if(scope.grafico==2){
                    datosG = [66.9, 22.5, 17.4, 61.2, 777.0, 765.0, 635.6, 42.5, 21.4, 30.1, 95.6, 221.4];
                  }
                  if(scope.grafico==3){
                    datosG = [432.9, 5.5, 432.4, 678.2, 43.0, 21.0, 67.6, 80.5, 97.4, 63.1, 15.6, 33.4];
                  }

                  Highcharts.chart(element[0], {
                      chart: {
                          type: 'arearange',
                          // Edit chart spacing
                          marginRight: 0,
                          marginLeft: 0,
                          spacingBottom: 0,
                          spacingTop: 0,
                          spacingLeft: 0,
                          spacingRight: 0,
                          // Explicitly tell the width and height of a chart
                          width: 60,
                          height: 30,
                      },
                      title: { text: '' },
                      subtitle: { text: ''},
                      xAxis: {
                          lineWidth: 0,
                          minorGridLineWidth: 0,
                          lineColor: 'transparent',
                          labels: {
                              enabled: false
                          },
                          minorTickLength: 0,
                          tickLength: 0,
                          gridLineColor: 'transparent',
                          type: 'datetime',
                          dateTimeLabelFormats: {
                              enabled: false
                          },
                      },
                      yAxis: {
                          labels: { enabled: false },
                          title: { text: '' }
                      },
                      legend: {
                          enabled: false
                      },
                      plotOptions: {
                          area: {
                              fillColor: {
                                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                  stops: [ [0, '#FFFFFF'],[1, '#FFFFFF'] ]
                              },
                              marker: {
                                  enabled: false,
                                  radius: 2
                              },
                              lineWidth: 2,
                              states: { hover: { lineWidth: 1 }  },
                              threshold: null
                          }
                      },
            /**/
                      tooltip: {enabled: false},
                      series: [{
                          type: 'area',
                          name: '',
                          data: datosG
                      }]
                  });
              });
          }
      };
  })

// Slider Acciones recomendadas
banchileApp.controller('sliderInformesDepto', function($scope, $timeout, $window) {
  var w = angular.element($window);
  $scope.parametrosPatrimonio = {
    slidesPerView: 4,
    spaceBetween: 1,
    paginationClickable: true,
    effect: 'slide',
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 1,

      },
      991: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 1,
      },
    }
  };
});
// Fin Slider Acciones recomendadas


// Slider Noticias recomendadas
banchileApp.controller('sliderNoticiasRecomendadas', function($scope, $timeout, $window) {
  var w = angular.element($window);
  $scope.noticiasRecomendadas = {
    slidesPerView: 3,
    spaceBetween: 1,
    paginationClickable: true,
    effect: 'slide',
    autoplay: 2500,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 1,

      },
      991: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
    }
  };
});
// Fin Slider Noticias recomendadas

// Slider caja opinión
banchileApp.controller('sliderTexto', function($scope, $timeout, $window) {
  var w = angular.element($window);
  $scope.parametrosPatrimonio = {
    slidesPerView: 1,
    spaceBetween: 1,
    paginationClickable: true,
    effect: 'slide',
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 1,

      },
      991: {
        slidesPerView: 1,
        spaceBetween: 1,
      },
      1199: {
        slidesPerView: 1,
        spaceBetween: 1,
      },
    }
  };
});
// Fin Slider cajas

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

banchileApp.controller('swipeWidgetRecomendacion', function($scope) {

  var swiper = new Swiper('#swipeWidgetRecomendacion--swiper-container', {
    pagination: '#swipeWidgetRecomendacion-pagination',
    paginationClickable: true,
    slidesPerView: 1,
    spaceBetween: 50,

  });

});

// LISTADO BENEFICIARIOS
banchileApp.controller('tablaBeneficiarios', function($scope) {

  $scope.sort = '+tipo';
  $scope.benef = [{
      tipo: "Nacional",
      nombre: "Francisco Pacheco",
      alias: "Proveedor de Semillas",
      pais: "República Dominicana ",
      direccion: "Merced 657",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"

    }, {
      tipo: "Internacional",
      nombre: "María Soledad Iturra",
      alias: "Vendedor de Plásticos",
      pais: "Bolivia",
      direccion: "Agustinas 238",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"
    }, {
      tipo: "Internacional",
      nombre: "Francisco Javier Prado",
      alias: "Empresa de Riquelme",
      pais: "Estados Unidos",
      direccion: "Moneda 100",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"
    }, {
      tipo: "Nacional",
      nombre: "Xiang Lee",
      alias: "Riego Empresa",
      pais: "Chile",
      direccion: "Agustinas 345",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"

    }, {
      tipo: "Nacional",
      nombre: "Francisco Pacheco",
      alias: "Proveedor de Semillas",
      pais: "República Dominicana ",
      direccion: "Miraflores 300",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"

    }, {
      tipo: "Internacional",
      nombre: "María Soledad Iturra",
      alias: "Vendedor de Plásticos",
      pais: "Bolivia",
      direccion: "Huérfanos 680",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"
    }, {
      tipo: "Internacional",
      nombre: "Francisco Javier Prado",
      alias: "Empresa de Riquelme",
      pais: "Estados Unidos",
      direccion: "San Ignacio 279",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"
    }, {
      tipo: "Nacional",
      nombre: "Xiang Lee",
      alias: "Riego empresa",
      pais: "Chile",
      direccion: "Huérfanos 290",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"

    }, {
      tipo: "Internacional",
      nombre: "María Soledad Iturra",
      alias: "Vendedor de Plásticos",
      pais: "Bolivia",
      direccion: "Merced 690",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"
    }, {
      tipo: "Internacional",
      nombre: "Francisco Javier Prado",
      alias: "Empresa de Riquelme",
      pais: "Estados Unidos",
      direccion: "Marcoleta 201",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"
    }, {
      tipo: "Internacional",
      nombre: "Francisco Javier Prado",
      alias: "Empresa de Riquelme",
      pais: "Estados Unidos",
      direccion: "Marcoleta 201",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"
    }, {
      tipo: "Internacional",
      nombre: "María Soledad Iturra",
      alias: "Vendedor de Plásticos",
      pais: "Bolivia",
      direccion: "Agustinas 238",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"
    }, {
      tipo: "Internacional",
      nombre: "Francisco Javier Prado",
      alias: "Empresa de Riquelme",
      pais: "Estados Unidos",
      direccion: "Moneda 100",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"
    }, {
      tipo: "Nacional",
      nombre: "Xiang Lee",
      alias: "Riego Empresa",
      pais: "Chile",
      direccion: "Agustinas 345",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"

    }, {
      tipo: "Nacional",
      nombre: "Francisco Pacheco",
      alias: "Proveedor de Semillas",
      pais: "República Dominicana ",
      direccion: "Miraflores 300",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"

    }, {
      tipo: "Internacional",
      nombre: "María Soledad Iturra",
      alias: "Vendedor de Plásticos",
      pais: "Bolivia",
      direccion: "Huérfanos 680",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"
    }, {
      tipo: "Internacional",
      nombre: "Francisco Javier Prado",
      alias: "Empresa de Riquelme",
      pais: "Estados Unidos",
      direccion: "San Ignacio 279",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"
    }, {
      tipo: "Nacional",
      nombre: "Xiang Lee",
      alias: "Riego empresa",
      pais: "Chile",
      direccion: "Huérfanos 290",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"

    }, {
      tipo: "Internacional",
      nombre: "María Soledad Iturra",
      alias: "Vendedor de Plásticos",
      pais: "Bolivia",
      direccion: "Merced 690",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"
    }, {
      tipo: "Internacional",
      nombre: "Francisco Javier Prado",
      alias: "Empresa de Riquelme",
      pais: "Estados Unidos",
      direccion: "Marcoleta 201",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"
    }, {
      tipo: "Internacional",
      nombre: "Francisco Javier Prado",
      alias: "Empresa de Riquelme",
      pais: "Estados Unidos",
      direccion: "Marcoleta 201",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"
    }, {
      tipo: "Internacional",
      nombre: "María Soledad Iturra",
      alias: "Vendedor de Plásticos",
      pais: "Bolivia",
      direccion: "Agustinas 238",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"
    }, {
      tipo: "Internacional",
      nombre: "Francisco Javier Prado",
      alias: "Empresa de Riquelme",
      pais: "Estados Unidos",
      direccion: "Moneda 100",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"
    }, {
      tipo: "Nacional",
      nombre: "Xiang Lee",
      alias: "Riego Empresa",
      pais: "Chile",
      direccion: "Agustinas 345",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"

    }, {
      tipo: "Nacional",
      nombre: "Francisco Pacheco",
      alias: "Proveedor de Semillas",
      pais: "República Dominicana ",
      direccion: "Miraflores 300",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"

    }, {
      tipo: "Internacional",
      nombre: "María Soledad Iturra",
      alias: "Vendedor de Plásticos",
      pais: "Bolivia",
      direccion: "Huérfanos 680",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"
    }, {
      tipo: "Internacional",
      nombre: "Francisco Javier Prado",
      alias: "Empresa de Riquelme",
      pais: "Estados Unidos",
      direccion: "San Ignacio 279",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"
    }, {
      tipo: "Nacional",
      nombre: "Xiang Lee",
      alias: "Riego empresa",
      pais: "Chile",
      direccion: "Huérfanos 290",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"

    }, {
      tipo: "Internacional",
      nombre: "María Soledad Iturra",
      alias: "Vendedor de Plásticos",
      pais: "Bolivia",
      direccion: "Merced 690",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"
    }, {
      tipo: "Internacional",
      nombre: "Francisco Javier Prado",
      alias: "Empresa de Riquelme",
      pais: "Estados Unidos",
      direccion: "Marcoleta 201",
      creacion: "02/12/2016",
      bancoNombre: "Banco de Chile",
      bancoPais: "Chile",
      bancoDireccion: "Huérfanos 670",
      bancoCuenta: "003746",
      bancoMoneda: "Dólar",
      bancoSwift: "883349",
      bancoAba: "Aba 89234-2424",
      bancoIban: "12313 IBAN"
    }

  ];
});

//Inicio Cartera activa público personas
banchileApp.controller('tablaCApersonas', function($scope) {
  $scope.indicador =
    function(variacion) {
      if (variacion <= -0.01) {
        return "valor--td__rojo";
      }
      if (variacion >= 0.01) {
        return "valor--td__verde";
      }
      if (variacion == 0.0) {
        return "valor--td__amarillo";
      }
    }

  $scope.isDisabled = true;

  $scope.sort = '+';
  $scope.fondom = [{
      porcent: "",
      producto: "Europeo Estructurado Nivel 90",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985",
      monto: "$2.005.000"
    }, {
      porcent: "",
      producto: "Inversionista Calificado Acciones Nacionales",
      dias: "0,67%",
      ano: "0,67%",
      riesgo: "R5",
      cuota: "$24.678",
      monto: "$233.324.000"
    }

  ];
  $scope.moneda = [

    {
      porcent: "",
      producto: "Corporate Dollar Serie A",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R1",
      cuota: "$30.985",
      monto: "$2.005.000"
    },
    {
      porcent: "",
      producto: "Cash Corp C",
      dias: "0,35%",
      ano: "0,35%",
      riesgo: "R2",
      cuota: "$24.678",
      monto: "$233.324.000"
    },
    {
      porcent: "",
      producto: "Estructurado Europeo Desarrollada Nivel 100 Serie C",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985",
      monto: "$2.005.000"
    },

  ];
  $scope.bpayclp = [

    {
      producto: "Cash",
      monto: "$233.324.000"
    },

  ];
  $scope.bpayusd = [

    {

      producto: "Corporate Dollar ",
      monto: "$2.005.000"
    },

  ];
  $scope.acciones = [{
      serie: "ANTARCHILE",
      variacion: 2.63,
      precio: "$6.665,80",
      monto: "$2.345.678"
    },
    {
      serie: "LATAM",
      variacion: -10.73,
      precio: "$1.517,73",
      monto: "$2.099.876"
    },
    {
      serie: "CENCOSUD",
      variacion: -0.22,
      precio: "$9.180,10",
      monto: "$10.987.654"
    },
    {
      serie: "BSANTANDER",
      variacion: 67.47,
      precio: "$9.854,77",
      monto: "$67.876.543"
    },
    {
      serie: "ORO BLANCO",
      variacion: 0.48,
      precio: "$4.895,55",
      monto: "$345.678"
    },

  ];
  $scope.fondomRecomend = [

    {
      porcent: "",
      producto: "Europeo Estructurado Nivel 90",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "",
      monto: ""
    }, {
      porcent: "",
      producto: "Inversionista Calificado Acciones Nacionales",
      dias: "0,67%",
      ano: "0,67%",
      riesgo: "R5",
      cuota: "",
      monto: ""
    }

  ];
  $scope.cartera = [

    {
      porcent: "15%",
      producto: "Capital efectivo",
      cuenta: "1",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985",
      cantidad: "14.601",
      monto: "$600.000"
    }, {
      porcent: "15%",
      producto: "Cash Serie C",
      cuenta: "2",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985",
      cantidad: "14.601",
      monto: "$600.000"
    }, {
      porcent: "15%",
      producto: "Europa Desarrollada nivel 10",
      cuenta: "3",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985",
      cantidad: "14.601",
      monto: "$600.000"
    }
  ];

  $scope.carteraActiva = [{
      producto: "Cartera Protegida",
      dias: "0,33%",
      monto: ""
    }, {
      producto: "Cartera Defensiva",
      dias: "0,33%",
      monto: ""
    },
    {
      producto: "Cartera Moderada",
      dias: "0,33%",
      monto: "",
    },
    {
      producto: "Cartera Equilibrada",
      dias: "0,33%",
      monto: "",
    },
    {
      producto: "Cartera Potenciada",
      dias: "0,33%",
      monto: "",
    },
  ];
  $scope.carteraActivaCuenta = [{
    producto: "Cartera Agresiva",
    dias: "0,33%",
    monto: "$100.117.000.000",
  }];

  $scope.cuentaActiva = [{
      cuenta: "Cuenta 1",
      dias: "",
      monto: "$17.000.000"
    }, {
      cuenta: "Cuenta 2",
      dias: "",
      monto: "$100.000.000"
    },

  ];

  $scope.MiCartera = [{
      producto: "Cartera Controlada",
      dias: "0,33%",
      monto: "$117.000.000",
    },

  ];
  $scope.todosFondos = [

    {
      porcent: "",
      producto: "Europeo Estructurado Nivel 90",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985"
    }, {
      porcent: "",
      producto: "Inversionista Calificado Acciones Nacionales",
      dias: "0,67%",
      ano: "0,67%",
      riesgo: "R5",
      cuota: "$24.678"
    }

  ];
  $scope.monedaExt = [

    {
      moneda: "USD/CLP",
      paridad: "$649,15",
      var: "-0,21%",
      hora: "18:47:53"
    },
    {
      moneda: "EUR/USD",
      paridad: "1,1753",
      var: "-0,39%",
      hora: "18:47:53"
    },
    {
      moneda: "USD/BRL",
      paridad: "3,1220",
      var: "0,02%",
      hora: "18:47:53"
    },
    {
      moneda: "USD/JPY",
      paridad: "110,3420",
      var: "-0,38%",
      hora: "18:47:53"
    },
    {
      moneda: "GBP/USD",
      paridad: "1,2991",
      var: "-0,34%",
      hora: "18:47:53"
    },
    {
      moneda: "AUD/USD",
      paridad: "0,7912",
      var: "-0,05%",
      hora: "18:47:53"
    },
    {
      moneda: "USD/CNY",
      paridad: "6,7064",
      var: "-0,21%",
      hora: "18:47:53"
    },
    {
      moneda: "USD/ARS",
      paridad: "17,6960",
      var: "0,11%",
      hora: "18:47:53"
    },
    {
      moneda: "USD/MXN",
      paridad: "17,8442",
      var: "-0,50%",
      hora: "18:47:53"
    },
    {
      moneda: "USD/CAD",
      paridad: "1,2668",
      var: "-0,06%",
      hora: "18:47:53"
    },
  ];
  $scope.accionesCartera = [{
      serie: "ANTARCHILE",
      precio: "$9.300,000",
      variacion: -0.05,
      cantidad: "400",
      gananciaPerdida: "-$5.678",
      monto: "$2.345.678,201",
      tendencia: "S"
    },
    {
      serie: "CENCOSUD",
      precio: "$1.517,735",
      variacion: 10.73,
      cantidad: "28",
      gananciaPerdida: "+$29,876",
      monto: "$2.099.876",
      tendencia: "B"
    },
    {
      serie: "LTM",
      precio: "$9.180,100",
      variacion: -0.0,
      cantidad: "130",
      gananciaPerdida: "+$87,654",
      monto: "$10.987.654,503",
      tendencia: "B"
    },
    {
      serie: "BSANTANDER",
      precio: "$9.854,771",
      variacion: 91.47,
      cantidad: "40",
      gananciaPerdida: "-$76.543,210",
      monto: "$67.876.543,340",
      tendencia: "B"
    },
    {
      serie: "ORO BLANCO",
      precio: "$1.517,73",
      variacion: -10.73,
      cantidad: "28",
      gananciaPerdida: "+$29.876",
      monto: "$2.099.876,109",
      tendencia: "S"
    },
  ];
  $scope.accionesResumen = [{
      serie: "LATAM",
      precio: "$1.517,73",
      variacion: 10.73,
      tendencia: "S"
    },
    {
      serie: "CENCOSUD",
      precio: "$9.180,10",
      variacion: 0.22,
      tendencia: "S"
    },
    {
      serie: "BSANTANDER",
      precio: "$9.854,77",
      variacion: 21.47,
      tendencia: "B"
    },
    {
      serie: "ORO BLANCO",
      precio: "$4.895,55",
      variacion: 0.40,
      tendencia: "B"
    },
    {
      serie: "ANTARCHILE",
      precio: "$6.665,80",
      variacion: 0,
      tendencia: "B"

    },
    {
      serie: "SQM-B",
      precio: "$28.500,00",
      variacion: -0.38,
      tendencia: "S"
    },
    {
      serie: "CONCHATORO",
      precio: "$1.067,00",
      variacion: -0.19,
      tendencia: "S"
    },
    {
      serie: "MULTIFOODS",
      precio: "$226,10",
      variacion: -0.23,
      tendencia: "S"
    },
    {
      serie: "ENELAM",
      precio: "$130,59",
      variacion: 0.12,
      tendencia: "S"
    },
    {
      serie: "RIPLEY",
      precio: "$623,99",
      variacion: 0.14,
      tendencia: "S"
    },

  ];
  // $scope.accionesHome = [
  //
  //     {
  //         porcent: "",
  //         serie: "CENCOSUD",
  //         precio: "$1.517,73",
  //         variacion: "+$10,73",
  //         cantidad: "28",
  //         ganancia: "$29.876"
  //         monto: "$2.099.876"
  //     }, {
  //         porcent: "",
  //         producto: "Inversionista Calificado Acciones Nacionales",
  //         dias: "0,67%",
  //         ano: "0,67%",
  //         riesgo: "R5",
  //         cuota: "$24.678"
  //     }
  //
  // ];

  for (var i = 0; i < $scope.accionesCartera.length; i++) {
    if ($scope.accionesCartera[i].tendencia == 'S') {
      $scope.accionesCartera[i].icono = '&#xE5C7;';
    } else if ($scope.accionesCartera[i].tendencia == 'B') {
      $scope.accionesCartera[i].icono = "&#xE5C5;";
    }
  }

});
// Fin Cartera activa público personas

banchileApp.controller('tablaCartola', function($scope) {

  $scope.sort = '+producto';
  $scope.transferencia = [{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    }
  ]
  $scope.transferenciaPendientes = [{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    }
  ]
  $scope.transferenciaIngresadas = [{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    }
  ]
  $scope.transferenciaSinInstruir = [{
    fecha: "01/01/2016 12:45:54",
    producto: "Moneda Extranjera",
    transaccion: "Transferencia",
    instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
    orden: "756040",
    monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    }
  ]
  $scope.cartola = [{
      fecha: "01/01/2016 12:45:54",
      producto: "Fondos Mutuos",
      transaccion: "Aporte Reinversión a Fondos Mutuos",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "10,4",
      precio: "$6.000.460",
      monto: "$10.000.460.567"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Fondos Mutuos",
      transaccion: "Aporte Reinversión a Fondos Mutuos",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "10,4",
      precio: "$6.000.460",
      monto: "$10.000.567"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Fondos Mutuos",
      transaccion: "Aporte Reinversión a Fondos Mutuos",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "10,4",
      precio: "$6.000.460",
      monto: "$10.460.934.567"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Fondos Mutuos",
      transaccion: "Rescate",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "15,9",
      precio: "$6.000.460",
      monto: "$1.460.934.567"
    }
  ]
  $scope.cartola2 = [{
      fecha: "01/01/2016",
      producto: "Fondos Mutuos",
      transaccion: "Rescate",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "15,9",
      precio: "$6.000.460",
      monto: "$10.000.460"
    },
    {
      fecha: "01/01/2016",
      producto: "Fondos Mutuos",
      transaccion: "Rescate",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "15,9",
      precio: "$6.000.460",
      monto: "$10.000.460"
    },
    {
      fecha: "01/01/2016",
      producto: "Fondos Mutuos",
      transaccion: "Rescate",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "15,9",
      precio: "$6.000.460",
      monto: "$10.000.460"
    },
    {
      fecha: "01/01/2016",
      producto: "Fondos Mutuos",
      transaccion: "Rescate",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "15,9",
      precio: "$6.000.460",
      monto: "$10.000.460"
    }

  ]
  $scope.cartola3 = [{
      fecha: "01/01/2016",
      producto: "Cartera Activa",
      transaccion: "Aporte",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "5,3",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Cartera Activa",
      transaccion: "Aporte",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "5,3",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Cartera Activa",
      transaccion: "Aporte",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "5,3",
      precio: "$460,0000",
      monto: "$460.000"
    }

  ]
  $scope.cartola4 = [{
      fecha: "01/01/2016",
      producto: "Cartera Activa",
      transaccion: "Rescate",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "20,4",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Cartera Activa",
      transaccion: "Rescate",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "20,4",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Cartera Activa",
      transaccion: "Rescate",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "20,4",
      precio: "$460,0000",
      monto: "$460.000"
    }

  ]
  $scope.cartola5 = [{
      fecha: "01/01/2016",
      producto: "Acciones",
      transaccion: "Compra",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "18",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Acciones",
      transaccion: "Compra",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "18",
      precio: "$460,0000",
      monto: "$460.000"
    }

  ]
  $scope.cartola6 = [{
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000"
    }
  ]
  $scope.cartola7 = [{
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Venta",
      instrumento: "Dólar",
      cantidad: "14",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Venta",
      instrumento: "Dólar",
      cantidad: "14",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Venta",
      instrumento: "Dólar",
      cantidad: "14",
      precio: "$460,0000",
      monto: "$460.000"
    }

  ]
  $scope.cartola8 = [{
      fecha: "01/01/2016",
      producto: "Caja Internet",
      transaccion: "Abono",
      instrumento: "",
      cantidad: "13",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Caja Internet",
      transaccion: "Abono",
      instrumento: "",
      cantidad: "13",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Caja Internet",
      transaccion: "Abono",
      instrumento: "",
      cantidad: "13",
      precio: "$460,0000",
      monto: "$460.000"
    }

  ]
  $scope.cartola8 = [{
      fecha: "01/01/2016",
      producto: "Caja Internet",
      transaccion: "Abono",
      instrumento: "",
      cantidad: "7",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Caja Internet",
      transaccion: "Abono",
      instrumento: "",
      cantidad: "7",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Caja Internet",
      transaccion: "Abono",
      instrumento: "",
      cantidad: "7",
      precio: "$460,0000",
      monto: "$460.000"
    }

  ]
  $scope.cartola9 = [{
      fecha: "01/01/2016",
      producto: "Caja Internet",
      transaccion: "Retiro",
      instrumento: "",
      cantidad: "16",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Caja Internet",
      transaccion: "Retiro",
      instrumento: "",
      cantidad: "16",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Caja Internet",
      transaccion: "Retiro",
      instrumento: "",
      cantidad: "16",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Caja Internet",
      transaccion: "Retiro",
      instrumento: "",
      cantidad: "16",
      precio: "$460,0000",
      monto: "$460.000"
    }
  ]
  $scope.cartola10 = [{
      fecha: "01/01/2016",
      transaccion: "Compra",
      instrumento: "Dólar",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000",
      No: "Nº 00051201000900373"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "Dólar",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000",
      No: "Nº 00051201000900373"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "Dólar",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000",
      No: "Nº 00051201000900373"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "Dólar",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000",
      No: "Nº 00051201000900373"
    }
  ]
  $scope.cartola11 = [{
      fecha: "01/01/2016",
      transaccion: "Compra",
      instrumento: "Dólar",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000",
      No: "Nº 00051201000900373"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "Dólar",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000",
      No: "Nº 00051201000900373"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "Dólar",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000",
      No: "Nº 00051201000900373"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "Dólar",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000",
      No: "Nº 00051201000900373"
    }
  ]
  $scope.cartola12 = [{
      fecha: "01/01/2016",
      producto: "Banchile Pay",
      transaccion: "Rescate / Compra ME",
      instrumento: "CLP / USD",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$433.900",
      No: "Nº 00051201000900373"
    },
    {
      fecha: "01/01/2016",
      producto: "Banchile Pay",
      transaccion: "Rescate / Compra ME",
      instrumento: "CLP / USD",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$4.260.000",
      No: "Nº 00051201000900373"
    },
    {
      fecha: "01/01/2016",
      producto: "Banchile Pay",
      transaccion: "Rescate / Compra ME",
      instrumento: "CLP / USD",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$550.090",
      No: "Nº 00051201000900373"
    },
    {
      fecha: "01/01/2016",
      producto: "Banchile Pay",
      transaccion: "Rescate / Compra ME",
      instrumento: "CLP / USD",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000",
      No: "Nº 00051201000900373"
    }
  ]
  $scope.cartola13 = [{
      fecha: "22/07/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "330",
      precio: "$628,0000",
      monto: "$217.602,0010"
    },
    {
      fecha: "15/07/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "1000",
      precio: "$624,1200",
      monto: "$624.120,0000"
    },
    {
      fecha: "03/07/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "2680",
      precio: "$631,1000",
      monto: "$1.691.348,0000"
    },
    {
      fecha: "21/06/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "1500",
      precio: "$630,0000",
      monto: "$945.000,0000"
    },
    {
      fecha: "18/06/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "3300",
      precio: "$632,8800",
      monto: "$2.081.904,0000"
    }
  ];
  $scope.cartola14 = [{
      fecha: "03/07/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "2680",
      precio: "$631,1000",
      monto: "$1.691.348,0000"
    },
    {
      fecha: "22/07/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "330",
      precio: "$628,0000",
      monto: "$217.602,0010"
    },
    {
      fecha: "15/07/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "1000",
      precio: "$624,1200",
      monto: "$624.120,0000"
    },
    {
      fecha: "18/06/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "3300",
      precio: "$632,8800",
      monto: "$2.081.904,0000"
    },
    {
      fecha: "21/06/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "1500",
      precio: "$630,0000",
      monto: "$945.000,0000"
    },
    {
      fecha: "18/06/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "3300",
      precio: "$632,8800",
      monto: "$2.081.904,0000"
    },
    {
      fecha: "22/07/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "330",
      precio: "$628,0000",
      monto: "$217.602,0010"
    },
    {
      fecha: "15/07/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "1000",
      precio: "$624,1200",
      monto: "$624.120,0000"
    },
    {
      fecha: "18/06/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "3300",
      precio: "$632,8800",
      monto: "$2.081.904,0000"
    },
    {
      fecha: "21/06/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "1500",
      precio: "$630,0000",
      monto: "$945.000,0000"
    },
  ];
  $scope.cartola15 = [{
      fecha: "10/06/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "330",
      precio: "$628,0000",
      monto: "$217.602,0010"
    }
  ];
});


banchileApp.controller('tablaEmpresas', function($scope) {
  $scope.sort = '+nombre';
  $scope.empresa = [
    {
      nombre: "Agrícola Campo Lindo Ltda.",
      rut: "17.777.333-3",
      cuentaCorriente: "31233",
      creacion: "02/12/2016",
    }, {
      nombre: "Spa y Hoteles Buena Vida S.A.",
      rut: "32.333.693-4",
      cuentaCorriente: "31233",
      creacion: "02/12/2016",
    }, {
      nombre: "Shuang Lee Importaciones",
      rut: "24.553.366-6",
      cuentaCorriente: "456733",
      creacion: "04/06/2016",
    }, {
      nombre: "Casa del Músico Ltda.",
      rut: "14.783.789-2",
      cuentaCorriente: "400633",
      creacion: "02/06/2016",
    }, {
      nombre: "Mochi Constructores",
      rut: "09.180.009-4",
      cuentaCorriente: "146773",
      creacion: "02/06/2016",
    }, {
      nombre: "Pesquera Fish Corp.",
      rut: "54.482.127-9",
      cuentaCorriente: "4567226",
      creacion: "02/02/2016",
    }
  ];
});

//Fondos Mutuos PERSONAS
banchileApp.controller('tablaFFMM', function($scope) {
  //Color Variacion Acciones y Tendencias
  $scope.indicador =
    function(variacion) {
      if (variacion <= -0.01) {
        return "valor--td__rojo";
      }
      if (variacion >= 0.01) {
        return "valor--td__verde";
      }
      if (variacion == 0.0) {
        return "valor--td__amarillo";
      }
    }
  $scope.isDisabled = true;

  $scope.sort = '+';
  $scope.fondom = [{
    porcent: "",
    producto: "Europeo Estructurado Nivel 90",
    dias: "0,33%",
    ano: "0,33%",
    riesgo: "R4",
    cuota: "$30.985",
    monto: "$2.005.000"
  }, ];
  $scope.fondousd = [{
    porcent: "",
    producto1: "Cash",
    dias1: "0,33%",
    ano1: "0,33%",
    riesgo: "R4",
    cuota1: "$30.985",
    monto1: "$2.005.000"
  }, ];
  $scope.moneda = [

    {
      porcent: "",
      producto: "Corporate Dollar Serie A",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R1",
      cuota: "$30.985",
      monto: "$2.005.000"
    },
    {
      porcent: "",
      producto: "Cash Corp C",
      dias: "0,35%",
      ano: "0,35%",
      riesgo: "R2",
      cuota: "$24.678",
      monto: "$233.324.000"
    },
    {
      porcent: "",
      producto: "Estructurado Europeo Desarrollada Nivel 100 Serie C",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985",
      monto: "$2.005.000"
    },

  ];
  $scope.bpayclp = [

    {
      producto: "Cash",
      monto: "$233.324.000"
    },

  ];
  $scope.bpayusd = [

    {

      producto: "Corporate Dollar ",
      monto: "$2.005.000"
    },

  ];
  $scope.acciones = [{
      serie: "ANTARCHILE",
      variacion: 2.63,
      precio: "$6.665,80",
      monto: "$2.345.678"
    },
    {
      serie: "LATAM",
      variacion: -10.73,
      precio: "$1.517,73",
      monto: "$2.099.876"
    },
    {
      serie: "CENCOSUD",
      variacion: -0.22,
      precio: "$9.180,10",
      monto: "$10.987.654"
    },
    {
      serie: "BSANTANDER",
      variacion: 67.47,
      precio: "$9.854,77",
      monto: "$67.876.543"
    },
    {
      serie: "ORO BLANCO",
      variacion: 0.48,
      precio: "$4.895,55",
      monto: "$345.678"
    },

  ];
  $scope.fondomRecomend = [

    {
      porcent: "",
      producto: "Europeo Estructurado Nivel 90",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "",
      monto: ""
    }, {
      porcent: "",
      producto: "Inversionista Calificado Acciones Nacionales",
      dias: "0,67%",
      ano: "0,67%",
      riesgo: "R5",
      cuota: "",
      monto: ""
    }

  ];
  $scope.fondomRecomend2 = [

    {
      porcent: "",
      producto: "Corporate Dollar serie A / Cuenta 1",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "",
      monto: ""
    }, {
      porcent: "",
      producto: "Corporate Dollar serie A / Cuenta 2",
      dias: "0,67%",
      ano: "0,67%",
      riesgo: "R5",
      cuota: "",
      monto: ""
    }

  ];
  $scope.fondoInmobiliario = [{
      producto: "Banchile Minero Asset Chile",
      dias: -10.33,
      tendenciaDias: "S",
      meses: 0.0,
      tendenciaMeses: "B",
      ano: -0.01,
      tendenciaAno: "B",
      valor: "$5.018.293",
    },
    {
      producto: "Rentas Habitacionales",
      dias: 0.33,
      tendenciaDias: "S",
      meses: 2.01,
      tendenciaMeses: "S",
      ano: -3.12,
      tendenciaAno: "S",
      valor: "$1.517,73",
    },
    {
      producto: "Banchile Inmobiliario VI",
      dias: 5.19,
      tendenciaDias: "S",
      meses: 5.88,
      tendenciaMeses: "S",
      ano: -5.56,
      tendenciaAno: "B",
      valor: "$1.517,735",
    },
    {
      producto: "Banchile Inmobiliario VII",
      dias: -0.15,
      tendenciaDias: "B",
      meses: 0.3,
      tendenciaMeses: "B",
      ano: 3.31,
      tendenciaAno: "S",
      valor: "$9.180,100",
    },
    {
      producto: "Banchile Plusvalía Eficiente",
      dias: -6.57,
      tendenciaDias: "S",
      meses: -1.33,
      tendenciaMeses: "B",
      ano: 0.00,
      tendenciaAno: "B",
      valor: "$2.000.000",
    },
    {
      producto: "Banchile Rentas Inmobiliarias I",
      dias: 31.17,
      tendenciaDias: "B",
      meses: -33.15,
      tendenciaMeses: "B",
      ano: 0.00,
      tendenciaAno: "S",
      valor: "$9.854,771 ",
    },
    {
      producto: "Banchile Rentas Inmobiliarias I",
      dias: 4.91,
      tendenciaDias: "S",
      meses: 0.0,
      tendenciaMeses: "B",
      ano: 2.85,
      tendenciaAno: "S",
      valor: "$9.300,000 ",
    },
  ];
  $scope.fondoMobiliario = [{
      producto: "Chile Small Cap",
      dias: 0.33,
      tendenciaDias: "S",
      meses: 2.01,
      tendenciaMeses: "S",
      ano: -3.12,
      tendenciaAno: "S",
      valor: "$1.517,73",
    },
    {
      producto: "Latam Corporate High Yield",
      dias: -10.33,
      tendenciaDias: "S",
      meses: 0.0,
      tendenciaMeses: "B",
      ano: -0.01,
      tendenciaAno: "B",
      valor: "$5.018.293",
    },
    {
      producto: "Chile Blend",
      dias: -0.15,
      tendenciaDias: "B",
      meses: 0.3,
      tendenciaMeses: "B",
      ano: 3.31,
      tendenciaAno: "S",
      valor: "$9.180,100",
    },
    {
      producto: "Deuda Chilena",
      dias: 5.19,
      tendenciaDias: "S",
      meses: 5.88,
      tendenciaMeses: "S",
      ano: -5.56,
      tendenciaAno: "B",
      valor: "$1.517,735",
    },
    {
      producto: "Deuda Corporativa 3-5 años",
      dias: 31.17,
      tendenciaDias: "B",
      meses: -33.15,
      tendenciaMeses: "B",
      ano: 0.00,
      tendenciaAno: "S",
      valor: "$9.854,771 ",
    },
    {
      producto: "Deuda Global",
      dias: -6.57,
      tendenciaDias: "S",
      meses: -1.33,
      tendenciaMeses: "B",
      ano: 0.00,
      tendenciaAno: "B",
      valor: "$2.000.000",
    },
    {
      producto: "Emerging Equity",
      dias: 4.91,
      tendenciaDias: "S",
      meses: 0.0,
      tendenciaMeses: "B",
      ano: 2.85,
      tendenciaAno: "S",
      valor: "$9.300,000 ",
    },
    {
      producto: "Estrategias Alternativas",
      dias: 31.17,
      tendenciaDias: "B",
      meses: -33.15,
      tendenciaMeses: "B",
      ano: 0.00,
      tendenciaAno: "S",
      valor: "$9.854,771 ",
    },
    {
      producto: "Europe Equity",
      dias: 4.91,
      tendenciaDias: "S",
      meses: 0.0,
      tendenciaMeses: "B",
      ano: 2.85,
      tendenciaAno: "S",
      valor: "$9.300,000 ",
    },
    {
      producto: "Latam Small Mid Cap",
      dias: 5.19,
      tendenciaDias: "S",
      meses: 5.88,
      tendenciaMeses: "S",
      ano: -5.56,
      tendenciaAno: "B",
      valor: "$1.517,735",
    },
    {
      producto: "MarketPlus Estados Unidos",
      dias: -10.33,
      tendenciaDias: "S",
      meses: 0.0,
      tendenciaMeses: "B",
      ano: -0.01,
      tendenciaAno: "B",
      valor: "$5.018.293",
    },
    {
      producto: "MarketPlus Global",
      dias: 0.33,
      tendenciaDias: "S",
      meses: 2.01,
      tendenciaMeses: "S",
      ano: -3.12,
      tendenciaAno: "S",
      valor: "$1.517,73",
    },
    {
      producto: "USA Equity",
      dias: -6.57,
      tendenciaDias: "S",
      meses: -1.33,
      tendenciaMeses: "B",
      ano: 0.00,
      tendenciaAno: "B",
      valor: "$2.000.000",
    },
  ];
  $scope.cartera = [

    {
      porcent: "15%",
      producto: "Capital efectivo",
      cuenta: "1",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985",
      cantidad: "14.601",
      monto: "$600.000"
    }, {
      porcent: "15%",
      producto: "Cash Serie C",
      cuenta: "2",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985",
      cantidad: "14.601",
      monto: "$600.000"
    }, {
      porcent: "15%",
      producto: "Europa Desarrollada nivel 10",
      cuenta: "3",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985",
      cantidad: "14.601",
      monto: "$600.000"
    }
  ];

  $scope.carteraActiva = [{
      producto: "Cartera Protegida",
      dias: "0,33%",
      monto: "",
      rfrv:"assets/images/svg/CA/barra100.svg"
    }, {
      producto: "Cartera Defensiva",
      dias: "0,33%",
      monto: "",
      rfrv:"assets/images/svg/CA/barra100.svg"
    },{
      producto: "Cartera Controlada",
      dias: "0,33%",
      monto: "",
      rfrv:"assets/images/svg/CA/barra10020.svg"
    },
    {
      producto: "Cartera Moderada",
      dias: "0,33%",
      monto: "",
      rfrv:"assets/images/svg/CA/barra6040.svg"
    },
    {
      producto: "Cartera Equilibrada",
      dias: "0,33%",
      monto: "",
      rfrv:"assets/images/svg/CA/barra4060.svg"
    },
    {
      producto: "Cartera Potenciada",
      dias: "0,33%",
      monto: "",
      rfrv:"assets/images/svg/CA/barra2080.svg"
    },
  ];
  $scope.carteraActivaCuenta = [{
    producto: "Cartera Agresiva",
    dias: "0,33%",
    monto: "$100.117.000.000",
     rfrv:"assets/images/svg/CA/barra0100.svg"
  }];

  $scope.cuentaActiva = [{
      cuenta: "Cuenta 1",
      dias: "",
      monto: "$17.000.000"
    }, {
      cuenta: "Cuenta 2",
      dias: "",
      monto: "$100.000.000"
    },

  ];

  $scope.MiCartera = [{
      producto: "Cartera Controlada",
      dias: "0,33%",
      monto: "$117.000.000",
    },

  ];
  $scope.todosFondos = [

    {
      porcent: "",
      producto: "Europeo Estructurado Nivel 90",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985"
    }, {
      porcent: "",
      producto: "Inversionista Calificado Acciones Nacionales",
      dias: "0,67%",
      ano: "0,67%",
      riesgo: "R5",
      cuota: "$24.678"
    }

  ];
  $scope.monedaExtPrincipales = [

    {
      moneda: "USD/CLP",
      paridad: "$649,15",
      variacion: 91.47,
      hora: "18:47:53",
      tendencia: "S"
    },
    {
      moneda: "EUR/USD",
      paridad: "1,1753",
      variacion: 0.32,
      hora: "18:47:53",
      tendencia: "B"
    },
  ];
  $scope.monedaExtSecundarias = [

      {
        moneda: "USD/BRL",
        paridad: "3,1220",
        variacion: 1.54,
        hora: "18:47:53",
        tendencia: "B"
    },
    {
        moneda: "USD/JPY",
        paridad: "110,3420",
        variacion: 21.20,
        hora: "18:47:53",
        tendencia: "B"
    },
    {
        moneda: "GBP/USD",
        paridad: "1,2991",
        variacion: 0.00,
        hora: "18:47:53",
        tendencia: "B"
    },
    {
        moneda: "AUD/USD",
        paridad: "0,7912",
        variacion: 7.93,
        hora: "18:47:53",
        tendencia: "S"
    },
    {
        moneda: "USD/CNY",
        paridad: "6,7064",
        variacion: 3.00,
        hora: "18:47:53",
        tendencia: "S"
    },
    {
        moneda: "USD/ARS",
        paridad: "17,6960",
        variacion: 51.45,
        hora: "18:47:53",
        tendencia: "S"
    },
    {
        moneda: "USD/MXN",
        paridad: "17,8442",
        variacion: 91.47,
        hora: "18:47:53",
        tendencia: "S"
    },
    {
        moneda: "USD/CAD",
        paridad: "1,2668",
        variacion: 4.09,
        hora: "18:47:53",
        tendencia: "S"
    },
  ];
  $scope.monedaExt = [

    {
      moneda: "USD/CLP",
      paridad: "$649,15",
      variacion: 91.47,
      hora: "18:47:53",
      tendencia: "S"
    },
    {
      moneda: "EUR/USD",
      paridad: "1,1753",
      variacion: 0.32,
      hora: "18:47:53",
      tendencia: "B"
    },
    {
        moneda: "USD/BRL",
        paridad: "3,1220",
        variacion: 1.54,
        hora: "18:47:53",
        tendencia: "B"
    },
    {
        moneda: "USD/JPY",
        paridad: "110,3420",
        variacion: 21.20,
        hora: "18:47:53",
        tendencia: "B"
    },
    {
        moneda: "GBP/USD",
        paridad: "1,2991",
        variacion: 0.00,
        hora: "18:47:53",
        tendencia: "B"
    },
    {
        moneda: "AUD/USD",
        paridad: "0,7912",
        variacion: 7.93,
        hora: "18:47:53",
        tendencia: "S"
    },
    {
        moneda: "USD/CNY",
        paridad: "6,7064",
        variacion: 3.00,
        hora: "18:47:53",
        tendencia: "S"
    },
    {
        moneda: "USD/ARS",
        paridad: "17,6960",
        variacion: 51.45,
        hora: "18:47:53",
        tendencia: "S"
    },
    {
        moneda: "USD/MXN",
        paridad: "17,8442",
        variacion: 91.47,
        hora: "18:47:53",
        tendencia: "S"
    },
    {
        moneda: "USD/CAD",
        paridad: "1,2668",
        variacion: 4.09,
        hora: "18:47:53",
        tendencia: "S"
    },
  ];
  $scope.accionesCartera = [{
      serie: "ANTARCHILE",
      precio: "$9.300,000",
      variacion: -0.05,
      cantidad: "400",
      gananciaPerdida: "-$5.678",
      monto: "$2.345.678,201",
      tendencia: "S"
    },
    {
      serie: "CENCOSUD",
      precio: "$1.517,735",
      variacion: 10.73,
      cantidad: "28",
      gananciaPerdida: "+$29,876",
      monto: "$2.099.876",
      tendencia: "B"
    },
    {
      serie: "LTM",
      precio: "$9.180,100",
      variacion: -0.0,
      cantidad: "130",
      gananciaPerdida: "+$87,654",
      monto: "$10.987.654,503",
      tendencia: "B"
    },
    {
      serie: "BSANTANDER",
      precio: "$9.854,771",
      variacion: 91.47,
      cantidad: "40",
      gananciaPerdida: "-$76.543,210",
      monto: "$67.876.543,340",
      tendencia: "B"
    },
    {
      serie: "ORO BLANCO",
      precio: "$1.517,73",
      variacion: -10.73,
      cantidad: "28",
      gananciaPerdida: "+$29.876",
      monto: "$2.099.876,109",
      tendencia: "S"
    },
  ];
  $scope.accionesResumen = [{
      serie: "LATAM",
      precio: "$1.517,73",
      variacion: 10.73,
      tendencia: "S"
    },
    {
      serie: "CENCOSUD",
      precio: "$9.180,10",
      variacion: 0.22,
      tendencia: "S"
    },
    {
      serie: "BSANTANDER",
      precio: "$9.854,77",
      variacion: 21.47,
      tendencia: "B"
    },
    {
      serie: "ORO BLANCO",
      precio: "$4.895,55",
      variacion: 0.40,
      tendencia: "B"
    },
    {
      serie: "ANTARCHILE",
      precio: "$6.665,80",
      variacion: 0,
      tendencia: "B"

    },
    {
      serie: "SQM-B",
      precio: "$28.500,00",
      variacion: -0.38,
      tendencia: "S"
    },
    {
      serie: "CONCHATORO",
      precio: "$1.067,00",
      variacion: -0.19,
      tendencia: "S"
    },
    {
      serie: "MULTIFOODS",
      precio: "$226,10",
      variacion: -0.23,
      tendencia: "S"
    },
  ];
  $scope.accionesIndicadores = [{
      serie: "LATAM",
      precio: "$1.517,73",
      variacion: 10.73,
      tendencia: "S"
    },
    {
      serie: "CENCOSUD",
      precio: "$9.180,10",
      variacion: 0.22,
      tendencia: "S"
    },
    {
      serie: "BSANTANDER",
      precio: "$9.854,77",
      variacion: 21.47,
      tendencia: "B"
    },
    {
      serie: "ORO BLANCO",
      precio: "$4.895,55",
      variacion: 0.40,
      tendencia: "B"
    },
    {
      serie: "ANTARCHILE",
      precio: "$6.665,80",
      variacion: 0,
      tendencia: "B"

    },
    {
      serie: "SQM-B",
      precio: "$28.500,00",
      variacion: -0.38,
      tendencia: "S"
    },
    {
      serie: "CONCHATORO",
      precio: "$1.067,00",
      variacion: -0.19,
      tendencia: "S"
    },
    {
      serie: "CONCHATORO",
      precio: "$1.067,00",
      variacion: -0.19,
      tendencia: "S"
    },
    {
      serie: "CONCHATORO",
      precio: "$1.067,00",
      variacion: -0.19,
      tendencia: "S"
    },
    {
      serie: "MULTIFOODS",
      precio: "$226,10",
      variacion: -0.23,
      tendencia: "S"
    },
  ];
  $scope.etfMarketvectors = [{
      nombre: "Market Vectors Agribusiness ETF",
      nemotecnico: "MOO",
    },
    {
      nombre: "Market Vectors Brazil Small-Cap ETF",
      nemotecnico: "BRF",
    },
    {
      nombre: "Market Vectors China ETF",
      nemotecnico: "PEK",
    },
    {
      nombre: "Market Vectors Coal ETF",
      nemotecnico: "KOL",
    },
    {
      nombre: "Market Vectors Colombia ETF",
      nemotecnico: "COLX",
    },
    {
      nombre: "Market Vectors Egypt Index ETF",
      nemotecnico: "EGPT",
    },
    {
      nombre: "Market Vectors Emerging Markets Local Currency Bond ETF",
      nemotecnico: "EMLC",
    },
    {
      nombre: "Market Vectors Germany Small-Cap ETF",
      nemotecnico: "GERJ",
    },
    {
      nombre: "Market Vectors Global Alternative Energy ETF",
      nemotecnico: "GEX",
    },
    {
      nombre: "Market Vectors Gold Miners ETF",
      nemotecnico: "GDX",
    },
    {
      nombre: "Market Vectors India Small-Cap Index ETF",
      nemotecnico: "SCIF",
    },
    {
      nombre: "Market Vectors Indonesia Index ETF",
      nemotecnico: "IDX",
    },
    {
      nombre: "Market Vectors Junior Gold Miners ETF",
      nemotecnico: "GDXJ",
    },
    {
      nombre: "Market Vectors LatAm Aggregate Bond ETF",
      nemotecnico: "BONO",
    },
    {
      nombre: "Market Vectors Latin America Small-Cap Index ETF",
      nemotecnico: "LATM",
    },
    {
      nombre: "Market Vectors Poland ETF",
      nemotecnico: "PLND",
    },
    {
      nombre: "Market Vectors Rare Earth/Strategic Metals ETF",
      nemotecnico: "REMX",
    },
    {
      nombre: "Market Vectors Russia ETF",
      nemotecnico: "RSX",
    },
    {
      nombre: "Market Vectors Russia Small-Cap ETF",
      nemotecnico: "RSXJ",
    },
    {
      nombre: "Market Vectors RVE Hard Assets Producers ETF",
      nemotecnico: "HAP",
    },
    {
      nombre: "Market Vectors Steel ETF",
      nemotecnico: "SLX",
    },
    {
      nombre: "Market Vectors Uranium+ Nuclear Energy ETF",
      nemotecnico: "NLR",
    },
    {
      nombre: "Market Vectors Vietnam ETF",
      nemotecnico: "VNM",
    },
  ];
  $scope.etfIshares = [{
      nombre: "iBoxx $ High Yield Corporate Bond Fund",
      nemotecnico: "HYG",
      tipo: "Renta fija",
      categoria: "Estados Unidos",
    },
    {
      nombre: "iBoxx $ Investment Grade Corporate Bond Fund",
      nemotecnico: "LQD",
      tipo: "Renta fija",
      categoria: "Estados Unidos",
    },
    {
      nombre: "Barclays Short Treasury Bond Fund",
      nemotecnico: "SHV",
      tipo: "Renta fija",
      categoria: "Estados Unidos",
    },
    {
      nombre: "Barclays 1-3 Year Treasury Bond Fund",
      nemotecnico: "SHY",
      tipo: "Renta fija",
      categoria: "Estados Unidos",
    },
    {
      nombre: "Barclays TIPS Bond Fund",
      nemotecnico: "TIP",
      tipo: "Renta fija",
      categoria: "Estados Unidos",
    },
    {
      nombre: "Gold Trust",
      nemotecnico: "IAU",
      tipo: "Materias primas",
      categoria: "Materias primas",
    },
    {
      nombre: "Silver Trust",
      nemotecnico: "SLV",
      tipo: "Materias primas",
      categoria: "Materias primas",
    },
    {
      nombre: "MSCI All Country Asia ex Japan Index Fund",
      nemotecnico: "AAXJ",
      tipo: "Renta variable",
      categoria: "Mercado",
    },
    {
      nombre: "MSCI All Country Asia ex Japan Index Fund",
      nemotecnico: "AAXJ",
      tipo: "Renta variable",
      categoria: "Mercado",
    },
    {
      nombre: "MSCI All Country Asia ex Japan Index Fund",
      nemotecnico: "AAXJ",
      tipo: "Renta variable",
      categoria: "Mercado",
    },
  ];
  $scope.accionesNorteamerica = [{
      nombre: "Alcoa Inc",
      nemotecnico: "AA US Equity",
    },
    {
      nombre: "Apple",
      nemotecnico: "AAPL US Equity",
    },
    {
      nombre: "Abbot Laboratories",
      nemotecnico: "ABT US Equity",
    },
    {
      nombre: "Automatic Data Processing",
      nemotecnico: "ADP US Equity",
    },
    {
      nombre: "American International Group",
      nemotecnico: "AIG US Equity",
    },
    {
      nombre: "Amgem Inc",
      nemotecnico: "AMGN US Equity",
    },
    {
      nombre: "Amazon.com Inc",
      nemotecnico: "AMZN US Equity",
    },
    {
      nombre: "Avon Products Inc",
      nemotecnico: "AVP US Equity",
    },
    {
      nombre: "American Express CO",
      nemotecnico: "AXP US Equity",
    },
    {
      nombre: "Boeing CO/THE",
      nemotecnico: "BA US Equity",
    },
  ];
  // $scope.accionesHome = [
  //
  //     {
  //         porcent: "",
  //         serie: "CENCOSUD",
  //         precio: "$1.517,73",
  //         variacion: "+$10,73",
  //         cantidad: "28",
  //         ganancia: "$29.876"
  //         monto: "$2.099.876"
  //     }, {
  //         porcent: "",
  //         producto: "Inversionista Calificado Acciones Nacionales",
  //         dias: "0,67%",
  //         ano: "0,67%",
  //         riesgo: "R5",
  //         cuota: "$24.678"
  //     }
  //
  // ];

  for (var i = 0; i < $scope.accionesCartera.length; i++) {
    if ($scope.accionesCartera[i].tendencia == 'S') {
      $scope.accionesCartera[i].icono = '&#xE5C7;';
    } else if ($scope.accionesCartera[i].tendencia == 'B') {
      $scope.accionesCartera[i].icono = "&#xE5C5;";
    }
  }

});
//Fondos Mutuos PERSONAS

banchileApp.controller('tablaFondoMutuos', function($scope) {

  $scope.sort = '+';
  $scope.fondom = [

    {
      porcent: "0,1%",
      product: "RETORNO ACCIONARIO",
      mont: "$12.600.000"
    }, {
      porcent: "0,3%",
      product: "RENTA FUTURA D",
      mont: "$5.400.000"
    }

  ];
  $scope.fondomClp = [
    {
      porcent: "0,1%",
      product: "ASIÁTICO ACCIONARIO",
      mont: "$7.200.000"
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

banchileApp.controller('tablaFondoMutuosBpayUSD', function($scope) {
  $scope.sort = '+';
  $scope.fondopay = [

    {
      porcent: "",
      product: "Corporate Dollar serie A",
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

// inicio tabla Indicadores
banchileApp.controller('tablaIndicadores', function($scope) {

  //Color Variacion Acciones y Tendencias
  $scope.indicador =
    function(variacion) {
      if (variacion <= -0.01) {
        return "valor--td__rojo";
      }
      if (variacion >= 0.01) {
        return "valor--td__verde";
      }
      if (variacion == 0.0) {
        return "valor--td__amarillo";
      }
    }
  $scope.isDisabled = true;
  $scope.sort = '+';
  $scope.accionesCartera = [{
      indice: "IPSA",
      valor: "$5.236,26",
      variacion: -0.05,
      fecha: "08/08/2017",
      tendencia: "S"
    },
    {
      indice: "IGPA",
      valor: "$5.236,26",
      variacion: 10.73,
      fecha: "08/08/2017",
      tendencia: "B"
    },
    {
      indice: "INTER-10",
      valor: "$5.236,26",
      variacion: -0.0,
      fecha: "08/08/2017",
      tendencia: "B"
    },
    {
      indice: "IGPA LARGE",
      valor: "$5.236,26",
      variacion: 91.47,
      fecha: "08/08/2017",
      tendencia: "B"
    },
    {
      indice: "IGPA MID",
      valor: "$5.236,26",
      variacion: -10.73,
      fecha: "08/08/2017",
      tendencia: "S"
    },
    {
      indice: "IGPA SMALL",
      valor: "$5.236,26",
      variacion: -10.73,
      fecha: "08/08/2017",
      tendencia: "S"
    },
    {
      indice: "BANCA",
      valor: "$5.236,26",
      variacion: -10.73,
      fecha: "08/08/2017",
      tendencia: "S"
    },
    {
      indice: "COMMODITIES",
      valor: "$5.236,26",
      variacion: -2.73,
      fecha: "08/08/2017",
      tendencia: "B"
    },
    {
      indice: "CONST&INMOB",
      valor: "$5.236,26",
      variacion: 1.73,
      fecha: "08/08/2017",
      tendencia: "S"
    },
  ];

  $scope.resumenMoneda = [{
      moneda: "USD/CLP",
      paridad: "$624,35",
      variacion: -0.05,
      fecha: "13:24:00",
      tendencia: "S"
    },
    {
      moneda: "EUR/USD",
      paridad: "1.1905",
      variacion: 10.73,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "USD/BRL",
      paridad: "3,1180",
      variacion: -0.0,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "USD/JPY",
      paridad: "108,8560",
      variacion: 91.47,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "GBP/USD",
      paridad: "1.3016",
      variacion: -10.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "AUD/USD",
      paridad: "0,7984",
      variacion: -10.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "USD/CNY",
      paridad: "6,5463",
      variacion: -10.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "USD/ARS",
      paridad: "17,0000",
      variacion: -2.73,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "USD/MXN",
      paridad: "17,9873",
      variacion: 1.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "USD/CAD",
      paridad: "1,1234",
      variacion: 1.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
  ];
  $scope.resumenFFMutuos = [{
      fondo: "Ahorro serie A",
      dias:"",
      paridad: "$624,35",
      variacion: -0.05,
      fecha: "13:24:00",
      tendencia: "S"
    },
    {
      moneda: "EUR/USD",
      paridad: "1.1905",
      variacion: 10.73,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "USD/BRL",
      paridad: "3,1180",
      variacion: -0.0,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "USD/JPY",
      paridad: "108,8560",
      variacion: 91.47,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "GBP/USD",
      paridad: "1.3016",
      variacion: -10.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "AUD/USD",
      paridad: "0,7984",
      variacion: -10.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "USD/CNY",
      paridad: "6,5463",
      variacion: -10.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "USD/ARS",
      paridad: "17,0000",
      variacion: -2.73,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "USD/MXN",
      paridad: "17,9873",
      variacion: 1.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "USD/CAD",
      paridad: "1,1234",
      variacion: 1.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
  ];

  $scope.resumenFFMM = [{
      moneda: "USD/CLP",
      paridad: "$624,35",
      variacion: -0.05,
      fecha: "13:24:00",
      tendencia: "S"
    },
    {
      moneda: "EUR/USD",
      paridad: "1.1905",
      variacion: 10.73,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "USD/BRL",
      paridad: "3,1180",
      variacion: -0.0,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "USD/JPY",
      paridad: "108,8560",
      variacion: 91.47,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "GBP/USD",
      paridad: "1.3016",
      variacion: -10.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "AUD/USD",
      paridad: "0,7984",
      variacion: -10.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "USD/CNY",
      paridad: "6,5463",
      variacion: -10.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "USD/ARS",
      paridad: "17,0000",
      variacion: -2.73,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "USD/MXN",
      paridad: "17,9873",
      variacion: 1.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "USD/CAD",
      paridad: "1,1234",
      variacion: 1.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
  ];

  for (var i = 0; i < $scope.accionesCartera.length; i++) {
    if ($scope.accionesCartera[i].tendencia == 'S') {
      $scope.accionesCartera[i].icono = '&#xE5C7;';
    } else if ($scope.accionesCartera[i].tendencia == 'B') {
      $scope.accionesCartera[i].icono = "&#xE5C5;";
    }
  }

});
// fin tabla Indicadores

banchileApp.controller('tablaInfoLegalAdministradora', function($scope) {
  $scope.expanded = false;
  $scope.categorias = [{
      name: "Estados Financieros",
      descripcion: "",
      links: [{
        iconFile: "attach_file",
        name: 'Estados Financieros 30 de junio 2017 y 2016',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=f6da92a6-f0be-4553-8d23-1076e504663a&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros 31 marzo 2017 y 2016',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=f6da92a6-f0be-4553-8d23-1076e504663a&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros 2016',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=f6da92a6-f0be-4553-8d23-1076e504663a&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros al 30 de septiembre 2016 y 2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=f6da92a6-f0be-4553-8d23-1076e504663a&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'EEstados Financieros al 30 de junio 2016 y 2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=f6da92a6-f0be-4553-8d23-1076e504663a&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros 31 marzo 2016  y 2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=f6da92a6-f0be-4553-8d23-1076e504663a&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros 2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=f6da92a6-f0be-4553-8d23-1076e504663a&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros al 30 de septiembre de 2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros al 30 de junio 2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros al 31 de Marzo de 2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros 2014',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros al 30 de septiembre de 2014',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros al 30 de Junio de 2014',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros al 31 de Marzo de 2014',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }]
    },
    {
      name: "Memorias",
      descripcion: "",
      links: [{
        iconFile: "visibility",
        name: 'Memoria 2016',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=70fcea91-ba09-4132-890e-e40bf9b8e38b&groupId=10139',
      }, {
        iconFile: "visibility",
        name: 'Memoria 2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=70fcea91-ba09-4132-890e-e40bf9b8e38b&groupId=10139',
      }]
    },
    {
      name: "Hechos esenciales",
      descripcion: "",
      links: [{
        iconFile: "visibility",
        name: 'Revise los hechos esenciales actualizados cada un minuto',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=70fcea91-ba09-4132-890e-e40bf9b8e38b&groupId=10139',
      }]
    },
    {
      name: "Manuales de manejo de información",
      descripcion: "",
      links: [{
        iconFile: "attach_file",
        name: 'Manual de manejo de información Banchile Corredores de Bolsa S.A.',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=f7ad38ff-e8f6-488a-a829-644f9a568ed8&groupId=10139',
      }]
    },
    {
      name: "Información del Comité de buenas prácticas de la Bolsa de Comercio de Santiago",
      descripcion: "Toda la información del comité de buenas prácticas de la Bolsa de Comercio de Santiago se encuentra disponible en el siguiente link:",
      links: [{
        iconFile: "visibility",
        name: 'Comité de buenas prácticas',
        url: 'http://www.bolsadesantiago.com/regulacion/Paginas/ComiteBuenasPracticas.aspx',
      }]
    },
    {
      name: "Reglamento del Defensor del inversionista de la Bolsa de Comercio Electrónica de Chile",
      descripcion: "Toda la información del Reglamento del Defensor del Inversionista de la Bolsa de Comercio Electrónica de Chile se encuentra disponible en el siguiente link:",
      links: [{
        iconFile: "attach_file",
        name: 'Bolsa Electrónica',
        url: 'http://www.bolchile.cl/media/recursos/bec/contenidos/pdf/Reglamento_del_Defensor_del_Inversionista.pdf',
      }]
    },
    {
      name: "Servicio de Cuentas de Mandantes del DCV",
      descripcion: "",
      links: [{
        iconFile: "attach_file",
        name: 'Acceder a Documento (PDF)',
        url: 'http://www.banchileinversiones.cl/pls/portal/docs/PAGE/GRP_WEBBANCHILE1/PAG_CONTENIDOS/PAG_CON_FMU/PAG_CON_FMU_PDF/BCHDCV.PDF'
      }]
    },
    {
      name: "Otros documentos importantes",
      descripcion: "",
      links: [{
        iconFile: "attach_file",
        name: 'Estatutos',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=70fcea91-ba09-4132-890e-e40bf9b8e38b&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Última Junta Ordinaria',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=70fcea91-ba09-4132-890e-e40bf9b8e38b&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Última Junta Extraordinaria',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=70fcea91-ba09-4132-890e-e40bf9b8e38b&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Manual de tratamiento y soluciones de los conflictos de interés negocio fiduciario Banchile Corredores de Bolsa S.A.',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=70fcea91-ba09-4132-890e-e40bf9b8e38b&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Política de inversiones personales Banchile Corredores de Bolsa S.A. ',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=7b827f14-abab-4745-9e2c-2d4ac01f0df3&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Política de prevención de prácticas contrarias a la probidad Banchile Inversiones',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=3fcf5aa4-6aea-44e0-94f9-e4c7951358be&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Política independencia departamento de estudios (Independent Research)',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=9f4e0d5f-3791-4fa9-a459-38a669cba216&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Política prevención de lavado de activos y financiamiento del terrorismo',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=f08b8e3f-710c-4f88-8f70-1442433bf0f6&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Política remuneraciones incentivos y otros Banchile Corredora de Bolsa',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=001f289e-6cc5-4f31-b441-a9ae2c93e709&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Código de ética Banchile Inversiones',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=608b078d-6e6b-4d6c-90aa-5774da6bcf7a&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Manual de conflicto de interés intermediación de valores por cuenta propia y de terceros',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=c6538616-afb9-47b3-bf88-9ed1cd414287&groupId=10139',
      }]
    }
  ]
  $scope.resultadoLinks = [{
    iconFile: "attach_file",
    nombre: 'Acta extraordinaria banchile administradora general de fondos',
    url: "http://www.banchileinversiones.cl/c/document_library/get_file?uuid=7b827f14-abab-4745-9e2c-2d4ac01f0df3&groupId=10139",
    categoria: "Actas",
    vigInicio: "01/01/1980",
    vigFinal: "31/12/2050",
  }, {
    iconFile: "attach_file",
    nombre: 'Acta banchile administradora general de fondos',
    url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=7b827f14-abab-4745-9e2c-2d4ac01f0df3&groupId=10139',
    categoria: "Actas",
    vigInicio: "01/01/1980",
    vigFinal: "31/12/2050",
  }, {
    iconFile: "attach_file",
    nombre: 'Tabla de costos fondos mutuos',
    url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=7b827f14-abab-4745-9e2c-2d4ac01f0df3&groupId=10139',
    categoria: "Información Producto",
    vigInicio: "01/01/1980",
    vigFinal: "31/12/2050",
  }]
});

banchileApp.controller('tablaInfoLegalCorredora', function($scope) {
  $scope.expanded = false;
  $scope.categorias = [{
      name: "Estados Financieros",
      descripcion: "",
      links: [{
        iconFile: "attach_file",
        name: 'Estados Financieros 30 de junio 2017 y 31 de diciembre 2016',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=f6da92a6-f0be-4553-8d23-1076e504663a&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros 31 de marzo 2017 y 31 de diciembre 2016',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros 2016',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros septiembre 2016 - diciembre 2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros al 30 junio 2016',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros 31/03/2016 al 31/12/2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros 2015 ',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros al 30/09/2015 y 31/12/14',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros al 30 junio 2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros al 31 de Marzo de 2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros 2014',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros Septiembre 2014',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros Junio 2014',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros Marzo 2014',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }]
    },
    {
      name: "Hechos esenciales",
      descripcion: "",
      links: [{
        iconFile: "visibility",
        name: 'Revise los hechos esenciales actualizados cada un minuto',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=70fcea91-ba09-4132-890e-e40bf9b8e38b&groupId=10139',
      }]
    },
    {
      name: "Manuales de manejo de información",
      descripcion: "",
      links: [{
        iconFile: "attach_file",
        name: 'Manual de manejo de información de Banchile Administradora General de Fondos S.A.',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=ef224051-d228-4d1d-b834-7e0869f4aeed&groupId=10139',
      }]
    },
    {
      name: "Servicio de Cuentas de Mandantes del DCV",
      descripcion: "",
      links: [{
        iconFile: "attach_file",
        name: 'Acceder a Documento (PDF)',
        url: 'http://www.banchileinversiones.cl/pls/portal/docs/PAGE/GRP_WEBBANCHILE1/PAG_CONTENIDOS/PAG_CON_FMU/PAG_CON_FMU_PDF/BCHDCV.PDF'
      }]
    },
    {
      name: "Otros documentos importantes",
      descripcion: "",
      links: [{
        iconFile: "attach_file",
        name: 'Política Custodia de Valores Banchile Administadora General de Fondos S.A.',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=15538130-7fcc-4084-a3db-648aa7a070f8&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Política de inversiones personales Banchile Administradora General de Fondos S.A.',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=15538130-7fcc-4084-a3db-648aa7a070f8&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Política de prevención de prácticas contrarias a la probidad Banchile Inversiones',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=3fcf5aa4-6aea-44e0-94f9-e4c7951358be&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Política independencia departamento de estudios (Independent Research)',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=9f4e0d5f-3791-4fa9-a459-38a669cba216&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Política prevención de lavado de activos y financiamiento del terrorismo',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=f08b8e3f-710c-4f88-8f70-1442433bf0f6&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Código de ética Banchile Inversiones',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=608b078d-6e6b-4d6c-90aa-5774da6bcf7a&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Manual tratamiento y soluciones de conflictos de interés Banchile Administradora General de Fondos S.A.',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=69004fb3-eaf5-45e1-8aea-edd1dc1164ae&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Manual de conflicto de interés intermediación de valores por cuenta propia y de terceros',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=c6538616-afb9-47b3-bf88-9ed1cd414287&groupId=10139',
      }]
    }
  ]
});

banchileApp.controller('tablaInfoLegalFondos', function($scope) {
  $scope.expanded = false;
  $scope.categorias = [{
    name: "Otros documentos importantes",
    descripcion: "",
    links: [{
      iconFile: "attach_file",
      name: 'Carteras Trimestrales',
      url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=15538130-7fcc-4084-a3db-648aa7a070f8&groupId=10139',
    }, {
      iconFile: "attach_file",
      name: 'Glosario Folletos Informativos',
      url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=15538130-7fcc-4084-a3db-648aa7a070f8&groupId=10139',
    }, {
      iconFile: "attach_file",
      name: 'Tabla de Costos',
      url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=c6538616-afb9-47b3-bf88-9ed1cd414287&groupId=10139',
    }, {
      iconFile: "attach_file",
      name: 'Remuneraciones',
      url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=c6538616-afb9-47b3-bf88-9ed1cd414287&groupId=10139',
    }, {
      iconFile: "attach_file",
      name: 'Cuadro de Costos de Fondos Mutuos',
      url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=c6538616-afb9-47b3-bf88-9ed1cd414287&groupId=10139',
    }]
  }]
});

banchileApp.controller('tablaInterior', function($scope) {

  $scope.sort = '+';
  $scope.fondom = [

    {
      porcent: "0,1%",
      product: "Renta Futura D",
      mont: "$0"
    }, {
      porcent: "0,3%",
      product: "Renta Futura D",
      mont: "$5.400.000"
    }, {
      porcent: "0,1%",
      product: "Asiático Accionario C",
      mont: "$7.200.000"
    }

  ];
});

/// INICIO Patrimonio
banchileApp.controller('tablaPatrim', function($scope) {
  $scope.sort = '+';
  $scope.patrimonio = [
    {
      producto: "90% Fondos Mutuos en CLP",
      monto: "$36.000.000"
    }, {
      producto: "5% Fondos Mutuos en USD",
      monto: "USD $5.000,00"
    }, {
      producto: "5% Fondos Mutuos en EUR",
      monto: "€ 30.000,00"
    }
  ];
  $scope.acciones = [
    {
      porcent: "7%",
      producto: "AGUAS-A",
      monto: "$121.623,000",
      ingresos: "$0,000",
      egresos: "$0,000",
      cambio: "$12.600,000",
      saldo: "134.223,000"
    },
    {
      porcent: "14%",
      producto: "SALFACORP",
      monto: "$790.500,000",
      ingresos: "$59.500,000",
      egresos: "$170.000,000",
      cambio: "$2.439,010",
      saldo: "677.560,990"
    },
    {
      porcent: "12%",
      producto: "CONCHATORO",
      monto: "$593.340,030",
      ingresos: "$53.940,000",
      egresos: "$0,000",
      cambio: "$8.930,080",
      saldo: "638.349,950"
    }
  ];
  $scope.rentaf = [

    {
      porcent: "15%",
      producto: "Renta Fija en CLP",
      monto: "$6.000.000"
    }

  ];
  $scope.totalclp1 = [

    {
      producto: "Fondos Mutuos",
      monto: "$36.000.000"
    }

  ];
  $scope.totalclp2 = [

    {
      producto: "Acciones",
      monto: "$18.000.000"
    }

  ];
  $scope.totalclp3 = [

    {
      producto: "Renta Fija",
      monto: "$6.000.000"
    }

  ];
  $scope.fondom = [

    {
      porcent: "1%",
      producto: "Balanceado",
      monto: "$12.600.000"
    }, {
      porcent: "1%",
      producto: "Deuda de largo plazo",
      monto: "$5.400.000"
    }, {
      porcent: "0,5%",
      producto: "Deuda de largo plazo",
      monto: "$7.200.000"
    }, {
      porcent: "0,5%",
      producto: "Money market",
      monto: "$10.800.000"
    }

  ];
  $scope.fondopay = [

    {
      porcent: "",
      producto: "Money Market",
      monto: ""
    }

  ];
  $scope.carteraActiva = [{
      cartera: "Cartera Protegida",
      monto: "$18.000.000",
      porcent: "15%"
    },
    {
      cartera: "Cartera Defensiva",
      monto: "$5.400.000",
      porcent: "25%"
    },
    {
      cartera: "Cartera Controlada",
      monto: "$5.400.000",
      porcent: "65%"
    }
  ];

});

banchileApp.controller('tablaPatrimonio', function($scope) {

  $scope.sort = '+';
  $scope.patrim = [{
    porcent: "50%",
    nemo: "Retorno Accionario Largo Plazo C",
    vcuota: "$307.985",
    ncuenta: "1",
    ncuotas: "76-3",
    variac: "76-3",
    monto: "$18.000.000",

  }, {
    porcent: "35%",
    nemo: "Renta Futura D",
    vcuota: "$307.985",
    ncuenta: "2 ",
    ncuotas: "$138.434",
    variac: "76-3",
    monto: "$12.603345345000"
  }, {
    porcent: "15%",
    nemo: "Asiático Accionario C",
    vcuota: "$307.985",
    ncuenta: "3",
    ncuotas: "$138.434",
    variac: "76-3",
    monto: "$5.400.000"
  }];
  $scope.accin = [{
    porcent: "50%",
    familia: "Aple",
    precio: "$1.350.758",
    dispon: "$307.985",
    garant: "$767.543",
    bloq: "$414.601",
    variac: "0,52%",
    monto: "$18.000.000",
    color: "red"
  }, {
    porcent: "35%",
    familia: "Microsoft",
    precio: "$1.350.758",
    dispon: "$307.985",
    garant: "$767.543",
    bloq: "$123.345",
    variac: "0,23%",
    monto: "$12.600.000"
  }, {
    porcent: "15%",
    familia: "LAN",
    precio: "$1.350.758",
    dispon: "$307.985",
    garant: "$767.543",
    bloq: "$376.543",
    variac: "0,14%",
    monto: "$5.400.000"
  }];
});

banchileApp.controller('tablaPreguntasFrecuentesAPV', function($scope) {
  $scope.expanded = false;
  $scope.categorias = [{
    pregunta: "¿Cómo saber cuál es el mejor plan de ahorro previsional voluntario para mí?",
    respuesta: "Muy simple, llame al (02) 896 01 72 o al (02) 896 01 65 o envíe un email a macapv@banchile.cl , donde encontrará solución a tus requerimientos sobre este tema. Además le ofrecemos, la posibilidad de realizar simulaciones que le permitirán saber cuanto es el monto del beneficio tributario para su caso particular, estimar el monto de su pensión, calcular el monto necesario para jubilar anticipadamente y toda la información que requiera para tomar una óptima decisión."
    }, {
    pregunta:"¿Puedo traspasar o retirar las cotizaciones voluntarias que actualmente tengo en la AFP?",
    respuesta:"A partir de marzo del 2002 las cotizaciones voluntarias se pueden traspasar parcial o totalmente a otra institución administradora autorizada, sin pagar comisión de traspaso. También se pueden retirar de la AFP, pero en este caso los retiros deberán pagar los impuestos correspondientes."
    }, {
    pregunta:"¿Pueden participar los trabajadores independientes en el APV?",
    respuesta:"Si, pueden. La incorporación de todos los trabajadores independientes a los beneficios tributarios del Ahorro Previsional Voluntario fue uno de los principales cambios introducidos por la reforma al mercado de capitales realizada a fines del 2001. Para obtener los beneficios tributarios asociados al APV, los independientes deben estar afiliados a alguna AFP, declarar rentas y cotizar obligatoriamente para pensiones (aproximadamente 12,3% de la remuneración imponible - RI -) y salud (7% de la RI). El monto máximo de APV con beneficio tributario que pueden realizar los independientes, depende directamente de las cotizaciones obligatorias realizadas a la cuenta de capitalización individual (CCI) de pensiones, tal como se muestra a continuación: Monto máximo APV independientes = Valor UF x 8,33 x N° UF de cotizaciones obligatorias a CCI pensiones en el año. Con todo, el valor resultante no puede ser superior a UF 600 en el año. En su declaración anual de impuestos, los independientes pueden deducir de la base de ingresos tributables, el ahorro previsional voluntario realizado durante el año respectivo, con los límites antes señalados."
    }, {
    pregunta:"¿Qué son los depósitos convenidos?",
    respuesta:"Los depósitos convenidos corresponden a sumas de dinero que los empleadores depositan a favor de tus trabajadores, en los planes de ahorro previsional voluntario ofrecidos por las instituciones autorizadas, con el objeto de incrementar el capital acumulado para financiar una pensión anticipada o aumentar el monto de la pensión. Respecto de los trabajadores, estos depósitos no constituyen remuneración para ningún efecto legal y no se consideran renta para fines tributarios. En relación con el empleador que efectúa depósitos convenidos en favor de tus trabajadores, en la medida que exista una obligación pactada en un contrato o convenio de trabajo, tales depósitos constituyen un gasto tributario para la empresa. Si los depósitos se otorgan a los trabajadores en forma voluntaria, constituyen gasto para efectos tributarios en la medida que sean otorgados bajo normas de carácter general y uniformes aplicables a todos los trabajadores de la empresa, y que tus montos sean determinados utilizando parámetros objetivos, tales como los años de servicio, las remuneraciones pagadas durante el año respectivo, el número de cargas familiares, etc. Los depósitos convenidos tienen un límite de 900 UF anuales. El hecho que un trabajador reciba depósitos convenidos no afecta su derecho a realizar depósitos de ahorro previsional voluntario o cotizaciones voluntarias."
    }, {
    pregunta:"¿Puedo retirar los fondos acumulados en los planes APV?",
    respuesta:"Los depósitos convenidos no pueden ser retirados hasta que la persona se pensiona en la AFP. En cambio, los depósitos de ahorro previsional voluntario y las cotizaciones voluntarias se pueden retirar en cualquier momento y para cualquier propósito. Sin embargo, si los retiros no se destinan a anticipar o mejorar las pensiones, deben pagar un impuesto único determinado según la tabla del Impuesto Global Complementario. Para estos efectos, los retiros se suman a las otras rentas recibidas por el trabajador durante el año del retiro, pagando éste la tasa marginal que resulte más un recargo que fluctúa entre 3% para las rentas más bajas y 7% para las rentas más altas."
    }
  ]
});

banchileApp.controller('tablaPreguntasFrecuentesAcciones', function($scope) {
  $scope.expanded = false;
  $scope.categorias = [{
    pregunta: "¿Qué son las acciones?",
    respuesta: "Las acciones son instrumentos de renta variable, emitidos por Sociedades Anónimas y en comanditas por acciones, que representan un título de propiedad sobre una fracción del patrimonio de la empresa. De esta manera, el accionista pasará a ser propietario de una parte de la compañía emisora."
    }, {
    pregunta:"¿Porqué invertir en acciones?",
    respuesta:"Los dos principales motivos por los cuales los clientes invierten en acciones son la rentabilidad y el control. En el primer caso, la ganancia que se deriva de la inversión en acciones proviene de las ganancias de capital (debido al aumento de precio de mercado de las acciones) y de los dividendos que la empresa emisora pague a tus accionistas. Adicionalmente, existe la posibilidad de obtener el manejo de una compañía a través de la compra de importantes paquetes de acciones en el mercado, lo que permite formar parte del directorio y por esa vía, participar de las principales decisiones de la empresa."
    }, {
    pregunta:"¿Qué variables se deben tener en cuenta a la hora de invertir en acciones?",
    respuesta:"La inversión en acciones requiere tener en cuenta variables como nivel de liquidez, riesgos asociados, rentabilidad esperada y horizonte de inversión. Un adecuado equilibrio de dichos factores puede generar importantes oportunidades de negocio para quienes busquen un desempeño superior asumiendo mayores niveles de riesgo.Mientras mayor sea el retorno esperado de una acción, mayor será el riesgo que se asume al invertir en ese papel y vice versa. Esta relación es básica en cualquier inversión financiera, pues la evaluación de riesgo y rentabilidad está presente en todas las decisiones de este tipo. Por lo tanto, alternativas con mayor riesgo deben ofrecer mayores rentabilidades esperadas para que los inversionistas decidan tomarlas. Las acciones son instrumentos más riesgosos que los instrumentos de renta fija, lo que debiera verse compensado con mayores rentabilidades esperadas."
    }, {
    pregunta:"¿En qué consiste el servicio de custodia de acciones?",
    respuesta:" El Servicio de Custodia consiste en guardar físicamente valores o instrumentos financieros en una bóveda de seguridad. Banchile Corredores de Bolsa ofrece el servicio de custodia, para esto es necesario firmar un “Contrato de Custodia”, como lo exige la SVS. Este contrato es único, independientemente que el cliente quiera custodia para Acciones, Instrumentos de Renta Fija, o ambos."
    }, {
    pregunta:"¿Qué son los dividendos?",
    respuesta:"Las compañías emisoras reparten utilidades entre tus accionistas a través de los dividendos. Para los clientes que mantengan tus acciones en la Custodia de Banchile, los pagos de dividendos les son avisados a través de una carta donde se indica la acción que paga el dividendo, el monto total de pago que le corresponde al cliente según las acciones que posea y la fecha de pago de este. Actualmente, la ley sobre sociedades anónimas indica que las sociedades deben repartir anualmente como dividendo en dinero, a lo menos el 30% de las utilidades líquidas de cada ejercicio."
    }, {
    pregunta:"¿Cuáles son los factores que determinan el valor de mercado de una acción?",
    respuesta:"Los factores que determinan el precio de una acción, son los flujos futuros que se “espera” generará la acción debe decir compañía ya sea por dividendos o ganancias de capital y el riesgo relevante de la acción. Así, el precio de mercado de una acción corresponde al valor presente de todos los flujos esperados (dividendos y ganancias de capital), descontados a una tasa según el riesgo relevante de la acción compañía. Si se espera que aumenten los flujos futuros de la empresa, aumentará el precio de mercado de la acción. Si el mercado espera que aumente el riesgo asociado a esa empresa, lo más probable es que el precio disminuya."
    }, {
    pregunta:"¿Cómo se realizan las operaciones de Compra y Venta de Acciones en Banchile?",
    respuesta:"Para comprar o vender acciones por primera vez, el cliente deberá completar una Ficha de Cliente, que registrará tus datos personales. En esta Ficha quedará establecida la manera de operar con Banchile, es decir, especificará si las órdenes de compra y venta se darán por escrito, verbales o verbales con posterior confirmación por escrito. También quedará establecido si el cliente opera o no con Servicio de Custodia y la comisión que pagará éste por las transacciones que realice. Es importante clarificar que esta Ficha debe ser completada por el cliente una sola vez. Además, deberá adjuntar la fotocopia de su cédula de identidad en el caso de que se trate de la primera operación. Cuando el cliente desee vender o comprar acciones posteriormente, sólo deberá contactarse con su ejecutivo, de acuerdo al método definido en la Ficha de Cliente. Deberá especificar qué, cuánto y a qué precio desea comprar o vender. Banchile procesará las órdenes y las ejecutará de acuerdo al orden de llegada. Para el caso puntual de la compra, el cliente deberá establecer si desea dejar esas acciones en forma puntual en la Custodia de Banchile. No existe monto mínimo de operación ni por ejecutiva ni por Internet. Sin embargo, sí existe una comisión mínima de UF 0,8 por transacción."
    }, {
    pregunta:"¿En Banchile, qué acciones se pueden comprar o vender a través de Internet, y en qué horarios estará disponible el servicio?",
    respuesta:"A través de www.banchileinversiones.cl se pueden comprar todas las acciones del mercado nacional y vender todas las acciones que se mantengan en la Custodia de Banchile. Se pueden ingresar órdenes de compra y venta de acciones sin restricción de horario. El acceso, tanto a los servicios de información como de transacción, funciona las 24 horas del día, todos los días del año, incluyendo sábados, domingos y festivos. Sin embargo, las órdenes que sean ingresadas fuera de los horarios bursátiles, quedarán en espera para ser ejecutadas al inicio de la rueda bursátil del día hábil siguiente. Cabe destacar que las acciones que se compren a través de Internet, quedan en la Custodia de Banchile Corredores de Bolsa, gozando de todos los beneficios de este servicio, tales como aviso y cobro de dividendos, depósitos en cuenta corriente y otros que se detallan en el Contrato de Custodia. "
    }, {
    pregunta:"¿Cuál es el costo de comprar o vender acciones a través de Banchile tanto en Chile como en el Mercado de Valores Extranjeros?",
    respuesta:"La comisión base por operaciones de compra y venta de acciones es de 1,5% + IVA por transacción, donde existe una comisión mínima de UF 0,8 + IVA, la que se cobra sólo en caso de que la comisión efectiva sea menor a UF 0,8 + IVA."
    }, {
    pregunta:"¿Existe beneficio tributario para la compra-venta de acciones?",
    respuesta:"Para las acciones adquiridas después del 19 de abril de 2001: No se grava con el impuesto a la renta el mayor valor obtenido en la enajenación de acciones cuando se cumplan los siguientes requisitos, a saber: Las acciones sean emitidas por Sociedades Anónimas abierta y cuente con presencia bursátil al momento de la venta. La enajenación de las acciones sea efectuada en una bolsa de valores del país o en otra bolsa autorizada por la Superintendencia de valores y Seguros o en un proceso de Oferta Pública de Adquisición de Acciones (OPA). Las acciones hayan sido adquiridas en una bolsa de valores, o en una OPA o en una colocación de acciones de primera emisión, o con ocasión del canje de bonos convertibles en acciones. No cumpliéndose los requisitos anteriores, el mayor valor obtenido en la enajenación de acciones quedará afecto al impuesto global complementario o adicional según corresponda, dependiendo de la existencia o no habitualidad en dicha enajenación. Lo anterior, según lo establecido en el artículo 107 de la Ley sobre Impuesto la Renta, que reemplazó al artículo 18 ter."
    }, {
    pregunta:"¿Cuáles son los impuestos asociados a las operaciones realizadas en el mercado de valores extranjero?",
    respuesta:" Las operaciones realizadas por inversionistas chilenos en mercados extranjeros y en la Bolsa Off-Shore de la Bolsa de Comercio de Santiago se encuentran sujetas a la ley de la renta, por lo que el mayor valor generado en la venta de instrumento como los dividendos recibidos se encuentran gravados por los impuestos establecidos en dicha ley. Para mayor información lo invitamos a revisar el siguiente link. Para conocer los efectos tributarios de las operaciones de compra y venta de acciones realizadas en MILA (Mercado Integrado Latinoamericano) lo invitamos a revisar el siguiente link. Para mayor información acerca de los efectos tributarios de tus operaciones como de los eventuales beneficios existentes consulte a su asesor tributario."
    },
  ]
});

banchileApp.controller('tablaPreguntasFrecuentesCAct', function($scope) {
  $scope.expanded = false;
  $scope.categorias = [{
    pregunta: "¿Qué es Cartera Activa?",
    respuesta: "Es un servicio de administración de cartera a través del cual nuestra área de inversiones monitorea y administra carteras de fondos mutuos de acuerdo a los movimientos y condiciones que presenta el mercado. Este nuevo producto les permitirá ofrecer a tus clientes una orientación precisa de acuerdo a tu perfil de inversionista, a través de la más amplia gama de Fondos Mutuos."
    }, {
    pregunta:"¿Cuál es el aporte mínimo requerido?",
    respuesta:"El aporte inicial requerido es de $1.000.000."
    }, {
    pregunta:"¿Cuál es el plazo mínimo que debe permanecer un cliente en una Cartera Activa?",
    respuesta:"El plazo recomendado es desde 180 días para la Cartera Protegida y desde un año para el resto de las Carteras."
    }, {
    pregunta:"¿Cuáles son las comisiones de salida?",
    respuesta:"Rigen las comisiones del Plan Familia de Fondos Mutuos, es decir se cobrarán las comisiones de acuerdo a lo que señalen los reglamentos internos de cada fondo mutuo que componga la cartera sobre el Plan Familia."
    }, {
    pregunta:"¿Cuál es la remuneración cobrada por Cartera Activa?",
    respuesta:"Cartera Activa cobra remuneración de acuerdo a lo que cobran los fondos mutuos que componen la cartera."
    }, {
    pregunta:"¿Qué carteras hay disponibles?",
    respuesta:"Son 7 carteras que se diferencian según el perfil de riesgo de nuestros clientes. Éste es identificado a través del Marco de Actuación Personal."
    }, {
    pregunta:"¿Se puede tener más de una cartera?",
    respuesta:"Si,  se puede tener las carteras que estime conveniente."
    }, {
    pregunta:"¿Los fondos mutuos que componen la cartera son siempre los mismos?",
    respuesta:"No, eso dependerá de las decisiones que tome nuestra área de inversiones de acuerdo a las condiciones que observe en el mercado. Nuestro equipo de inversiones cambiará la composición de la cartera cada vez que de acuerdo a los movimientos de mercado decida efectuar rebalanceos."
    }, {
    pregunta:"¿Cuántos rebalanceos se efectuarán durante el año?",
    respuesta: "Se realizarán todos los rebalanceos que nuestra área de inversiones estime necesario. Se le notificará mediante un correo electrónico se informará antes y después del proceso de Rebalanceo."
    },
  ]
});

banchileApp.controller('tablaPreguntasFrecuentesFFMM', function($scope) {
  $scope.expanded = false;
  $scope.categorias = [{
    pregunta: "¿Qué es un fondo mutuo?",
    respuesta: "Es una alternativa de inversión que consiste en reunir los patrimonios de distintas personas, naturales o jurídicas, para invertirlos en distintos instrumentos financieros, tarea que lleva a cabo Banchile como Sociedad Administradora."
    }, {
    pregunta:"¿Qué son las cuotas y los valores cuota?",
    respuesta:"El patrimonio total de un Fondo Mutuo se divide en partes iguales llamadas Cuotas. Así, cuando un cliente invierte en un Fondo Mutuo, adquiere un cierto número de Cuotas. Estas poseen un valor, llamado Valor Cuota, que cambia diariamente y que refleja la rentabilidad que ha obtenido el Fondo. Por ejemplo, se invierte $1.000 en un Fondo cuyo Valor Cuota el día en que se invirtió, era de $100. Por lo tanto, con $1.000 se adquieren 10 Cuotas del Fondo. En el supuesto que después de unos meses el Fondo rentó 10%, el Valor Cuota habrá aumentado en este mismo porcentaje, pasando de $100 a $110. Así el cliente seguirá teniendo 10 Cuotas, pero cada una de ellas ahora valdrá $110, por lo que el total del dinero habrá ascendido de $1.000 a $1.100."
    }, {
    pregunta:"¿Cómo se reconoce la rentabilidad de los Fondos Mutuos?",
    respuesta:"Lo que van rentando los Fondos Mutuos se reconoce diariamente y se expresa en la variación del Valor de la Cuota."
    }, {
    pregunta:"¿Cómo se puede saber en qué instrumentos está invertido el dinero de un Fondo Mutuo?",
    respuesta:"La cartera de inversión de los Fondos Mutuos describe los instrumentos que componen el Fondo, la que se puede consultar en cualquier momento. Los instrumentos en que puede invertir un Fondo están definidos en la Política de Inversión del Reglamento Interno, aprobado por la Superintendencia de Valores y Seguros."
    }, {
    pregunta:"¿Se deben renovar las inversiones en Fondos Mutuos?",
    respuesta:"No, las inversiones en Fondos Mutuos no tienen vencimiento, ni requieren renovaciones."
    }, {
    pregunta:"¿Cuál es la diferencia entre remuneración y comisión de un Fondo Mutuo?",
    respuesta:"La remuneración es el cobro realizado por la Administradora de Fondos y se calcula sobre el monto invertido, expresándose como porcentaje anual más IVA y descontándose día a día del Valor Cuota. Para poder obtener la remuneración diaria, se debe dividir la remuneración anual en 365 días. La comisión por su parte, es lo que la Administradora de Fondos Mutuos cobra cuando se realiza un rescate antes del plazo mínimo de permanencia que exige cada Fondo Mutuo. Su finalidad es incentivar el ahorro a largo plazo."
    }, {
    pregunta:"¿Qué es el Plan Familia de Fondos?",
    respuesta:"Es un plan voluntario que permite trasladar, exento de comisión, las inversiones entre los distintos Fondos Mutuos administrados por Banchile, acogidos a este Plan, con el beneficio de conservar la fecha de inversión original para el cálculo de la permanencia de la inversión. No obstante, el rescate total o parcial (sin reinversión) de Fondos acogidos al Plan Familia de Fondos está afecto a comisión si se efectúa antes del plazo establecido. En este caso, la comisión es de 1 a 88 días: 2,38% IVA incluido, y más 88: se encontrará libre de comisión."
    }, {
    pregunta:"¿Todos los Fondos Mutuos tienen el mismo riesgo?",
    respuesta:"La gran variedad de Fondos Mutuos con que cuenta Banchile permite que cada cliente elija aquella alternativa que mejor se ajuste a tus necesidades y preferencias particulares. En este sentido, existen distintas estrategias de inversión y por lo tanto, distintos niveles de riesgo. Cada Fondo Mutuo posee una Política de Inversión distinta que determina los mercados en los que invertirá. Hay inversiones más riesgosas que otras, ya que existen mercados más riesgosos que otros. Sin embargo, a mayor riesgo, existe un mayor retorno esperado."
    }, {
    pregunta:"¿Cómo tributan los Fondos Mutuos?",
    respuesta:"A diferencia de otros instrumentos de ahorro, las ganancias obtenidas por inversiones en Fondos Mutuos sólo generan obligaciones tributarias cuando se efectúa el rescate total o parcial de los aportes realizados. Esto representa una enorme ventaja ya que se puede diferir el pago de los impuestos en el tiempo."
    }, {
    pregunta:"¿Existen beneficios tributarios por invertir en Fondos Mutuos?",
    respuesta:"El artículo 57 bis de la Ley de la Renta otorga ciertas exenciones y permite ciertas deducciones y créditos imputables a los impuestos a pagar para las personas. Es un mecanismo a través del cual las personas pueden optar a un beneficio tributario, que se traduce en un crédito contra el Impuesto Global Complementario o Impuesto Único al momento de hacer su declaración. También el beneficio tributario 107 de la Ley de la Renta (Ex 18 Ter), permite a las personas que invierten en Fondos Mutuos Accionarios y que hayan obtenido ganancias de capital al rescatar cuotas, dichas ganancias no estén afectas a pago de impuesto. Finalmente, los Fondos Mutuos son instrumentos que pueden ser utilizados en planes de Ahorro Previsional Voluntario, una alternativa de ahorro que ofrece entre otros beneficios, incentivos tributarios. Asimismo, el artículo 108 de la Ley de la Renta establece un beneficio tributario para los rescates y las reinversiones en fondos mutuos. Finalmente, los Fondos Mutuos son instrumentos que pueden ser utilizados en planes de Ahorro Previsional Voluntario, una alternativa de ahorro que ofrece entre otros beneficios, incentivos tributarios."
    }, {
    pregunta:"Si no se tiene cuenta corriente en el Banco de Chile, ¿se pueden depositar los rescates en otro banco?",
    respuesta:"Por supuesto, invirtiendo en Fondos Mutuos Banchile, los dineros pueden ser pagados en cuentas de distintos Bancos."
    }, {
    pregunta:"Si se quieren invertir $10.000.000 en un Fondo Mutuo, y sacar $150.000 todos los fines de semana, ¿cómo se puede hacer?",
    respuesta:"Dejando tus rescates programados desde hoy."
    },
  ]
});

banchileApp.controller('tablaPreguntasFrecuentesFInv', function($scope) {
  $scope.expanded = false;
  $scope.categorias = [{
    pregunta: "¿Qué es un Fondo de Inversión?",
    respuesta: "Al igual que un Fondo Mutuo, es una alternativa de inversión que reúne patrimonios de distintas personas, naturales o jurídicas, para invertirlos en valores de oferta pública nacional e internacional. La diferencia es que el Fondo de Inversión cuenta con un plazo de inversión determinado y el número de cuotas es limitado. Los Fondos de Inversión invierten en un portafolio diversificado de distintos instrumentos. Los instrumentos en que puede invertir varían según el fondo y los define su Política de Inversión, que se encuentra en el Reglamento Interno del fondo, aprobado por la Superintendencia de Valores y Seguros."
    }, {
    pregunta:"¿Qué Ventajas tienen los Fondos de Inversión de Banchile Inversiones?",
    respuesta:"Estabilidad en el tiempo. Posibilidad de acogerse al Beneficio Tributario 57 bis de la Ley de Renta. "
    },
  ]
});

banchileApp.controller('tablaPreguntasFrecuentesMX', function($scope) {
  $scope.expanded = false;
  $scope.categorias = [{
    pregunta: "¿Qué es Moneda Extranjera?",
    respuesta: "Moneda extranjera o divisa, se refiere a los billetes o monedas de países extranjeros, cualquiera sea su denominación o característica, a las letras de cambio, cheques, cartas de crédito, órdenes de pago, pagarés, giros y cualquier otro documento en que conste una obligación pagadera en dicha moneda. En Chile, la moneda extranjera se utiliza como medio de pago en las operaciones internacionales de comercio e inversión y como alternativa de ahorro para los inversionistas."
    }, {
    pregunta:"¿Qué es Compra y Venta de Dólares y otras Monedas?",
    respuesta:"Banchile ofrece a tus clientes el servicio de compra y venta dólares. En las operaciones de compra y venta de dólares y otras monedas, los clientes obtienen precios altamente competitivos, resultados rápidos, seguros y transparentes y disponibilidad de precio permanente. Además, cada cliente recibe ventajas especiales de servicio, como son depósito en cuenta corriente, cheques bancarios y transferencias al exterior en el día."
    }, {
    pregunta:"¿Qué es Venta y Transferencias de otras Monedas (Paridades)?",
    respuesta:"Banchile permite a tus clientes adquirir monedas distintas al dólar, como euro, libra esterlina, yen japonés, etc., con transferencias hacia cuentas corrientes en distintas ciudades del mundo o directamente con cheques bancarios."
    }, {
    pregunta:"¿Qué es un Pacto en Moneda Extranjera?",
    respuesta:"Los Pactos en Moneda Extranjera o Pactos de Venta con Compromiso de Retrocompra, son una alternativa de inversión en dólares o euro, para períodos desde 2 días, que ofrecen atractivas tasas por el plazo que más le acomode a los clientes, optimizando la combinación de rentabilidad, flexibilidad y liquidez. Consiste en una venta de documentos, con el compromiso de recomprarlos en la fecha de vencimiento del pacto, a un valor superior, el cual tiene implícita una tasa de interés."
    }, {
    pregunta:"¿Qué es Compra y Venta de Instrumentos Financieros en Dólares?",
    respuesta:"Banchile ofrece a tus clientes la posibilidad de comprar y vender depósitos a plazo en dólares, bonos de empresas, Pagarés del Banco Central, etc."
    }
  ]
});

banchileApp.controller('tablaSucursales', function($scope) {

  $scope.sort = '+producto';
  $scope.cartola = [{
      oficina: "Sucursal Huérfanos",
      direccion: "Huérfanos #666",
      comuna: "Santiago",
      zona: "Región Metropolitana",
      telefono: "+56 22468 5363 ",
    },
    {
      oficina: "Sucursal Huérfanos",
      direccion: "Huérfanos #666",
      comuna: "Santiago",
      zona: "Región Metropolitana",
      telefono: "+56 22468 5363 ",
    },
    {
      oficina: "Sucursal Huérfanos",
      direccion: "Huérfanos #666",
      comuna: "Santiago",
      zona: "Región Metropolitana",
      telefono: "+56 22468 5363 ",
    },
    {
      oficina: "Sucursal Huérfanos",
      direccion: "Huérfanos #666",
      comuna: "Santiago",
      zona: "Región Metropolitana",
      telefono: "+56 22468 5363 ",
    },
    {
      oficina: "Sucursal Huérfanos",
      direccion: "Huérfanos #666",
      comuna: "Santiago",
      zona: "Región Metropolitana",
      telefono: "+56 22468 5363 ",
    },
  ]
});

// Controlador de listado de Usuarios
banchileApp.controller('tablaUsuarios', function($scope) {
  $scope.sort = '+nombres';
  $scope.usuar = [{
    nombres: "Javier Ignacio",
    apellidoPaterno: "Muñoz",
    apellidoMaterno: "Parada",
    rut: "17.777.333-3",
    rol: "Digitador",
    producto: "Banchile Pay",
    creacion: "01/05/2016 13:50:00",
  }, {
    nombres: "Antonio Manuel",
    apellidoPaterno: "Duarte",
    apellidoMaterno: "López",
    rut: "12.333.333-4",
    rol: "Visador",
    producto: "Banchile Pay",
    creacion: "03/05/2016 17:44:00",
  }, {
    nombres: "Santiago Luis",
    apellidoPaterno: "Montenegro",
    apellidoMaterno: "Araneda",
    rut: "8.322.333-3",
    rol: "Digitador",
    producto: "Fondo Mutuo Cash",
    creacion: "15/06/2016 08:45:33",
  }];
});
// Controlador de listado de Usuarios

// LISTADO BENEFICIARIOS
banchileApp.controller('tablaUsuariosnew', function($scope) {

  $scope.sort = '+nombre';
  $scope.benef = [

    {
      nombres: "Javier Ignacio",
      apellidoPaterno: "Muñoz",
      apellidoMaterno: "Parada",
      rut: "17.777.333-3",
      telefono: "02-4322411",
      email: "e.herniquez@banchile.cl",
      creacion: "01/12/2016",
    },
    {
      nombres: "Matías",
      apellidoPaterno: "Cuevas",
      apellidoMaterno: "Retamales",
      rut: "12.345.678-0",
      telefono: "02-2233224",
      email: "matias.cuevas@banchile.cl",
      creacion: "02/12/2016",
    },
    {
      nombres: "Camilo",
      apellidoPaterno: "Cienfuegos",
      apellidoMaterno: "Rivas",
      rut: "8.765.432-1",
      telefono: "02-7444666",
      email: "c.cienfuegos@banchile.cl",
      creacion: "03/12/2016",
    },
    {
      nombres: "Antonio",
      apellidoPaterno: "Fernandez",
      apellidoMaterno: "Olmos",
      rut: "9.765.432-1",
      telefono: "02-9300222",
      email: "antonio.gernandez@banchile.cl",
      creacion: "04/12/2016",
    },
    {
      nombres: "Julia",
      apellidoPaterno: "Matamala",
      apellidoMaterno: "Rios",
      rut: "8.765.432-5",
      telefono: "02-4234423",
      email: "j.matamala@banchile.cl",
      creacion: "05/12/2016",
    },
    {
      nombres: "Antonia",
      apellidoPaterno: "Sierra",
      apellidoMaterno: "Campos",
      rut: "17.656.354-5",
      telefono: "02-2233666",
      email: "antonia.campos@banchile.cl",
      creacion: "06/12/2016",
    }, {
      nombres: "Javier Ignacio",
      apellidoPaterno: "Muñoz",
      apellidoMaterno: "Parada",
      rut: "17.777.333-3",
      telefono: "02-4322411",
      email: "e.herniquez@banchile.cl",
      creacion: "01/12/2016",
    },
    {
      nombres: "Matías",
      apellidoPaterno: "Cuevas",
      apellidoMaterno: "Retamales",
      rut: "12.345.678-0",
      telefono: "02-2233224",
      email: "matias.cuevas@banchile.cl",
      creacion: "02/12/2016",
    },
    {
      nombres: "Camilo",
      apellidoPaterno: "Cienfuegos",
      apellidoMaterno: "Rivas",
      rut: "8.765.432-1",
      telefono: "02-7444666",
      email: "c.cienfuegos@banchile.cl",
      creacion: "03/12/2016",
    },
    {
      nombres: "Antonio",
      apellidoPaterno: "Fernandez",
      apellidoMaterno: "Olmos",
      rut: "9.765.432-1",
      telefono: "02-9300222",
      email: "antonio.gernandez@banchile.cl",
      creacion: "04/12/2016",
    },
    {
      nombres: "Julia",
      apellidoPaterno: "Matamala",
      apellidoMaterno: "Rios",
      rut: "8.765.432-5",
      telefono: "02-4234423",
      email: "j.matamala@banchile.cl",
      creacion: "05/12/2016",
    },
    {
      nombres: "Antonia",
      apellidoPaterno: "Sierra",
      apellidoMaterno: "Campos",
      rut: "17.656.354-5",
      telefono: "02-2233666",
      email: "antonia.campos@banchile.cl",
      creacion: "06/12/2016",
    }, {
      nombres: "Javier Ignacio",
      apellidoPaterno: "Muñoz",
      apellidoMaterno: "Parada",
      rut: "17.777.333-3",
      telefono: "02-4322411",
      email: "e.herniquez@banchile.cl",
      creacion: "01/12/2016",
    },
    {
      nombres: "Matías",
      apellidoPaterno: "Cuevas",
      apellidoMaterno: "Retamales",
      rut: "12.345.678-0",
      telefono: "02-2233224",
      email: "matias.cuevas@banchile.cl",
      creacion: "02/12/2016",
    },
    {
      nombres: "Camilo",
      apellidoPaterno: "Cienfuegos",
      apellidoMaterno: "Rivas",
      rut: "8.765.432-1",
      telefono: "02-7444666",
      email: "c.cienfuegos@banchile.cl",
      creacion: "03/12/2016",
    },
    {
      nombres: "Antonio",
      apellidoPaterno: "Fernandez",
      apellidoMaterno: "Olmos",
      rut: "9.765.432-1",
      telefono: "02-9300222",
      email: "antonio.gernandez@banchile.cl",
      creacion: "04/12/2016",
    },
    {
      nombres: "Julia",
      apellidoPaterno: "Matamala",
      apellidoMaterno: "Rios",
      rut: "8.765.432-5",
      telefono: "02-4234423",
      email: "j.matamala@banchile.cl",
      creacion: "05/12/2016",
    },
    {
      nombres: "Antonia",
      apellidoPaterno: "Sierra",
      apellidoMaterno: "Campos",
      rut: "17.656.354-5",
      telefono: "02-2233666",
      email: "antonia.campos@banchile.cl",
      creacion: "06/12/2016",
    },
    {
      nombres: "Javier Ignacio",
      apellidoPaterno: "Muñoz",
      apellidoMaterno: "Parada",
      rut: "17.777.333-3",
      telefono: "02-4322411",
      email: "e.herniquez@banchile.cl",
      creacion: "01/12/2016",
    },
    {
      nombres: "Matías",
      apellidoPaterno: "Cuevas",
      apellidoMaterno: "Retamales",
      rut: "12.345.678-0",
      telefono: "02-2233224",
      email: "matias.cuevas@banchile.cl",
      creacion: "02/12/2016",
    },
    {
      nombres: "Camilo",
      apellidoPaterno: "Cienfuegos",
      apellidoMaterno: "Rivas",
      rut: "8.765.432-1",
      telefono: "02-7444666",
      email: "c.cienfuegos@banchile.cl",
      creacion: "03/12/2016",
    },
    {
      nombres: "Antonio",
      apellidoPaterno: "Fernandez",
      apellidoMaterno: "Olmos",
      rut: "9.765.432-1",
      telefono: "02-9300222",
      email: "antonio.gernandez@banchile.cl",
      creacion: "04/12/2016",
    },
    {
      nombres: "Julia",
      apellidoPaterno: "Matamala",
      apellidoMaterno: "Rios",
      rut: "8.765.432-5",
      telefono: "02-4234423",
      email: "j.matamala@banchile.cl",
      creacion: "05/12/2016",
    },
    {
      nombres: "Antonia",
      apellidoPaterno: "Sierra",
      apellidoMaterno: "Campos",
      rut: "17.656.354-5",
      telefono: "02-2233666",
      email: "antonia.campos@banchile.cl",
      creacion: "06/12/2016",
    }, {
      nombres: "Javier Ignacio",
      apellidoPaterno: "Muñoz",
      apellidoMaterno: "Parada",
      rut: "17.777.333-3",
      telefono: "02-4322411",
      email: "e.herniquez@banchile.cl",
      creacion: "01/12/2016",
    },
    {
      nombres: "Matías",
      apellidoPaterno: "Cuevas",
      apellidoMaterno: "Retamales",
      rut: "12.345.678-0",
      telefono: "02-2233224",
      email: "matias.cuevas@banchile.cl",
      creacion: "02/12/2016",
    },
    {
      nombres: "Camilo",
      apellidoPaterno: "Cienfuegos",
      apellidoMaterno: "Rivas",
      rut: "8.765.432-1",
      telefono: "02-7444666",
      email: "c.cienfuegos@banchile.cl",
      creacion: "03/12/2016",
    },
    {
      nombres: "Antonio",
      apellidoPaterno: "Fernandez",
      apellidoMaterno: "Olmos",
      rut: "9.765.432-1",
      telefono: "02-9300222",
      email: "antonio.gernandez@banchile.cl",
      creacion: "04/12/2016",
    },
    {
      nombres: "Julia",
      apellidoPaterno: "Matamala",
      apellidoMaterno: "Rios",
      rut: "8.765.432-5",
      telefono: "02-4234423",
      email: "j.matamala@banchile.cl",
      creacion: "05/12/2016",
    },
    {
      nombres: "Antonia",
      apellidoPaterno: "Sierra",
      apellidoMaterno: "Campos",
      rut: "17.656.354-5",
      telefono: "02-2233666",
      email: "antonia.campos@banchile.cl",
      creacion: "06/12/2016",
    },





  ];
});

banchileApp.controller('TestCtrl', function($scope) {
  $scope.swiper = {};
  $scope.next = function() {
    $scope.swiper.slideNext();
  };
  $scope.onReadySwiper = function(swiper) {
    console.log('onReadySwiper');
    swiper.on('slideChangeStart', function() {
      console.log('slideChangeStart');
    });
  };
});

/*  inicio controllerTimeline */
banchileApp.controller('timeline', function($scope) {
  (function() {

    'use strict';

    // define variables
    var items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

  })();
});
/*  fin controllerTimeline */

banchileApp.controller('timerProgress', function($scope, $interval, $timeout, $window, roundProgressService) {


  $scope.current = 27;
  $scope.max = 50;
  $scope.offset = 0;
  $scope.timerCurrent = 0;
  $scope.uploadCurrent = 0;
  $scope.stroke = 15;
  $scope.radius = 100;
  $scope.isSemi = false;
  $scope.rounded = false;
  $scope.responsive = false;
  $scope.clockwise = true;
  $scope.currentColor = '#45ccce';
  $scope.bgColor = '#eaeaea';
  $scope.duration = 800;
  $scope.currentAnimation = 'easeOutCubic';
  $scope.animationDelay = 0;

  $scope.increment = function(amount) {
    $scope.current += (amount || 1);
  };

  $scope.decrement = function(amount) {
    $scope.current -= (amount || 1);
  };

  $scope.animations = [];

  angular.forEach(roundProgressService.animations, function(value, key) {
    $scope.animations.push(key);
  });

  $scope.getStyle = function() {
    var transform = ($scope.isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': $scope.isSemi ? 'auto' : '-34px',
      'bottom': $scope.isSemi ? '0' : '0',
      'left': '27%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform
    };
  };

  $scope.getColor = function() {
    return $scope.gradient ? 'url(#gradient)' : $scope.currentColor;
  };

  $scope.showPreciseCurrent = function(amount) {
    $timeout(function() {
      if (amount <= 0) {
        $scope.preciseCurrent = $scope.current;
      } else {
        var math = $window.Math;
        $scope.preciseCurrent = math.min(math.round(amount), $scope.max);
      }
    });
  };

  var getPadded = function(val) {
    return val < 10 ? ('0' + val) : val;
  };

  $interval(function() {
    var date = new Date();
    var seconds = date.getSeconds();

    $scope.seconds = seconds;
    $scope.time = getPadded(seconds);
  }, 1000);

});

banchileApp.controller('toggleShow', function($scope) {
  $scope.custom = true;
});

banchileApp.controller('VerAyudaFFMM', function($scope, $mdDialog) {
  $scope.mostrarProducto = true;
  $scope.mostrarSeleccion = function() {
    angular.element($("#formularioCtrl")).scope().mostrarProducto = true;
    $mdDialog.hide();
  };
  $scope.verFondos = false;
  $scope.todosFondos = function(event) {
    $scope.verFondos = !($scope.verFondos);
    event.stopPropagation();
    $scope.ayudaFondos = false;
  };

  $scope.ayudaFondos = true;
  $scope.ayuda = function(event) {
    $scope.ayudaFondos = !($scope.ayudaFondos);
    event.stopPropagation();
    $scope.verFondos = false;
  };

  $scope.hideExitoEmpresa = function() {
    $mdDialog.hide();
  }

  $scope.hidecarteraActiva = function() {
    $mdDialog.hide();
  }

  $scope.hideCaja = function() {
    $mdDialog.hide();
  }


  $scope.isActive = function() {
    if ($scope.pagarDesde == "1") {
      return true;
    } else {
      return false;
    }
  }
  $scope.isActive = function() {
    if ($scope.pagarDesde == "2") {
      return true;
    } else {
      return false;
    }
  }
  $scope.isActive = function() {
    if ($scope.pagarDesde == "3") {
      return true;
    } else {
      return false;
    }
  }


});

banchileApp.controller('VerCaja', function($scope) {
  $scope.verdeposito = false;
  $scope.deposito = function(event) {
    $scope.verdeposito = !($scope.verdeposito);
    event.stopPropagation();
    $scope.verretiro = false;
  };

  $scope.verretiro = false;
  $scope.retiro = function(event) {
    $scope.verretiro = !($scope.verretiro);
    event.stopPropagation();
    $scope.verdeposito = false;
  };
});
