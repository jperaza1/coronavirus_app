import React from "react";
import { Row, Col } from "reactstrap";
import { GET_ALL_PAISES } from "../../GQL/querys";
import ListadoPaises from "../../components/ListadoPaises/ListadoPaises";

export default function Paises() {
  return (
    <>
      <Row>
        <Col lg="12" xs="12" sm="12" md="12">
          <ListadoPaises Query={GET_ALL_PAISES} />
        </Col>
      </Row>
    </>
  );
}
