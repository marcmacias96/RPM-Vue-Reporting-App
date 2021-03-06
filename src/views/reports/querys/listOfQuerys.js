import gql from 'graphql-tag'

var tiposTramite = gql`
  query ($fechaInicio: timestamp!, $fechaFin: timestamp!, $filtro: [String!]) {
    TipoTramite(where: {OrdenTrabajo_Detalles: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {_or: [{Estado: {_eq: 3}}, {Estado: {_eq: 5}}, {Estado: {_eq: 6}}, {Estado: {_eq: 7}}]}}, Codigo: {_in: $filtro}}, order_by: {DscaTipoTramite: asc}) {
      DscaTipoTramite
      OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}}) {
        aggregate {
          sum {
            Cantidad
          }
        }
        nodes {
          OID
        }
      }
      ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}) {
        aggregate {
          sum {
            Total
          }
        }
      }
    }
  }
  `
var tramitesUsuario = gql`
  query ($fechaInicio: String!, $fechaFin: String!, $departamento: String!){
    rep_departamento(fechaInicio: $fechaInicio, fechaFin: $fechaFin, departamento: $departamento){
      Nombre
      noIniciado
      revisionJuridico
      revisionJuridicoCompletado
      enProceso
      porFirmar
      Completados
      Pendiente
      Anulado
      Total
    }
  }
  `
var tiposServicios = gql `
   query rep_tiposServicios($fechaInicio: String!, $fechaFin: String!) {
    rep_tiposServicios(fechaFin: $fechaFin, fechaInicio: $fechaInicio){
      Nombre
      Creacion
      Abierta
      porCobrar
      Pagada
      Anulada
      enProceso
      paraEntrega
      Finalizada
      Total
      totalRecaudado
      Tareas{
        OID
        Codigo
        DscaTipoTramite
        Cantidad
      }
    }
  }
 `
var tramiteSelect = gql`
   query lista_tramites{
    listaTramites(where: {value: {_neq: "null"}}, order_by: {label: asc}) {
      value
      label
    }
  }
 `
var tiposTramiteFilt = gql`
    query ($fechaInicio: timestamp!, $fechaFin: timestamp!, $tramites: [String!]!) {
      TipoTramite(where: {OrdenTrabajo_Detalles: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {_or: [{Estado: {_eq: 3}}, {Estado: {_eq: 5}}, {Estado: {_eq: 6}}, {Estado: {_eq: 7}}]}}, Codigo: {_in: $tramites}}, order_by: {}) {
        DscaTipoTramite
        Codigo
        ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}) {
          aggregate {
            sum {
              Total
            }
          }
        }
        OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}}) {
          aggregate {
            sum {
              Cantidad
            }
          }
        }
      }
    }
 `
var tiposTramStatusFilt = gql`
  query ($fechaInicio: timestamp!, $fechaFin: timestamp!, $tramites: [String!]!) {
    TipoTramite(where: {OrdenTrabajo_Detalles: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}}, Codigo: {_in: $tramites}}) {
      DscaTipoTramite
      noIniciado: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 0}}) {
        aggregate {
          sum {
            Cantidad
          }
        }
      }
      revisionJuridico: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 1}}) {
        aggregate {
          sum {
            Cantidad
          }
        }
      }
      revisionJuridicoCompletado: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 2}}) {
        aggregate {
          sum {
            Cantidad
          }
        }
      }
      enProceso: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 3}}) {
        aggregate {
          sum {
            Cantidad
          }
        }
      }
      porFirmar: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 4}}) {
        aggregate {
          sum {
            Cantidad
          }
        }
      }
      completado: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 5}}) {
        aggregate {
          sum {
            Cantidad
          }
        }
      }
      pendiente: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 6}}) {
        aggregate {
          sum {
            Cantidad
          }
        }
      }
      anulado: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, StatusOT: {_eq: 7}}) {
        aggregate {
          sum {
            Cantidad
          }
        }
      }
      total: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}}) {
        aggregate {
          sum {
            Cantidad
          }
        }
      }
      totalRecaudado: ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}) {
        aggregate {
          sum {
            Total
          }
        }
      }
    }
  }
 `
var usuarioTaksStatusByDep = gql `
    query usuarioTaksStatusByDep($fechaInicio: timestamp!, $fechaFin: timestamp!, $departamento: String!) {
      Usuario(where: {Departamento: {IdDpto: {_ilike: $departamento}}, usuarioOtsByIduserasignado: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}}, order_by: {Apellidos: asc}) {
        Nombres
        Apellidos
        Cedula
        Departamento {
          IdDpto
        }
        Usuario_TipoServicios {
          TipoServicio {
            Codigo
            TpServicio
          }
          
        }
        noIniciado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 0}}}) {
          aggregate {
            count
          }
        }
        revJud: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 1}}}) {
          aggregate {
            count
          }
        }
        revJudComp: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 2}}}) {
          aggregate {
            count
          }
        }
        enProceso: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 3}}}) {
          aggregate {
            count
          }
        }
        porFirmar: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 4}}}) {
          aggregate {
            count
          }
        }
        completado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 5}}}) {
          aggregate {
            count
          }
        }
        pendiente: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 6}}}) {
          aggregate {
            count
          }
        }
        anulado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {StatusOT: {_eq: 7}}}) {
          aggregate {
            count
          }
        }
        total: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}) {
          aggregate {
            count
          }
        }
      }
    }
  `
