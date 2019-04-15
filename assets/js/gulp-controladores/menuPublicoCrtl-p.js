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
