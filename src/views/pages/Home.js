import React from "react";
import {
  GET_PAIS_HN,
  GET_GLOBAL,
  GET_PAISES_MAS_MUERTE,
  GET_PAISES_MAS_CONTAGIOS
} from "../../GQL/querys";
import { Row, Col } from "reactstrap";
import Pais from "../../components/Pais/Pais";
import Global from "../../components/Global/Global";
import MasMuertes from "../../components/MasMuertes/MasMuertes";
import MasContagios from "../../components/MasContagios/MasContagios";

export default function Home() {
  return (
    <>
      <Row>
        <Col lg="6" xs="12" sm="12" md="6">
          <Pais Query={GET_PAIS_HN} />
        </Col>
        <Col lg="6" xs="12" sm="12" md="6">
          <Global Query={GET_GLOBAL} />
        </Col>
        <Col lg="6" xs="12" sm="12" md="6">
          <MasMuertes Query={GET_PAISES_MAS_MUERTE} />
        </Col>
        <Col lg="6" xs="12" sm="12" md="6">
          <MasContagios Query={GET_PAISES_MAS_CONTAGIOS} />
        </Col>
      </Row>
    </>
  );
}
