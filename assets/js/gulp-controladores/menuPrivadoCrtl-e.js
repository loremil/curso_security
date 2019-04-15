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
