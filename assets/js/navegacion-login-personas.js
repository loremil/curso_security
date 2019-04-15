
banchileApp.config(function ($routeProvider) {

    $routeProvider
        //LOGIN
        .when('/login-personas', {
            templateUrl: 'login/login-personas.html',
        })
        .when('/bienvenida-personas', {
            templateUrl: 'login/bienvenida-personas.html',
        })
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
        .when('/actualizacion-datos-4S', {
            templateUrl: 'actualizacion/actualizacion-datos-4-2.html',
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
      //   encuesta2
        .when('/encuesta-inversionistav2', {
          templateUrl: 'actualizacion/encuesta-inversionistaV2.html',
         })
         .when('/encuesta-inversionista-1v2', {
             templateUrl: 'actualizacion/encuesta-inversionista-1V2.html',
         })
         .when('/encuesta-inversionista-2v2', {
             templateUrl: 'actualizacion/encuesta-inversionista-2V2.html',
         })
         .when('/encuesta-inversionista-3v2', {
             templateUrl: 'actualizacion/encuesta-inversionista-3V2.html',
         })
         .when('/encuesta-inversionista-4v2', {
             templateUrl: 'actualizacion/encuesta-inversionista-4V2.html',
         })
         .when('/encuesta-inversionista-5v2', {
             templateUrl: 'actualizacion/encuesta-inversionista-5V2.html',
         })
         .when('/encuesta-resultadov2', {
             templateUrl: 'actualizacion/encuesta-resultadoV2.html',
         })
         // login2
         .when('/login-personasv2', {
             templateUrl: 'login/login-personasV2.html',
         })


        .otherwise({
            redirectTo: '/login-personas'
        });


});
