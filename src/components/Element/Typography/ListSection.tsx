import { CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const ListSection = () => {
  return (
    <div className="element-card section-pb-space section-pt-space bg-white">
      <Container>
        <CardHeader>
          <h4>lists</h4>
          <span>Styling for common listing HTML5 elements.</span>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="4">
              <ul className="list-unstyled">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ol>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ol>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
            </Col>
            <Col md="4">
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li><i className="fa fa-angle-double-right me-2" />Lorem ipsum dolor sit amet</li>
                <li><i className="fa fa-angle-double-right me-2" />Lorem ipsum dolor sit amet</li>
                <li><i className="fa fa-angle-double-right me-2" />Lorem ipsum dolor sit amet</li>
                <li><i className="fa fa-angle-double-right me-2" />Lorem ipsum dolor sit amet</li>
                <li><i className="fa fa-angle-double-right me-2" />Lorem ipsum dolor sit amet</li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
            </Col>
            <Col md="4">
              <dl>
                <dt>Lorem ipsum dolor sit amet</dt>
                <dd>- ipsum dolor sit amet</dd>
                <dt>Lorem ipsum dolor sit amet</dt>
                <dd>- ipsum dolor sit amet</dd>
                <dt>Lorem ipsum dolor sit amet</dt>
                <dd>- ipsum dolor sit amet</dd>
                <dt>Lorem ipsum dolor sit amet</dt>
                <dd>- ipsum dolor sit amet</dd>
                <dt>Lorem ipsum dolor sit amet</dt>
                <dd>- ipsum dolor sit amet</dd>
              </dl>
            </Col>
          </Row>
        </CardBody>
      </Container>
    </div>
  );
};

export default ListSection;
