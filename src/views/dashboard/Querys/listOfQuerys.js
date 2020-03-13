import gql from 'graphql-tag'
module.exports = {
  AmountOfServices: gql `
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
    `,
  AmountYear: gql `
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
    `,
  AmountOfProcedures: gql `
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
    `,
  AmountWeek: gql `
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
}
