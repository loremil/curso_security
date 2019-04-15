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
