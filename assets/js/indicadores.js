banchileApp.controller('highChartWidgetController', ['$scope', '$http', function ($scope, $http) {

    // control de visibilidad del widget
    $scope.$on('verWidgetIndicadores', function (event, data) {
    	console.log("onver");
        $scope.misIndicadores = data;
        $scope.searchDataGrupoIndicadores();
    });

    //inicializar parametros
    $scope.initWidget = function (grupo, rango, url) {
    	$scope.indicadoresWidgetMensajeError=false;
    	$scope.indicadoresWidgetMensajeWarning=false;
    	
//    	$scope.parametrosWidget = {
//                grupo: grupo,
//                rango: rango,
//                urlGrupos: '',
//                urlGraficos: ''
//            }
//    	
//    	 var parametrosWidget = {
//            	accion : "SEGUIMIENTO_INIT",
//                grupo: grupo,
//                rango: rango
//            }
//
//            var configInit = {
//    				 params: parametrosWidget
//    		 };
//    	
//    	
//    	$http.get(url, configInit).success(function (data, status, headers, config) {        	
//    		$scope.parametrosWidget.urlGrupos = data.consultarGrupoURL;
//    		$scope.parametrosWidget.urlGraficos = data.consultarDatosGraficosURL;
//    		console.log($scope.parametrosWidget)
//        })
//        .error(function (data, status, header, config) {
//            console.log("Error al inicializar indicadores");
//        });
        
    };
	
	//dummy
var jsonGrupoIndicadores = JSON.parse('[ { "codigo": "173", "descripcion": "Empresas Copec S.A.", "fechahora": "2017-04-06T16:20:00.000-03:00", "flagabierto": "0", "imgbandera": "CL", "max52": "7300.4", "min52": "5734.3", "nemotecnico": "COPEC", "nombre": "COPEC", "orden": "1", "simbmoneda": "$", "tipo": "ACC", "ultimo": "7296.3", "variacion": "0.69" }, { "codigo": "391", "descripcion": "Lan Airlines S.A.", "fechahora": "2017-04-06T16:20:00.000-03:00", "flagabierto": "0", "imgbandera": "CL", "max52": "8759", "min52": "4163.5", "nemotecnico": "LAN", "nombre": "LAN", "orden": "2", "simbmoneda": "$", "tipo": "ACC", "ultimo": "8605.8", "variacion": "-0.92" }, { "codigo": "3188", "descripcion": "", "fechahora": "2017-04-05T00:00:00.000-03:00", "flagabierto": "0", "imgbandera": "CL", "max52": "323.27", "min52": "278.43", "nemotecnico": "ENDESA-AM", "nombre": "ENDESA-AM", "orden": "3", "simbmoneda": "$", "tipo": "ACC", "ultimo": "299.98", "variacion": "0" }, { "codigo": "64", "descripcion": "Cap. S.A.", "fechahora": "2017-04-06T16:20:00.000-03:00", "flagabierto": "0", "imgbandera": "CL", "max52": "8392.3", "min52": "1979.7", "nemotecnico": "CAP", "nombre": "CAP", "orden": "4", "simbmoneda": "$", "tipo": "ACC", "ultimo": "7777.6", "variacion": "-1.45" }, { "codigo": "52", "descripcion": "Banco Santander-Chile", "fechahora": "2017-04-06T16:20:00.000-03:00", "flagabierto": "0", "imgbandera": "CL", "max52": "42.38", "min52": "30.84", "nemotecnico": "BSANTANDER", "nombre": "BSANTANDER", "orden": "5", "simbmoneda": "$", "tipo": "ACC", "ultimo": "41.06", "variacion": "-0.85" }, { "codigo": "3194", "descripcion": "", "fechahora": "2017-04-05T00:00:00.000-03:00", "flagabierto": "0", "imgbandera": "CL", "max52": "118.2", "min52": "95.48", "nemotecnico": "ENERSIS-AM", "nombre": "ENERSIS-AM", "orden": "6", "simbmoneda": "$", "tipo": "ACC", "ultimo": "110.19", "variacion": "0" }, { "codigo": "89", "descripcion": "Cencosud S.A.", "fechahora": "2017-04-06T16:20:00.000-03:00", "flagabierto": "0", "imgbandera": "CL", "max52": "2176.7", "min52": "1692.1", "nemotecnico": "CENCOSUD", "nombre": "CENCOSUD", "orden": "7", "simbmoneda": "$", "tipo": "ACC", "ultimo": "2072.7", "variacion": "0.65" }, { "codigo": "587", "descripcion": "Soc. Química Y Minera De Chile S.A.", "fechahora": "2017-04-06T16:20:00.000-03:00", "flagabierto": "0", "imgbandera": "CL", "max52": "24050", "min52": "13411", "nemotecnico": "SQM-B", "nombre": "SQM-B", "orden": "8", "simbmoneda": "$", "tipo": "ACC", "ultimo": "24007", "variacion": "5.1" } ]');
var jsonGraficoIndicadores = JSON.parse([{ "codigo" : "1701", "nombre" : "IPSA", "values" : [{ "cantidad" : "0.0", "fechaHora" : "2017-04-05T00:00:00.000-03:00", "valor" : "4872.82", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-04-04T00:00:00.000-03:00", "valor" : "4825.76", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-04-03T00:00:00.000-03:00", "valor" : "4791.56", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-03-31T00:00:00.000-03:00", "valor" : "4783.42", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-03-30T00:00:00.000-03:00", "valor" : "4818.87", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-03-29T00:00:00.000-03:00", "valor" : "4854.58", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-03-28T00:00:00.000-03:00", "valor" : "4868.88", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-03-27T00:00:00.000-03:00", "valor" : "4759.19", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-03-24T00:00:00.000-03:00", "valor" : "4760.87", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-03-23T00:00:00.000-03:00", "valor" : "4727.4", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-03-22T00:00:00.000-03:00", "valor" : "4689.78", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-03-21T00:00:00.000-03:00", "valor" : "4671.42", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-03-20T00:00:00.000-03:00", "valor" : "4662.14", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-03-17T00:00:00.000-03:00", "valor" : "4652.4", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-03-16T00:00:00.000-03:00", "valor" : "4616.47", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-03-15T00:00:00.000-03:00", "valor" : "4548.86", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-03-14T00:00:00.000-03:00", "valor" : "4527.59", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-03-13T00:00:00.000-03:00", "valor" : "4542.4", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-03-10T00:00:00.000-03:00", "valor" : "4474.88", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-03-09T00:00:00.000-03:00", "valor" : "4467.98", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-03-08T00:00:00.000-03:00", "valor" : "4468.5", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-03-07T00:00:00.000-03:00", "valor" : "4476.43", "volumen" : "0.0" }, { "cantidad" : "0.0", "fechaHora" : "2017-03-06T00:00:00.000-03:00", "valor" : "4467.32", "volumen" : "0.0" } ] } ]);
	//fin dummy

    //busca los datos
    $scope.searchDataGrupoIndicadores = function () {
        if (!$scope.misIndicadores) {
            return;
        } else {
//            var endpoint = $scope.parametrosWidget.urlGrupos + '/grupo/' + $scope.parametrosWidget.grupo + '?p_auth=' + Liferay.authToken;
//            $http.get(endpoint)
//                .success(function (data, status, headers, config) {
					
					//DUMMY
					data = jsonGrupoIndicadores;
					//fIN DUMMY
					
                	console.log(data);                	
                	if (data.datos) {
                		$scope.indicadoresWidgetFault=null;
                        $scope.datosSeguimientoIndicadores = data;
                        $scope.datosSeguimientoIndicadores.some(function (instrumento, index, _ary) {
                            if (index == 0) {
                                //Invocar a datosGrafico para el Index0
                                $scope.llenaDatosGraficosWidget(instrumento.codigo, instrumento.nemotecnico, instrumento.tipo);
                            }
                            return;
                        });
                	} else if (data.mensajeLsb){
                		$scope.indicadoresWidgetFault = data.mensajeLsb;
                		$scope.indicadoresWidgetMensajeWarning=true;
                	}
//                })
//                .error(function (data, status, header, config) {
//                	console.log("ERRRROOOOORRRRRRRR !!!!:"+status); 
//                	if (data.mensajeLsb){
//                		$scope.indicadoresWidgetFault = data.mensajeLsb;
//                		$scope.indicadoresWidgetMensajeError=true;
//                	}
//                    $scope.datosSeguimientoIndicadores = new Array();
//                });
        }
    };

    //busca los datos para el grafico
    $scope.llenaDatosGraficosWidget = function (codigo, nemotecnico, tipo) {

//		var parameters = {
//            codigo: codigo,
//            nemotecnico: nemotecnico,
//            tipo: tipo,
//            rango: "MAX",
//            p_auth: Liferay.authToken
//        };
//
//        var config = {params: parameters};
//
//        $http
//            .get($scope.parametrosWidget.urlGraficos, config)
//            .success(function (data, status, headers, config) {


				//dummy
				data = jsonGraficoIndicadores;
				//fin dummy

                $scope.datosGrafico = new Array();

                for (var i = 0; i < data[0].values.length; i++) {
                    var valor = data[0].values[i];
                    var valorParaGrafico = new Object();
                    // valorParaGrafico.valor = valor.valor;
                    valorParaGrafico.y = valor.valor;
                    valorParaGrafico.fechaHora = valor.fechaHora;
                    var date = new Date(valorParaGrafico.fechaHora);
                    var month = (date.getMonth() + 1);
                    var day = date.getDate();
                    var year = date.getFullYear();
                    $scope.datosGrafico.push([Date.UTC(year, month, day), valorParaGrafico.y]);
                }

                $scope.options = {
                    chart: {
                        // Edit chart spacing
                        spacingBottom: 15,
                        spacingTop: 10,
                        spacingLeft: 10,
                        spacingRight: 10,

                        // Explicitly tell the width and height of a chart
                        width: 400,
                        height: 200,
                        zoomType: 'x'
                    }
                    , title: {
                        text: ''
                    }
                    ,
                    subtitle: {
                        text: document.ontouchstart === undefined ?
                            '' : 'Pinch the chart to zoom in'
                    }
                    ,
                    xAxis: {
                        type: 'datetime',
                        dateTimeLabelFormats: {
                            month: '%Y-%m'
                        }
                    }
                    ,
                    yAxis: {
                        title: {
                            text: ''
                        }
                    }
                    ,
                    legend: {
                        enabled: false
                    }
                    ,
                    plotOptions: {
                        area: {
                            fillColor: {
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
                        type: 'area',
                        name: 'Valor',
                        // data: scope.data
                        data: $scope.datosGrafico
                    }]
                }

//            })
//            .error(function (data, status, headers, config) {
//                //console.log("error datos grafico indicadores");
//            });
    };

    // aplicar estilos segun tendencia
    $scope.tendenciaIndicador = function (value) {
        var tendencia = parseFloat(value);
        if (tendencia == 0) {
            return 'amarillo';
        } else if (tendencia > 0) {
            return 'verde';
        } else if (tendencia < 0) {
            return 'rojo';
        }
        return '';
    };
}]);
