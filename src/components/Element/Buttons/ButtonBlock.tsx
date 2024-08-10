import { Button, CardBody, CardHeader, Col } from "reactstrap";

const ButtonBlock = () => {
  return (
    <Col>
      <div className="element-card theme-card bg-white">
        <CardHeader>
          <h4>Button block</h4>
        </CardHeader>
        <CardBody>
          <div className="btn-group-showcase">
            <Button color="primary" size="lg" className="btn-block">Block level button</Button>
            <Button color="secondary" size="lg" className="btn-block">Block level button</Button>
          </div>
        </CardBody>
      </div>
    </Col>
  );
};

export default ButtonBlock;
