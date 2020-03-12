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
    subscription ($enero: timestamp!, $febrero: timestamp!, $marzo: timestamp!, $abril: timestamp!, $mayo: timestamp!, $junio: timestamp!, $julio: timestamp!, $agosto: timestamp!, $septiembre: timestamp!, $octubre: timestamp!, $noviembre: timestamp!, $diciembre: timestamp!, $enerof: timestamp!) {
        ProformaFactura(where:{FacturadoEn:{_gte:$enero, _lte:$enerof }}){
            enero: ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $enero, _lt: $febrero}}) {
            aggregate {
            sum {
                Total
            }
            }
        }
        febrero: ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $febrero, _lt: $marzo}}) {
            aggregate {
            sum {
                Total
            }
            }
        }
        marzo: ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $marzo, _lt: $abril}}) {
            aggregate {
            sum {
                Total
            }
            }
        }
        abril: ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $abril, _lt: $mayo}}) {
            aggregate {
            sum {
                Total
            }
            }
        }
        mayo: ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $mayo, _lt: $junio}}) {
            aggregate {
            sum {
                Total
            }
            }
        }
        junio: ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $junio, _lt: $julio}}) {
            aggregate {
            sum {
                Total
            }
            }
        }
        julio: ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $julio, _lt: $agosto}}) {
            aggregate {
            sum {
                Total
            }
            }
        }
        agosto: ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $agosto, _lt: $septiembre}}) {
            aggregate {
            sum {
                Total
            }
            }
        }
        septiembre: ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $septiembre, _lt: $octubre}}) {
            aggregate {
            sum {
                Total
            }
            }
        }
        octubre: ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $octubre, _lt: $noviembre}}) {
            aggregate {
            sum {
                Total
            }
            }
        }
        noviembre: ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $noviembre, _lt: $diciembre}}) {
            aggregate {
            sum {
                Total
            }
            }
        }
        diciembre: ProformaFacturaDetalles_aggregate(where: {FacturadoEn: {_gte: $diciembre, _lte: $enerof}}) {
            aggregate {
            sum {
                Total
            }
            }
        }
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
