(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51950fde"],{"408a":function(e,n,a){var t=a("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=t(e))throw TypeError("Incorrect invocation");return+e}},6724:function(e,n,a){"use strict";a("8d41");var t="@@wavesContext";function r(e,n){function a(a){var t=Object.assign({},n.value),r=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},t),i=r.ele;if(i){i.style.position="relative",i.style.overflow="hidden";var o=i.getBoundingClientRect(),c=i.querySelector(".waves-ripple");switch(c?c.className="waves-ripple":(c=document.createElement("span"),c.className="waves-ripple",c.style.height=c.style.width=Math.max(o.width,o.height)+"px",i.appendChild(c)),r.type){case"center":c.style.top=o.height/2-c.offsetHeight/2+"px",c.style.left=o.width/2-c.offsetWidth/2+"px";break;default:c.style.top=(a.pageY-o.top-c.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",c.style.left=(a.pageX-o.left-c.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return c.style.backgroundColor=r.color,c.className="waves-ripple z-active",!1}}return e[t]?e[t].removeHandle=a:e[t]={removeHandle:a},a}var i={bind:function(e,n){e.addEventListener("click",r(e,n),!1)},update:function(e,n){e.removeEventListener("click",e[t].removeHandle,!1),e.addEventListener("click",r(e,n),!1)},unbind:function(e){e.removeEventListener("click",e[t].removeHandle,!1),e[t]=null,delete e[t]}},o=function(e){e.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(o)),i.install=o;n["a"]=i},"754d":function(e,n,a){"use strict";a.d(n,"h",(function(){return O})),a.d(n,"f",(function(){return D})),a.d(n,"i",(function(){return v})),a.d(n,"g",(function(){return E})),a.d(n,"m",(function(){return j})),a.d(n,"l",(function(){return y})),a.d(n,"b",(function(){return w})),a.d(n,"c",(function(){return C})),a.d(n,"a",(function(){return S})),a.d(n,"k",(function(){return q})),a.d(n,"d",(function(){return A})),a.d(n,"e",(function(){return N})),a.d(n,"j",(function(){return B}));var t=a("8785"),r=a("9530"),i=a.n(r);function o(){var e=Object(t["a"])(['\n    query ($fechaInicio: timestamp!, $fechaFin: timestamp!){\n      Usuario_OT(where: {Inscripcions: {FechaInscr: {_gte: $fechaInicio, _lte: $fechaFin}, Libro: {OID: {_eq: 28}}}, OrdenTrabajo_Detalle: {Avaluo: {_gt: "0"}}}) {\n        OrdenTrabajo_Detalle {\n          OrdenTrabajo_Cabecera {\n            NroOrden\n            OrdenTrabajo_Detalles(where: {Avaluo: {_gt: "0"}}) {\n              Avaluo\n              AmountInvoiced\n              TipoTramite{\n                DscaTipoTramite\n              }\n            }\n          }\n        }\n        Inscripcions(where: {Libro: {OID: {_eq: 28}}}) {\n          OID\n          FechaInscr\n          FechaOtorga\n          NroRepertorio\n          NroInscripcion\n          Cuantia\n          Libro {\n            DscaLibro\n          }\n          Acto {\n            DescActo\n          }\n          Partes_Inscrps {\n            FullName\n            Papel {\n              DscaPapel\n            }\n            Cliente {\n              CedRuc\n            }\n          }\n          Bienes_Inscrps {\n            Ficha_Registral {\n              CodCatastro\n            }\n          }\n        }\n      }\n    }\n  ']);return o=function(){return e},e}function c(){var e=Object(t["a"])(["\n  query ($OID: [Int!]){\n    OrdenTrabajo_Detalle (where:{OID:{_in: $OID}}){\n      TipoServicio {\n          TpServicio\n        }\n        TipoTramite {\n          DscaTipoTramite\n        }\n        StatusOT\n        CreadoEn\n        FechaInscripcion\n        FechaInicioTrabajo\n        FechaEstimadaEntrega\n        FechaPospuestaEntrega\n        FechaRealEntrega\n        Avaluo\n        AmountInvoiced\n        FojasAdc\n        Cantidad\n        usuarioByCreadopor {\n          Nombres\n          Apellidos\n        }\n        Usuario_OTs{\n        FechaFinalizacion\n        }\n        OrdenTrabajo_Cabecera {\n          NroOrden\n          Estado\n          clienteByClientefactura {\n            Nombres\n            Apellidos\n          }\n        }\n    }\n  }\n  "]);return c=function(){return e},e}function s(){var e=Object(t["a"])(["\n  query($fechaInicio: String!, $fechaFin: String!, $status: [Int]){\n    detalles_excel(fechaFin: $fechaFin, fechaInicio: $fechaInicio, status: $status){\n      Nro\n      TpServicio\n      fRegistro\n      Etarea\n      Asignado\n      tpTramite\n      NroOrden\n      FEfin\n      Observacion\n      CreadoEn\n      FInscripcion\n      FInicioTrabajo\n      FPostpuestaEntrega\n      FRealEntrega\n      Avaluo\n      Monto\n      FojasAdc\n      Cantidad\n      CreadoPor\n      FFinalizacion\n      ExcentoCobro\n      OrdenGubernamental\n      EstadoOrden\n      Cliente\n      Empresa\n      RepLegal\n      TerceraEdad\n      Discapacidad\n    }\n  }\n  "]);return s=function(){return e},e}function u(){var e=Object(t["a"])(["\nquery ($fechaInicio: timestamp!, $fechaFin: timestamp!, $limit: Int!, $offset: Int!, $status: [Int!], $departamento: String, $usuario: String!) {\n  OrdenTrabajo_Detalle(where: {StatusOT: {_in: $status}, usuarioByIduserasignado: {_or: [{Nombres: {_ilike: $usuario}}, {Apellidos: {_ilike: $usuario}}], Departamento: {IdDpto: {_ilike: $departamento}}}, Usuario_OTs: {FechaInicio: {_gte: $fechaInicio, _lte: $fechaFin}}}, limit: $limit, offset: $offset) {\n    TipoServicio {\n      TpServicio\n    }\n    TipoTramite {\n      DscaTipoTramite\n    }\n    StatusOT\n    CreadoEn\n    FechaInscripcion\n    FechaInicioTrabajo\n    FechaEstimadaEntrega\n    FechaPospuestaEntrega\n    FechaRealEntrega\n    Avaluo\n    AmountInvoiced\n    FojasAdc\n    Cantidad\n    usuarioByIduserasignado {\n      Nombres\n      Apellidos\n    }\n    usuarioByCreadopor {\n      Nombres\n      Apellidos\n    }\n    Usuario_OTs {\n      FechaRegistro\n      FechaInicio\n      FechaFinalizacion\n    }\n    OrdenTrabajo_Cabecera {\n      ExcentoCobro\n      OrdenGubernamental\n      NroOrden\n      Estado\n      clienteByClientefactura {\n        NombreEmpresa\n        RepresentanteLegal\n        TerceraEdad\n        Nombres\n        Apellidos\n        DiscapacidadValidaParaDescuento\n      }\n    }\n    Observacion\n  }\n  OrdenTrabajo_Detalle_aggregate(where: {StatusOT: {_in: $status}, usuarioByIduserasignado: {_or: [{Nombres: {_ilike: $usuario}}, {Apellidos: {_ilike: $usuario}}], Departamento: {IdDpto: {_ilike: $departamento}}}, Usuario_OTs: {FechaInicio: {_gte: $fechaInicio, _lte: $fechaFin}}}) {\n    aggregate {\n      count\n    }\n  }\n}\n  "]);return u=function(){return e},e}function l(){var e=Object(t["a"])(["\nquery ($fechaInicio: timestamp!, $fechaFin: timestamp!, $limit: Int!, $offset: Int!, $status: [Int!], $departamento: String, $usuario: String!) {\n  OrdenTrabajo_Detalle(where: {StatusOT: {_in: $status}, usuarioByIduserasignado: {_or: [{Nombres: {_ilike: $usuario}}, {Apellidos: {_ilike: $usuario}}], Departamento: {IdDpto: {_ilike: $departamento}}}, Usuario_OTs: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}}}, limit: $limit, offset: $offset) {\n    TipoServicio {\n      TpServicio\n    }\n    TipoTramite {\n      DscaTipoTramite\n    }\n    StatusOT\n    CreadoEn\n    FechaInscripcion\n    FechaInicioTrabajo\n    FechaEstimadaEntrega\n    FechaPospuestaEntrega\n    FechaRealEntrega\n    Avaluo\n    AmountInvoiced\n    FojasAdc\n    Cantidad\n    usuarioByIduserasignado {\n      Nombres\n      Apellidos\n    }\n    usuarioByCreadopor {\n      Nombres\n      Apellidos\n    }\n    Usuario_OTs {\n      FechaRegistro\n      FechaFinalizacion\n    }\n    OrdenTrabajo_Cabecera {\n      ExcentoCobro\n      OrdenGubernamental\n      NroOrden\n      Estado\n      clienteByClientefactura {\n        NombreEmpresa\n        RepresentanteLegal\n        TerceraEdad\n        Nombres\n        Apellidos\n        DiscapacidadValidaParaDescuento\n      }\n    }\n    Observacion\n  }\n  OrdenTrabajo_Detalle_aggregate(where: {StatusOT: {_in: $status}, usuarioByIduserasignado: {_or: [{Nombres: {_ilike: $usuario}}, {Apellidos: {_ilike: $usuario}}], Departamento: {IdDpto: {_ilike: $departamento}}}, Usuario_OTs: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}}}) {\n    aggregate {\n      count\n    }\n  }\n}\n  "]);return l=function(){return e},e}function d(){var e=Object(t["a"])(["\n  subscription ($fechaInicio: timestamp, $fechaFin: timestamp, $departamento: String!) {\n  Usuario(where: {Departamento: {IdDpto: {_ilike: $departamento}}, usuarioOtsByIduserasignado: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}}}) {\n    Nombres\n    Apellidos\n  \n    porFirmar: usuarioOtsByIduserasignado_aggregate(where: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {OrdenTrabajo_Cabecera: {Estado: {_eq: 5}}}}) {\n      aggregate {\n        count\n      }\n    }\n    completado: usuarioOtsByIduserasignado_aggregate(where: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {OrdenTrabajo_Cabecera: {Estado: {_eq: 7}}}}) {\n      aggregate {\n        count\n      }\n    }\n    total: usuarioOtsByIduserasignado_aggregate(where: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {OrdenTrabajo_Cabecera: {_or: [{Estado: {_eq: 5}}, {Estado: {_eq: 7}}]}}})  {\n      aggregate {\n        count\n      }\n    }\n  }\n}\n  "]);return d=function(){return e},e}function g(){var e=Object(t["a"])(["\n  query rep_comprobante($fechaInicio: timestamp!, $fechaFin: timestamp!, $factura: String!, $tipo: String!, $usuario: String!, $offset: Int!, $limit: Int!) {\n    ProformaFacturaDetalle(where: {ProformaFactura: {FacturadoEn: {_lte: $fechaFin, _gte: $fechaInicio}, NroFactura: {_ilike: $factura, _nilike: $tipo}, usuarioByCreadopor: {_or: [{Nombres: {_ilike: $usuario}}, {Apellidos: {_ilike: $usuario}}]}}}, offset: $offset, limit: $limit, order_by: {FacturadoEn: asc}) {\n      ProformaFactura {\n        NroFactura\n        FacturadoEn\n        usuarioByCreadopor {\n          Nombres\n          Apellidos\n        }\n        clienteByCliente {\n          NombreEmpresa\n          CedRuc\n          Nombres\n          Apellidos\n        }\n      }\n      CantidadFactura\n      Dscto\n      ValorUnitario\n      Impuesto\n      Total\n    }\n    ProformaFacturaDetalle_aggregate(where: {ProformaFactura: {FacturadoEn: {_lte: $fechaFin, _gte: $fechaInicio}, NroFactura: {_ilike: $factura, _nilike: $tipo}, usuarioByCreadopor: {_or: [{Nombres: {_ilike: $usuario}}, {Apellidos: {_ilike: $usuario}}]}}}) {\n      aggregate {\n        Total: count\n        sum{\n          Total\n        }\n      }\n    }\n  }\n  "]);return g=function(){return e},e}function _(){var e=Object(t["a"])(["\n  query($fechaInicio: String!, $fechaFin: String!, $cedula: String!){\n    lista_servicios(fechaFin: $fechaFin, fechaInicio: $fechaInicio, cedula: $cedula){\n      Cantidad\n      TpServicio\n      tareas{\n        TpServicio\n        DscaTipoTramite\n        StatusOT\n        CreadoEn\n        FechaInscripcion\n        FechaInicioTrabajo\n        FechaEstimadaEntrega\n        FechaPospuestaEntrega\n        FechaRealEntrega\n        Avaluo\n        AmountInvoiced\n        FojasAdc\n        Cantidad\n        NombresAsi\n        NombresCre\n        FechaFinalizacion\n        NroOrden\n        Estado\n        Nombres\n        Observacion\n        Estilo{\n          isGreen\n          isBlue\n          isRed\n          isYellow\n        }\n      }\n    }\n  }\n  "]);return _=function(){return e},e}function f(){var e=Object(t["a"])(["\n  query  ($orders: [Int!]!){\n    OrdenTrabajo_Detalle(where: {OID: {_in: $orders}}) {\n      TipoServicio {\n        TpServicio\n      }\n      TipoTramite {\n        DscaTipoTramite\n      }\n      StatusOT\n      CreadoEn\n      FechaInscripcion\n      FechaInicioTrabajo\n      FechaEstimadaEntrega\n      FechaPospuestaEntrega\n      FechaRealEntrega\n      Avaluo\n      AmountInvoiced\n      FojasAdc\n      Cantidad\n      usuarioByCreadopor {\n        Nombres\n        Apellidos\n      }\n       Usuario_OTs{\n      FechaFinalizacion\n      }\n      OrdenTrabajo_Cabecera {\n        NroOrden\n        Estado\n        clienteByClientefactura {\n          Nombres\n          Apellidos\n        }\n      }\n    }\n  }\n  "]);return f=function(){return e},e}function h(){var e=Object(t["a"])(["\n  query usuarioOtsStatusByDep($fechaInicio: timestamp!, $fechaFin: timestamp!, $departamento: String!) {\n      Usuario(where: {Departamento: {IdDpto: {_ilike: $departamento}}, usuarioOtsByIduserasignado: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}}, order_by: {Apellidos: asc}) {\n        Nombres\n        Apellidos\n        Departamento {\n          IdDpto\n        }\n        creacion: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 0}}}}) {\n          aggregate {\n            count\n          }\n        }\n        abierta: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera : {Estado :  {_eq: 1}}}}) {\n          aggregate {\n            count\n          }\n        }\n        porCobrar: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado : {_eq: 2}}}}) {\n          aggregate {\n            count\n          }\n        }\n        pagada: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 3}}}}) {\n          aggregate {\n            count\n          }\n        }\n        anulada: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 3}}}}) {\n          aggregate {\n            count\n          }\n        }\n        enProceso: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 5}}}}) {\n          aggregate {\n            count\n          }\n        }\n        lParaEntrega: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado : {_eq: 6}}}}) {\n          aggregate {\n            count\n          }\n        }\n        finalizado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 7}}}}) {\n          aggregate {\n            count\n          }\n        }\n        total: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}) {\n          aggregate {\n            count\n          }\n        }\n      }\n    }\n  "]);return h=function(){return e},e}function m(){var e=Object(t["a"])(["\n    query usuarioTaksStatusByDep($fechaInicio: timestamp!, $fechaFin: timestamp!, $departamento: String!) {\n      Usuario(where: {Departamento: {IdDpto: {_ilike: $departamento}}, usuarioOtsByIduserasignado: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}}, order_by: {Apellidos: asc}) {\n        Nombres\n        Apellidos\n        Cedula\n        Departamento {\n          IdDpto\n        }\n        Usuario_TipoServicios {\n          TipoServicio {\n            Codigo\n            TpServicio\n          }\n          \n        }\n        noIniciado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 0}}}) {\n          aggregate {\n            count\n          }\n        }\n        revJud: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 1}}}) {\n          aggregate {\n            count\n          }\n        }\n        revJudComp: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 2}}}) {\n          aggregate {\n            count\n          }\n        }\n        enProceso: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 3}}}) {\n          aggregate {\n            count\n          }\n        }\n        porFirmar: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 4}}}) {\n          aggregate {\n            count\n          }\n        }\n        completado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 5}}}) {\n          aggregate {\n            count\n          }\n        }\n        pendiente: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 6}}}) {\n          aggregate {\n            count\n          }\n        }\n        anulado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 7}}}) {\n          aggregate {\n            count\n          }\n        }\n        total: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}) {\n          aggregate {\n            count\n          }\n        }\n      }\n    }\n  "]);return m=function(){return e},e}function p(){var e=Object(t["a"])(["\n  query ($fechaInicio: timestamp!, $fechaFin: timestamp!, $tramites: [String!]!) {\n    TipoTramite(where: {OrdenTrabajo_Detalles: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}}, Codigo: {_in: $tramites}}) {\n      DscaTipoTramite\n      noIniciado: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 0}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      revisionJuridico: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 1}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      revisionJuridicoCompletado: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 2}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      enProceso: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 3}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      porFirmar: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 4}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      completado: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 5}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      pendiente: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 6}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      anulado: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 7}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      total: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      totalRecaudado: ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}) {\n        aggregate {\n          sum {\n            Total\n          }\n        }\n      }\n    }\n  }\n "]);return p=function(){return e},e}function F(){var e=Object(t["a"])(["\n    query ($fechaInicio: timestamp!, $fechaFin: timestamp!, $tramites: [String!]!) {\n      TipoTramite(where: {OrdenTrabajo_Detalles: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {_or: [{Estado: {_eq: 3}}, {Estado: {_eq: 5}}, {Estado: {_eq: 6}}, {Estado: {_eq: 7}}]}}, Codigo: {_in: $tramites}}, order_by: {}) {\n        DscaTipoTramite\n        Codigo\n        ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}) {\n          aggregate {\n            sum {\n              Total\n            }\n          }\n        }\n        OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}}) {\n          aggregate {\n            sum {\n              Cantidad\n            }\n          }\n        }\n      }\n    }\n "]);return F=function(){return e},e}function $(){var e=Object(t["a"])(['\n   query lista_tramites{\n    listaTramites(where: {value: {_neq: "null"}}, order_by: {label: asc}) {\n      value\n      label\n    }\n  }\n ']);return $=function(){return e},e}function b(){var e=Object(t["a"])(["\n   query rep_tiposServicios($fechaInicio: String!, $fechaFin: String!) {\n    rep_tiposServicios(fechaFin: $fechaFin, fechaInicio: $fechaInicio){\n      Nombre\n      Creacion\n      Abierta\n      porCobrar\n      Pagada\n      Anulada\n      enProceso\n      paraEntrega\n      Finalizada\n      Total\n      totalRecaudado\n      Tareas{\n        OID\n        Codigo\n        DscaTipoTramite\n        Cantidad\n      }\n    }\n  }\n "]);return b=function(){return e},e}function T(){var e=Object(t["a"])(["\n  query ($fechaInicio: String!, $fechaFin: String!, $departamento: String!){\n    rep_departamento(fechaInicio: $fechaInicio, fechaFin: $fechaFin, departamento: $departamento){\n      Nombre\n      noIniciado\n      revisionJuridico\n      revisionJuridicoCompletado\n      enProceso\n      porFirmar\n      Completados\n      Pendiente\n      Anulado\n      Total\n    }\n  }\n  "]);return T=function(){return e},e}function I(){var e=Object(t["a"])(["\n  query ($fechaInicio: timestamp!, $fechaFin: timestamp!, $filtro: [String!]) {\n    TipoTramite(where: {OrdenTrabajo_Detalles: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {_or: [{Estado: {_eq: 3}}, {Estado: {_eq: 5}}, {Estado: {_eq: 6}}, {Estado: {_eq: 7}}]}}, Codigo: {_in: $filtro}}, order_by: {DscaTipoTramite: asc}) {\n      DscaTipoTramite\n      OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n        nodes {\n          OID\n        }\n      }\n      ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}) {\n        aggregate {\n          sum {\n            Total\n          }\n        }\n      }\n    }\n  }\n  "]);return I=function(){return e},e}var O=i()(I()),D=(i()(T()),i()(b())),v=i()($()),E=(i()(F()),i()(p())),j=i()(m()),y=i()(h()),w=i()(f()),C=i()(_()),S=i()(g()),q=i()(d()),A=i()(l()),N=i()(u()),B=(i()(s()),i()(c()));i()(o())},"8d41":function(e,n,a){},b680:function(e,n,a){"use strict";var t=a("23e7"),r=a("a691"),i=a("408a"),o=a("1148"),c=a("d039"),s=1..toFixed,u=Math.floor,l=function(e,n,a){return 0===n?a:n%2===1?l(e,n-1,a*e):l(e*e,n/2,a)},d=function(e){var n=0,a=e;while(a>=4096)n+=12,a/=4096;while(a>=2)n+=1,a/=2;return n},g=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){s.call({})}));t({target:"Number",proto:!0,forced:g},{toFixed:function(e){var n,a,t,c,s=i(this),g=r(e),_=[0,0,0,0,0,0],f="",h="0",m=function(e,n){var a=-1,t=n;while(++a<6)t+=e*_[a],_[a]=t%1e7,t=u(t/1e7)},p=function(e){var n=6,a=0;while(--n>=0)a+=_[n],_[n]=u(a/e),a=a%e*1e7},F=function(){var e=6,n="";while(--e>=0)if(""!==n||0===e||0!==_[e]){var a=String(_[e]);n=""===n?a:n+o.call("0",7-a.length)+a}return n};if(g<0||g>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(f="-",s=-s),s>1e-21)if(n=d(s*l(2,69,1))-69,a=n<0?s*l(2,-n,1):s/l(2,n,1),a*=4503599627370496,n=52-n,n>0){m(0,a),t=g;while(t>=7)m(1e7,0),t-=7;m(l(10,t,1),0),t=n-1;while(t>=23)p(1<<23),t-=23;p(1<<t),m(1,1),p(2),h=F()}else m(0,a),m(1<<-n,0),h=F()+o.call("0",g);return g>0?(c=h.length,h=f+(c<=g?"0."+o.call("0",g-c)+h:h.slice(0,c-g)+"."+h.slice(c-g))):h=f+h,h}})},ed08:function(e,n,a){"use strict";a.d(n,"b",(function(){return r})),a.d(n,"a",(function(){return i}));a("d3b7"),a("ac1f"),a("25f0"),a("4d90"),a("5319"),a("1276");var t=a("53ca");function r(e,n){if(0===arguments.length)return null;var a,r=n||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(t["a"])(e)?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));var i={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()},o=r.replace(/{([ymdhisa])+}/g,(function(e,n){var a=i[n];return"a"===n?["日","一","二","三","四","五","六"][a]:a.toString().padStart(2,"0")}));return o}function i(e,n,a){var t,r,i,o,c,s=function s(){var u=+new Date-o;u<n&&u>0?t=setTimeout(s,n-u):(t=null,a||(c=e.apply(i,r),t||(i=r=null)))};return function(){for(var r=arguments.length,u=new Array(r),l=0;l<r;l++)u[l]=arguments[l];i=this,o=+new Date;var d=a&&!t;return t||(t=setTimeout(s,n)),d&&(c=e.apply(i,u),i=u=null),c}}}}]);