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
