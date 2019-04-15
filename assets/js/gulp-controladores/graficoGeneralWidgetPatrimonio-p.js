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
