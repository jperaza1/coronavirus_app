import gql from "graphql-tag";

export const GET_PAIS_HN = gql`
  query {
    getPais(filter: { pais: "Honduras" }) {
      pais
      casos
      casosHoy
      casosActivos
      casosCriticos
      recuperados
      latitud
      longitud
      muertes
      muertesHoy
      bandera
    }
  }
`;

export const GET_GLOBAL = gql`
  query {
    getGlobal {
      casos
      recuperados
      muertes
    }
  }
`;

export const GET_PAISES_MAS_MUERTE = gql`
  query {
    getPaises(sortby: { direction: DESC, field: "muertesHoy" }) {
      _id
      pais
      casosHoy
      muertesHoy
      bandera
    }
  }
`;

export const GET_PAISES_MAS_CONTAGIOS = gql`
  query {
    getPaises(sortby: { direction: DESC, field: "casosHoy" }) {
      _id
      pais
      casosHoy
      muertesHoy
      bandera
    }
  }
`;

export const GET_ALL_PAISES = gql`
  query {
    getPaises(sortby: { direction: DESC, field: "casos" }) {
      _id
      pais
      casosHoy
      muertesHoy
      bandera
      casos
      muertes
      recuperados
    }
  }
`;

export const GET_PAIS = gql`
  query getPais($_id: ID!) {
    getPais(filter: { _id: $_id }) {
      pais
      casos
      casosHoy
      casosActivos
      casosCriticos
      recuperados
      latitud
      longitud
      muertes
      muertesHoy
      bandera
    }
  }
`;
