import gql from 'graphql-tag'
module.exports = {
  tiposTramite: gql`
  query ($fechaInicio: timestamp!, $fechaFin: timestamp!, $title: String!) {
    TipoTramite(where: {OrdenTrabajo_Detalles: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {_or: [{Estado: {_eq: 3}}, {Estado: {_eq: 5}}, {Estado: {_eq: 6}}, {Estado: {_eq: 7}}]}}, DscaTipoTramite: {_ilike: $title}}, order_by: {DscaTipoTramite: asc}) {
      DscaTipoTramite
      OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {_or: [{Estado: {_eq: 3}}, {Estado: {_eq: 5}}, {Estado: {_eq: 6}}, {Estado: {_eq: 7}}]}}) {
        aggregate {
          sum {
            AmountInvoiced
            Cantidad
          }
        }
      }
    }
  }
  `,
  tramitesUsuario: gql`
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
  `,
  tiposServicios: gql `
    query ($fechaInicio: timestamp!, $fechaFin: timestamp!) {
      TipoServicio(where: {OrdenTrabajo_Detalles: { ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}}}) {
        TpServicio
        creacion: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {Estado: {_eq: 0}}}) {
          aggregate {
            sum {
              Cantidad
            }
          }
        }
        abierta: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {Estado: {_eq: 1}}}) {
          aggregate {
            sum {
              Cantidad
            }
          }
        }
        porCobrar: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {Estado: {_eq: 2}}}) {
          aggregate {
            sum {
              Cantidad
            }
          }
        }
        pagada: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {Estado: {_eq: 3}}}) {
          aggregate {
            sum {
              Cantidad
            }
          }
        }
        anulada: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {Estado: {_eq: 4}}}) {
          aggregate {
            sum {
              Cantidad
            }
          }
        }
        enProceso: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {Estado: {_eq: 5}}}) {
          aggregate {
            sum {
              Cantidad
            }
          }
        }
        paraEntrega: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {Estado: {_eq: 6}}}) {
          aggregate {
            sum {
              Cantidad
            }
          }
        }
        finalizada: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {Estado: {_eq: 7}}}) {
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
              AmountInvoiced
            }
          }
        }
      }
    }
 `,
  listaTramites: gql`
   query lista_tramites{
    listaTramites(where: {value: {_neq: "null"}}, order_by: {label: asc}) {
      value
      label
    }
  }
 `,
  tiposTramiteFilt: gql`
    query tip($fechaInicio: timestamp!, $fechaFin: timestamp!, $title: [String!]!) {
    TipoTramite(where: {OrdenTrabajo_Detalles: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {_or: [{Estado: {_eq: 3}}, {Estado: {_eq: 5}}, {Estado: {_eq: 6}}, {Estado: {_eq: 7}}]}}, Codigo: {_in: $title}}, order_by: {}) {
      DscaTipoTramite
      Codigo
      OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {_or: [{Estado: {_eq: 3}}, {Estado: {_eq: 5}}, {Estado: {_eq: 6}}, {Estado: {_eq: 7}}]}}) {
        aggregate {
          sum {
            AmountInvoiced
            Cantidad
          }
        }
      }
    }
  }

 `,
  tiposTramStatusFilt: gql`
  query ($fechaInicio: timestamp!, $fechaFin: timestamp!, $tramites: [String!]!) {
    TipoTramite(where: {OrdenTrabajo_Detalles: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}}, Codigo: {_in: $tramites}}) {
      DscaTipoTramite
      creacion: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {Estado: {_eq: 0}}}) {
        aggregate {
          sum {
            Cantidad
          }
        }
      }
      abierta: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {Estado: {_eq: 1}}}) {
        aggregate {
          sum {
            Cantidad
          }
        }
      }
      porCobrar: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {Estado: {_eq: 2}}}) {
        aggregate {
          sum {
            Cantidad
          }
        }
      }
      pagada: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {Estado: {_eq: 3}}}) {
        aggregate {
          sum {
            Cantidad
          }
        }
      }
      anulada: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {Estado: {_eq: 4}}}) {
        aggregate {
          sum {
            Cantidad
          }
        }
      }
      enProceso: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {Estado: {_eq: 5}}}) {
        aggregate {
          sum {
            Cantidad
          }
        }
      }
      paraEntrega: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {Estado: {_eq: 6}}}) {
        aggregate {
          sum {
            Cantidad
          }
        }
      }
      finalizada: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}, OrdenTrabajo_Cabecera: {Estado: {_eq: 7}}}) {
        aggregate {
          sum {
            Cantidad
          }
        }
      }
      total: OrdenTrabajo_Detalles_aggregate(where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}}) {
        aggregate {
          sum {
            AmountInvoiced
            Cantidad
          }
        }
      }
    }
  }

 `,
  usuarioTaksStatusByDep: gql `
    query usuarioTaksStatusByDep($fechaInicio: timestamp!, $fechaFin: timestamp!, $departamento: String!) {
      Usuario(where: {Departamento: {IdDpto: {_ilike: $departamento}}, usuarioOtsByIduserasignado: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}}}, order_by: {Apellidos: asc}) {
        Nombres
        Apellidos
        Departamento {
          IdDpto
        }
        noIniciado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 0}}}) {
          aggregate {
            count
          }
        }
        revJud: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 1}}}) {
          aggregate {
            count
          }
        }
        revJudComp: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 2}}}) {
          aggregate {
            count
          }
        }
        enProceso: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 3}}}) {
          aggregate {
            count
          }
        }
        porFirmar: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 4}}}) {
          aggregate {
            count
          }
        }
        completado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 5}}}) {
          aggregate {
            count
          }
        }
        pendiente: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 6}}}) {
          aggregate {
            count
          }
        }
        anulado: usuarioOtsByIduserasignado_aggregate(where: {FechaRegistro: {_gte: $fechaInicio, _lte: $fechaFin}, OrdenTrabajo_Detalle: { StatusOT: {_eq: 7}}}) {
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
  `,
  usuarioOTsStatusByDep: gql`
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
}
