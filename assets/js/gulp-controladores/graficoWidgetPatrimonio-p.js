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
