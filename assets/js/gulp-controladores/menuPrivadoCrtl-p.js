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
