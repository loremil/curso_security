banchileApp.controller('menuRouteCrtl-empresas', ['$scope', '$location', function($scope, $location) {
  $scope.currentNavItem = 'home-empresa';
  // $scope.template1 = 'menu-navegacion-empresas/empresas-menu-consultar.html';
  // $scope.template2 = 'menu-navegacion-empresas/empresas-menu-invertir.html';
  // $scope.template3 = 'menu-navegacion-empresas/empresas-menu-definir.html';
  // $scope.template4 = 'menu-navegacion-empresas/empresas-menu-asesoria.html';
  // $scope.template5 = 'menu-navegacion-empresas/home-empresa.html';
  $scope.template = $scope.template1;
  $scope.nombreSeccion = "home-contenido"
  $scope.changeMenu = function(template, name, location) {
    $scope.template = template;
    $scope.nombreSeccion = name;
    $location.path(ion);
    e.currentNavItem = location;
  }
}]);


banchileApp.config(function($routeProvider) {
  $routeProvider

    //CONSULTAR
    .when('/resumen', {
      templateUrl: 'consultar/empresas/empresas-resumen.html',
    })
    .when('/patrimonio', {
      templateUrl: 'consultar/empresas/empresas-patrimonio.html',
    })
    .when('/autorizaciones', {
      templateUrl: 'consultar/empresas/empresas-autorizaciones.html',
    })
    .when('/movimientos', {
      templateUrl: 'consultar/empresas/empresas-movimientos.html',
    })
    .when('/documentos', {
      templateUrl: 'consultar/empresas/empresas-documentos.html',
    })
    .when('/contrato-actualizacion', {
      templateUrl: 'consultar/empresas/contrato-actualizacion.html',
    })
    .when('/empresas-comprobante', {
      templateUrl: 'consultar/empresas/empresas-comprobante.html',
    })
    .when('/documentos', {
      templateUrl: 'consultar/empresas/empresas-documentos.html',
    })
    .when('/correcciones', {
      templateUrl: 'consultar/empresas/empresas-correcciones.html',
    })
    .when('/transacciones-porInstruir-empresas', {
      templateUrl: 'consultar/empresas/empresas-transacciones.html',
    })
    .when('/empresas-instrucciones', {
      templateUrl: 'consultar/empresas/empresas-instrucciones.html',
    })

    // DETALLE TABLAS

    .when('/detalle-cuenta', {
      templateUrl: 'detalle/detalle-cuenta-patrimonio.html',
    })
    .when('/detalle-cuenta-fm', {
      templateUrl: 'detalle/detalle-cuenta-fm.html',
    })
    .when('/detalle-cuenta-ca', {
      templateUrl: 'detalle/detalle-cuenta-ca.html',
    })


    // INVERTIR

    .when('/caja-internet', {
      templateUrl: 'invertir/empresas/empresas-caja_internet.html',
    })
    .when('/caja-abono', {
      templateUrl: 'invertir/empresas/empresas-caja_internet-abono.html',
    })
    .when('/caja-retiro', {
      templateUrl: 'invertir/empresas/empresas-caja_internet-retiro.html',
    })
    .when('/fondos-mutuos', {
      templateUrl: 'invertir/empresas/empresas-fondos-mutuos.html',
    })
    .when('/fondosmutuos-aporte-clp', {
      templateUrl: 'invertir/empresas/empresas-fondosmutuos--aporte--clp.html',
    })
    .when('/fondosmutuos-aporte-usd', {
      templateUrl: 'invertir/empresas/empresas-fondosmutuos--aporte--usd.html',
    })
    .when('/fondosmutuos-rescate', {
      templateUrl: 'invertir/empresas/empresas-fondosmutuos--rescate.html',
    })
    .when('/empresas-fondos-mutuos-ficha', {
      templateUrl: 'invertir/empresas/empresas-fondos-mutuos-ficha.html',
    })
    // comprobantes
    .when('/comprobante-01', {
      templateUrl: 'invertir/empresas/empresas-FFMM-comprobante-01.html',
    })
    .when('/comprobante-02', {
      templateUrl: 'invertir/empresas/empresas-FFMM-comprobante-02.html',
    })
    .when('/comprobante-03', {
      templateUrl: 'invertir/empresas/empresas-CA-comprobante-03.html',
    })
    .when('/comprobante-04', {
      templateUrl: 'invertir/empresas/empresas-CA-comprobante-04.html',
    })
    .when('/comprobante-05', {
      templateUrl: 'invertir/empresas/empresas-ventaACC-comprobante-05.html',
    })
    .when('/comprobante-06', {
      templateUrl: 'invertir/empresas/empresas-compraACC-comprobante-06.html',
    })
    .when('/comprobante-07', {
      templateUrl: 'invertir/empresas/empresas-ventaMX-comprobante-07.html',
    })
    .when('/comprobante-08', {
      templateUrl: 'invertir/empresas/empresas-compraMX-comprobante-08.html',
    })
    .when('/comprobante-09', {
      templateUrl: 'invertir/empresas/empresas-abonoCaja-comprobante-09.html',
    })
    .when('/comprobante-10', {
      templateUrl: 'invertir/empresas/empresas-retiroCaja-comprobante-10.html',
    })
    .when('/comprobante-11', {
      templateUrl: 'invertir/empresas/empresas-transferencia-comprobante-11.html',
    })
    .when('/comprobante-12', {
      templateUrl: 'invertir/empresas/empresas-caja_internet-comprobanteAbono.html',
    })

    .when('/moneda', {
      templateUrl: 'invertir/empresas/empresas-moneda.html',
    })
    .when('/moneda-compra', {
      templateUrl: 'invertir/empresas/empresas-moneda-compra.html',
    })
    .when('/empresas-moneda-comprainstruccion', {
      templateUrl: 'invertir/empresas/empresas-moneda-compraInstruccion.html',
    })
    .when('/moneda-venta', {
      templateUrl: 'invertir/empresas/empresas-moneda-venta.html',
    })
    .when('/moneda-sininstruir', {
      templateUrl: 'invertir/empresas/empresas-moneda-sinInstruir.html',
    })
    .when('/acciones', {
      templateUrl: 'invertir/empresas/empresas-acciones.html',
    })
    .when('/empresas-acciones-compra', {
      templateUrl: 'invertir/empresas/empresas-acciones-compra.html',
    })
    .when('/empresas-acciones-venta', {
      templateUrl: 'invertir/empresas/empresas-acciones-venta.html',
    })
    .when('/caja-abono', {
      templateUrl: 'invertir/empresas/empresas-caja_internet-abono.html',
    })
    .when('/caja-retiro', {
      templateUrl: 'invertir/empresas/empresas-caja_internet-retiro.html',
    })

    //ASESORIA
    .when('/informes-empresas', {
      templateUrl: 'asesoria/empresas/informes-empresas.html',
    })

    //SERVICIOS
    .when('/noticias-destacadas', {
      templateUrl: 'servicios/empresas/noticias-destacada-empresas.html',
    })
    .when('/transferencias-privado-empresa', {
      templateUrl: 'servicios/empresas/transferencias-privado-empresa.html',
    })

    .when('/banchilepay-USD', {
      templateUrl: 'servicios/empresas/banchilepay-USD.html',
    })
    .when('/banchilepay-CLP', {
      templateUrl: 'servicios/empresas/banchilepay-CLP.html',
    })
    .when('/banchilepay-Caja', {
      templateUrl: 'servicios/empresas/banchilepay-Caja.html',
    })
    .when('/banchilepay-sinInstruir', {
      templateUrl: 'servicios/empresas/banchilepay-sinInstruir.html',
    })
    .when('/banchilepay-Instruir', {
     templateUrl: 'servicios/empresas/banchilepay-Instruir.html',
     })
    .when('/banchilepay', {
      templateUrl: 'servicios/empresas/banchilepay.html',
    })
    .when('/transferencias-privado-empresas', {
      templateUrl: 'servicios/empresas/transferencias-privado-empresas.html',
    })
    .when('/transferencia-internacional-empresas', {
      templateUrl: 'servicios/empresas/transferencia-internacional-empresas.html',
    })
    .when('/transferencia-instruccionBanchilepay', {
      templateUrl: 'servicios/empresas/transferencia-instruccionBanchilepay.html',
    })

    //DEFINIR

    .when('/empresa', {
      templateUrl: 'definir/empresas/empresas-listado_empresas.html',
    })
    .when('/agregar-empresa', {
      templateUrl: 'definir/empresas/empresas-agregar_empresa.html',
    })
    .when('/editar-empresa', {
      templateUrl: 'definir/empresas/empresas-editar_empresa.html',
    })
    .when('/favoritos', {
      templateUrl: 'definir/empresas/empresas-favoritos.html',
    })
    .when('/usuario', {
      templateUrl: 'definir/empresas/empresas-listado-usuarios.html',
    })
    .when('/agregar-usuario', {
      templateUrl: 'definir/empresas/empresas-agregar-usuario.html',
    })
    .when('/editar-usuario', {
      templateUrl: 'definir/empresas/empresas-editar-usuario.html',
    })
    .when('/beneficiario', {
      templateUrl: 'definir/empresas/empresas-listado-beneficiario.html',
    })
    .when('/agregar-beneficiario', {
      templateUrl: 'definir/empresas/empresa-agregar-beneficiario.html',
    })
    .when('/editar-beneficiario', {
      templateUrl: 'definir/empresas/empresa-editar-beneficiario.html',
    })
    .when('/favoritos', {
      templateUrl: 'definir/empresas/empresas-favoritos.html',
    })
    .when('/sinaccesos', {
      templateUrl: 'definir/empresas/empresas-listado-sinPermisosdeAcceso.html',
    })
    .when('/visualizacion-de-datos', {
      templateUrl: 'definir/empresas/visualizacion-de-datos-empresas.html',
    })
    .when('/mis-datos-resumen-editar', {
      templateUrl: 'definir/empresas/mis-datos-resumen-editar-empresas.html',
    })
    .when('/mis-datos-resumen', {
      templateUrl: 'definir/empresas/mis-datos-resumen-empresas.html',
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

    //home
    .when('/home-empresa', {
      templateUrl: 'home-contenido/home-empresa-contenido.html',
    })

    //Asesoría personalizada
    .when('/noticias', {
      templateUrl: 'contenido-publico/empresas/asesoria-personalizada/noticias-empresas.html',
    })
    .when('/noticias-destacadas', {
      templateUrl: 'contenido-publico/empresas/asesoria-personalizada/noticias-destacada-empresas.html',
    })
    .when('/trayectoria-excelencia', {
      templateUrl: 'contenido-publico/empresas/reputacion-y-respaldo/trayectoria-excelencia.html',
    })
    .when('/premios-reconocimientos', {
      templateUrl: 'contenido-publico/empresas/reputacion-y-respaldo/premios-reconocimientos.html',
    })
    .when('/depto-estudios', {
      templateUrl: 'contenido-publico/empresas/asesoria-personalizada/depto-estudios.html',
    })
    .when('/bga', {
      templateUrl: 'contenido-publico/empresas/asesoria-personalizada/bga.html',
    })
    .when('/depto-estudios', {
      templateUrl: 'contenido-publico/empresas/asesoria-personalizada/depto-estudios.html',
    })
    .when('/informe-depto-01', {
      templateUrl: 'contenido-publico/empresas/asesoria-personalizada/depto-estudios-informe01.html',
    })
    .when('/informe-depto-02', {
      templateUrl: 'contenido-publico/empresas/asesoria-personalizada/depto-estudios-informe02.html',
    })
    .when('/bga', {
      templateUrl: 'contenido-publico/empresas/asesoria-personalizada/bga.html',
    })


    //Productos y servicios
    .when('/fondos-mutuos-publico-empresa', {
      templateUrl: 'contenido-publico/empresas/productos-y-servicios/fondos-mutuos-publico-empresa.html',
    })
    .when('/fondos-mutuos-detalle-publico', {
      templateUrl: 'contenido-publico/personas/detalle/fondos-mutuos-detalle-publico.html',
    })
    .when('/cartera-activa-publico-empresa', {
      templateUrl: 'contenido-publico/empresas/productos-y-servicios/cartera-activa-publico-empresa.html',
    })
    .when('/acciones-home-publico-empresa', {
      templateUrl: 'contenido-publico/empresas/productos-y-servicios/acciones-home-publico-empresa.html',
    })
    .when('/acciones-publico-empresa', {
      templateUrl: 'contenido-publico/empresas/productos-y-servicios/acciones-publico-empresa.html',
    })
    .when('/moneda-publico-empresa', {
      templateUrl: 'contenido-publico/empresas/productos-y-servicios/moneda-publico-empresa.html',
    })
    .when('/fondos-inversion-publico-empresa', {
      templateUrl: 'contenido-publico/empresas/productos-y-servicios/fondos-inversion-publico-empresa.html',
    })
    .when('/renta-fija-publico-empresa', {
      templateUrl: 'contenido-publico/empresas/productos-y-servicios/renta-fija-publico-empresa.html',
    })
    .when('/productos-derivados-publico-empresa', {
      templateUrl: 'contenido-publico/empresas/productos-y-servicios/productos-derivados-publico-empresa.html',
    })
    .when('/mercado-extranjero-publico-empresa', {
      templateUrl: 'contenido-publico/empresas/productos-y-servicios/mercado-extranjero-publico-empresa.html',
    })
    .when('/apv-publico-empresa', {
      templateUrl: 'contenido-publico/empresas/productos-y-servicios/apv-publico-empresa.html',
    })
    .when('/transferencias-publico-empresa', {
      templateUrl: 'contenido-publico/empresas/productos-y-servicios/transferencias-publico-empresa.html',
    })
    .when('/transferencias-privado-empresa', {
      templateUrl: 'servicios/empresas/transferencias-privado-empresa.html',
    })
    .when('/transacciones-porInstruir-empresas', {
      templateUrl: 'consultar/empresas/empresas-transacciones.html',
    })
    .when('/empresas-transaccionesTransf', {
      templateUrl: 'servicios/empresas/empresas-transaccionesTransf.html',
    })
    .when('/transferencia-persona', {
      templateUrl: 'servicios/empresas/transferencia-persona.html',
    })

    .when('/banchilepay-publico-empresa', {
      templateUrl: 'contenido-publico/empresas/productos-y-servicios/banchilepay-publico-empresa.html',
    })

    //Reputacion y respaldo

    .when('/contactanos', {
      templateUrl: 'contenido-publico/personas/reputacion-y-respaldo/contactanos.html',
    })

    .when('/sucursales', {
      templateUrl: 'contenido-publico/personas/reputacion-y-respaldo/sucursales.html',
    })
    .when('/informacion-legal', {
      templateUrl: 'contenido-publico/empresas/reputacion-y-respaldo/informacion-legal.html',
    })
    .when('/preguntas-frecuentes', {
      templateUrl: 'contenido-publico/empresas/reputacion-y-respaldo/FAQ.html',
    })
    //iconos publico
    .when('/buscador-sitio', {
      templateUrl: 'contenido-publico/buscador-sitio.html',
    })

    .otherwise({
      redirectTo: '/home-empresa'
    });
});
