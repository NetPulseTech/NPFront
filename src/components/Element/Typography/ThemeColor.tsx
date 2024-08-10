import { ThemeColors, ThemeLight } from "../../../utils/constant";
import { CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const ThemeColor = () => {
  return (
    <div className="element-card section-pb-space section-pt-space bg-white section-b-space">
      <Container>
        <CardHeader>
          <h4>Theme Color</h4>
          <span>theme default colors: $theme-color, $theme-light</span>
        </CardHeader>
        <CardBody>
          <Row className="color-cls">
            <Col md="2" xs="6">
              <div className="color-box">{ThemeColors}</div>
            </Col>
            <Col md="2" xs="6">
              <div className="color-box">{ThemeLight}</div>
            </Col>
          </Row>
        </CardBody>
      </Container>
    </div>
  );
};

export default ThemeColor;
