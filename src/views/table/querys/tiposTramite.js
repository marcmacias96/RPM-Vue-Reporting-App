import gql from 'graphql-tag'
module.exports = {
  tiposTramite: gql`
  query tiposTramite($fechaInicio: String!, $fechaFin: String!) {
    rep_tiposTramite(fechaFin: $fechaFin , fechaInicio: $fechaInicio) {
        Cantidad
        Monto
        DscaTipoTramite
    }
  }
`
}
