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
