//Fondos Mutuos PERSONAS
banchileApp.controller('tablaFFMM', function($scope) {
  //Color Variacion Acciones y Tendencias
  $scope.indicador =
    function(variacion) {
      if (variacion <= -0.01) {
        return "valor--td__rojo";
      }
      if (variacion >= 0.01) {
        return "valor--td__verde";
      }
      if (variacion == 0.0) {
        return "valor--td__amarillo";
      }
    }
  $scope.isDisabled = true;

  $scope.sort = '+';
  $scope.fondom = [{
    porcent: "",
    producto: "Europeo Estructurado Nivel 90",
    dias: "0,33%",
    ano: "0,33%",
    riesgo: "R4",
    cuota: "$30.985",
    monto: "$2.005.000"
  }, ];
  $scope.fondousd = [{
    porcent: "",
    producto1: "Cash",
    dias1: "0,33%",
    ano1: "0,33%",
    riesgo: "R4",
    cuota1: "$30.985",
    monto1: "$2.005.000"
  }, ];
  $scope.moneda = [

    {
      porcent: "",
      producto: "Corporate Dollar Serie A",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R1",
      cuota: "$30.985",
      monto: "$2.005.000"
    },
    {
      porcent: "",
      producto: "Cash Corp C",
      dias: "0,35%",
      ano: "0,35%",
      riesgo: "R2",
      cuota: "$24.678",
      monto: "$233.324.000"
    },
    {
      porcent: "",
      producto: "Estructurado Europeo Desarrollada Nivel 100 Serie C",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985",
      monto: "$2.005.000"
    },

  ];
  $scope.bpayclp = [

    {
      producto: "Cash",
      monto: "$233.324.000"
    },

  ];
  $scope.bpayusd = [

    {

      producto: "Corporate Dollar ",
      monto: "$2.005.000"
    },

  ];
  $scope.acciones = [{
      serie: "ANTARCHILE",
      variacion: 2.63,
      precio: "$6.665,80",
      monto: "$2.345.678"
    },
    {
      serie: "LATAM",
      variacion: -10.73,
      precio: "$1.517,73",
      monto: "$2.099.876"
    },
    {
      serie: "CENCOSUD",
      variacion: -0.22,
      precio: "$9.180,10",
      monto: "$10.987.654"
    },
    {
      serie: "BSANTANDER",
      variacion: 67.47,
      precio: "$9.854,77",
      monto: "$67.876.543"
    },
    {
      serie: "ORO BLANCO",
      variacion: 0.48,
      precio: "$4.895,55",
      monto: "$345.678"
    },

  ];
  $scope.fondomRecomend = [

    {
      porcent: "",
      producto: "Europeo Estructurado Nivel 90",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "",
      monto: ""
    }, {
      porcent: "",
      producto: "Inversionista Calificado Acciones Nacionales",
      dias: "0,67%",
      ano: "0,67%",
      riesgo: "R5",
      cuota: "",
      monto: ""
    }

  ];
  $scope.fondomRecomend2 = [

    {
      porcent: "",
      producto: "Corporate Dollar serie A / Cuenta 1",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "",
      monto: ""
    }, {
      porcent: "",
      producto: "Corporate Dollar serie A / Cuenta 2",
      dias: "0,67%",
      ano: "0,67%",
      riesgo: "R5",
      cuota: "",
      monto: ""
    }

  ];
  $scope.fondoInmobiliario = [{
      producto: "Banchile Minero Asset Chile",
      dias: -10.33,
      tendenciaDias: "S",
      meses: 0.0,
      tendenciaMeses: "B",
      ano: -0.01,
      tendenciaAno: "B",
      valor: "$5.018.293",
    },
    {
      producto: "Rentas Habitacionales",
      dias: 0.33,
      tendenciaDias: "S",
      meses: 2.01,
      tendenciaMeses: "S",
      ano: -3.12,
      tendenciaAno: "S",
      valor: "$1.517,73",
    },
    {
      producto: "Banchile Inmobiliario VI",
      dias: 5.19,
      tendenciaDias: "S",
      meses: 5.88,
      tendenciaMeses: "S",
      ano: -5.56,
      tendenciaAno: "B",
      valor: "$1.517,735",
    },
    {
      producto: "Banchile Inmobiliario VII",
      dias: -0.15,
      tendenciaDias: "B",
      meses: 0.3,
      tendenciaMeses: "B",
      ano: 3.31,
      tendenciaAno: "S",
      valor: "$9.180,100",
    },
    {
      producto: "Banchile Plusvalía Eficiente",
      dias: -6.57,
      tendenciaDias: "S",
      meses: -1.33,
      tendenciaMeses: "B",
      ano: 0.00,
      tendenciaAno: "B",
      valor: "$2.000.000",
    },
    {
      producto: "Banchile Rentas Inmobiliarias I",
      dias: 31.17,
      tendenciaDias: "B",
      meses: -33.15,
      tendenciaMeses: "B",
      ano: 0.00,
      tendenciaAno: "S",
      valor: "$9.854,771 ",
    },
    {
      producto: "Banchile Rentas Inmobiliarias I",
      dias: 4.91,
      tendenciaDias: "S",
      meses: 0.0,
      tendenciaMeses: "B",
      ano: 2.85,
      tendenciaAno: "S",
      valor: "$9.300,000 ",
    },
  ];
  $scope.fondoMobiliario = [{
      producto: "Chile Small Cap",
      dias: 0.33,
      tendenciaDias: "S",
      meses: 2.01,
      tendenciaMeses: "S",
      ano: -3.12,
      tendenciaAno: "S",
      valor: "$1.517,73",
    },
    {
      producto: "Latam Corporate High Yield",
      dias: -10.33,
      tendenciaDias: "S",
      meses: 0.0,
      tendenciaMeses: "B",
      ano: -0.01,
      tendenciaAno: "B",
      valor: "$5.018.293",
    },
    {
      producto: "Chile Blend",
      dias: -0.15,
      tendenciaDias: "B",
      meses: 0.3,
      tendenciaMeses: "B",
      ano: 3.31,
      tendenciaAno: "S",
      valor: "$9.180,100",
    },
    {
      producto: "Deuda Chilena",
      dias: 5.19,
      tendenciaDias: "S",
      meses: 5.88,
      tendenciaMeses: "S",
      ano: -5.56,
      tendenciaAno: "B",
      valor: "$1.517,735",
    },
    {
      producto: "Deuda Corporativa 3-5 años",
      dias: 31.17,
      tendenciaDias: "B",
      meses: -33.15,
      tendenciaMeses: "B",
      ano: 0.00,
      tendenciaAno: "S",
      valor: "$9.854,771 ",
    },
    {
      producto: "Deuda Global",
      dias: -6.57,
      tendenciaDias: "S",
      meses: -1.33,
      tendenciaMeses: "B",
      ano: 0.00,
      tendenciaAno: "B",
      valor: "$2.000.000",
    },
    {
      producto: "Emerging Equity",
      dias: 4.91,
      tendenciaDias: "S",
      meses: 0.0,
      tendenciaMeses: "B",
      ano: 2.85,
      tendenciaAno: "S",
      valor: "$9.300,000 ",
    },
    {
      producto: "Estrategias Alternativas",
      dias: 31.17,
      tendenciaDias: "B",
      meses: -33.15,
      tendenciaMeses: "B",
      ano: 0.00,
      tendenciaAno: "S",
      valor: "$9.854,771 ",
    },
    {
      producto: "Europe Equity",
      dias: 4.91,
      tendenciaDias: "S",
      meses: 0.0,
      tendenciaMeses: "B",
      ano: 2.85,
      tendenciaAno: "S",
      valor: "$9.300,000 ",
    },
    {
      producto: "Latam Small Mid Cap",
      dias: 5.19,
      tendenciaDias: "S",
      meses: 5.88,
      tendenciaMeses: "S",
      ano: -5.56,
      tendenciaAno: "B",
      valor: "$1.517,735",
    },
    {
      producto: "MarketPlus Estados Unidos",
      dias: -10.33,
      tendenciaDias: "S",
      meses: 0.0,
      tendenciaMeses: "B",
      ano: -0.01,
      tendenciaAno: "B",
      valor: "$5.018.293",
    },
    {
      producto: "MarketPlus Global",
      dias: 0.33,
      tendenciaDias: "S",
      meses: 2.01,
      tendenciaMeses: "S",
      ano: -3.12,
      tendenciaAno: "S",
      valor: "$1.517,73",
    },
    {
      producto: "USA Equity",
      dias: -6.57,
      tendenciaDias: "S",
      meses: -1.33,
      tendenciaMeses: "B",
      ano: 0.00,
      tendenciaAno: "B",
      valor: "$2.000.000",
    },
  ];
  $scope.cartera = [

    {
      porcent: "15%",
      producto: "Capital efectivo",
      cuenta: "1",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985",
      cantidad: "14.601",
      monto: "$600.000"
    }, {
      porcent: "15%",
      producto: "Cash Serie C",
      cuenta: "2",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985",
      cantidad: "14.601",
      monto: "$600.000"
    }, {
      porcent: "15%",
      producto: "Europa Desarrollada nivel 10",
      cuenta: "3",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985",
      cantidad: "14.601",
      monto: "$600.000"
    }
  ];

  $scope.carteraActiva = [{
      producto: "Cartera Protegida",
      dias: "0,33%",
      monto: "",
      rfrv:"assets/images/svg/CA/barra100.svg"
    }, {
      producto: "Cartera Defensiva",
      dias: "0,33%",
      monto: "",
      rfrv:"assets/images/svg/CA/barra100.svg"
    },{
      producto: "Cartera Controlada",
      dias: "0,33%",
      monto: "",
      rfrv:"assets/images/svg/CA/barra10020.svg"
    },
    {
      producto: "Cartera Moderada",
      dias: "0,33%",
      monto: "",
      rfrv:"assets/images/svg/CA/barra6040.svg"
    },
    {
      producto: "Cartera Equilibrada",
      dias: "0,33%",
      monto: "",
      rfrv:"assets/images/svg/CA/barra4060.svg"
    },
    {
      producto: "Cartera Potenciada",
      dias: "0,33%",
      monto: "",
      rfrv:"assets/images/svg/CA/barra2080.svg"
    },
  ];
  $scope.carteraActivaCuenta = [{
    producto: "Cartera Agresiva",
    dias: "0,33%",
    monto: "$100.117.000.000",
     rfrv:"assets/images/svg/CA/barra0100.svg"
  }];

  $scope.cuentaActiva = [{
      cuenta: "Cuenta 1",
      dias: "",
      monto: "$17.000.000"
    }, {
      cuenta: "Cuenta 2",
      dias: "",
      monto: "$100.000.000"
    },

  ];

  $scope.MiCartera = [{
      producto: "Cartera Controlada",
      dias: "0,33%",
      monto: "$117.000.000",
    },

  ];
  $scope.todosFondos = [

    {
      porcent: "",
      producto: "Europeo Estructurado Nivel 90",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985"
    }, {
      porcent: "",
      producto: "Inversionista Calificado Acciones Nacionales",
      dias: "0,67%",
      ano: "0,67%",
      riesgo: "R5",
      cuota: "$24.678"
    }

  ];
  $scope.monedaExtPrincipales = [

    {
      moneda: "USD/CLP",
      paridad: "$649,15",
      variacion: 91.47,
      hora: "18:47:53",
      tendencia: "S"
    },
    {
      moneda: "EUR/USD",
      paridad: "1,1753",
      variacion: 0.32,
      hora: "18:47:53",
      tendencia: "B"
    },
  ];
  $scope.monedaExtSecundarias = [

      {
        moneda: "USD/BRL",
        paridad: "3,1220",
        variacion: 1.54,
        hora: "18:47:53",
        tendencia: "B"
    },
    {
        moneda: "USD/JPY",
        paridad: "110,3420",
        variacion: 21.20,
        hora: "18:47:53",
        tendencia: "B"
    },
    {
        moneda: "GBP/USD",
        paridad: "1,2991",
        variacion: 0.00,
        hora: "18:47:53",
        tendencia: "B"
    },
    {
        moneda: "AUD/USD",
        paridad: "0,7912",
        variacion: 7.93,
        hora: "18:47:53",
        tendencia: "S"
    },
    {
        moneda: "USD/CNY",
        paridad: "6,7064",
        variacion: 3.00,
        hora: "18:47:53",
        tendencia: "S"
    },
    {
        moneda: "USD/ARS",
        paridad: "17,6960",
        variacion: 51.45,
        hora: "18:47:53",
        tendencia: "S"
    },
    {
        moneda: "USD/MXN",
        paridad: "17,8442",
        variacion: 91.47,
        hora: "18:47:53",
        tendencia: "S"
    },
    {
        moneda: "USD/CAD",
        paridad: "1,2668",
        variacion: 4.09,
        hora: "18:47:53",
        tendencia: "S"
    },
  ];
  $scope.monedaExt = [

    {
      moneda: "USD/CLP",
      paridad: "$649,15",
      variacion: 91.47,
      hora: "18:47:53",
      tendencia: "S"
    },
    {
      moneda: "EUR/USD",
      paridad: "1,1753",
      variacion: 0.32,
      hora: "18:47:53",
      tendencia: "B"
    },
    {
        moneda: "USD/BRL",
        paridad: "3,1220",
        variacion: 1.54,
        hora: "18:47:53",
        tendencia: "B"
    },
    {
        moneda: "USD/JPY",
        paridad: "110,3420",
        variacion: 21.20,
        hora: "18:47:53",
        tendencia: "B"
    },
    {
        moneda: "GBP/USD",
        paridad: "1,2991",
        variacion: 0.00,
        hora: "18:47:53",
        tendencia: "B"
    },
    {
        moneda: "AUD/USD",
        paridad: "0,7912",
        variacion: 7.93,
        hora: "18:47:53",
        tendencia: "S"
    },
    {
        moneda: "USD/CNY",
        paridad: "6,7064",
        variacion: 3.00,
        hora: "18:47:53",
        tendencia: "S"
    },
    {
        moneda: "USD/ARS",
        paridad: "17,6960",
        variacion: 51.45,
        hora: "18:47:53",
        tendencia: "S"
    },
    {
        moneda: "USD/MXN",
        paridad: "17,8442",
        variacion: 91.47,
        hora: "18:47:53",
        tendencia: "S"
    },
    {
        moneda: "USD/CAD",
        paridad: "1,2668",
        variacion: 4.09,
        hora: "18:47:53",
        tendencia: "S"
    },
  ];
  $scope.accionesCartera = [{
      serie: "ANTARCHILE",
      precio: "$9.300,000",
      variacion: -0.05,
      cantidad: "400",
      gananciaPerdida: "-$5.678",
      monto: "$2.345.678,201",
      tendencia: "S"
    },
    {
      serie: "CENCOSUD",
      precio: "$1.517,735",
      variacion: 10.73,
      cantidad: "28",
      gananciaPerdida: "+$29,876",
      monto: "$2.099.876",
      tendencia: "B"
    },
    {
      serie: "LTM",
      precio: "$9.180,100",
      variacion: -0.0,
      cantidad: "130",
      gananciaPerdida: "+$87,654",
      monto: "$10.987.654,503",
      tendencia: "B"
    },
    {
      serie: "BSANTANDER",
      precio: "$9.854,771",
      variacion: 91.47,
      cantidad: "40",
      gananciaPerdida: "-$76.543,210",
      monto: "$67.876.543,340",
      tendencia: "B"
    },
    {
      serie: "ORO BLANCO",
      precio: "$1.517,73",
      variacion: -10.73,
      cantidad: "28",
      gananciaPerdida: "+$29.876",
      monto: "$2.099.876,109",
      tendencia: "S"
    },
  ];
  $scope.accionesResumen = [{
      serie: "LATAM",
      precio: "$1.517,73",
      variacion: 10.73,
      tendencia: "S"
    },
    {
      serie: "CENCOSUD",
      precio: "$9.180,10",
      variacion: 0.22,
      tendencia: "S"
    },
    {
      serie: "BSANTANDER",
      precio: "$9.854,77",
      variacion: 21.47,
      tendencia: "B"
    },
    {
      serie: "ORO BLANCO",
      precio: "$4.895,55",
      variacion: 0.40,
      tendencia: "B"
    },
    {
      serie: "ANTARCHILE",
      precio: "$6.665,80",
      variacion: 0,
      tendencia: "B"

    },
    {
      serie: "SQM-B",
      precio: "$28.500,00",
      variacion: -0.38,
      tendencia: "S"
    },
    {
      serie: "CONCHATORO",
      precio: "$1.067,00",
      variacion: -0.19,
      tendencia: "S"
    },
    {
      serie: "MULTIFOODS",
      precio: "$226,10",
      variacion: -0.23,
      tendencia: "S"
    },
  ];
  $scope.accionesIndicadores = [{
      serie: "LATAM",
      precio: "$1.517,73",
      variacion: 10.73,
      tendencia: "S"
    },
    {
      serie: "CENCOSUD",
      precio: "$9.180,10",
      variacion: 0.22,
      tendencia: "S"
    },
    {
      serie: "BSANTANDER",
      precio: "$9.854,77",
      variacion: 21.47,
      tendencia: "B"
    },
    {
      serie: "ORO BLANCO",
      precio: "$4.895,55",
      variacion: 0.40,
      tendencia: "B"
    },
    {
      serie: "ANTARCHILE",
      precio: "$6.665,80",
      variacion: 0,
      tendencia: "B"

    },
    {
      serie: "SQM-B",
      precio: "$28.500,00",
      variacion: -0.38,
      tendencia: "S"
    },
    {
      serie: "CONCHATORO",
      precio: "$1.067,00",
      variacion: -0.19,
      tendencia: "S"
    },
    {
      serie: "CONCHATORO",
      precio: "$1.067,00",
      variacion: -0.19,
      tendencia: "S"
    },
    {
      serie: "CONCHATORO",
      precio: "$1.067,00",
      variacion: -0.19,
      tendencia: "S"
    },
    {
      serie: "MULTIFOODS",
      precio: "$226,10",
      variacion: -0.23,
      tendencia: "S"
    },
  ];
  $scope.etfMarketvectors = [{
      nombre: "Market Vectors Agribusiness ETF",
      nemotecnico: "MOO",
    },
    {
      nombre: "Market Vectors Brazil Small-Cap ETF",
      nemotecnico: "BRF",
    },
    {
      nombre: "Market Vectors China ETF",
      nemotecnico: "PEK",
    },
    {
      nombre: "Market Vectors Coal ETF",
      nemotecnico: "KOL",
    },
    {
      nombre: "Market Vectors Colombia ETF",
      nemotecnico: "COLX",
    },
    {
      nombre: "Market Vectors Egypt Index ETF",
      nemotecnico: "EGPT",
    },
    {
      nombre: "Market Vectors Emerging Markets Local Currency Bond ETF",
      nemotecnico: "EMLC",
    },
    {
      nombre: "Market Vectors Germany Small-Cap ETF",
      nemotecnico: "GERJ",
    },
    {
      nombre: "Market Vectors Global Alternative Energy ETF",
      nemotecnico: "GEX",
    },
    {
      nombre: "Market Vectors Gold Miners ETF",
      nemotecnico: "GDX",
    },
    {
      nombre: "Market Vectors India Small-Cap Index ETF",
      nemotecnico: "SCIF",
    },
    {
      nombre: "Market Vectors Indonesia Index ETF",
      nemotecnico: "IDX",
    },
    {
      nombre: "Market Vectors Junior Gold Miners ETF",
      nemotecnico: "GDXJ",
    },
    {
      nombre: "Market Vectors LatAm Aggregate Bond ETF",
      nemotecnico: "BONO",
    },
    {
      nombre: "Market Vectors Latin America Small-Cap Index ETF",
      nemotecnico: "LATM",
    },
    {
      nombre: "Market Vectors Poland ETF",
      nemotecnico: "PLND",
    },
    {
      nombre: "Market Vectors Rare Earth/Strategic Metals ETF",
      nemotecnico: "REMX",
    },
    {
      nombre: "Market Vectors Russia ETF",
      nemotecnico: "RSX",
    },
    {
      nombre: "Market Vectors Russia Small-Cap ETF",
      nemotecnico: "RSXJ",
    },
    {
      nombre: "Market Vectors RVE Hard Assets Producers ETF",
      nemotecnico: "HAP",
    },
    {
      nombre: "Market Vectors Steel ETF",
      nemotecnico: "SLX",
    },
    {
      nombre: "Market Vectors Uranium+ Nuclear Energy ETF",
      nemotecnico: "NLR",
    },
    {
      nombre: "Market Vectors Vietnam ETF",
      nemotecnico: "VNM",
    },
  ];
  $scope.etfIshares = [{
      nombre: "iBoxx $ High Yield Corporate Bond Fund",
      nemotecnico: "HYG",
      tipo: "Renta fija",
      categoria: "Estados Unidos",
    },
    {
      nombre: "iBoxx $ Investment Grade Corporate Bond Fund",
      nemotecnico: "LQD",
      tipo: "Renta fija",
      categoria: "Estados Unidos",
    },
    {
      nombre: "Barclays Short Treasury Bond Fund",
      nemotecnico: "SHV",
      tipo: "Renta fija",
      categoria: "Estados Unidos",
    },
    {
      nombre: "Barclays 1-3 Year Treasury Bond Fund",
      nemotecnico: "SHY",
      tipo: "Renta fija",
      categoria: "Estados Unidos",
    },
    {
      nombre: "Barclays TIPS Bond Fund",
      nemotecnico: "TIP",
      tipo: "Renta fija",
      categoria: "Estados Unidos",
    },
    {
      nombre: "Gold Trust",
      nemotecnico: "IAU",
      tipo: "Materias primas",
      categoria: "Materias primas",
    },
    {
      nombre: "Silver Trust",
      nemotecnico: "SLV",
      tipo: "Materias primas",
      categoria: "Materias primas",
    },
    {
      nombre: "MSCI All Country Asia ex Japan Index Fund",
      nemotecnico: "AAXJ",
      tipo: "Renta variable",
      categoria: "Mercado",
    },
    {
      nombre: "MSCI All Country Asia ex Japan Index Fund",
      nemotecnico: "AAXJ",
      tipo: "Renta variable",
      categoria: "Mercado",
    },
    {
      nombre: "MSCI All Country Asia ex Japan Index Fund",
      nemotecnico: "AAXJ",
      tipo: "Renta variable",
      categoria: "Mercado",
    },
  ];
  $scope.accionesNorteamerica = [{
      nombre: "Alcoa Inc",
      nemotecnico: "AA US Equity",
    },
    {
      nombre: "Apple",
      nemotecnico: "AAPL US Equity",
    },
    {
      nombre: "Abbot Laboratories",
      nemotecnico: "ABT US Equity",
    },
    {
      nombre: "Automatic Data Processing",
      nemotecnico: "ADP US Equity",
    },
    {
      nombre: "American International Group",
      nemotecnico: "AIG US Equity",
    },
    {
      nombre: "Amgem Inc",
      nemotecnico: "AMGN US Equity",
    },
    {
      nombre: "Amazon.com Inc",
      nemotecnico: "AMZN US Equity",
    },
    {
      nombre: "Avon Products Inc",
      nemotecnico: "AVP US Equity",
    },
    {
      nombre: "American Express CO",
      nemotecnico: "AXP US Equity",
    },
    {
      nombre: "Boeing CO/THE",
      nemotecnico: "BA US Equity",
    },
  ];
  // $scope.accionesHome = [
  //
  //     {
  //         porcent: "",
  //         serie: "CENCOSUD",
  //         precio: "$1.517,73",
  //         variacion: "+$10,73",
  //         cantidad: "28",
  //         ganancia: "$29.876"
  //         monto: "$2.099.876"
  //     }, {
  //         porcent: "",
  //         producto: "Inversionista Calificado Acciones Nacionales",
  //         dias: "0,67%",
  //         ano: "0,67%",
  //         riesgo: "R5",
  //         cuota: "$24.678"
  //     }
  //
  // ];

  for (var i = 0; i < $scope.accionesCartera.length; i++) {
    if ($scope.accionesCartera[i].tendencia == 'S') {
      $scope.accionesCartera[i].icono = '&#xE5C7;';
    } else if ($scope.accionesCartera[i].tendencia == 'B') {
      $scope.accionesCartera[i].icono = "&#xE5C5;";
    }
  }

});
//Fondos Mutuos PERSONAS