var usuarioOTsStatusByDep = gql`
  query usuarioOtsStatusByDep($fechaInicio: timestamp!, $fechaFin: timestamp!, $departamento: String!) {
      Usuario(where: {Departamento: {IdDpto: {_ilike: $departamento}}, usuarioOtsByIduserasignado: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}}, order_by: {Apellidos: asc}) {
        Nombres
        Apellidos
        Departamento {
          IdDpto
        }
        creacion: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 0}}}}) {
          aggregate {
            count
          }
        }
        abierta: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera : {Estado :  {_eq: 1}}}}) {
          aggregate {
            count
          }
        }
        porCobrar: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado : {_eq: 2}}}}) {
          aggregate {
            count
          }
        }
        pagada: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 3}}}}) {
          aggregate {
            count
          }
        }
        anulada: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 3}}}}) {
          aggregate {
            count
          }
        }
        enProceso: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 5}}}}) {
          aggregate {
            count
          }
        }
        lParaEntrega: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado : {_eq: 6}}}}) {
          aggregate {
            count
          }
        }
        finalizado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { OrdenTrabajo_Cabecera: {Estado: {_eq: 7}}}}) {
          aggregate {
            count
          }
        }
        total: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}) {
          aggregate {
            count
          }
        }
      }
    }
  `
var listaDetallesServAndStat = gql`
  query  ($orders: [Int!]!){
    OrdenTrabajo_Detalle(where: {OID: {_in: $orders}}) {
      TipoServicio {
        TpServicio
      }
      TipoTramite {
        DscaTipoTramite
      }
      StatusOT
      CreadoEn
      FechaInscripcion
      FechaInicioTrabajo
      FechaEstimadaEntrega
      FechaPospuestaEntrega
      FechaRealEntrega
      Avaluo
      AmountInvoiced
      FojasAdc
      Cantidad
      usuarioByCreadopor {
        Nombres
        Apellidos
      }
       Usuario_OTs{
      FechaFinalizacion
      }
      OrdenTrabajo_Cabecera {
        NroOrden
        Estado
        clienteByClientefactura {
          Nombres
          Apellidos
        }
      }
    }
  }
  `
var listaDetallesTaskAsig = gql `
  query($fechaInicio: String!, $fechaFin: String!, $cedula: String!){
    lista_servicios(fechaFin: $fechaFin, fechaInicio: $fechaInicio, cedula: $cedula){
      Cantidad
      TpServicio
      tareas{
        TpServicio
        DscaTipoTramite
        StatusOT
        CreadoEn
        FechaInscripcion
        FechaInicioTrabajo
        FechaEstimadaEntrega
        FechaPospuestaEntrega
        FechaRealEntrega
        Avaluo
        AmountInvoiced
        FojasAdc
        Cantidad
        NombresAsi
        NombresCre
        FechaFinalizacion
        NroOrden
        Estado
        Nombres
        Observacion
        Estilo{
          isGreen
          isBlue
          isRed
          isYellow
        }
      }
    }
  }
  `
var invoiceBalance = gql`
  query rep_comprobante($fechaInicio: timestamp!, $fechaFin: timestamp!, $factura: String!, $tipo: String!, $usuario: String!, $offset: Int!, $limit: Int!) {
    ProformaFacturaDetalle(where: {ProformaFactura: {FacturadoEn: {_lte: $fechaFin, _gte: $fechaInicio}, NroFactura: {_ilike: $factura, _nilike: $tipo}, usuarioByCreadopor: {_or: [{Nombres: {_ilike: $usuario}}, {Apellidos: {_ilike: $usuario}}]}}}, offset: $offset, limit: $limit, order_by: {FacturadoEn: asc}) {
      ProformaFactura {
        NroFactura
        FacturadoEn
        usuarioByCreadopor {
          Nombres
          Apellidos
        }
        clienteByCliente {
          NombreEmpresa
          CedRuc
          Nombres
          Apellidos
        }
      }
      CantidadFactura
      Dscto
      ValorUnitario
      Impuesto
      Total
    }
    ProformaFacturaDetalle_aggregate(where: {ProformaFactura: {FacturadoEn: {_lte: $fechaFin, _gte: $fechaInicio}, NroFactura: {_ilike: $factura, _nilike: $tipo}, usuarioByCreadopor: {_or: [{Nombres: {_ilike: $usuario}}, {Apellidos: {_ilike: $usuario}}]}}}) {
      aggregate {
        Total: count
        sum{
          Total
        }
      }
    }
  }
  `
