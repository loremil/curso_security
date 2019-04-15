banchileApp.controller('menuRouteCrtl-personas',

  ['$scope', '$location', function($scope, $location) {
    $scope.currentNavItem = 'home-persona';
    // $scope.template1 = 'menu-navegacion-personas/personas-menu-consultar.html';
    // $scope.template2 = 'menu-navegacion-personas/personas-menu-invertir.html';
    // $scope.template3 = 'menu-navegacion-personas/personas-menu-definir.html';
    // $scope.template4 = 'menu-navegacion-personas/personas-menu-asesoria.html';
    // $scope.template5 = 'menu-navegacion-empresas/home-persona.html';
    $scope.template = $scope.template1;
    $scope.nombreSeccion = "home-contenido"
    $scope.changeMenu = function(template, name, location) {
      $scope.template = template;
      $scope.nombreSeccion = name;
      $location.path(location);
      $scope.currentNavItem = location;
    }
  }]);

banchileApp.config(function($routeProvider) {
  $routeProvider

    //CONSULTAR
    .when('/resumen', {
      templateUrl: 'consultar/personas/personas-resumen.html',
    })
    .when('/autorizaciones', {
      templateUrl: 'consultar/personas/personas-autorizaciones.html',
    })

    /*alertas*/
    .when('/resumen-alertas', {
      templateUrl: 'consultar/personas/personas-resumen-alertas.html',
    })
    .when('/alertaCard--error', {
      templateUrl: 'invertir/personas/alertaCard--error.html',
    })
    /*fin alertas*/

    /*mensajes*/
    .when('/personas-pruebaAlertas', {
      templateUrl: 'consultar/personas/personas-pruebaAlertas.html',
    })
    /*fin mensajes*/

    .when('/patrimonio', {
      templateUrl: 'consultar/personas/personas-patrimonio.html',
    })
    .when('/movimientos', {
      templateUrl: 'consultar/personas/personas-movimientos.html',
    })
    .when('/documentos', {
      templateUrl: 'consultar/personas/personas-documentos.html',
    })
    .when('/contrato-actualizacion', {
      templateUrl: 'consultar/personas/contrato-actualizacion.html',
    })
    .when('/personas-comprobante', {
      templateUrl: 'consultar/personas/personas-comprobante.html',
    })

    //INVERTIR
    .when('/caja-abono', {
      templateUrl: 'invertir/personas/personas-caja_internet-abono.html',
    })
    .when('/caja-retiro', {
      templateUrl: 'invertir/personas/personas-caja_internet-retiro.html',
    })
    .when('/fondos-mutuos', {
      templateUrl: 'invertir/personas/personas-fondos-mutuos.html',
    })
    .when('/cartera-activa', {
      templateUrl: 'invertir/personas/personas-cartera-activa.html',
    })
    .when('/cartera-activa-ingreso', {
      templateUrl: 'invertir/personas/personas-cartera-activa--ingreso.html',
    })
    .when('/cartera-activa-egreso', {
      templateUrl: 'invertir/personas/personas-cartera-activa--egreso.html',
    })
    .when('/cartera-activa-ingreso-operacion', {
      templateUrl: 'invertir/personas/personas-cartera-activa--operacion.html',
    })
    .when('/fondosmutuos-rescate', {
      templateUrl: 'invertir/personas/personas-fondosmutuos--rescate.html',
    })
    .when('/fondosmutuos-aporte-clp', {
      templateUrl: 'invertir/personas/personas-fondosmutuos--aporte--clp.html',
    })
    .when('/fondosmutuos-aporte-usd', {
      templateUrl: 'invertir/personas/personas-fondosmutuos--aporte--usd.html',
    })
    .when('/fondosmutuos-aporte-cargando', {
      templateUrl: 'invertir/personas/personas-fondosmutuos--aporte-cargando.html',
    })
    .when('/fondosmutuos-aporte-CuentaCorriente', {
      templateUrl: 'invertir/personas/personas-fondosmutuos--aporte-CuentaCorriente.html',
    })
    .when('/fondosmutuos-aporte-CuentaCorriente', {
      templateUrl: 'invertir/personas/personas-fondosmutuos--aporte-CuentaCorriente.html',
    })
    .when('/fondosmutuos-rescate-FondosMutuos', {
      templateUrl: 'invertir/personas/personas-fondosmutuos--rescate-FondosMutuos.html',
    })
    .when('/personas-fondos-mutuos-ficha', {
      templateUrl: 'invertir/personas/personas-fondos-mutuos-ficha.html',
    })
    .when('/fondosmutuos-rescate-CarteraActiva', {
      templateUrl: 'invertir/personas/personas-fondosmutuos--rescate-CarteraActiva.html',
    })
    .when('/fondosmutuos-rescate-CuentaCorriente', {
      templateUrl: 'invertir/personas/personas-fondosmutuos--rescate-CuentaCorriente.html',
    })

    .when('/detalle-abono', {
      templateUrl: 'detalle/detalle-abono.html',
    })
    .when('/detalle-abono', {
      templateUrl: '',
    })

    // comprobantes
    .when('/comprobante-01', {
      templateUrl: 'invertir/personas/personas-FFMM-comprobante-01.html',
    })
    .when('/comprobante-02', {
      templateUrl: 'invertir/personas/personas-FFMM-comprobante-02.html',
    })
    .when('/comprobante-03', {
      templateUrl: 'invertir/personas/personas-CA-comprobante-03.html',
    })
    .when('/comprobante-04', {
      templateUrl: 'invertir/personas/personas-CA-comprobante-04.html',
    })
    .when('/comprobante-05', {
      templateUrl: 'invertir/personas/personas-ventaACC-comprobante-05.html',
    })
    .when('/comprobante-06', {
      templateUrl: 'invertir/personas/personas-compraACC-comprobante-06.html',
    })
    .when('/comprobante-07', {
      templateUrl: 'invertir/personas/personas-ventaMX-comprobante-07.html',
    })
    .when('/comprobante-08', {
      templateUrl: 'invertir/personas/personas-moneda-comprobanteCompra.html',
    })
    .when('/comprobante-09', {
      templateUrl: 'invertir/personas/personas-moneda-comprobanteVenta.html',
    })
    .when('/comprobante-10', {
      templateUrl: 'invertir/personas/personas-retiroCaja-comprobante-10.html',
    })
    .when('/comprobante-11', {
      templateUrl: 'invertir/personas/personas-transferencia-comprobante-11.html',
    })
    .when('/comprobante-12', {
      templateUrl: 'invertir/personas/personas-caja_internet-comprobanteAbono.html',
    })


    .when('/pmoneda', {
      templateUrl: 'invertir/personas/personas-moneda.html',
    })
    .when('/pmoneda-compra', {
      templateUrl: 'invertir/personas/personas-moneda-compra.html',
    })
    .when('/pmoneda-comprainstruccion', {
      templateUrl: 'invertir/personas/personas-moneda-compraInstruccion.html',
    })
    .when('/pmoneda-ventas', {
      templateUrl: 'invertir/personas/personas-moneda-venta-intro.html',
    })
    .when('/pmoneda-venta', {
      templateUrl: 'invertir/personas/personas-moneda-venta.html',
    })
    .when('/pmoneda-sininstruir', {
      templateUrl: 'invertir/personas/personas-moneda-sinInstruir.html',
    })


    .when('/personas-acciones', {
      templateUrl: 'invertir/personas/personas-acciones.html',
    })
    .when('/personas-acciones-venta', {
      templateUrl: 'invertir/personas/personas-acciones-venta.html',
    })

    .when('/personas-acciones-compra', {
      templateUrl: 'invertir/personas/personas-acciones-compra.html',
    })

    //ASESORIA
    .when('/informes-persona', {
      templateUrl: 'asesoria/personas/informes-persona.html',
    })

    //servicios
    .when('/mapa', {
      templateUrl: 'servicios/personas/mapa.html',
    })

    .when('/transferencias-usd', {
      templateUrl: 'servicios/personas/transferencias-FFMM-USD.html',
    })

    .when('/transferencias-clp', {
      templateUrl: 'servicios/personas/transferencias-FFMM-CLP.html',
    })
    .when('/transferencias-privado-persona', {
      templateUrl: 'servicios/personas/transferencias-privado-persona.html',
    })
    .when('/transferencias-publico-persona', {
      templateUrl: 'contenido-publico/personas/productos-y-servicios/transferencias-publico-persona.html',
    })
    .when('/transferencia-internacional-persona', {
      templateUrl: 'servicios/personas/transferencia-internacional-persona.html',
    })
    .when('/transacciones-porInstruir-persona', {
      templateUrl: 'consultar/personas/personas-transacciones.html',
    })
    .when('/personas-transaccionesTransf', {
      templateUrl: 'servicios/personas/personas-transaccionesTransf.html',
    })

    //DEFINIR
    .when('/favoritos', {
      templateUrl: 'definir/personas/personas-favoritos.html',
    })
    .when('/persona-editar-beneficiario', {
      templateUrl: 'definir/personas/persona-editar-beneficiario.html',
    })
    .when('/marco-personal', {
      templateUrl: 'actualizacion/marco-personal.html',
    })
    .when('/beneficiario-personas', {
      templateUrl: 'definir/personas/personas-listado-beneficiario.html',
    })
    .when('/agregar-beneficiario-persona', {
      templateUrl: 'definir/personas/persona-agregar-beneficiario.html',
    })
    .when('/editar-beneficiario-persona', {
      templateUrl: 'definir/personas/persona-editar-beneficiario.html',
    })
    .when('/actualizacion-de-datos', {
      templateUrl: 'definir/personas/actualizacion-de-datos-personas.html',
    })
    .when('/mis-datos-resumen-editar', {
      templateUrl: 'definir/personas/mis-datos-resumen-editar-personas.html',
    })
    .when('/mis-datos-resumen', {
      templateUrl: 'definir/personas/mis-datos-resumen-personas.html',
    })
    //menu
    .when('/menu-consultar', {
      templateUrl: 'menu-consultar.html',
    })
    .when('/menu-invertir', {
      templateUrl: 'menu-invertir.html',
    })
    .when('/menu-definir', {
      templateUrl: 'menu-definir.html',
    })
    .when('/menu-asesoria', {
      templateUrl: 'menu-asesoria.html',
    })
    .when('/ux-login', {
      templateUrl: 'ux-login.html',
    })
    .when('/login-personas', {
      templateUrl: 'login-personas.html',
    })

    // NAVEGACION PUBLICA
    .when('/home-persona', {
      templateUrl: 'home-contenido/home-persona-contenido.html',
    })
    //Asesoría personalizada
    .when('/noticias', {
      templateUrl: 'contenido-publico/personas/asesoria-personalizada/noticias-personas.html',
    })
    .when('/noticias-destacadas', {
      templateUrl: 'contenido-publico/personas/asesoria-personalizada/noticias-destacada-personas.html',
    })
    .when('/trayectoria-excelencia', {
      templateUrl: 'contenido-publico/personas/reputacion-y-respaldo/trayectoria-excelencia.html',
    })
    .when('/premios-reconocimientos', {
      templateUrl: 'contenido-publico/personas/reputacion-y-respaldo/premios-reconocimientos.html',
    })
    .when('/depto-estudios', {
      templateUrl: 'contenido-publico/personas/asesoria-personalizada/depto-estudios.html',
    })
    .when('/bga', {
      templateUrl: 'contenido-publico/personas/asesoria-personalizada/bga.html',
    })
    .when('/depto-estudios', {
      templateUrl: 'contenido-publico/personas/asesoria-personalizada/depto-estudios.html',
    })
    .when('/informe-depto-01', {
      templateUrl: 'contenido-publico/personas/asesoria-personalizada/depto-estudios-informe01.html',
    })
    .when('/informe-depto-02', {
      templateUrl: 'contenido-publico/personas/asesoria-personalizada/depto-estudios-informe02.html',
    })
    .when('/bga', {
      templateUrl: 'contenido-publico/personas/asesoria-personalizada/bga.html',
    })


    //Productos y servicios
    .when('/fondos-mutuos-publico-persona', {
      templateUrl: 'contenido-publico/personas/productos-y-servicios/fondos-mutuos-publico-persona.html',
    })
    .when('/fondos-mutuos-detalle-publico', {
      templateUrl: 'contenido-publico/personas/detalle/fondos-mutuos-detalle-publico.html',
    })
    .when('/cartera-activa-publico-persona', {
      templateUrl: 'contenido-publico/personas/productos-y-servicios/cartera-activa-publico-persona.html',
    })
    .when('/cartera-activa-detalle-persona', {
      templateUrl: 'contenido-publico/personas/detalle/cartera-activa-detalle-persona.html',
    })
    .when('/acciones-home-publico-persona', {
      templateUrl: 'contenido-publico/personas/productos-y-servicios/acciones-home-publico-persona.html',
    })
    .when('/acciones-publico-persona', {
      templateUrl: 'contenido-publico/personas/productos-y-servicios/acciones-publico-persona.html',
    })
    .when('/moneda-publico-persona', {
      templateUrl: 'contenido-publico/personas/productos-y-servicios/moneda-publico-persona.html',
    })
    .when('/fondos-inversion-publico', {
      templateUrl: 'contenido-publico/personas/productos-y-servicios/fondos-inversion-publico.html',
    })
    .when('/renta-fija-publico', {
      templateUrl: 'contenido-publico/personas/productos-y-servicios/renta-fija-publico.html',
    })
    .when('/productos-derivados-publico', {
      templateUrl: 'contenido-publico/personas/productos-y-servicios/productos-derivados-publico.html',
    })
    .when('/mercado-extranjero-publico', {
      templateUrl: 'contenido-publico/personas/productos-y-servicios/mercado-extranjero-publico.html',
    })
    .when('/apv-publico-persona', {
      templateUrl: 'contenido-publico/personas/productos-y-servicios/apv-publico-persona.html',
    })

    //Reputacion y respaldo
    .when('/contactanos', {
      templateUrl: 'contenido-publico/personas/reputacion-y-respaldo/contactanos.html',
    })
    .when('/sucursales', {
      templateUrl: 'contenido-publico/personas/reputacion-y-respaldo/sucursales.html',
    })
    .when('/informacion-legal', {
      templateUrl: 'contenido-publico/personas/reputacion-y-respaldo/informacion-legal.html',
    })
    .when('/preguntas-frecuentes', {
      templateUrl: 'contenido-publico/personas/reputacion-y-respaldo/FAQ.html',
    })
    //email
    .when('/email', {
      templateUrl: 'email/email.html',
    })
    //iconos publico
    .when('/buscador-sitio', {
      templateUrl: 'contenido-publico/buscador-sitio.html',
    })
    .otherwise({
      redirectTo: '/home-persona'
    });
});
