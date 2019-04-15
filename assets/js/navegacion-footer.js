banchileApp.config(function ($routeProvider) {

    $routeProvider
        .when('/contactanos', {
            templateUrl: 'url',
        })

        .otherwise({
            redirectTo: '/home'
        });
});