var userRankingTasks = gql `
  subscription ($fechaInicio: timestamp, $fechaFin: timestamp, $departamento: String!) {
  Usuario(where: {Departamento: {IdDpto: {_ilike: $departamento}}, usuarioOtsByIduserasignado: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}}}) {
    Nombres
    Apellidos
  
    porFirmar: usuarioOtsByIduserasignado_aggregate(where: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {OrdenTrabajo_Cabecera: {Estado: {_eq: 5}}}}) {
      aggregate {
        count
      }
    }
    completado: usuarioOtsByIduserasignado_aggregate(where: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {OrdenTrabajo_Cabecera: {Estado: {_eq: 7}}}}) {
      aggregate {
        count
      }
    }
    total: usuarioOtsByIduserasignado_aggregate(where: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: {OrdenTrabajo_Cabecera: {_or: [{Estado: {_eq: 5}}, {Estado: {_eq: 7}}]}}})  {
      aggregate {
        count
      }
    }
  }
}
  `
var orderDetailsByDateEnd = gql `
query ($fechaInicio: timestamp!, $fechaFin: timestamp!, $limit: Int!, $offset: Int!, $status: [Int!], $departamento: String, $usuario: String!) {
  OrdenTrabajo_Detalle(where: {usuarioByIduserasignado: {_or: [{Nombres: {_ilike: $usuario}}, {Apellidos: {_ilike: $usuario}}], Departamento: {IdDpto: {_ilike: $departamento}}}, Usuario_OTs: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}, EstadoTarea : {_in : $status}}}, limit: $limit, offset: $offset) {
    TipoServicio {
      TpServicio
    }
    TipoTramite {
      DscaTipoTramite
    }
    Usuario_OTs {
      EstadoTarea
    }
    StatusOT
    CreadoEn
    FechaInscripcion
    FechaInicioTrabajo
    FechaEstimadaEntrega
    FechaPospuestaEntrega
    FechaRealEntrega
    Avaluo
    AmountInvoiced
    FojasAdc
    Cantidad
    usuarioByIduserasignado {
      Nombres
      Apellidos
    }
    usuarioByCreadopor {
      Nombres
      Apellidos
    }
    Usuario_OTs {
      FechaRegistro
      FechaFinalizacion
      EstadoTarea
      FechaInicio
    }
    OrdenTrabajo_Cabecera {
      ExcentoCobro
      OrdenGubernamental
      NroOrden
      Estado
      clienteByClientefactura {
        NombreEmpresa
        RepresentanteLegal
        TerceraEdad
        Nombres
        Apellidos
        DiscapacidadValidaParaDescuento
      }
    }
    Observacion
  }
  OrdenTrabajo_Detalle_aggregate(where: {usuarioByIduserasignado: {_or: [{Nombres: {_ilike: $usuario}}, {Apellidos: {_ilike: $usuario}}], Departamento: {IdDpto: {_ilike: $departamento}}}, Usuario_OTs: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}, EstadoTarea : {_in : $status}}})  {
    aggregate {
      count
    }
  }
}
  `
var orderDetailsByDateStart = gql `
query ($fechaInicio: timestamp!, $fechaFin: timestamp!, $limit: Int!, $offset: Int!, $status: [Int!], $departamento: String, $usuario: String!) {
  OrdenTrabajo_Detalle(where: {usuarioByIduserasignado: {_or: [{Nombres: {_ilike: $usuario}}, {Apellidos: {_ilike: $usuario}}], Departamento: {IdDpto: {_ilike: $departamento}}}, Usuario_OTs: {FechaInicio: {_gte: $fechaInicio, _lte: $fechaFin}, EstadoTarea : {_in : $status}}}, limit: $limit, offset: $offset) {
    TipoServicio {
      TpServicio
    }
    TipoTramite {
      DscaTipoTramite
    }
    Usuario_OTs {
      EstadoTarea
    }
    StatusOT
    CreadoEn
    FechaInscripcion
    FechaInicioTrabajo
    FechaEstimadaEntrega
    FechaPospuestaEntrega
    FechaRealEntrega
    Avaluo
    AmountInvoiced
    FojasAdc
    Cantidad
    usuarioByIduserasignado {
      Nombres
      Apellidos
    }
    usuarioByCreadopor {
      Nombres
      Apellidos
    }
    Usuario_OTs {
      FechaInicio
      FechaRegistro
      FechaFinalizacion
      EstadoTarea
    }
    OrdenTrabajo_Cabecera {
      ExcentoCobro
      OrdenGubernamental
      NroOrden
      Estado
      clienteByClientefactura {
        NombreEmpresa
        RepresentanteLegal
        TerceraEdad
        Nombres
        Apellidos
        DiscapacidadValidaParaDescuento
      }
    }
    Observacion
  }
  OrdenTrabajo_Detalle_aggregate(where: {usuarioByIduserasignado: {_or: [{Nombres: {_ilike: $usuario}}, {Apellidos: {_ilike: $usuario}}], Departamento: {IdDpto: {_ilike: $departamento}}}, Usuario_OTs: {FechaInicio: {_gte: $fechaInicio, _lte: $fechaFin}, EstadoTarea : {_in : $status}}})  {
    aggregate {
      count
    }
  }
}
  `
