(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf9ed086"],{"0ee0":function(e,a,n){"use strict";(function(e){var a=n("aede"),t=n("9530"),r=n.n(t);function i(){var e=Object(a["a"])(["\n  subscription usuarioOTsStatusByDepSub($fechaInicio: timestamp!, $fechaFin: timestamp!, $departamento: String!) {\n      Usuario(where: {Departamento: {IdDpto: {_ilike: $departamento}}, usuarioOtsByIduserasignado: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}}, order_by: {Apellidos: asc}) {\n        Nombres\n        Apellidos\n        Departamento {\n          IdDpto\n        }\n        creacion: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 0}}}}) {\n          aggregate {\n            count\n          }\n        }\n        abierta: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera : {Estado :  {_eq: 1}}}}) {\n          aggregate {\n            count\n          }\n        }\n        porCobrar: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado : {_eq: 2}}}}) {\n          aggregate {\n            count\n          }\n        }\n        pagada: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 3}}}}) {\n          aggregate {\n            count\n          }\n        }\n        anulada: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 3}}}}) {\n          aggregate {\n            count\n          }\n        }\n        enProceso: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 5}}}}) {\n          aggregate {\n            count\n          }\n        }\n        lParaEntrega: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado : {_eq: 6}}}}) {\n          aggregate {\n            count\n          }\n        }\n        finalizado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 7}}}}) {\n          aggregate {\n            count\n          }\n        }\n        total: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}) {\n          aggregate {\n            count\n          }\n        }\n      }\n    }\n  "]);return i=function(){return e},e}function o(){var e=Object(a["a"])(["\n    subscription ($fechaInicio: timestamp!, $fechaFin: timestamp!, $departamento: String!) {\n      Usuario(where: {Departamento: {IdDpto: {_ilike: $departamento}}, usuarioOtsByIduserasignado: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}}, order_by: {Apellidos: asc}) {\n        Nombres\n        Apellidos\n        Departamento {\n          IdDpto\n        }\n        noIniciado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 0}}}) {\n          aggregate {\n            count\n          }\n        }\n        revJud: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 1}}}) {\n          aggregate {\n            count\n          }\n        }\n        revJudComp: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 2}}}) {\n          aggregate {\n            count\n          }\n        }\n        enProceso: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 3}}}) {\n          aggregate {\n            count\n          }\n        }\n        porFirmar: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 4}}}) {\n          aggregate {\n            count\n          }\n        }\n        completado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 5}}}) {\n          aggregate {\n            count\n          }\n        }\n        pendiente: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 6}}}) {\n          aggregate {\n            count\n          }\n        }\n        anulado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 7}}}) {\n          aggregate {\n            count\n          }\n        }\n        total: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}) {\n          aggregate {\n            count\n          }\n        }\n      }\n    }\n  "]);return o=function(){return e},e}e.exports={usuarioTaksStatusByDepSub:r()(o()),usuarioOTsStatusByDepSub:r()(i())}}).call(this,n("dd40")(e))},6724:function(e,a,n){"use strict";n("8d41");var t="@@wavesContext";function r(e,a){function n(n){var t=Object.assign({},a.value),r=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},t),i=r.ele;if(i){i.style.position="relative",i.style.overflow="hidden";var o=i.getBoundingClientRect(),c=i.querySelector(".waves-ripple");switch(c?c.className="waves-ripple":(c=document.createElement("span"),c.className="waves-ripple",c.style.height=c.style.width=Math.max(o.width,o.height)+"px",i.appendChild(c)),r.type){case"center":c.style.top=o.height/2-c.offsetHeight/2+"px",c.style.left=o.width/2-c.offsetWidth/2+"px";break;default:c.style.top=(n.pageY-o.top-c.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",c.style.left=(n.pageX-o.left-c.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return c.style.backgroundColor=r.color,c.className="waves-ripple z-active",!1}}return e[t]?e[t].removeHandle=n:e[t]={removeHandle:n},n}var i={bind:function(e,a){e.addEventListener("click",r(e,a),!1)},update:function(e,a){e.removeEventListener("click",e[t].removeHandle,!1),e.addEventListener("click",r(e,a),!1)},unbind:function(e){e.removeEventListener("click",e[t].removeHandle,!1),e[t]=null,delete e[t]}},o=function(e){e.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(o)),i.install=o;a["a"]=i},"754d":function(e,a,n){"use strict";(function(e){var a=n("aede"),t=n("9530"),r=n.n(t);function i(){var e=Object(a["a"])(["\n  query ($OID: [Int!]){\n    OrdenTrabajo_Detalle (where:{OID:{_in: $OID}}){\n      TipoServicio {\n          TpServicio\n        }\n        TipoTramite {\n          DscaTipoTramite\n        }\n        StatusOT\n        CreadoEn\n        FechaInscripcion\n        FechaInicioTrabajo\n        FechaEstimadaEntrega\n        FechaPospuestaEntrega\n        FechaRealEntrega\n        Avaluo\n        AmountInvoiced\n        FojasAdc\n        Cantidad\n        usuarioByCreadopor {\n          Nombres\n          Apellidos\n        }\n        Usuario_OTs{\n        FechaFinalizacion\n        }\n        OrdenTrabajo_Cabecera {\n          NroOrden\n          Estado\n          clienteByClientefactura {\n            Nombres\n            Apellidos\n          }\n        }\n    }\n  }\n  "]);return i=function(){return e},e}function o(){var e=Object(a["a"])(["\n  query($fechaInicio: String!, $fechaFin: String!, $status: [Int]){\n    detalles_excel(fechaFin: $fechaFin, fechaInicio: $fechaInicio, status: $status){\n      Nro\n      TpServicio\n      fRegistro\n      Etarea\n      Asignado\n      tpTramite\n      NroOrden\n      FEfin\n      Observacion\n      CreadoEn\n      FInscripcion\n      FInicioTrabajo\n      FPostpuestaEntrega\n      FRealEntrega\n      Avaluo\n      Monto\n      FojasAdc\n      Cantidad\n      CreadoPor\n      FFinalizacion\n      ExcentoCobro\n      OrdenGubernamental\n      EstadoOrden\n      Cliente\n      Empresa\n      RepLegal\n      TerceraEdad\n      Discapacidad\n    }\n  }\n  "]);return o=function(){return e},e}function c(){var e=Object(a["a"])(["\n  query ($fechaInicio: timestamp!, $fechaFin: timestamp!, $limit: Int!, $offset: Int!, $status: [Int!]) {\n    OrdenTrabajo_Detalle(where: {CreadoEn: {_gte: $fechaInicio, _lte: $fechaFin}, StatusOT: {_in: $status}}, limit: $limit, offset: $offset) {\n      TipoServicio {\n        TpServicio\n      }\n      TipoTramite {\n        DscaTipoTramite\n      }\n      StatusOT\n      CreadoEn\n      FechaInscripcion\n      FechaInicioTrabajo\n      FechaEstimadaEntrega\n      FechaPospuestaEntrega\n      FechaRealEntrega\n      Avaluo\n      AmountInvoiced\n      FojasAdc\n      Cantidad\n      usuarioByIduserasignado {\n        Nombres\n        Apellidos\n      }\n      usuarioByCreadopor {\n        Nombres\n        Apellidos\n      }\n      Usuario_OTs {\n        FechaRegistro\n        FechaFinalizacion\n      }\n      OrdenTrabajo_Cabecera {\n        ExcentoCobro\n        OrdenGubernamental\n        NroOrden\n        Estado\n        clienteByClientefactura {\n          NombreEmpresa\n          RepresentanteLegal\n          TerceraEdad\n          Nombres\n          Apellidos\n          DiscapacidadValidaParaDescuento\n        }\n      }\n      Observacion\n    }\n    OrdenTrabajo_Detalle_aggregate(where: {CreadoEn: {_gte: $fechaInicio, _lte: $fechaFin}, StatusOT: {_in: $status}}) {\n      aggregate {\n        count\n      }\n    }\n  }\n  "]);return c=function(){return e},e}function s(){var e=Object(a["a"])(["\n  query ($fechaInicio: timestamp!, $fechaFin: timestamp!, $limit: Int!, $offset: Int!, $status: [Int!], $departamento: String) {\n    OrdenTrabajo_Detalle(where: {FechaEstimadaEntrega: {_gte: $fechaInicio, _lte: $fechaFin}, StatusOT: {_in: $status}, usuarioByIduserasignado : {Departamento : {IdDpto : {_ilike : $departamento}}} }, limit: $limit, offset: $offset) {\n      TipoServicio {\n        TpServicio\n      }\n      TipoTramite {\n        DscaTipoTramite\n      }\n      StatusOT\n      CreadoEn\n      FechaInscripcion\n      FechaInicioTrabajo\n      FechaEstimadaEntrega\n      FechaPospuestaEntrega\n      FechaRealEntrega\n      Avaluo\n      AmountInvoiced\n      FojasAdc\n      Cantidad\n      usuarioByIduserasignado {\n        Nombres\n        Apellidos\n      }\n      usuarioByCreadopor {\n        Nombres\n        Apellidos\n      }\n      Usuario_OTs {\n        FechaRegistro\n        FechaFinalizacion\n      }\n      OrdenTrabajo_Cabecera {\n        ExcentoCobro\n        OrdenGubernamental\n        NroOrden\n        Estado\n        clienteByClientefactura {\n          NombreEmpresa\n          RepresentanteLegal\n          TerceraEdad\n          Nombres\n          Apellidos\n          DiscapacidadValidaParaDescuento\n        }\n      }\n      Observacion\n    }\n    OrdenTrabajo_Detalle_aggregate(where: {FechaEstimadaEntrega: {_gte: $fechaInicio, _lte: $fechaFin}, StatusOT: {_in: $status}, usuarioByIduserasignado : {Departamento : {IdDpto : {_ilike : $departamento}}}}) {\n      aggregate {\n        count\n      }\n    }\n  }\n  "]);return s=function(){return e},e}function l(){var e=Object(a["a"])(["\n  subscription ($fechaInicio: timestamp, $fechaFin: timestamp, $departamento: String!) {\n    Usuario(where: {Departamento: {IdDpto: {_ilike: $departamento}}, usuarioOtsByIduserasignado: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}}}) {\n      Nombres\n      Apellidos\n      porFirmar: usuarioOtsByIduserasignado_aggregate(where: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 4}}}) {\n        aggregate {\n          count\n        }\n      }\n      completado: usuarioOtsByIduserasignado_aggregate(where: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 5}}}) {\n        aggregate {\n          count\n        }\n      }\n      total: usuarioOtsByIduserasignado_aggregate(where: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {_or: [{StatusOT: {_eq: 4}}, {StatusOT: {_eq: 5}}]}}) {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n  "]);return l=function(){return e},e}function d(){var e=Object(a["a"])(["\n  query rep_comprobante($fechaInicio: timestamp!, $fechaFin: timestamp!, $factura: String!, $tipo: String!, $usuario: String!, $offset: Int!, $limit: Int!) {\n    ProformaFacturaDetalle(where: {ProformaFactura: {FacturadoEn: {_lte: $fechaFin, _gte: $fechaInicio}, NroFactura: {_ilike: $factura, _nilike: $tipo}, usuarioByCreadopor: {_or: [{Nombres: {_ilike: $usuario}}, {Apellidos: {_ilike: $usuario}}]}}}, offset: $offset, limit: $limit, order_by: {FacturadoEn: asc}) {\n      ProformaFactura {\n        NroFactura\n        FacturadoEn\n        usuarioByCreadopor {\n          Nombres\n          Apellidos\n        }\n        clienteByCliente {\n          NombreEmpresa\n          CedRuc\n          Nombres\n          Apellidos\n        }\n      }\n      CantidadFactura\n      Dscto\n      ValorUnitario\n      Impuesto\n      Total\n    }\n    ProformaFacturaDetalle_aggregate(where: {ProformaFactura: {FacturadoEn: {_lte: $fechaFin, _gte: $fechaInicio}, NroFactura: {_ilike: $factura, _nilike: $tipo}, usuarioByCreadopor: {_or: [{Nombres: {_ilike: $usuario}}, {Apellidos: {_ilike: $usuario}}]}}}) {\n      aggregate {\n        Total: count\n        sum{\n          Total\n        }\n      }\n    }\n  }\n  "]);return d=function(){return e},e}function u(){var e=Object(a["a"])(["\n  query($fechaInicio: String!, $fechaFin: String!, $cedula: String!){\n    lista_servicios(fechaFin: $fechaFin, fechaInicio: $fechaInicio, cedula: $cedula){\n      Cantidad\n      TpServicio\n      tareas{\n        TpServicio\n        DscaTipoTramite\n        StatusOT\n        CreadoEn\n        FechaInscripcion\n        FechaInicioTrabajo\n        FechaEstimadaEntrega\n        FechaPospuestaEntrega\n        FechaRealEntrega\n        Avaluo\n        AmountInvoiced\n        FojasAdc\n        Cantidad\n        NombresAsi\n        NombresCre\n        FechaFinalizacion\n        NroOrden\n        Estado\n        Nombres\n        Observacion\n        Estilo{\n          isGreen\n          isBlue\n          isRed\n          isYellow\n        }\n      }\n    }\n  }\n  "]);return u=function(){return e},e}function g(){var e=Object(a["a"])(["\n  query  ($orders: [Int!]!){\n    OrdenTrabajo_Detalle(where: {OID: {_in: $orders}}) {\n      TipoServicio {\n        TpServicio\n      }\n      TipoTramite {\n        DscaTipoTramite\n      }\n      StatusOT\n      CreadoEn\n      FechaInscripcion\n      FechaInicioTrabajo\n      FechaEstimadaEntrega\n      FechaPospuestaEntrega\n      FechaRealEntrega\n      Avaluo\n      AmountInvoiced\n      FojasAdc\n      Cantidad\n      usuarioByCreadopor {\n        Nombres\n        Apellidos\n      }\n       Usuario_OTs{\n      FechaFinalizacion\n      }\n      OrdenTrabajo_Cabecera {\n        NroOrden\n        Estado\n        clienteByClientefactura {\n          Nombres\n          Apellidos\n        }\n      }\n    }\n  }\n  "]);return g=function(){return e},e}function h(){var e=Object(a["a"])(["\n  query usuarioOtsStatusByDep($fechaInicio: timestamp!, $fechaFin: timestamp!, $departamento: String!) {\n      Usuario(where: {Departamento: {IdDpto: {_ilike: $departamento}}, usuarioOtsByIduserasignado: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}}, order_by: {Apellidos: asc}) {\n        Nombres\n        Apellidos\n        Departamento {\n          IdDpto\n        }\n        creacion: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 0}}}}) {\n          aggregate {\n            count\n          }\n        }\n        abierta: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera : {Estado :  {_eq: 1}}}}) {\n          aggregate {\n            count\n          }\n        }\n        porCobrar: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado : {_eq: 2}}}}) {\n          aggregate {\n            count\n          }\n        }\n        pagada: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 3}}}}) {\n          aggregate {\n            count\n          }\n        }\n        anulada: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 3}}}}) {\n          aggregate {\n            count\n          }\n        }\n        enProceso: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 5}}}}) {\n          aggregate {\n            count\n          }\n        }\n        lParaEntrega: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado : {_eq: 6}}}}) {\n          aggregate {\n            count\n          }\n        }\n        finalizado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 7}}}}) {\n          aggregate {\n            count\n          }\n        }\n        total: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}) {\n          aggregate {\n            count\n          }\n        }\n      }\n    }\n  "]);return h=function(){return e},e}function _(){var e=Object(a["a"])(["\n    query usuarioTaksStatusByDep($fechaInicio: timestamp!, $fechaFin: timestamp!, $departamento: String!) {\n      Usuario(where: {Departamento: {IdDpto: {_ilike: $departamento}}, usuarioOtsByIduserasignado: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}}, order_by: {Apellidos: asc}) {\n        Nombres\n        Apellidos\n        Cedula\n        Departamento {\n          IdDpto\n        }\n        Usuario_TipoServicios {\n          TipoServicio {\n            Codigo\n            TpServicio\n          }\n          \n        }\n        noIniciado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 0}}}) {\n          aggregate {\n            count\n          }\n        }\n        revJud: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 1}}}) {\n          aggregate {\n            count\n          }\n        }\n        revJudComp: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 2}}}) {\n          aggregate {\n            count\n          }\n        }\n        enProceso: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 3}}}) {\n          aggregate {\n            count\n          }\n        }\n        porFirmar: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 4}}}) {\n          aggregate {\n            count\n          }\n        }\n        completado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 5}}}) {\n          aggregate {\n            count\n          }\n        }\n        pendiente: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 6}}}) {\n          aggregate {\n            count\n          }\n        }\n        anulado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 7}}}) {\n          aggregate {\n            count\n          }\n        }\n        total: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}) {\n          aggregate {\n            count\n          }\n        }\n      }\n    }\n  "]);return _=function(){return e},e}function f(){var e=Object(a["a"])(["\n  query ($fechaInicio: timestamp!, $fechaFin: timestamp!, $tramites: [String!]!) {\n    TipoTramite(where: {OrdenTrabajo_Detalles: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}}, Codigo: {_in: $tramites}}) {\n      DscaTipoTramite\n      noIniciado: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 0}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      revisionJuridico: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 1}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      revisionJuridicoCompletado: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 2}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      enProceso: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 3}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      porFirmar: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 4}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      completado: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 5}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      pendiente: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 6}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      anulado: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 7}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      total: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n      }\n      totalRecaudado: ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}) {\n        aggregate {\n          sum {\n            Total\n          }\n        }\n      }\n    }\n  }\n "]);return f=function(){return e},e}function m(){var e=Object(a["a"])(["\n    query ($fechaInicio: timestamp!, $fechaFin: timestamp!, $tramites: [String!]!) {\n      TipoTramite(where: {OrdenTrabajo_Detalles: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {_or: [{Estado: {_eq: 3}}, {Estado: {_eq: 5}}, {Estado: {_eq: 6}}, {Estado: {_eq: 7}}]}}, Codigo: {_in: $tramites}}, order_by: {}) {\n        DscaTipoTramite\n        Codigo\n        ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}) {\n          aggregate {\n            sum {\n              Total\n            }\n          }\n        }\n        OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}}) {\n          aggregate {\n            sum {\n              Cantidad\n            }\n          }\n        }\n      }\n    }\n "]);return m=function(){return e},e}function p(){var e=Object(a["a"])(['\n   query lista_tramites{\n    listaTramites(where: {value: {_neq: "null"}}, order_by: {label: asc}) {\n      value\n      label\n    }\n  }\n ']);return p=function(){return e},e}function $(){var e=Object(a["a"])(["\n   query rep_tiposServicios($fechaInicio: String!, $fechaFin: String!) {\n    rep_tiposServicios(fechaFin: $fechaFin, fechaInicio: $fechaInicio){\n      Nombre\n      Creacion\n      Abierta\n      porCobrar\n      Pagada\n      Anulada\n      enProceso\n      paraEntrega\n      Finalizada\n      Total\n      totalRecaudado\n      Tareas{\n        OID\n        Codigo\n        DscaTipoTramite\n        Cantidad\n      }\n    }\n  }\n "]);return $=function(){return e},e}function b(){var e=Object(a["a"])(["\n  query ($fechaInicio: String!, $fechaFin: String!, $departamento: String!){\n    rep_departamento(fechaInicio: $fechaInicio, fechaFin: $fechaFin, departamento: $departamento){\n      Nombre\n      noIniciado\n      revisionJuridico\n      revisionJuridicoCompletado\n      enProceso\n      porFirmar\n      Completados\n      Pendiente\n      Anulado\n      Total\n    }\n  }\n  "]);return b=function(){return e},e}function F(){var e=Object(a["a"])(["\n  query ($fechaInicio: timestamp!, $fechaFin: timestamp!, $filtro: [String!]) {\n    TipoTramite(where: {OrdenTrabajo_Detalles: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {_or: [{Estado: {_eq: 3}}, {Estado: {_eq: 5}}, {Estado: {_eq: 6}}, {Estado: {_eq: 7}}]}}, Codigo: {_in: $filtro}}, order_by: {DscaTipoTramite: asc}) {\n      DscaTipoTramite\n      OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}}) {\n        aggregate {\n          sum {\n            Cantidad\n          }\n        }\n        nodes {\n          OID\n        }\n      }\n      ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}) {\n        aggregate {\n          sum {\n            Total\n          }\n        }\n      }\n    }\n  }\n  "]);return F=function(){return e},e}e.exports={tiposTramite:r()(F()),tramitesUsuario:r()(b()),tiposServicios:r()($()),tramiteSelect:r()(p()),tiposTramiteFilt:r()(m()),tiposTramStatusFilt:r()(f()),usuarioTaksStatusByDep:r()(_()),usuarioOTsStatusByDep:r()(h()),listaDetallesServAndStat:r()(g()),listaDetallesTaskAsig:r()(u()),invoiceBalance:r()(d()),userRankingTasks:r()(l()),orderDetailsByDateEnd:r()(s()),orderDetailsByDateStart:r()(c()),detellesExcel:r()(o()),tramitesMontoDetalles:r()(i())}}).call(this,n("dd40")(e))},"817d":function(e,a,n){var t,r,i;(function(o,c){r=[a,n("313e")],t=c,i="function"===typeof t?t.apply(a,r):t,void 0===i||(e.exports=i)})(0,(function(e,a){var n=function(e){"undefined"!==typeof console&&console&&console.error&&console.error(e)};if(a){var t=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],r={color:t,title:{textStyle:{fontWeight:"normal",color:"#008acd"}},visualMap:{itemWidth:15,color:["#5ab1ef","#e0ffff"]},toolbox:{iconStyle:{normal:{borderColor:t[0]}}},tooltip:{backgroundColor:"rgba(50,50,50,0.5)",axisPointer:{type:"line",lineStyle:{color:"#008acd"},crossStyle:{color:"#008acd"},shadowStyle:{color:"rgba(200,200,200,0.2)"}}},dataZoom:{dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd"},grid:{borderColor:"#eee"},categoryAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitLine:{lineStyle:{color:["#eee"]}}},valueAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.1)","rgba(200,200,200,0.1)"]}},splitLine:{lineStyle:{color:["#eee"]}}},timeline:{lineStyle:{color:"#008acd"},controlStyle:{color:"#008acd",borderColor:"#008acd"},symbol:"emptyCircle",symbolSize:3},line:{smooth:!0,symbol:"emptyCircle",symbolSize:3},candlestick:{itemStyle:{color:"#d87a80",color0:"#2ec7c9"},lineStyle:{width:1,color:"#d87a80",color0:"#2ec7c9"},areaStyle:{color:"#2ec7c9",color0:"#b6a2de"}},scatter:{symbol:"circle",symbolSize:4},map:{itemStyle:{color:"#ddd"},areaStyle:{color:"#fe994e"},label:{color:"#d87a80"}},graph:{itemStyle:{color:"#d87a80"},linkStyle:{color:"#2ec7c9"}},gauge:{axisLine:{lineStyle:{color:[[.2,"#2ec7c9"],[.8,"#5ab1ef"],[1,"#d87a80"]],width:10}},axisTick:{splitNumber:10,length:15,lineStyle:{color:"auto"}},splitLine:{length:22,lineStyle:{color:"auto"}},pointer:{width:5}}};a.registerTheme("macarons",r)}else n("ECharts is not Loaded")}))},"8d41":function(e,a,n){},"9ad2":function(e,a,n){"use strict";var t=n("ed08");a["a"]={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){var e=this;this.$_resizeHandler=Object(t["a"])((function(){e.chart&&e.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(e){"width"===e.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}}},"9b72":function(e,a,n){"use strict";var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{class:e.className,style:{height:e.height,width:e.width}})},r=[],i=n("313e"),o=n.n(i),c=n("9ad2");n("817d");var s=6e3,l={mixins:[c["a"]],props:{className:{type:String,default:"chart"},width:{type:String,default:"300%"},height:{type:String,default:"300px"},chartData:{type:Object,default:null}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(e){this.setOptions(e)}}},mounted:function(){var e=this;this.$nextTick((function(){e.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=o.a.init(this.$el,"macarons")},setOptions:function(e){this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:10,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:e.nombres,show:!1,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",axisTick:{show:!1}}],series:{name:"Total por usuario",type:"bar",stack:"vistors",barWidth:"80%",data:e.totales,animationDuration:s}})}}},d=l,u=n("2877"),g=Object(u["a"])(d,t,r,!1,null,null,null);a["a"]=g.exports}}]);