import { Button, CardBody, CardHeader, Col } from "reactstrap";

const ButtonSizes = () => {
  return (
    <Col sm="12" className="section-b-space">
      <div className="element-card theme-card bg-white">
        <CardHeader>
          <h4>Button text Sizes</h4>
        </CardHeader>
        <CardBody>
          <div className="btn-group-showcase">
            <Button color="primary" size="lg">Large button</Button>
            <Button color="secondary" size="lg">Large button</Button>
            <Button color="primary" size="sm">Small button</Button>
            <Button color="secondary" size="sm">Small button</Button>
          </div>
        </CardBody>
      </div>
    </Col>
  );
};

export default ButtonSizes;