var detellesExcel = gql `
  query($fechaInicio: String!, $fechaFin: String!, $status: [Int]){
    detalles_excel(fechaFin: $fechaFin, fechaInicio: $fechaInicio, status: $status){
      Nro
      TpServicio
      fRegistro
      Etarea
      Asignado
      tpTramite
      NroOrden
      FEfin
      Observacion
      CreadoEn
      FInscripcion
      FInicioTrabajo
      FPostpuestaEntrega
      FRealEntrega
      Avaluo
      Monto
      FojasAdc
      Cantidad
      CreadoPor
      FFinalizacion
      ExcentoCobro
      OrdenGubernamental
      EstadoOrden
      Cliente
      Empresa
      RepLegal
      TerceraEdad
      Discapacidad
    }
  }
  `
var tramitesMontoDetalles = gql`
  query ($OID: [Int!]){
    OrdenTrabajo_Detalle (where:{OID:{_in: $OID}}){
      TipoServicio {
          TpServicio
        }
        TipoTramite {
          DscaTipoTramite
        }
        StatusOT
        CreadoEn
        FechaInscripcion
        FechaInicioTrabajo
        FechaEstimadaEntrega
        FechaPospuestaEntrega
        FechaRealEntrega
        Avaluo
        AmountInvoiced
        FojasAdc
        Cantidad
        usuarioByCreadopor {
          Nombres
          Apellidos
        }
        Usuario_OTs{
        FechaFinalizacion
        }
        OrdenTrabajo_Cabecera {
          NroOrden
          Estado
          clienteByClientefactura {
            Nombres
            Apellidos
          }
        }
    }
  }
  `
  var alcabalas = gql`
    query ($fechaInicio: timestamp!, $fechaFin: timestamp!){
      Usuario_OT(where: {Inscripcions: {FechaInscr: {_gte: $fechaInicio, _lte: $fechaFin}, Libro: {OID: {_eq: 28}}}, OrdenTrabajo_Detalle: {Avaluo: {_gt: "0"}}}) {
        OrdenTrabajo_Detalle {
          OrdenTrabajo_Cabecera {
            NroOrden
            OrdenTrabajo_Detalles(where: {Avaluo: {_gt: "0"}}) {
              Avaluo
              AmountInvoiced
              TipoTramite{
                DscaTipoTramite
              }
            }
          }
        }
        Inscripcions(where: {Libro: {OID: {_eq: 28}}}) {
          OID
          FechaInscr
          FechaOtorga
          NroRepertorio
          NroInscripcion
          Cuantia
          Libro {
            DscaLibro
          }
          Acto {
            DescActo
          }
          Partes_Inscrps {
            FullName
            Papel {
              DscaPapel
            }
            Cliente {
              CedRuc
            }
          }
          Bienes_Inscrps {
            Ficha_Registral {
              CodCatastro
            }
          }
        }
      }
    }
  `

  var linderos_vacios = gql`
    query ($nombre: String!, $fechaInicio: timestamp, $fechaFin: timestamp) {
      linderos_vacios_aggregate(where: {fecha: {_gte: $fechaInicio, _lte: $fechaFin}, Usuario: {_ilike: $nombre}}) {
        aggregate {
          count
        }
      }
      linderos_vacios(where: {fecha: {_gte: $fechaInicio, _lte: $fechaFin}, Usuario: {_ilike: $nombre}}) {
        NroFicha
        IdNorte
        IdSur
        IdEste
        IdOeste
        Frente
        Atras
        Derecho
        Izquierdo
        Lindero
        Usuario
        fecha
      }
    }
  `

export {
  tiposTramite,
  tramitesUsuario,
  tiposServicios,
  tramiteSelect,
  tiposTramiteFilt,
  tiposTramStatusFilt,
  usuarioTaksStatusByDep,
  usuarioOTsStatusByDep,
  listaDetallesServAndStat,
  listaDetallesTaskAsig,
  invoiceBalance,
  userRankingTasks,
  orderDetailsByDateEnd,
  orderDetailsByDateStart,
  detellesExcel,
  tramitesMontoDetalles,
  alcabalas,
  linderos_vacios
}
