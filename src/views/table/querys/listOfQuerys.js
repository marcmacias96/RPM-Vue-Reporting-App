import gql from 'graphql-tag'
module.exports = {
  tiposTramite: gql`
  query tiposTramite($fechaInicio: String!, $fechaFin: String!, $title: String, $order: String) {
    rep_tiposTramite(fechaFin: $fechaFin , fechaInicio: $fechaInicio, title: $title, order: $order ) {
        Cantidad
        Monto
        DscaTipoTramite
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
`
}
