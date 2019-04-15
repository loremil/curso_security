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
