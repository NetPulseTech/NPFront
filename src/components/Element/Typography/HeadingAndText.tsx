import { Headings, TextColor } from "../../../utils/constant";
import { CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const HeadingAndText = () => {
  const classesName = ["secondary","success","info","warning","danger","dark","muted",];
  return (
    <div className="element-card section-pb-space section-pt-space">
      <Container>
        <Row>
          <Col md="6">
            <CardHeader>
              <h4>{Headings}</h4>
              <span>All HTML headings, <code>&lt;h1&gt;</code> through{" "}<code>&lt;h6&gt;</code>, are available.</span>
            </CardHeader>
            <CardBody className="heading-content">
              <h1>h1 heading</h1>
              <h2>h2 heading</h2>
              <h3>h3 heading</h3>
              <h4>h4 heading</h4>
              <h5>h5 heading</h5>
              <h6>h6 heading</h6>
            </CardBody>
          </Col>
          <Col md="6">
            <CardHeader>
              <h4>{TextColor}</h4>
              <span>You can Give text color by using txt-* class</span>
            </CardHeader>
            <CardBody>
              <p className="text-primary">
                This is Primary text You can archive this adding
                <code>.text-primary</code> class
              </p>
              <p className="text-secondary">
                This is secondary text You can archive this adding
                <code>.text-secondary</code> class
              </p>
              <p className="text-success">
                This is success text You can archive this adding
                <code>.text-success</code> class
              </p>
              <p className="text-info">
                This is info text You can archive this adding
                <code>.text-info</code> class
              </p>
              <p className="text-warning">
                This is warning text You can archive this adding
                <code>.text-warning</code> class
              </p>
              <p className="text-danger">
                This is danger text You can archive this adding
                <code>.text-danger</code> class
              </p>
              <p className="text-dark">
                This is dark text You can archive this adding
                <code>.text-dark</code> class
              </p>
              <p className="text-muted">
                This is muted text You can archive this adding
                <code>.text-muted</code> class
              </p>
            </CardBody>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeadingAndText;
