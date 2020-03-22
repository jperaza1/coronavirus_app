import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Spinner,
  CardTitle,
  CardBody,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import InfoPais from "../../components/InfoPais/InfoPais";

export default function ListadoPaises(props) {
  const { Query } = props;
  const { data, loading, error } = useQuery(Query);
  const [id, setId] = useState("5e6c173c302df71e2426a16c");

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Cargando...</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="text-center">
            <Spinner type="grow" color="primary" />
            <Spinner type="grow" color="secondary" />
            <Spinner type="grow" color="success" />
            <Spinner type="grow" color="danger" />
            <Spinner type="grow" color="warning" />
            <Spinner type="grow" color="info" />
            <Spinner type="grow" color="light" />
            <Spinner type="grow" color="dark" />
          </div>
        </CardBody>
      </Card>
    );
  } else if (data) {
    return (
      <>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <CardTitle>Paises</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  {data.getPaises.map((pais, index) => (
                    <Col key={index} lg="12" sm="12" xs="12">
                      <CardBody className="stats-card-body d-flex justify-content-between flex-row-reverse align-items-center pt-2">
                        <div className="icon-section">
                          <div className="avatar avatar-stats p-50 m-0 bg-rgba-primary">
                            <div className="avatar-content">
                              <Link to={`/Paises/${pais._id}`}>
                                {pais.bandera != null && (
                                  <img
                                    src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/${pais.bandera.toLowerCase()}.svg`}
                                    width="100%"
                                    height="140%"
                                  />
                                )}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="title-section">
                          <h2 className="text-bold-600 mt-1 mb-25">
                            {index + 1}
                            {`. ${pais.pais}`}
                          </h2>
                          <p className="mb-0">Casos: {pais.casos}</p>
                        </div>
                      </CardBody>
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
