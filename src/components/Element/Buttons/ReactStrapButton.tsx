import { Button, CardBody, CardHeader, Col } from "reactstrap";

const ReactStrapButton = () => {
  return (
    <Col sm="12" className="section-b-space">
      <div className="element-card theme-card bg-white">
        <CardHeader>
          <h4>Bootstrap button</h4>
        </CardHeader>
        <CardBody>
          <div className="btn-group-showcase">
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="danger">Danger</Button>
            <Button color="warning">Warning</Button>
            <Button color="info">Info</Button>
            <Button color="dark">Dark</Button>
          </div>
        </CardBody>
      </div>
    </Col>
  );
};

export default ReactStrapButton;
