

    banchileApp.config(function ($routeProvider) {

        $routeProvider
            //ACTUALIZACION
            .when('/actualizacion-datos', {
                templateUrl: 'actualizacion/actualizacion-datos.html',
            })
            .when('/actualizacion-datos-registro', {
                templateUrl: 'actualizacion/actualizacion-datos-registro.html',
            })
            .when('/actualizacion-datos-registro', {
                templateUrl: 'actualizacion/actualizacion-datos-registro.html',
            })
            .when('/actualizacion-datos-1', {
                templateUrl: 'actualizacion/actualizacion-datos-1.html',
            })
            .when('/actualizacion-datos-2', {
                templateUrl: 'actualizacion/actualizacion-datos-2.html',
            })
            .when('/actualizacion-datos-3', {
                templateUrl: 'actualizacion/actualizacion-datos-3.html',
            })
            .when('/actualizacion-datos-4', {
                templateUrl: 'actualizacion/actualizacion-datos-4.html',
            })
            //ENCUESTA
            .when('/encuesta-inversionista', {
                templateUrl: 'actualizacion/encuesta-inversionista.html',
            })
            .when('/encuesta-inversionista-1', {
                templateUrl: 'actualizacion/encuesta-inversionista-1.html',
            })
            .when('/encuesta-inversionista-2', {
                templateUrl: 'actualizacion/encuesta-inversionista-2.html',
            })
            .when('/encuesta-inversionista-3', {
                templateUrl: 'actualizacion/encuesta-inversionista-3.html',
            })
            .when('/encuesta-inversionista-4', {
                templateUrl: 'actualizacion/encuesta-inversionista-4.html',
            })
            .when('/encuesta-inversionista-5', {
                templateUrl: 'actualizacion/encuesta-inversionista-5.html',
            })
            .when('/encuesta-resultado', {
                templateUrl: 'actualizacion/encuesta-resultado.html',
            })
            .when('/marco-personal', {
                templateUrl: 'actualizacion/marco-personal.html',
            })
            .when('/documentos', {
                templateUrl: 'consultar/personas/personas-documentos.html',
            })


            .otherwise({
                redirectTo: '/actualizacion-datos'
            });
    });
