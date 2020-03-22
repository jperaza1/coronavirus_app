import React, { useEffect } from "react";
import { GET_PAIS } from "../../GQL/querys";
import { useQuery } from "@apollo/react-hooks";
import { Meh, Smile, UserX, Activity, AlertCircle } from "react-feather";
import StatisticsCard from "../../components/@vuexy/statisticsCard/StatisticsCard";
import {
  Card,
  CardHeader,
  Spinner,
  CardTitle,
  CardBody,
  Row,
  Col,
  CardImg,
  CardFooter,
  Button
} from "reactstrap";
import { useParams, Link } from "react-router-dom";

export default function InfoPais(props) {
  const { _id } = useParams();
  const { data, loading, error } = useQuery(GET_PAIS, {
    variables: { _id }
  });

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
        <Card>
          <CardHeader>
            <CardTitle>{data.getPais.pais}</CardTitle>
          </CardHeader>
          <CardBody>
            <CardImg
              src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/${data.getPais.bandera.toLowerCase()}.svg`}
              height="50%"
            />
            <Row>
              <Col xl="4" lg="4" sm="6">
                <StatisticsCard
                  hideChart
                  iconBg="warning"
                  icon={<Meh className="warning" size={22} />}
                  stat={data.getPais.casos}
                  statTitle="Confirmados"
                />
              </Col>
              <Col xl="4" lg="4" sm="6">
                <StatisticsCard
                  hideChart
                  iconBg="danger"
                  icon={<UserX className="danger" size={22} />}
                  stat={data.getPais.muertes}
                  statTitle="Muertes"
                />
              </Col>
              <Col xl="4" lg="4" sm="6">
                <StatisticsCard
                  hideChart
                  iconBg="primary"
                  icon={<Smile className="primary" size={22} />}
                  stat={data.getPais.recuperados}
                  statTitle="Recuperados"
                />
              </Col>
              <Col xl="4" lg="4" sm="6">
                <StatisticsCard
                  hideChart
                  iconBg="warning"
                  icon={<AlertCircle className="warning" size={22} />}
                  stat={data.getPais.casosHoy}
                  statTitle="Casos Hoy"
                />
              </Col>
              <Col xl="4" lg="4" sm="6">
                <StatisticsCard
                  hideChart
                  iconBg="danger"
                  icon={<Activity className="danger" size={22} />}
                  stat={data.getPais.muertesHoy}
                  statTitle="Muertes Hoy"
                />
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <Link to={"/Paises"}>
              <Button color="danger">Regresar</Button>
            </Link>
          </CardFooter>
        </Card>
      </>
    );
  }

  return (
    <>
      <h1>{_id}</h1>
    </>
  );
}
