import gql from 'graphql-tag'
module.exports = {
  usuarioTaksStatusByDepSub: gql`
    subscription ($fechaInicio: timestamp!, $fechaFin: timestamp!, $departamento: String!) {
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
  usuarioOTsStatusByDepSub: gql`
  subscription usuarioOTsStatusByDepSub($fechaInicio: timestamp!, $fechaFin: timestamp!, $departamento: String!) {
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
