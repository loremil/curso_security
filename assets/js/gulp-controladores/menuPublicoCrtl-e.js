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
