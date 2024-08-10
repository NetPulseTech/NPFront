import { SvgPath } from "../../../utils/constant";
import { DynamicNumberArray } from "@/utils/DynamicNumberArray";
import Image from "next/image";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

const WeatherIcon = () => {
  return (
    <Row className="sm-pt-space">
      <Col lg="9" xs="12" className="m-auto">
        <div className="element-card theme-card bg-white">
          <CardHeader>
            <h4>all svg weather icon</h4>
          </CardHeader>
          <CardBody>
            <div className="icon-usage">
              <Row>
                <Col xs="12">
                  <ul className="element-emoji weather-icon">
                    {DynamicNumberArray(94,2).map((emojiFilename, index) => (
                      <li key={index}>
                        <Image height={60} width={60} src={`${SvgPath}/weather/001lighticons-${emojiFilename}.svg`} alt=""/>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </div>
          </CardBody>
        </div>
      </Col>
    </Row>
  );
};

export default WeatherIcon;
