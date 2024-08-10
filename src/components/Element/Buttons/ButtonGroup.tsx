import { Button, ButtonGroup, CardBody, CardHeader, Col } from "reactstrap";

const ButtonGroupComponent = () => {
  return (
    <Col lg="6">
      <div className="element-card theme-card bg-white">
        <CardHeader>
          <h4>Button group</h4>
        </CardHeader>
        <CardBody>
          <ButtonGroup>
            <Button className="btn-secondary">Left</Button>
            <Button className="btn-secondary">Middle</Button>
            <Button className="btn-secondary">Right</Button>
          </ButtonGroup>
        </CardBody>
      </div>
    </Col>
  );
};

export default ButtonGroupComponent;
