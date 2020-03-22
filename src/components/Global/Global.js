import React from "react";
import {
  Card,
  CardHeader,
  Spinner,
  CardTitle,
  CardBody,
  Row,
  Col
} from "reactstrap";
import StatisticsCard from "../../components/@vuexy/statisticsCard/StatisticsCard";
import { Meh, Smile, UserX } from "react-feather";
import { useQuery } from "@apollo/react-hooks";

export default function Global(props) {
  const { Query } = props;
  const { data, loading, error } = useQuery(Query);
  console.log(data);
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
            <CardTitle>Global</CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xl="4" lg="4" sm="6">
                <StatisticsCard
                  hideChart
                  iconBg="warning"
                  icon={<Meh className="warning" size={22} />}
                  stat={data.getGlobal.casos}
                  statTitle="Confirmados"
                />
              </Col>
              <Col xl="4" lg="4" sm="6">
                <StatisticsCard
                  hideChart
                  iconBg="danger"
                  icon={<UserX className="danger" size={22} />}
                  stat={data.getGlobal.muertes}
                  statTitle="Muertes"
                />
              </Col>
              <Col xl="4" lg="4" sm="6">
                <StatisticsCard
                  hideChart
                  iconBg="primary"
                  icon={<Smile className="primary" size={22} />}
                  stat={data.getGlobal.recuperados}
                  statTitle="Recuperados"
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </>
    );
  }
}
