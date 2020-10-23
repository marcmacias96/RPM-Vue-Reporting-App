import gql from 'graphql-tag'

var AmountOfServices = gql `
    subscription ($fechaInicio: timestamp, $fechaFin: timestamp) {
        TipoServicio (where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}}) {
            TpServicio
            ProformaFacturaDetalles_aggregate (where: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin} }) {
            aggregate{
                sum{
                Total
                }
            }
            }
        }
    }
`
var SubAmountYear = gql `
    subscription ($year: float8) {
    IngresosAnuales(where: {year: {_eq: $year}}){
        enero
        febrero
        marzo
        abril
        mayo
        junio
        julio
        agosto
        septiembre
        octubre
        noviembre
        diciembre
    }
    }
`
var QueryAmountYear = gql `
    query ($year: float8) {
    IngresosAnuales(where: {year: {_eq: $year}}){
        enero
        febrero
        marzo
        abril
        mayo
        junio
        julio
        agosto
        septiembre
        octubre
        noviembre
        diciembre
    }
    }
`
var AmountOfProcedures = gql `
    subscription ($fechaInicio: timestamp, $fechaFin: timestamp) {
        TipoTramite (where: {ProformaFacturaDetalles: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin}}}) {
            DscaTipoTramite
            ProformaFacturaDetalles_aggregate  (where: {FacturadoEn: {_gte: $fechaInicio, _lte: $fechaFin} }) {
            aggregate{
                sum{
                Total
                }
            }
            }
        }
    }
`
var AmountWeek = gql `
  subscription($lunes: timestamp!, $martes: timestamp!, $miercoles: timestamp!, $jueves: timestamp!, $viernes: timestamp!, $viernesf: timestamp! ){
    ProformaFactura(where:{FacturadoEn:{_gte:$lunes, _lt:$viernesf }}){
        lunes: ProformaFacturaDetalles_aggregate(where:{FacturadoEn:{_gte: $lunes,_lt: $martes}}){
        aggregate{
        sum{
            Total
        }
        }
    }
    martes: ProformaFacturaDetalles_aggregate(where:{FacturadoEn:{_gte: $martes,_lt: $miercoles}}){
        aggregate{
        sum{
            Total
        }
        }
    }
    miercoles: ProformaFacturaDetalles_aggregate(where:{FacturadoEn:{_gte: $miercoles,_lt: $jueves}}){
        aggregate{
        sum{
            Total
        }
        }
    }
    jueves: ProformaFacturaDetalles_aggregate(where:{FacturadoEn:{_gte: $jueves,_lt: $viernes}}){
        aggregate{
        sum{
            Total
        }
        }
    }
    viernes: ProformaFacturaDetalles_aggregate(where:{FacturadoEn:{_gte: $viernes,_lt: $viernesf}}){
        aggregate{
        sum{
            Total
        }
        }
    }
    }
    }
  `
var penAndCompByDep = gql `
subscription ($fechaInicio: timestamp, $fechaFin: timestamp, $departamento: String!) {
  Usuario(where: {Departamento: {IdDpto: {_ilike: $departamento}}, usuarioOtsByIduserasignado: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}}}) {
    noIniciado: usuarioOtsByIduserasignado_aggregate(where: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}, EstadoTarea: {_eq: 0}}) {
      aggregate {
        count
      }
    }
    enProceso: usuarioOtsByIduserasignado_aggregate(where: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}, EstadoTarea: {_eq: 3}}) {
      aggregate {
        count
      }
    }
    porFirmar: usuarioOtsByIduserasignado_aggregate(where: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin}EstadoTarea: {_eq: 4}}) {
      aggregate {
        count
      }
    }
    completado: usuarioOtsByIduserasignado_aggregate(where: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin},EstadoTarea: {_eq: 5}}) {
      aggregate {
        count
      }
    }
    pendiente: usuarioOtsByIduserasignado_aggregate(where: {FechaFinalizacion: {_gte: $fechaInicio, _lte: $fechaFin},EstadoTarea: {_eq: 5}}) {
      aggregate {
        count
      }
    }
  }
}
  `

export { AmountOfServices, SubAmountYear, QueryAmountYear, AmountOfProcedures, AmountWeek, penAndCompByDep }

