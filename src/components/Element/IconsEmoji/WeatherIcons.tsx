import { weatherIconsList } from "@/Data/Element";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

const WeatherIcons = () => {
  return (
    <Row className="sm-pt-space">
      <Col lg="9" xs="12" className="m-auto">
        <div className="element-card theme-card bg-white">
          <CardHeader>
            <h4>weather icons</h4>
          </CardHeader>
          <CardBody>
            <div className="theme-icons">
              <Row>
                {weatherIconsList.map((data, index) => (
                  <Col xs="3" key={index}>
                    <div className="icon-box text-center">
                      {data.icon}
                      <h4>{data.name}</h4>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </CardBody>
        </div>
      </Col>
    </Row>
  );
};

export default WeatherIcons;
